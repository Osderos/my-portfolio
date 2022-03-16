import React from "react";
import { portfolioDescription } from "../utils/portfolioDescription";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import styled from "styled-components";

function Carusel(props) {
  return (
    <div>
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
        <Description
          key={item.id}
          className={item.id === props.current ? "slideActive" : "slide"}
        >
          {item.id === props.current && <p>{item.description}</p>}
        </Description>
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
`;

const Description = styled.div`
width: 50%;
margin: auto;
`
