import styled from "styled-components";
import Image from "./dummyPortrait.jpg";

function App() {
  return (
    <HomeWrapper>
      <PortraitImage src={Image} alt="myPicture"></PortraitImage>
      <AboutMe>
        <h1>Greetings! <br/>I'm George Barda</h1>
        <p>
          I am currently a mechanical engineer with over 7 years of experience
          in the automotive industry. Being passionate about design and tech in
          general and always opened to learn new skills and abilities , I have
          decided approaching the Web Development area. Commited and aplying the
          ideea of life-long learning, I am also a web developper with a passion
          for JavaScript, React and all things in web development.
        </p>
        <button>To portfolio</button>
      </AboutMe>
    </HomeWrapper>
  );
}

export default App;

const HomeWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, rgb(42, 13, 40), rgb(6, 13, 40));
  color: white;
  width: 50%;
  margin: auto;
  padding: 4em;
`;

const PortraitImage = styled.img`
  max-width: 25em;
  box-shadow: none;
`;

const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
