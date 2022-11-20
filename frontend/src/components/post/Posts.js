import React, { memo, useEffect, useState} from 'react'
import { Img, ProfileImgContainer } from '../Nav/Navigation.styled'
import { Image, Post, PostBottom, PostCaption, PostCenter, PostTop, PostTopLeft, PostTopRight, Span} from './Post.styled'
import {BsThreeDotsVertical} from 'react-icons/bs';
import {BiLike} from 'react-icons/bi';
import { UserName } from '../globiallyusedStyled';
import moment from "moment";
import {useFetchData} from '../../allFunctions/useAllfunctions';
import axios from 'axios';

const Posts = ({posts}) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [liked,setliked] = useState(posts.likes.length)
    const {data:users} = useFetchData(`http://localhost:8800/api/users/${posts.userId}`)
    const {data:currentuser} = useFetchData(`http://localhost:8800/api/users/${user._id}`)
// updates the liked state when like button clicked.
    useEffect(()=>{
        setliked(posts.likes.length)
    },[posts.likes.length,posts])
    
// function that activate when like icon is clicked....
    const Like =async(id)=>{ 
            const res = await axios.put(`http://localhost:8800/api/posts/${id}/like`,{userId:currentuser._id});
            if(res.data==="You liked a post"){
                setliked(prevstate=>prevstate+1);
            }else{
                setliked(prevstate=>prevstate-1);
            }
    }
    
  return (
    <Post>
        <PostTop>
            <PostTopLeft>
                <ProfileImgContainer>
                    <Img src={users.profilePicture||'/socialmediaassets/vector.jpg'} alt='profile'/>
                </ProfileImgContainer>
                <UserName>{`${users.username}`}</UserName>
                <Span>{moment(posts.createdAt).fromNow()}</Span>
            </PostTopLeft>
            <PostTopRight>
                <BsThreeDotsVertical />
            </PostTopRight>
        </PostTop>
        <PostCaption >{posts.desc}</PostCaption>
        <PostCenter>
            <Image src={posts.img||'/socialmediaassets/background1.jpg'} alt='postimage' />
        </PostCenter>

        <PostBottom>
            <PostTopLeft>
                <BiLike onClick={()=>Like(posts._id)} color='teal' style={{fontSize:"28px",margin:"0px 5px"}} />
                <Span botton >{liked}</Span>           
            </PostTopLeft>
            <PostTopRight>
            <Span botton >9 comments</Span>
            </PostTopRight>
        </PostBottom>
    </Post>
  )
}

export default memo(Posts);