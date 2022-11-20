import CenterComponent from "../../components/centercomponent/CenterComponent"
import LeftComponent from "../../components/Leftcomponent/LeftComponent"
import Navigation from "../../components/Nav/Navigation"
import RightComponent from "../../components/rightcomponent/RightComponent"
import { Wrapper } from "./home.styled"

const Home = () => {
  return (
    <>
    <Navigation />
    <Wrapper>
      <LeftComponent />
      <CenterComponent />
      <RightComponent />
    </Wrapper>
    </>
  )
}

export default Home