  import firstSlide from "./../assets/img/hero-carousel/hero-carousel-1.jpg";
  import secondSlide from "./../assets/img/hero-carousel/hero-carousel-2.jpg";
  import thirdSlide from "./../assets/img/hero-carousel/hero-carousel-3.jpg";
  import React from 'react';

  const CarouselData = () => {
    const carouselData = [
      {
        img: firstSlide,
        heroCaption: 'Welcome to Medicio',
        heropar: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima tenetur doloribus aspernatur incidunt nihil, praesentium ipsam at quis voluptatem numquam.',
      },
      {
        img: secondSlide,
        heroCaption: 'At vero eos et accusamus',
        heropar: 'tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
      },
      {
        img: thirdSlide,
        heroCaption: 'Temporibus autem quibusdam',
        heropar: 'Lorem ipsum  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ];

    return carouselData; 
  };

  export default CarouselData;
