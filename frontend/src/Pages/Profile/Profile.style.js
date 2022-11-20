import styled from "styled-components";

export const Container = styled.section`
    display:flex;
`
export const Wrapper = styled.section`
    flex:9;
`;

export const ProfileTop= styled.div`
    z-index:0;
    height:250px;
    position:relative;
`;
export const PBackgroundImage = styled.img`
    width:100%;
    height:100%;
`
export const ProfilePictureContainer = styled.div`
    position:absolute;
    width:100%;
    top:150px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;

export const ProfilePicture = styled.img`
    width:150px;
    height:150px;
    border-radius:50%;
    border:5px solid white;
`;
export const ProfileName = styled.h2`
    margin:0;
`
export const Span = styled.span`
    color:gray;
`

export const ProfileBottom = styled.div`
    margin-top:140px;
    display:flex;
`;
export const ProfileBottomLeft = styled.div`
    flex:5.5;
    padding:0 50px;
`;
export const ProfileBottomRight = styled.div`
    flex:3.5;
    padding-right:20px;
`;
export const FollowUnfollow = styled.button`
    height:40px;
    padding:5px 10px; 
    margin:30px 0 15px 0;
    background:transparent;
    color:rgb(66, 123, 245);
    font-size:25px;
    border:1px solid rgb(66, 123, 245);
    border-radius:10px;
    cursor:pointer;
`
export const UserInfoBox = styled.div`
    padding-bottom:50px;
`;
export const InfoTitle = styled.h3`
    margin:0;
    font-size:25px;
    padding-bottom:10px;
    font-family:sans-serif;
`;
export const Info = styled.div`
font-family:sans-serif;
    height:20px;
    font-weight:600;
    display:flex;
    align-items:center;
    flex-wrap:${({friendDetail})=>friendDetail?"wrap":""};
`;

export const InfoValue = styled.p`
font-family:sans-serif;
    padding-left:10px;
    color:gray;
`;
export const UserFriendBox =styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
`
export const UserFriends = styled.img`
    width:125px;
    height:125px;
    border-radius:10px;
    margin:5px;
`
export const FriendName = styled.h3`
    width:125px;
    height:22px;
    margin:0px;
    text-align:center;
    overflow:hidden;
`

