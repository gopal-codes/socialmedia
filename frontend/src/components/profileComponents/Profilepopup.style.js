import styled from 'styled-components';
import image from "../../wallbackground.jpg"

export const UserEditPopup = styled.div`
z-index:1;
width:100%;
height:100vh;
position:fixed;
bottom:0px;
left:0px;
background-color:rgb(0,0,0,0.6);
display:flex;
align-items:center;
justify-content:center;
`
export const EditContainer =styled.div`
background-image: url(${image});
width:100%;
max-width:800px;
height:90%;
max-height:1000px;
padding:20px;
position:relative;
top:30px;
`
export const EditBox = styled.div`
width:100%;
max-width:800px;
position:absolute;
top:75px;
display:flex;
justify-content:center;
`
export const ProfilePictureContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;

export const ProfilePicture = styled.img`
    width:150px;
    height:150px;
    border-radius:50%;
    border:2px solid black;
`;

export const PictureSelect = styled.label`
margin-top:10px;
font-size:15px;
border-radius:15px;
background-color:black;
color:white;
padding:8px;
`
export const InputContainers = styled.div`
width:100%;
margin-top:20px;
display:flex;
justify-content:space-around;
flex-wrap:wrap;
`
export const Input = styled.input`
width:30%;
font-size:20px;
border:1px solid gray;
border-radius:15px;
padding:2px;
text-align:center;
`
export const DescribeText =styled.textarea`
width:80%;
font-size:18px;
border-radius:5px;
`
export const Submit = styled.button`
padding:5px;
border-radius:10px;
font-size:20px;
margin-top:20px;
background-color:black;
color:white;
cursor:pointer;
&:disabled{
    cursor:not-allowed;
    background-color:gray;
    opacity:0.4;
  };
`