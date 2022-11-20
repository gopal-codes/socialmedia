import styled from "styled-components";

export const Wrapper = styled.div`
height: calc(100vh - 70px);
display:flex;
`
export const InnerWrapper = styled.div`
padding:10px;
`

export const ConversationCompo = styled.div`
flex:3.5;
`
export const SearchInput =styled.input`
width:90%;
padding:10px 0;
border:none;
border-bottom:1px solid gray;
outline:none;
font-size:20px;
`

export const Message = styled.div`
flex:5.5;
position:relative;
`
export const Messagewrapper = styled.div`
height: calc(100vh - 70px);
padding:10px;
display:flex;
flex-direction:column;
`
export const Span= styled.span`
position:absolute;
top:25%;
font-size:45px;
color:rgb(224,220,220);
`
export const MessageTop =styled.div`
    padding-right:5px;
    height:100%;
    overflow-y:scroll;
`
export const MessageBottom =styled.div`
    margin-top:5px;
    display:flex;
    align-items:center;
    justify-content:space-between;
`
export const MessageInput = styled.textarea`
    width:85%;
    height:90px;
    padding:10px;
    font-size:20px;
`
export const MessageSubmit = styled.button`
    width:70px;
    height:40px;
    border:none;
    border-radius:5px;
    background-color:teal;
    color:white;
    cursor:pointer;
`
export const Online = styled.div`
flex:3;
`