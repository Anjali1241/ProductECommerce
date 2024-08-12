import * as React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Hero() {
  return (
    <Carousel>
      <div>
        <img src="/Hero/slider_1.png" />
        <p className="legend">IPhone</p>
      </div>
      <div>
        <img src="/Hero/slider_2.jpg" />
        <p className="legend">IPhone 15 pro max</p>
      </div>
      <div>
        <img src="/Hero/slider_1.png" />
        <p className="legend">IPhone</p>
      </div>
    </Carousel>
  );
}

export default Hero;
