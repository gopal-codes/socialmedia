import styled from 'styled-components';

export const Wrapper = styled.div`
padding-top:20px;
`;

export const ContactHead = styled.h2`
    margin-top:30px;
    margin-bottom:15px;
    font-family: sans-serif;

`
export const RowContainer = styled.div`
    width:100%;
    height:50px;
    display:flex;
    align-items:center;
    padding-top:5px;
    padding-bottom:5px;
    font-family: sans-serif;
    &:hover{
        border-radius:20px;
        background-color:rgb(225,230,230,0.5);
    }
`;

export const ImageContainer = styled.div`
    position:relative;
    height:50px;
    width:50px;
    border-radius:50%;
    overflow:hidden;
`;
export const Image = styled.img`
    height:100%;
    width:100%;
    border-radius:50%;
`;

export const OnlineSymbol = styled.div`
    z-index:2;
    height:12px;
    width:12px;
    background-color:lightgreen;
    border:2px solid white;
    border-radius:50%;
    position:absolute;
    top:2px;
    right:7px;
`