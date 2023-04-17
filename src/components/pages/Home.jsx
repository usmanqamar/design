import React from 'react';
import { Box, Container } from '@mui/material';
import HomeCarousel from '../Carousel';
import WithPadding from '../Layout/WithPadding';
import Header from '../Layout/Header';
import ActionStrip from '../Home/ActionStrip';
import SaleProducts from '../Home/SaleProducts';
import FixedBottomNavigation from '../Layout/Footer';
import WithAnimate from '../Layout/WithAnimate';

const Home = () => {
  return (
    <WithAnimate key={1}>
      <Box position={'relative'}>
        <HomeCarousel />
      </Box>

      <Container maxWidth="sm" disableGutters={true} sx={{ marginBottom: 4 }}>
        <WithPadding>
          <Header />
        </WithPadding>
        <WithPadding>
          <ActionStrip />
        </WithPadding>
        <WithPadding sx={{ background: 'linear-gradient( #f9f9f9, #fff)' }}>
          <SaleProducts />
        </WithPadding>
        <FixedBottomNavigation />
      </Container>
    </WithAnimate>
  );
};

export default Home;
