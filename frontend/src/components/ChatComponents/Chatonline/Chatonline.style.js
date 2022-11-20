import styled from "styled-components";

export const Wrapper = styled.div`
    height:100%;
    overflow-y:scroll;
`;

export const EmptyContainerText = styled.div`
    font-size:50px;
    padding:10px; 
    color:rgb(224,220,220);
`
export const RowContainer = styled.div`
    display:flex;
    align-items:center;
    padding:10px;
    font-family: sans-serif;
    &:hover{
        background-color:rgb(245,243,243);
    }
`;

export const ImageContainer = styled.div`
    position:relative;
    height:35px;
    width:35px;
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
    height:8px;
    width:8px;
    background-color:lightgreen;
    border:2px solid white;
    border-radius:50%;
    position:absolute;
    top:1.5px;
    right:3px;
`