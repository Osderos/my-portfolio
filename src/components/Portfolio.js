import React, { useState, useEffect } from "react";
import { PortfolioContainer } from "../components/Containers/Container";
import db from "../firebase";
import { getImages } from "../utils/getImages";
import Carusel from "./Carusel";

function Portfolio() {
  const MAX_AMOUNT = 7;
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);
  const length = images.length;

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

  return (
    <PortfolioContainer>
        <Carusel  prevSlide={prevSlide} nextSlide={nextSlide} current={current} length={length} images={images}/>
    </PortfolioContainer>
  );
}

export default Portfolio;

