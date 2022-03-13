import styled from "styled-components";
import Image from "./dummyPortrait.jpg";
import StyledButton from "./components/Button";
import { device } from "./utils/mediaQueries";

function App() {
  return (
    <HomeWrapper>
      <PortraitImage src={Image} alt="myPicture"></PortraitImage>
      <AboutMe>
        <h1>
          Greetings! <br />
          I'm George Barda
        </h1>
        <p>
          I am currently a mechanical engineer with over 7 years of experience
          in the automotive industry. Being passionate about design and tech in
          general and always opened to learn new skills and abilities , I have
          decided approaching the Web Development area. Commited and aplying the
          ideea of life-long learning, I am also a web developper with a passion
          for JavaScript, React and all things in web development.
        </p>
        <StyledButton>To portfolio</StyledButton>
      </AboutMe>
    </HomeWrapper>
  );
}

export default App;

const HomeWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, rgb(42, 13, 40), rgb(6, 13, 40));
  color: white;
  width: 75%;
  margin: auto;
  padding: 2em;

  @media ${device.laptop}{
    width: 100%;
    min-height: 100%;
    padding-bottom: 100vh;

    @media ${device.mobileL}{
    width: 100%;
    min-height: 100%;
    padding-bottom: 100%;
    flex-wrap: nowrap;
    flex-direction: column;
  }
`;

const PortraitImage = styled.img`
  max-width: 25em;
  box-shadow: none;
`;

const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;

  h1 {
    font-family: "Rubik";
  }

  p {
    font-family: "Righteous";
    font-size: 18px;
    padding: 2em;
  }

  @media ${device.laptop} {
    align-items: center;
    width: 50%;
  }
`;
