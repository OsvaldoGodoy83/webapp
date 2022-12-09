import React from 'react';
import img1 from "../Images/Productos/KodakSmartwayL1.png";
import img2 from "../Images/Productos/KodakSmartwayM1.png";
import img3 from "../Images/Productos/KodakSmartwayT1.png";
import img4 from "../Images/Productos/KodakSmartwayX1.png";
import Carousel from 'react-bootstrap/Carousel';
import './Phone.css'



function Phone() {
  return (
  <Carousel>
      <Carousel.Item>
        <img
        classname="Phone"
        src={img1}
        alt="Smartway L1"
        />
        <Carousel.Caption>
          <h3>Smartphone L1</h3>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
      <img
        classname="Phone"
        src={img2}
        alt="Smartway M1"
        />
        <Carousel.Caption>
        <h3>Smartphone M1</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img
        classname="Phone"
        src={img3}
        alt="Smartway T1"
        />
        <Carousel.Caption>
        <h3>Smartphone T1</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img
        classname="Phone"
        src={img4}
        alt="Smartway X1"
        />
        <Carousel.Caption>
        <h3>Smartphone X1</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Phone;