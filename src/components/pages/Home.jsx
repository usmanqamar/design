import React from 'react';
import { Box, Container } from '@mui/material';
import HomeCarousel from '../Carousel';
import WithPadding from '../Layout/WithPadding';
import Header from '../Layout/Header';
import ActionStrip from '../Home/ActionStrip';
import SaleProducts from '../Home/SaleProducts';
import FixedBottomNavigation from '../Layout/Footer';
import WithAnimate from '../Layout/WithAnimate';
import WithLayout from '../Layout/WithLayout';

const Home = () => {
  return (
    <WithLayout footer={<FixedBottomNavigation />}>
      <WithAnimate>
        <Box position={'relative'}>
          <HomeCarousel />
        </Box>

        <Container maxWidth="sm" disableGutters={true} sx={{ marginBottom: 4 }}>
          <Header />
          <WithPadding>
            <ActionStrip />
          </WithPadding>
          <WithPadding>
            <SaleProducts />
          </WithPadding>
        </Container>
      </WithAnimate>
    </WithLayout>
  );
};

export default Home;
