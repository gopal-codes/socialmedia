import styled from 'styled-components';

export const Container = styled.div`
    flex:3;
    position: -webkit-sticky;
    position: sticky;
    top:50px;
    height:92vh;
    overflow-y: auto;
    
   
    @media only screen and (max-width: 950px) {
        display:none;
      }
`;

export const Wrapper = styled.div` 
    padding: 0px 10px;
`;

export const Items = styled.div`
    height:30px;
    display:flex;
    font-size:28px;
    margin-top:15px;
    cursor:pointer;
    font-family:sans-serif;
    padding:2px;
    &:hover{
        background-color:rgb(225,230,230,0.5);
    }
`;
export const ItemsText = styled.h4`
    margin-left:5px;
    font-size:15px;
    font-weight:300;
    margin-top:3px;
`
export const Button = styled.button`
    margin-top:10px;
    height:40px;
    font-size:20px;
    &:hover{
        background-color:lightgray;
    }
`
export const Hr = styled.hr`
width:100%;
`