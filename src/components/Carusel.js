import React from "react";
import { portfolioDescription } from "../utils/portfolioDescription";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Description } from "./Containers/Container.styles";
import styled from "styled-components";
import {device} from '../utils/mediaQueries'

function Carusel(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Slider className="slider">
        <FontAwesomeIcon
          className="left-arrow"
          icon={solid("circle-arrow-left")}
          onClick={props.prevSlide}
        />
        <FontAwesomeIcon
          className="right-arrow"
          icon={solid("circle-arrow-right")}
          onClick={props.nextSlide}
        />
        {props.images.map((image) => (
          <div
            className={image.id - 1 === props.current ? "slideActive" : "slide"}
            key={image.id}
          >
            {image.id - 1 === props.current && (
              <CaruselImage src={image.url} alt={image.id} />
            )}
          </div>
        ))}
      </Slider>
      {portfolioDescription.map((item) => (
        <div
          key={item.id}
          className={item.id === props.current ? "slideActive" : "slide"}
        >
          {item.id === props.current && (
            <Description style={{ margin: "auto" }}>
              <p>{item.description}</p>
              <div style={{fontSize: '40px', display:'flex', gap:'15px'}}>
                <a href={item.gitHubRepo}>
                  <i className="devicon-github-original-wordmark"></i>
                </a>
                <a href={item.webPage}>
                  <i className="devicon-chrome-plain"></i>
                </a>
              </div>
            </Description>
          )}
        </div>
      ))}
    </div>
  );
}

export default Carusel;

const Slider = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;

  .right-arrow {
    position: absolute;
    top: 50%;
    right: 32px;
    font-size: 3rem;
    cursor: pointer;
    user-select: none;
    z-index: 9;
    color: #ffc300;
  }

  .left-arrow {
    position: absolute;
    top: 50%;
    left: 32px;
    font-size: 3rem;
    cursor: pointer;
    user-select: none;
    z-index: 9;
    color: #ffc300;
  }

  .slide {
    opacity: 0;
    transition-duration: 1s ease;
  }

  .slideActive {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);
  }
`;

const CaruselImage = styled.img`
  width: 500px;
  height: auto;
  border-radius: 10px;

  @media ${device.tablet}{
    width: 350px;
  }

  @media ${device.mobileL}{
    width: 250px;
  }
`;
