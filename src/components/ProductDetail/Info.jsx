import React from 'react';
import { BodyText, BodyText2, SmallText, Title } from '../Typography';
import Box from '@mui/material/Box';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { Indicator } from '../Carousel';

const Info = () => {
  return (
    <Box>
      <Title>{"Essentials Men's Short Sleeve CrewNeck"}</Title>
      <Box mt={2} display={'flex'} justifyContent={'space-between'} alignItems={'center'} gap={1}>
        <Box display={'flex'} alignItems={'center'}>
          <Box color={'#f9a23b'}>
            <StarRoundedIcon fontSize={'small'} />
          </Box>
          <BodyText2>4.9 Rating</BodyText2>
        </Box>
        <Indicator />
        <BodyText2>2.3K+ Reviews</BodyText2>
        <Indicator />

        <BodyText2>2.9K+ Sold</BodyText2>
      </Box>
    </Box>
  );
};

export default Info;
