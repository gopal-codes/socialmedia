import React, { useRef} from 'react'
import { useContext } from 'react';
import { AuthContext } from '../../creatingContext/AuthContext';
import {LoginPage, LoginWrapper,LoginLeft,LoginRight,LoginLogo,LoginDesc,LoginInput,LoginButton,LoginForgot,LoginRegisterButton, Form, LoginBox } from './Login.style'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    let navigate = useNavigate();

    const email = useRef("");
    const password = useRef("");

    // for Login user...
    const {user,isFetching,error,dispatch} = useContext(AuthContext);

    const Logining =async (e)=>{
        e.preventDefault();
        dispatch({type:"LOGIN_START"});
        
        try{
            const res = await axios.post("http://localhost:8800/api/auth/login",
            {email:email.current.value ,password:password.current.value});
            console.log(res.data.message)
            dispatch({type:"LOGIN_SUCCESS",payload:res.data});
            console.log(user)
            localStorage.setItem('user', JSON.stringify(res.data));
            if(!res.data.message){
                window.location.reload()
            }
            
        }catch(err){
            dispatch({type:"LOGIN_FAILURE", payload:error});
        }
    };
    
  return (
    <>
        <LoginPage>
            <LoginWrapper>
                <LoginLeft>
                    <LoginLogo>SocialMedia</LoginLogo>
                    <LoginDesc>Connect with friends and the world around you on SocialMedia.</LoginDesc>
                </LoginLeft>
                <LoginRight>
                    <LoginBox>
                    <Form onSubmit={Logining} >
                        <LoginInput type="email" required ref={email} placeholder='Your Email' />
                        <LoginInput type="String" minLength="6" ref={password} placeholder='Your Password' />
                        <LoginButton type='submit'>{isFetching?"...Loading":"Login"}</LoginButton>
                        <LoginForgot>Forgot Password?</LoginForgot>
                    </Form>
                    <LoginRegisterButton onClick={()=>navigate("/register")}>Don't have Account? SignUp</LoginRegisterButton>
                    </LoginBox>
                </LoginRight>
            </LoginWrapper>
        </LoginPage>
    </>
  )
}

export default Login