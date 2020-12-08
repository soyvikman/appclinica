import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import SlideOne from '../../../../shared/images/slide1.png';
import SlideTwo from '../../../../shared/images/slide2.png';
import SlideThree from '../../../../shared/images/slide3.png';

import './carousel.css';

const Slide = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SlideOne}
          alt="First slide"
        />
{/*        <Carousel.Caption>
          <a>Click</a>
        </Carousel.Caption>*/}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SlideTwo}
          alt="Third slide"
        />

{/*        <Carousel.Caption>
          <a>Click</a>
        </Carousel.Caption>*/}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SlideThree}
          alt="Third slide"
        />

{/*        <Carousel.Caption>
          <a>Click</a>
        </Carousel.Caption>*/}
      </Carousel.Item>
    </Carousel>
  );
};

export default Slide;
