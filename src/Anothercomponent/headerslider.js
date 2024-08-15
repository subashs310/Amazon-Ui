import React, { useState, useEffect } from 'react';

// Import images
import header1 from '../assets/header1.jpg';
import header2 from '../assets/header2.jpg';
import header3 from '../assets/header3.jpg';
import header4 from '../assets/header4.jpg';
import header5 from '../assets/header5.jpg';
import header6 from '../assets/header6.jpg';

const HeaderSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [header1, header2, header3, header4, header5, header6];
  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 2000);
    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [currentSlide]);

  return (
    <div className="header-slider">
      <a href="#" className="control_prev" onClick={prevSlide}>&#129144;</a>
      <a href="#" className="control_next" onClick={nextSlide}>&#129146;</a>
      <ul className="slides-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <li key={index}>
            <img className="header-img" src={slide} alt={`Header Slide ${index + 1}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderSlider;
