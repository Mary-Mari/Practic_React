import React from 'react';
import { useSlider } from '../../SliderContext';

const Slider = () => {
    
  return (
    
       <div className="slider-container">
    <div className="slider">
      <div className="slide">
        <img src="image1.png" alt="Slide 1" />
      </div>
      <div className="slide">
        <img src="image2.png" alt="Slide 2" />
      </div>
      <div className="slide">
        <img src="image3.png" alt="Slide 3" />
      </div>

    </div>
    <button className="slider-button prev">Prev</button>
    <button className="slider-button next">Next</button>
  </div>

      
  );
}


export default Slider;
