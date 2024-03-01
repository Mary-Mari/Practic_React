import React from 'react';
import "../works/works.css";
import { SliderProvider } from '../../SliderContext';
import Slider from './WorksSlider';

  


  const Works = () => {
    return (
      <div className="works">
        <h1>Наши работы</h1>
        <Slider /> 
      </div>
    );
  };
  
  export default Works;
