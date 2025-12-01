import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./Carousel.css";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="carousel-wrapper">
      <h1 className="carousel-heading">Jobs & Careers</h1>

      <div className="carousel">
        <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />

        {data.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={slide === idx ? "slide-link" : "slide-link slide-hidden"}
          >
            <img src={item.src} alt={item.alt} className="slide" />
          </a>
        ))}

        <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right" />

        {/* 🔥 Slide Counter Added */}
        <div className="slide-counter">
          {slide + 1} / {data.length}
        </div>
      </div>
    </div>
  );
};
