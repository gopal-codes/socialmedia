import { EventCard, Image, Span, Wrapper } from './Events.styled'
import {FaBirthdayCake} from 'react-icons/fa';
import { FlexRow, UserName } from '../globiallyusedStyled';

const Events = () => {
  return (
   <Wrapper>
       <EventCard>
            <FlexRow>
                <FaBirthdayCake style={{fontSize:"40px",color:"tomato"}} />
                <Span> <UserName>Gopal</UserName> and <UserName>3 other friends</UserName> have birthday today.</Span>
            </FlexRow>

            <Image src='/socialmediaassets/background2.jpg' />
       </EventCard>
   </Wrapper>
  )
}

export default Events