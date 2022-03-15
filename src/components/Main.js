import React from "react";
import {MainWrapper} from "../components/Containers/Container";
import { SlideFromTop } from "../components/Animations/Slide";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";

function Main() {
  return (
    <SlideFromTop duration="1s">
      <MainWrapper>
        <Navbar />
        <AboutMe/>
      </MainWrapper>
    </SlideFromTop>
  );
}

export default Main;
