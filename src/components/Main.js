import React from "react";
import {MainWrapper} from "../components/Containers/Container";
import { SlideFromTop } from "../components/Animations/Slide";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function Main() {
  return (
    <SlideFromTop duration="1s">
      <MainWrapper>
        <Navbar />
        <AboutMe/>
        <Portfolio/>
        <Contact/>
      </MainWrapper>
    </SlideFromTop>
  );
}

export default Main;
