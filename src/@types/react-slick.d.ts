declare module 'react-slick' {
    import React from 'react';
  
    interface Settings {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      autoplay?: boolean;
      autoplaySpeed?: number;
      pauseOnHover?: boolean;
      // Add any other settings you may need
    }
  
    export interface SliderProps extends Settings {
      children?: React.ReactNode; // Add children prop to accept child components
    }
  
    export default class Slider extends React.Component<SliderProps> {}
  }
  