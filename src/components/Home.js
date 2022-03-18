import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import StyledButton from "../components/Button/Button";
import HomeWrapper from "./Containers/Container";
import { device } from "../utils/mediaQueries";
import {
  SlideFromTop,
  SlideFromRight,
  SlideButton,
  ProfilePictureRotate,
} from "./Animations/Slide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { getProfilePic } from "../utils/getImages";

function Home() {
  const [profilePic, setProfilePic] = useState("");
  const navigate = useNavigate();

  const toMain = () => navigate("/main");

  useEffect(() => {
    const loadImage = async () => {
      setProfilePic(await getProfilePic());
    };
    loadImage();
  }, []);

  return (
    <HomeWrapper>
      <ProfilePictureRotate duration="4s">
        <PortraitImage src={profilePic} alt="myPicture"></PortraitImage>
      </ProfilePictureRotate>
      <AboutMe>
        <SlideFromTop duration="2s">
          <h1>
            Greetings! <br />
            I'm George Barda
          </h1>
        </SlideFromTop>
        <SlideFromRight duration="1s" delay="2s">
          <p>
            I am currently a mechanical engineer with over 7 years of experience
            in the automotive industry. Being passionate about design and tech
            in general and always opened to learn new skills and abilities , I
            have decided approaching the Web Development area. Commited and
            aplying the ideea of life-long learning, I am also a web developper
            with a passion for JavaScript, React and all things in web
            development.
          </p>
        </SlideFromRight>
        <SlideButton delay="3s" duration="2s">
          <StyledButton onClick={toMain}>
            To portfolio <FontAwesomeIcon icon={solid("arrow-right")} />
          </StyledButton>
        </SlideButton>
      </AboutMe>
    </HomeWrapper>
  );
}

export default Home;

const PortraitImage = styled.img`
  max-width: 30em;
  height: auto;
  box-shadow: none;
  margin-top: 2em;
  object-fit: cover;

  @media ${device.tablet} {
    max-width: 100%;
  }
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
  }

  @media ${device.laptop} {
    align-items: center;
    padding: 1em;
  }
`;
