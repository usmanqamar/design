import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import Slide1 from './Slide1';
import Slide2 from './Slide2';

export const Indicator = styled(Box)(({ selected }) => ({
  height: '4px',
  width: selected ? '10px' : '4px',
  backgroundColor: selected ? 'black' : 'gray',
  borderRadius: selected ? '30%' : '50%',
  display: 'inline-block'
}));
const Indicators = ({ count, selectedIndex, onClick }) => {
  return (
    <Box position={'absolute'} display={'flex'} gap={1} right={10} top={80}>
      {[...Array(count)].map((x, i) => (
        <Indicator onClick={() => onClick(i)} key={i} selected={i === selectedIndex} />
      ))}
    </Box>
  );
};
const HomeCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  return (
    <Box position={'relative'} maxWidth={'sm'} m={'auto'}>
      <Carousel
        selectedItem={selectedIndex}
        showIndicators={false}
        showArrows={false}
        emulateTouch={true}
        useKeyboardArrows={true}
        autoPlay={false}
        infiniteLoop={true}
        onChange={setSelectedIndex}
        showThumbs={false}
        showStatus={false}>
        <Slide1 />
        <Slide2 />
      </Carousel>
      <Indicators count={2} selectedIndex={selectedIndex} onClick={setSelectedIndex} />
    </Box>
  );
};

export default HomeCarousel;
