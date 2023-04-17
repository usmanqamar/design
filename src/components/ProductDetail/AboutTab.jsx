import React from 'react';
import Box from '@mui/material/Box';
import { Divider, Grid } from '@mui/material';
import { BodyText, SmallText, Title } from '../Typography';

const AboutTab = () => {
  return (
    <Box sx={{ padding: 1 }} display={'flex'} flexDirection={'column'} gap={2}>
      <Box>
        <Grid container spacing={1} mt={1}>
          <Grid item xs={6}>
            <Box display={'flex'} gap={1} alignItems={'center'}>
              <SmallText>Brand</SmallText>
              <BodyText>CharmkPr</BodyText>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box display={'flex'} gap={1} alignItems={'center'}>
              <SmallText>Color</SmallText>
              <BodyText>Apricot</BodyText>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box display={'flex'} gap={1} alignItems={'center'}>
              <SmallText>Size</SmallText>
              <BodyText>Small</BodyText>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box display={'flex'} gap={1} alignItems={'center'}>
              <SmallText>Brand</SmallText>
              <BodyText>CharmkPr</BodyText>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Divider />

      <Box>
        <Title>Description:</Title>
        <ul>
          <li>Long sleeve dress shirt</li>
          <li>Patch pocket</li>
          <li>Durable combination cotton fabric</li>
          <li>Comfortable and quality fabric</li>
        </ul>
      </Box>
      <Divider />

      <Box>
        <Title>Shipping Information:</Title>
        <Box mt={2} display={'flex'} alignItems={'center'} gap={1}>
          <SmallText>Delivery:</SmallText>
          <BodyText>Shipping from Jakarta</BodyText>
        </Box>
        <Box display={'flex'} alignItems={'center'} gap={1}>
          <SmallText>Shipping:</SmallText>
          <BodyText>Free International Shipping</BodyText>
        </Box>
        <Box display={'flex'} alignItems={'center'} gap={1}>
          <SmallText>Arrive:</SmallText>
          <BodyText>Estimated Arrival on 25 - 27 Oct 2022</BodyText>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutTab;
