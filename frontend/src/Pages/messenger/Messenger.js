import axios from 'axios'
import React, {  useEffect,useRef, useState } from 'react'
import ChatOnline from '../../components/ChatComponents/Chatonline/ChatOnline'
import Conversation from '../../components/ChatComponents/Conversation/Conversation'
import Messages from '../../components/ChatComponents/Messages/Messages'
import Navigation from '../../components/Nav/Navigation'
import { ConversationCompo, InnerWrapper, Message, MessageBottom, MessageInput, MessageSubmit, MessageTop, Messagewrapper, Online, SearchInput, Span, Wrapper } from './Messenger.style'
import {io} from "socket.io-client";

const Messenger = () => {

    const user = JSON.parse(localStorage.getItem('user'));
    const [conversation,setConversation] = useState([]);
    const [currentConversation,setCurrentConversation] = useState(null);
    const [messages,setmessages] = useState([]);
    const [newMessage,setNewMessage] = useState("");
    const scrollRef =useRef();
    
    // socket useState.
    const [arrivedMessage,setArrivedMessage] = useState(null);
    const [onlineUsers,setOnlineUsers]= useState([]);
    const socket = useRef();

    // socket useEffect.
    useEffect(()=>{
        // initializing socket.io running on port 8900.
        socket.current=io("http://localhost:8800");
        // receiving message from server througn event.
        socket.current?.on("getMessage",(data)=>{
            setArrivedMessage({
                sender:data.senderId ,
                text: data.text,
                createdAt:Date.now(),
            })
        })
    },[]);
    
    
    // updating setMessage after getting arrivedMessage.
    useEffect(()=>{
        arrivedMessage && currentConversation?.members.includes(arrivedMessage.sender)&&
        setmessages(prev=>[...prev,arrivedMessage]);

    },[arrivedMessage,currentConversation]);


    // adding and geting user to and from socket server.
    // for all current clients.
    useEffect(() => {
        socket.current?.on("getUsers", users=>{
            // filtering from loggedin user followings.
            setOnlineUsers(
                user.followings.filter((f)=>users.some((u)=>u.userId===f))
            )
        })
      }, [user.followings]);

    // get all conversation that include current user.
    useEffect(()=>{
        socket.current?.emit("addUser",user._id);
        const getConversation = async()=>{
            try {  
                const res = await axios.get(`http://localhost:8800/api/conversations/${user._id}`)
                setConversation(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getConversation();
    },[user._id])

    // get all messages that include currentConversation ID.
    useEffect(()=>{
        const getMessages =async ()=>{
            try {
                const res = await axios.get(`http://localhost:8800/api/messages/${currentConversation?._id}`)
                setmessages(res.data);
            } catch (error) {
                console.log(error)
            }
        }
        getMessages();
    },[currentConversation?._id])

    const handleSubmit= async(e)=>{
        e.preventDefault();
        const message ={
            sender:user._id,
            text:newMessage,
            conversationId:currentConversation._id,
        };
        //socket.io-client sending message,senderId,receiverId to socket server.
        const receiverId = currentConversation.members.find(member => member !==user._id);
        socket.current.emit("sendMessage", {
            senderId:user._id,
            receiverId,
            text:newMessage
        });


        try {
            const res = await axios.post(`http://localhost:8800/api/messages`,message)
            setmessages([...messages,res.data])
            setNewMessage("");
        } catch (error) {
            console.log(error)
        }
    }

    // this help to scroll to current message when messages change.
    useEffect(()=>{
        scrollRef.current?.scrollIntoView({behavior:"smooth"});
    },[messages]);

    return (
    <>
        <Navigation />
        <Wrapper>
            <ConversationCompo>
                <InnerWrapper>
                    <SearchInput placeholder='Search for friends'  />

                    {conversation.map((c,index)=>(
                        <div onClick={()=>setCurrentConversation(c)} key={index} >
                            <Conversation conversation={c} currentuser={user} />
                        </div>
                    ))
                    }
                    
                </InnerWrapper>
            </ConversationCompo>
            <Message>
                {currentConversation?
                    <Messagewrapper>
                    <MessageTop>
                        {messages.map((m,index)=>(
                            <div ref={scrollRef} key={index} >
                                <Messages message={m} currentuser={m?.sender ===user._id} />
                            </div>
                        ))}
                    </MessageTop>
                    
                    <MessageBottom>
                        <MessageInput value={newMessage} placeholder="write something..." onChange={(e)=>setNewMessage(e.target.value)} />
                        <MessageSubmit onClick={handleSubmit} >Send</MessageSubmit>
                    </MessageBottom>
                    </Messagewrapper>
                    :<Span>Open Conversation to start a chat</Span>}

            </Message>
            <Online>
                <InnerWrapper>
                      <ChatOnline 
                      onlineUsers={onlineUsers} 
                      loggedInId ={user._id} 
                      setCurrentConversation={setCurrentConversation} /> 
                </InnerWrapper>
            </Online>
        </Wrapper>
    </>
  )
}

export default Messenger