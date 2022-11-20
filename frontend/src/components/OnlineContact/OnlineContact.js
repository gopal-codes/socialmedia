import React from 'react'
import { ContactHead, Image, ImageContainer, OnlineSymbol, RowContainer, Wrapper } from './OnlineContact.styled'
import { UserName} from '../globiallyusedStyled';

const OnlineContact = () => {
  return (
   <Wrapper>
       <ContactHead>Online Contact</ContactHead>
       {[1,2,3,4].map((value)=>(
             <RowContainer key={value} online>
             <ImageContainer>
                 <Image src='/socialmediaassets/men1.jpg' />
                 <OnlineSymbol />
             </ImageContainer>
             <UserName>Shankar Kafla</UserName>
        </RowContainer>
       ))}
      
   </Wrapper>
  )
}

export default OnlineContact