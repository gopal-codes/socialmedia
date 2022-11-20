import styled from 'styled-components';

export const Post = styled.div`
    margin-top:30px;
    width:calc(100%-20px);
    padding:10px;
    border-radius:15px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
`;

export const PostTop = styled.div`
    margin:5px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;
export const PostTopLeft = styled.div`
    height:10px;
    display:flex;
    align-items:center;
    cursor:pointer;
`;

export const Span = styled.span`
    font-size:${({botton})=>botton?"18px":"13px"};
    text-align:${({botton})=>botton?"center":""};
`

export const PostTopRight = styled.div`
    cursor:pointer;
`;
export const PostCaption = styled.h4`
    margin-top:20px;
    font-family: sans-serif;
`

export const PostCenter = styled.div`
   margin-top:20px;
`;

export const Image = styled.img`
    height:450px;
    width:100%;
    border-radius:10px;
`;

export const PostBottom = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-top:10px;
    padding:20px;
`;


