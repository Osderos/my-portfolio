import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import { PortfolioContainer } from "../components/Containers/Container";
import styled from "styled-components";
import db from "../firebase";
import { getImages } from "../utils/getImages";

function Portfolio() {
  const MAX_AMOUNT = 7;
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);
  const length = images.length

  useEffect(() => {
    const loadImages = async () => {
      setImages(await getImages(MAX_AMOUNT));
    };
    loadImages();
  }, []);

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  console.log(current);

  return (
    <PortfolioContainer>
      <Slider className="slider">
        <FontAwesomeIcon
          className="left-arrow"
          icon={solid("circle-arrow-left")}
          onClick={prevSlide}
        />
        <FontAwesomeIcon
          className="right-arrow"
          icon={solid("circle-arrow-right")}
          onClick={nextSlide}
        />
        {images.map((image) => (
          <div
            className={image.id-1 === current ? "slideActive" : "slide"}
            key={image.id}
          >
            {image.id-1 === current && (
              <CaruselImage src={image.url} alt={image.id} />
            )}
          </div>
        ))}
      </Slider>
    </PortfolioContainer>
  );
}

export default Portfolio;

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

  .slide{
    opacity: 0;
    transition-duration: 1s ease;
  }

  .slideActive{
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
