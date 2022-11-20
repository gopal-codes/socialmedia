import styled from "styled-components";

export const RegisterPage = styled.div`
width: 100vw;
height: 100vh;
background-color: #f0f2f5;
display: flex;
align-items: center;
justify-content: center;
`;
export const RegisterWrapper = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
`;

export const RegisterLeft = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
`;

export const RegisterRight = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
`;

export const RegisterLogo = styled.h3`
font-size: 50px;
font-weight: 800;
color: #1775ee;
margin-bottom: 10px;
font-family:mono-space;
`;

export const RegisterDesc= styled.span`
font-size: 24px;
font-family:mono-space;
`;

export const RegisterBox = styled.div`
height: 400px;
background-color: white;
border-radius: 10px;
display: flex;
flex-direction:column;
justify-content: space-between;
`;
export const Form = styled.form`
height: 320px;
padding: 20px;
display: flex;
flex-direction:column;
justify-content: space-between;
`
export const RegisterInput= styled.input`
height: 50px;
border-radius: 10px;
border: 1px solid gray;
font-size: 18px;
padding-left: 20px;
&:focus{
    outline: none;
}
`;

export const RegisterButton= styled.button`
height: 50px;
border-radius: 10px;
border: none;
background-color: #1775ee;
color: white;
font-size: 20px;
font-weight: 500;
cursor: pointer;
&:focus{
    outline:none;
}
`;


export const LoginRegisterButton = styled.button`
width: 60%;
align-self: center;
height: 50px;
border-radius: 10px;
border: none;
background-color: #42b72a;
color: white;
font-size: 20px;
font-weight: 500;
cursor: pointer;
`