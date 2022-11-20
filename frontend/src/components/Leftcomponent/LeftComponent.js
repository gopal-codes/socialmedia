
import {
  Button,
  Container,
  Hr,
  Items,
  ItemsText,
  Wrapper,
} from "./LeftComponent.styled";
import {FcConferenceCall,FcComboChart,FcMms,FcBookmark,FcFeedback,FcBriefcase,FcVlc, FcGraduationCap} from "react-icons/fc";
import { Img, ProfileImgContainer } from "../Nav/Navigation.styled";

const LeftComponent = () => {
  return (
    <Container>
      <Wrapper>
        <Items>
          <FcFeedback />
          <ItemsText>Feed</ItemsText>{" "}
        </Items>
        <Items>
          <FcComboChart /> <ItemsText>Bussiness</ItemsText>{" "}
        </Items>
        <Items>
          <FcVlc /> <ItemsText>Videos</ItemsText>{" "}
        </Items>
        <Items>
          <FcBookmark /> <ItemsText>Bookmarks</ItemsText>{" "}
        </Items>
        <Items>
          <FcMms /> <ItemsText>Gallery</ItemsText>{" "}
        </Items>
        <Items>
          <FcConferenceCall /> <ItemsText>Groups</ItemsText>{" "}
        </Items>
        <Items>
        <FcGraduationCap /> <ItemsText>Courses</ItemsText>{" "}
        </Items>
        <Items>
          <FcBriefcase /> <ItemsText>Jobs</ItemsText>{" "}
        </Items>
        
          <Button>More..</Button>
      
          <Hr />

        <Items>
          <ProfileImgContainer>
            <Img src="/socialmediaassets/men1.jpg" />
          </ProfileImgContainer>{" "}
          <ItemsText>Heroic men</ItemsText>
        </Items>
        <Items>
          <ProfileImgContainer>
            <Img src="/socialmediaassets/girl1.jpg" />
          </ProfileImgContainer>{" "}
          <ItemsText>sophiea andro</ItemsText>
        </Items>
        <Items>
          <ProfileImgContainer>
            <Img src="/socialmediaassets/men2.jpg" />
          </ProfileImgContainer>{" "}
          <ItemsText>guddu rangila</ItemsText>
        </Items>
        <Items>
          <ProfileImgContainer>
            <Img src="/socialmediaassets/men3.jpg" />
          </ProfileImgContainer>{" "}
          <ItemsText>franses avacado</ItemsText>
        </Items>
        <Items>
          <ProfileImgContainer>
            <Img src="/socialmediaassets/girl3.jpg" />
          </ProfileImgContainer>{" "}
          <ItemsText>justice loss</ItemsText>
        </Items>
        <Items>
          <ProfileImgContainer>
            <Img src="/socialmediaassets/girl1.jpg" />
          </ProfileImgContainer>{" "}
          <ItemsText>sophiea andro</ItemsText>
        </Items>
        <Items>
          <ProfileImgContainer>
            <Img src="/socialmediaassets/men2.jpg" />
          </ProfileImgContainer>{" "}
          <ItemsText>guddu rangila</ItemsText>
        </Items>
        <Items>
          <ProfileImgContainer>
            <Img src="/socialmediaassets/men3.jpg" />
          </ProfileImgContainer>{" "}
          <ItemsText>franses avacado</ItemsText>
        </Items>
        <Items>
          <ProfileImgContainer>
            <Img src="/socialmediaassets/girl3.jpg" />
          </ProfileImgContainer>{" "}
          <ItemsText>justice loss</ItemsText>
        </Items>
        <Items>
          <ProfileImgContainer>
            <Img src="/socialmediaassets/girl3.jpg" />
          </ProfileImgContainer>{" "}
          <ItemsText>justice loss</ItemsText>
        </Items>
        <Items>
          <ProfileImgContainer>
            <Img src="/socialmediaassets/girl1.jpg" />
          </ProfileImgContainer>{" "}
          <ItemsText>sophiea andro</ItemsText>
        </Items>
      </Wrapper>
    </Container>
  );
};

export default LeftComponent;
