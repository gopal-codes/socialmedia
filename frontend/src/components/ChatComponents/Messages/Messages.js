import moment from 'moment'
import React, { memo } from 'react'
import { Message, MessagesImg, MessageTime, MessageTop, Wrapper } from './Messages.style'

const Messages = ({message,currentuser}) => {
  return (
    <>
      <Wrapper currentuser={currentuser} >
        <MessageTop>
            <MessagesImg src={'/socialmediaassets/vector.jpg'} alt="profileback" />
            <Message currentuser={currentuser} >{message.text}</Message>
        </MessageTop>
        <MessageTime>{moment(message.createdAt).fromNow()}</MessageTime>
    </Wrapper>
    </>
    
  )
}

export default memo(Messages)