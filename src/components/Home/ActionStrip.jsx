import React from 'react';
import { Box } from '@mui/material';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import FlightOutlinedIcon from '@mui/icons-material/FlightOutlined';
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { SmallText } from '../Typography';
const IconWrapper = ({ children, label }) => (
  <Box textAlign={'center'}>
    <Box borderRadius={'8px'} px={0.8} py={1} bgcolor={'#f6f6f6'}>
      {children}
    </Box>
    <Box mt={1}>
      <SmallText>{label}</SmallText>
    </Box>
  </Box>
);
const ActionStrip = () => {
  return (
    <Box display={'flex'} pt={1.5} mb={3} color={'text.secondary'} justifyContent={'space-between'}>
      <IconWrapper label={'Category'}>
        <CategoryOutlinedIcon />
      </IconWrapper>
      <IconWrapper label={'Flight'}>
        <FlightOutlinedIcon />
      </IconWrapper>
      <IconWrapper label={'Bill'}>
        <PriceChangeOutlinedIcon />
      </IconWrapper>
      <IconWrapper label={'Data Plan'}>
        <LanguageOutlinedIcon />
      </IconWrapper>
      <IconWrapper label={'Topup'}>
        <MonetizationOnOutlinedIcon />
      </IconWrapper>
    </Box>
  );
};

export default ActionStrip;
