import axios from 'axios';
import React,{ useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import Styled from "styled-components";
//import { useFetchData } from "../../allFunctions/useAllfunctions";


const Center = Styled.div`
flex:6;
height:35px;
background-color:white;
border-radius:30px;
display:flex;
align-items:center;
position:relative;
`;

const SearchBox = Styled.input`
    border:none;
    font-size:15px;
    font-weight:550;
    margin-top:1px;
    width:70%;
    &:focus{
        outline:none;
    }
`
const SearchSuggestion = Styled.div`
    position:absolute;
    top:35px;
    background:#F9F5EB;
    width:100%;
    border-radius:18px;
`
const Flexrow = Styled.div`
    display:flex;
    align-items:center;
    &:hover{background:#EAE3D2};
    border-radius:18px;
`
const CircularImg = Styled.img`
    border-radius:50%;
    height:30px;
    width:30px;
    padding:10px;
`
const H2= Styled.h3`
    font-weight:500;
`

const SearchPage = () => {
    
    const navigate = useNavigate();
    var [username,setUsername] = useState("");
    const [users,setusers]=useState(null);
    
    useEffect(()=>{
        username!=="" && axios.get(`http://localhost:8800/api/users/all?qry=${username}`).then((res)=>(
            setusers(res.data)
        ))
    },[username])

// search button click.
    const SearchItem=()=>{

    }
  return (
    <Center>
        <BiSearch onClick={SearchItem} style={{ fontSize: "20px", paddingLeft: "10px" }} />
        <SearchBox value={username} type="text" onChange={(e)=>setUsername(e.target.value)} placeholder="Search" />
        <SearchSuggestion>
           {username && users?.map((user)=>(
            <Flexrow key={user.email} onClick={()=>{navigate(`/profile/${user._id}`);setUsername("")}}>
                <CircularImg src='/socialmediaassets/vector.jpg' />
                <H2>{user.username}</H2>
            </Flexrow>
            )).slice(0,3)}
        </SearchSuggestion>
    </Center>

  )
}

export default SearchPage