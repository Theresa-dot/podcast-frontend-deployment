import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 2));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : 0));
  };

  return (
    <div className="container">
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className={activeIndex === 0 ? 'active' : ''}
            aria-current={activeIndex === 0}
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            className={activeIndex === 1 ? 'active' : ''}
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            className={activeIndex === 2 ? 'active' : ''}
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
            <img src="/images/carousel-1.jpg" className="d-block w-100" alt="Network Error" />
          </div>
          <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
            <img src="/images/carousel-2.jpg" className="d-block w-100" alt="Network Error" />
          </div>
          <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
            <img src="/images/carousel-3.jpg" className="d-block w-100" alt="Network error" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
          onClick={handlePrevClick}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
          onClick={handleNextClick}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
