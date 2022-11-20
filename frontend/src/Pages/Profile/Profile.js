import React, { useEffect, useState } from "react";
import LeftComponent from "../../components/Leftcomponent/LeftComponent";
import Navigation from "../../components/Nav/Navigation";
import Posts from "../../components/post/Posts";
import ShareContainer from "../../components/sharecontainer/ShareContainer";
import { Container, FollowUnfollow, FriendName, Info, InfoTitle, InfoValue, PBackgroundImage, ProfileBottom, ProfileBottomLeft, ProfileBottomRight, ProfileName, ProfilePicture, ProfilePictureContainer, ProfileTop, Span, UserFriendBox, UserFriends, UserInfoBox, Wrapper } from "./Profile.style";
import { useFetchData } from "../../allFunctions/useAllfunctions";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import CoverPictureEdit from "../../components/profileComponents/CoverPictureEdit";
import ProfileEdit from "../../components/profileComponents/ProfileEdit";
import ProfilePopup from "../../components/profileComponents/ProfilePopup";


const Profile = () => {
  let navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));
  const friend = [];
  // below userid is one that is taken from params.
  const { userId }= useParams();
  const {data:currentuser} = useFetchData(`http://localhost:8800/api/users/${user._id}`)
  const {data:users } = useFetchData(`http://localhost:8800/api/users/${userId}`)
  const {data:posts } = useFetchData(`http://localhost:8800/api/posts/${userId?`profile/${userId}`:`timeline/${user._id}`}`);
  const {data:userfriends} = useFetchData(`http://localhost:8800/api/users/friends/${userId}`)
  const friends =friend.concat(userfriends);
  const [coverpic,setcoverpic] = useState(null); 
  const [follow,setfollow]= useState(currentuser.followings!==undefined && currentuser.followings.includes(userId))
  const [show,setshow] = useState(false);

  // this update the current state of user.followings.
  useEffect(()=>{
   setfollow(currentuser.followings!==undefined && currentuser.followings.includes(userId))
  },[currentuser.followings,userId])
  
  const followUnfollow = async ()=>{
    try {
      // To follow and unfollow.
      follow?
      await axios.put(`http://localhost:8800/api/users/${userId}/unfollow`,{userId:user._id}):
      await axios.put(`http://localhost:8800/api/users/${userId}/follow`,{userId:user._id})
      
      //To set or delete Conversation between logedin user and current user.
      follow?
     await axios.delete(`http://localhost:8800/api/conversations/deleteConversation/${user._id}/${userId}`) :
     await axios.post("http://localhost:8800/api/conversations",{receiverId:userId,senderId:user._id})
     
    } catch (error) {
      console.log(error)
    }
     setfollow(!follow)
  }

  return (
    <>
    <Navigation />
      <Container>
        <LeftComponent />
        <Wrapper>
            <ProfileTop>
                <PBackgroundImage  src={coverpic ||users.coverPictures || "/socialmediaassets/background2.jpg"} onClick={()=>window.open(users.coverPictures, "_blank")} />
                {
                  (user._id===userId)?<CoverPictureEdit setcoverpic={setcoverpic} />:<></>
                }
                <ProfilePictureContainer>
                    <ProfilePicture src={users.profilePicture||'/socialmediaassets/vector.jpg'} alt="profileback" />
                     {
                      show? <ProfilePopup setshow={setshow} />:user._id===userId && <ProfileEdit setshow={setshow} />
                     }
                    <ProfileName>{users.username}</ProfileName>
                    <Span >{users.desc || "here is your desc" }</Span>
                </ProfilePictureContainer>
            </ProfileTop>

            <ProfileBottom>
              <ProfileBottomLeft>
                {
                  (user._id===userId)?<ShareContainer />:<></>
                }
                 {posts.map((posts,index)=>
                  <Posts key={index} posts={posts} />
                  )
                  }
              </ProfileBottomLeft>
              <ProfileBottomRight>
                 {
                  (user._id===userId)?<></> :<FollowUnfollow onClick={followUnfollow}>{follow?"Unfollow":"Follow"}</FollowUnfollow>
                 }
                  <UserInfoBox>
                    <InfoTitle>User Information</InfoTitle>
                    <Info>City: <InfoValue>{users.city || "NewYork"}</InfoValue></Info>
                    <Info>Email: <InfoValue>{users.email}</InfoValue></Info>
                    <Info>Relationship:<InfoValue>{users.relationship}</InfoValue></Info>
                  </UserInfoBox>

                  <UserInfoBox>
                   <InfoTitle>User Friends</InfoTitle>
                    <Info  friendDetail >
                        { 
                         friends.map((friend,index)=>(
                            <UserFriendBox onClick={()=>navigate(`/profile/${friend._id}`)} key={index}>
                            <UserFriends  src={friend.profilePicture||"/socialmediaassets/vector.jpg"} />
                            <FriendName>{friend.username}</FriendName>
                            </UserFriendBox>
                          ))
                        }  
                    </Info>
                    
                  </UserInfoBox>

              </ProfileBottomRight>
            </ProfileBottom>
        </Wrapper>
      </Container>
    </>
  );
};

export default Profile;
