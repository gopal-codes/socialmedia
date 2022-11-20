import {
  Badge,H2,Icon,IconArea,Img,Navtext,ProfileImgContainer,Right,Span,Wrapper,} from "./Navigation.styled";
import { IoPerson } from "react-icons/io5";
import { MdOutlineMessage, MdNotifications } from "react-icons/md";
import { Link } from "react-router-dom";
import SearchPage from "./SearchPage";

const Navigation = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Wrapper>
      <IconArea>
        <Span>
          <Link to="/" style={{ textDecoration: "none" }}>
            <H2>Lamasocial</H2>
          </Link>
        </Span>
      </IconArea>

    
      <SearchPage />

      <Right>
        <Span>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Navtext>Homepage</Navtext>
        </Link>
          <Navtext>Timeline</Navtext>
        </Span>
        <Span>
          <Icon>    
            <IoPerson />
            <Badge>9+</Badge>
          </Icon>
          <Icon> 
            <Link to="/messenger" style={{ textDecoration: "none",color:"white" }}> 
            <MdOutlineMessage />
            <Badge>5</Badge>
            </Link>
          </Icon>
          <Icon>
            <MdNotifications />
            <Badge>9+</Badge>
          </Icon>
        </Span>
        <Span>
          <Link to={`/profile/${user._id}`} style={{ textDecoration: "none" }}>
            <ProfileImgContainer>
              <Img src={user.profilePicture||"/socialmediaassets/vector.jpg"} alt="pro" />
            </ProfileImgContainer>
          </Link>
        </Span>
      </Right>
    </Wrapper>
  );
};

export default Navigation;
