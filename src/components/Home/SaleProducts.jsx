import React from 'react';
import { Box, Grid, Link } from '@mui/material';
import { SmallText, Title } from '../Typography';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { Link as RouterLink } from 'react-router-dom';
const Product = ({ image, title }) => {
  return (
    <Box
      height={'100%'}
      position={'relative'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}>
      <Box display={'flex'} flexDirection={'column'} gap={1}>
        <Box bgcolor={'#eff0f0'}>
          <img
            width={150}
            height={130}
            style={{ objectFit: 'cover', objectPosition: 'top', maxWidth: 150 }}
            src={`/assets/${image}.png`}
          />
        </Box>
        <SmallText>Shirt</SmallText>
        <Link component={RouterLink} to={'/detail'}>
          <Title color={'text.primary'}>{title}</Title>
        </Link>
      </Box>
      <Box display={'flex'} alignItems={'center'} mt={1}>
        <Box display={'flex'} alignItems={'center'} gap={1} width={1 / 2}>
          <Box color={'#f9a23b'}>
            <StarRoundedIcon fontSize={'small'} />
          </Box>
          <SmallText>4.9 | 2356</SmallText>
        </Box>
        <Box width={1 / 2} textAlign={'right'}>
          <Title color={'primary'}>$12.30</Title>
        </Box>
      </Box>
      <Box position={'absolute'} top={5} right={5}>
        {Math.random() > 0.5 ? (
          <FavoriteBorderOutlinedIcon />
        ) : (
          <FavoriteOutlinedIcon color={'error'} />
        )}
      </Box>
    </Box>
  );
};

const List = () => {
  return (
    <Grid container spacing={2} mt={1}>
      <Grid item xs={6}>
        <Product title={"Essentials Men' Short Sleeve CrewNeck"} image={'blak'} />
      </Grid>
      <Grid item xs={6}>
        <Product title={"Essentials Men's Short Sleeve CrewNeck"} image={'orange'} />
      </Grid>
      <Grid item xs={6}>
        <Product title={"Essentials Men's Short Sleeve CrewNeck"} image={'yellow'} />
      </Grid>
      <Grid item xs={6}>
        <Product title={"Essentials Men's Short Sleeve"} image={'blue'} />
      </Grid>
    </Grid>
  );
};
const SaleProducts = () => {
  return (
    <Box mt={2} sx={{ background: 'linear-gradient( #f9f9f9, #fff)' }}>
      <Box pt={3}>
        <Box display={'flex'} justifyContent={'space-between'}>
          <Box width={1 / 2}>
            <Title>Best Sale Product</Title>
          </Box>
          <Box width={1 / 2} textAlign={'right'}>
            <Link>See more</Link>
          </Box>
        </Box>
        <List />
      </Box>
    </Box>
  );
};

export default SaleProducts;
