import React, { useState, useEffect, useCallback } from 'react';
import './Carousel.css';

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);

  const goToSlide = useCallback((slideIndex) => {
    setCurrentIndex(slideIndex);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(goToNext, 3000);

    return () => clearTimeout(timeoutId);
  }, [goToNext, currentIndex]);

  return (
    <div className="carouselContainer">
      <div className="slider">
        <div>
          <div onClick={goToPrevious} className="leftArrow">❰</div>
          <div onClick={goToNext} className="rightArrow">❱</div>
        </div>
        <div className="slide" style={{ backgroundImage: `url('${slides[currentIndex].url}')` }}></div>
        <div className="dotsContainer">
          {slides.map((slide, index) => (
            <div key={index} onClick={() => goToSlide(index)} className={`dot ${currentIndex === index ? 'active' : ''}`}>
              ●
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
