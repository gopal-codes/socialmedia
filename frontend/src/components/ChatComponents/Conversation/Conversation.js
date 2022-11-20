import axios from 'axios';
import React, { memo, useEffect, useState } from 'react'
import { ConversationImg, ConversationName, Wrapper } from './Conversation.style'

const Conversation = ({conversation,currentuser}) => {

  const [frduser,setfrduser] = useState(null);

  const friendId = conversation.members.find((m)=>m !== currentuser._id);
  useEffect(()=>{
    const getUser = async ()=>{
      try {
        const res = await axios.get(`http://localhost:8800/api/users/${friendId}`)
        setfrduser(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getUser();
  },[friendId])

  return (
    <Wrapper>
        <ConversationImg src={frduser?.profilePicture || '/socialmediaassets/vector.jpg'} alt="profileback" />
        <ConversationName>{frduser?.username}</ConversationName>
    </Wrapper>
  )
}

export default memo(Conversation)