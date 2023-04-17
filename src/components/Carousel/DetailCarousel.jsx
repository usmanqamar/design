import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import { Indicator } from './index';
const images = ['yellow', 'blue', 'orange'];
const Thumbnails = ({ count, selectedIndex, onClick }) => {
  return (
    <Box position={'absolute'} display={'flex'} flexDirection={'column'} gap={2} left={10} top={20}>
      {images.map((image, i) => (
        <Box key={i} onClick={() => onClick(i)} bgcolor={'#c4c5c5'} borderRadius={1}>
          <img
            width={'40'}
            height={'40'}
            style={{
              objectFit: 'fill'
            }}
            src={`/assets/${image}.png`}
          />
        </Box>
      ))}
    </Box>
  );
};
const DetailCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  return (
    <Box position={'relative'} maxWidth={'sm'} my={3} bgcolor={'#f7f7f7'} borderRadius={1}>
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
        {images.map((image, i) => (
          <img
            key={i}
            width={'100%'}
            height={'300px'}
            style={{
              objectFit: 'scale-down',
              maxWidth: '100%'
            }}
            src={`/assets/${image}.png`}
          />
        ))}
      </Carousel>
      <Thumbnails onClick={setSelectedIndex} />
    </Box>
  );
};

export default DetailCarousel;
