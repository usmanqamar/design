import React from 'react';
import { Box, Button } from '@mui/material';
import { H4, Heading, Overline, SmallText, Title } from '../Typography';

const Slide2 = () => {
  return (
    <Box sx={{ backgroundColor: '#e9ebea', textAlign: 'initial' }} pt={12}>
      <Box
        px={2}
        sx={{
          height: '180px',
          backgroundImage: 'url(/assets/yellow.png)',
          backgroundPosition: 'right bottom',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain'
        }}>
        <Overline fontWeight={'600'}>#Fashion Day</Overline>
        <Box width={1 / 2} display={'flex'} flexDirection={'column'} gap={1} mb={1}>
          <H4>80% OFF</H4>
          <SmallText>Discover fashion that suits to your style</SmallText>
        </Box>
        <Button variant={'contained'} color={'secondary'}>
          Check this out
        </Button>
      </Box>
    </Box>
  );
};

export default Slide2;
