import React from "react";
import styled from "styled-components";
import { device } from "../utils/mediaQueries";
import {Container} from '../components/Containers/Container'

function AboutMe() {
  return (
    <Container>
      <Description>
        <p>
          I am currently a mechanical engineer with over 7 years of experience
          in the automotive industry. Being passionate about design and tech in
          general and always opened to learn new skills and abilities , I have
          decided approaching the Web Development area. Commited and aplying the
          ideea of life-long learning, I am also a web developper with a passion
          for JavaScript, React and all things in web development.
        </p>
      </Description>
      <Skillset>
        <h3>Frontend</h3>
        <div style={{ display: "flex", gap: "10px" }}>
          <i className="devicon-html5-plain colored"></i>
          <i className="devicon-css3-plain colored"></i>
          <i className="devicon-javascript-plain colored"></i>
          <i className="devicon-git-plain colored"></i>
          <i className="devicon-npm-original-wordmark colored"></i>
          <i className="devicon-webpack-plain colored"></i>
          <i className="devicon-jest-plain colored"></i>
          <i className="devicon-react-original colored"></i>
        </div>

        <h3>Backend</h3>
        <div style={{ display: "flex", gap: "10px" }}>
          <i className="devicon-firebase-plain colored"></i>
          <i className="devicon-mongodb-plain colored"></i>
          <i className="devicon-express-original colored"></i>
        </div>
      </Skillset>
    </Container>
  );
}

export default AboutMe;

const Description = styled.div`
  width: 50%;
  padding: 1rem;
  color: white;
  border-width: 3px;
  border-style: solid;
  border-image: linear-gradient(to bottom, #c70039, rgba(0, 0, 0, 0)) 1 100%;

  p {
    font-family: "Rubik", sans-serif;
    font-size: 18px;
    word-spacing: 2px;
    font-style: italic;
  }

  @media ${device.tablet} {
    width: 75%;
    padding-top: 10px;
  }
`;
const Skillset = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;

  i {
    font-size: 28px;
  }
  h3 {
    font-family: "Audiowide";
  }
`;
