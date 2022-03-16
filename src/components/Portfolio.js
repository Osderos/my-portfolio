import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import { Container } from "../components/Containers/Container";
import styled from "styled-components";
import db from "../firebase";
import { getImages } from "../utils/getImages";

function Portfolio() {
  const MAX_AMOUNT = 7;
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const loadImages = async () => {
      setImages(await getImages(MAX_AMOUNT));
    };
    loadImages();
  }, []);

  const prevSlide = () => {};

  const nextSlide = () => {};

  return (
    <Container>
      <section className="slider">
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
          <img src={image.url} key={image.id} alt={image.id} />
        ))}
      </section>
    </Container>
  );
}

export default Portfolio;
