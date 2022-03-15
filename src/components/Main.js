import React from "react";
import {MainWrapper} from "../components/Containers/Container";
import { SlideFromTop } from "../components/Animations/Slide";
import Navbar from "./Navbar";

function Main() {
  return (
    <SlideFromTop duration="1s">
      <MainWrapper>
        <Navbar />
      </MainWrapper>
    </SlideFromTop>
  );
}

export default Main;
