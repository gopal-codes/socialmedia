import React, { useRef, useState } from 'react';
import axios from 'axios';
import {RegisterPage, Form, RegisterWrapper,RegisterLeft,RegisterRight,RegisterLogo,RegisterDesc,RegisterBox,RegisterInput,RegisterButton,LoginRegisterButton } from './Register.style'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    let navigate = useNavigate();
    const name =useRef("");
    const email = useRef("");
    const password = useRef("");
    const rePassword = useRef("");
    const [Error,setError]= useState("");
   
    // for signUp user ...
    const SignUp = async(e)=>{
        e.preventDefault();
        const user = {
            username:name.current.value,
            email:email.current.value,
            password:password.current.value,
            rePassword:rePassword.current.value
        }
        console.log(user)
        if(user.password===user.rePassword){
            const res = await axios.post("http://localhost:8800/api/auth/register",user);
            if(res.data==="Email already taken!!!"){alert(res.data)}
            console.log(res.data);
            navigate("/login")
        }else{setError("Password and RePassword didn't match.")}
    }

  return (
    <>
        <RegisterPage>
            <RegisterWrapper>
                <RegisterLeft>
                    <RegisterLogo>SocialMedia</RegisterLogo>
                    <RegisterDesc>Connect with friends and the world around you on SocialMedia.</RegisterDesc>
                </RegisterLeft>
                <RegisterRight>
                    <RegisterBox>
                        <Form onSubmit={SignUp}>
                        <RegisterInput ref={name} type="text" required min="3" placeholder='Your Name' />
                        <RegisterInput ref={email} type="email" required  placeholder='Your Email' />
                        <RegisterInput ref={password} type="password" min="6" placeholder='Your Password' />
                        <span style={{color:"red"}}>{Error}</span>
                        <RegisterInput ref={rePassword} type="password" placeholder='ReEnter Password' />
                        <RegisterButton type='submit' >SignUp</RegisterButton>
                        </Form>
                        <LoginRegisterButton onClick={()=>navigate("/login")}>Log into Account</LoginRegisterButton>
                    </RegisterBox>
                </RegisterRight>
            </RegisterWrapper>
        </RegisterPage>
    </>
  )
}

export default Register