import styled from "styled-components";

export const Wrapper = styled.div`
padding-top:10px;
display:flex;
flex-direction:column;
align-items:${({currentuser})=>currentuser?"flex-end":""};
`
export const MessageTop = styled.div`
display:flex;
align-items:center;
`
export const MessagesImg = styled.img`
width:32px;
height:32px;
border-radius:50%;
object-fit:cover;

`
export const Message = styled.h4`
    border-radius:10px;
    padding:10px;
    background-color:${({currentuser})=>currentuser?"rgb(245,241,241)":"#1877f2"};
    color:black;
    max-width:300px;
`
export const MessageTime = styled.h5`

`