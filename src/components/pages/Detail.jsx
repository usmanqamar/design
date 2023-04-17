import React from 'react';
import { Box, Container } from '@mui/material';
import HomeCarousel from '../Carousel';
import WithPadding from '../Layout/WithPadding';
import Header from '../Layout/Header';
import ActionStrip from '../Home/ActionStrip';
import SaleProducts from '../Home/SaleProducts';
import FixedBottomNavigation from '../Layout/Footer';
import { motion } from 'framer-motion';
import WithAnimate from '../Layout/WithAnimate';
import DetailFooter from '../Layout/DetailFooter';
import Info from '../ProductDetail/Info';
import DetailTabs from '../ProductDetail/DetailTabs';
import HeaderDetail from '../Layout/HeaderDetail';
import DetailCarousel from '../Carousel/DetailCarousel';

const Detail = () => {
  return (
    <WithAnimate key={2}>
      <Container maxWidth="sm" sx={{ marginBottom: 4 }}>
        <HeaderDetail />
        <DetailCarousel />
        <Info />
        <DetailTabs />
        <DetailFooter />
      </Container>
    </WithAnimate>
  );
};

export default Detail;
