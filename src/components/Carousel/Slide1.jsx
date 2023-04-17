import React from 'react';
import { Box } from '@mui/material';
import { Overline, Title } from '../Typography';

const Slide1 = () => {
  return (
    <Box sx={{ backgroundColor: '#e9e2e2', textAlign: 'initial' }} pt={12}>
      <Box
        px={2}
        sx={{
          height: '150px',
          backgroundImage: 'url(/assets/blue.png)',
          backgroundPosition: 'right bottom',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain'
        }}>
        <Overline fontWeight={'600'}>#BeautySale</Overline>
        <Box width={1 / 2} display={'flex'} flexDirection={'column'} gap={1}>
          <Title>DISCOVER OUR BEAUTY SELECTION</Title>
        </Box>
      </Box>
    </Box>
  );
};

export default Slide1;
