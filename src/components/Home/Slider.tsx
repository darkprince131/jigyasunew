import React, { FC, useEffect, useState } from 'react';
import classes from './Slider.module.css';

interface SliderProps {
  width: string;
  height: string;
  quantity: number;
  images: string[];
  reverse?: boolean;
}

export const Slider: FC<SliderProps> = ({ width, height, quantity, images, reverse = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quantity);
    }, 3000);

    return () => clearInterval(interval);
  }, [quantity]);

  return (
    <div
      className={classes.slider}
      style={{
        width,
        height,
      }}
    >
      <div
        className={`${classes.list} ${reverse ? classes.reverse : ''}`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `calc(${quantity} * 100%)`,
        }}
      >
        {images.map((src, index) => (
          <div key={index} className={classes.item} style={{ width: `calc(100% / ${quantity})` }}>
            <img src={src} alt={`slider-item-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};
