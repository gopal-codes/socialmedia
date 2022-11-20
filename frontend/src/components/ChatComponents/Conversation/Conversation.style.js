import styled from "styled-components";

export const Wrapper = styled.div`
display:flex;
align-items:center;
padding:10px;
cursor:pointer;
margin-top:15px;
&:hover{
    background-color:rgb(245,243,243);
}
`;

export const ConversationImg = styled.img`
width:40px;
height:40px;
border-radius:50%;
object-fit:cover;
margin-right:20px;
`
export const ConversationName = styled.h3`
font-weight:500px;
`