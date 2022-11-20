import React from 'react'
import Styled from "styled-components";
import { MdEdit } from 'react-icons/md';
import { AiOutlineLogout } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Container = Styled.div`
z-index:2;
border-radius:5px;
display:flex;
align-items:center;
justify-content:space-between;
margin:0px;
width:180px;
`
const Div = Styled.div`
display:flex;
align-items:center;

`
const Text = Styled.p`
margin:0px;
margin-left:5px;
cursor:pointer;
font-size:18px;
`
const ProfileEdit = ({setshow}) => {
  let navigate = useNavigate();

  const Logout = ()=>{
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload();
  }
  return (
    <Container>
      <Div onClick={()=>setshow(true)} >
        <MdEdit size="20px" />
        <Text>Edit</Text>
      </Div>
      <Div onClick={Logout}>
        <AiOutlineLogout size="18px" />
        <Text>Logout</Text>
      </Div>
    </Container>
  )
}

export default ProfileEdit