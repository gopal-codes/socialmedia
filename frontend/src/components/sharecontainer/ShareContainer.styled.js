import styled from 'styled-components';


export const Share = styled.div`
padding:15px;
border-radius:15px;
box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
`
export const FlexRow = styled.div`
display:flex;
height:${({icons})=>icons?"100px":""};
align-items:center;
justify-content:${({icons})=>icons?"space-between":""};
`;
export const Span =styled.span`
display:flex;
`
export const ShareBoxImageContainer = styled.div`
width:45px;
height:45px;
border-radius:50%;
overflow:hidden;
margin-right:10px;
`
export const ShareBoxImage = styled.img`
width:100%;
height:100%;
border-radius:50%;
object-fit:cover;
`
export const ShareInput = styled.textarea`
border:none;
width:90%;
font-size:20px;
font-family:sans-serif;
height:40px;
overflow-y: none;
outline:none;
transition: height 1s;
&:hover{
    outline:none;
    height:80px;
}
`

export const Hr = styled.hr`
width:100%;
margin-top:20px;
margin-bottom:5px;
`
export const ImageBox = styled.div`
width:100%:
height:270px;
overflow:hidden;
`
export const Image = styled.img`
width:100%;
height:270px;
object-fit:cover;
`

export const ShareBoxIcons= styled.label`
font-size:28px;
display:flex;
align-items:center;
margin-right:15px;
cursor:pointer;
`
export const IconText = styled.h6`
font-size:15px;
font-family:sans-serif;
`
export const ShareButton =styled.button`
z-index:-1;
height:40px;
width:60px;
background-color:rgb(66, 123, 245);
color:white;
font-size:18px;
border-radius:7px;
cursor:pointer;
&:disabled{
    background: gray;
    opacity:0.4;
    cursor:not-allowed;
}
`