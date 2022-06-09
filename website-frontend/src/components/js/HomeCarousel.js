import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../images/h-1.jpg';
import img2 from '../images/h-2.jpg';
import img3 from '../images/h-3.jpg';
import '../css/HomeCarousel.css';

import {
  CarouselControl,
  Carousel,
  CarouselItem,
  CarouselCaption
} from 'reactstrap';

function App() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const items = [
    {
      caption: "Image 1",
      src: img1,
      altText: "Slide 1",
      description: "We Code"
    },
    {
      caption: "Image 2",
      src: img2,
      altText: "Slide 2",
      description: "We Develop"
    },
    {
      caption: "Image 3",
      src: img3,
      altText: "Slide 3",
      description: "We Organize"
    }
  ];
  const itemLength = items.length - 1;

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? itemLength : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === itemLength ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const carouselItemData = items.map((item, index) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={index}
      >
        <span className='carousel-text'>{item.description}</span>
        <span className='carousel-image'><img src={item.src} alt={item.altText} width="100%" /></span>
        {/* <CarouselCaption captionText={item.description} captionHeader={item.caption} /> */}
      </CarouselItem>
    );
  });

  return (
    <div className='home-carousel'>
      <Carousel previous = {previous} next = {next} activeIndex = {activeIndex}>
        {carouselItemData}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler = {previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler = {next} />
      </Carousel>
    </div>
  );
}

export default App;