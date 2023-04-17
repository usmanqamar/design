import React from 'react';
import { Box, Button } from '@mui/material';
import { Overline, SmallText, Title } from '../Typography';

const Slide2 = () => {
  return (
    <Box sx={{ backgroundColor: '#e9ebea', textAlign: 'initial' }} pt={15}>
      <Box style={{ height: 150 }} px={2}>
        <Overline fontWeight={'600'}>#Fashion Day</Overline>
        <Box width={1 / 2} display={'flex'} flexDirection={'column'} gap={1}>
          <Title>80% OFF</Title>
          <SmallText>Discover fashion that suits to your style</SmallText>
          <Button variant={'contained'} color={'secondary'}>
            Check this out
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Slide2;
