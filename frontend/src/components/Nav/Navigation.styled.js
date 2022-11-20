import styled from "styled-components";

export const Wrapper = styled.div`
    height:50px;
    width:calc(100%-20px);
    background-color:rgb(66, 123, 245);
    padding-left:10px;
    display:flex;
    align-items:center;
    top:0px;
    position:sticky;
    z-index:2; 
`

export const IconArea = styled.div`
    flex:2.5;
    @media only screen and (max-width: 600px) {
        display:none;
      }
`;

export const H2 = styled.h2`
    font-weight:500;
    margin:0px;
    color:white;
    cursor:pointer;
    font-family: sans-serif;
`
export const Right =styled.div`
    flex:3.5;
    height:100%;
    display:flex;
    justify-content:space-around;
`
export const Span = styled.span`
    display:flex;
    align-items:center;


`
export const Navtext = styled.div`
    font-family: sans-serif;
    color:white;
    padding:5px;
    cursor:pointer;
    @media only screen and (max-width: 400px) {
        display:none;
      };
`

export const Icon = styled.div`
    color:white;
    border-radius:50%;
    background-color:rgb(225,230,230,0.5);
    &:hover{
        background-color:rgb(202, 202, 200);
    };
    height:37px;
    width:37px;
    margin-right:3px;
    font-size:20px;
    cursor:pointer;
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
`;
export const Badge = styled.div`
    width:17px;
    height:17px;
    border-radius:50%;
    background-color:red;
    font-size:10px;
    text-align:center;
    position:absolute;
    top:-15%;
    right:2px;
`

export const ProfileImgContainer = styled.div`
    height:37px;
    width:37px;
    border-radius:50%;
    overflow:hidden;
    cursor:pointer;
`
export const Img = styled.img`
    height:100%;
    width:100%;  
`