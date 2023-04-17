import React from 'react';
import { Badge, Box, Link } from '@mui/material';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';

const HeaderDetail = () => {
  const navigate = useNavigate();
  return (
    <Box mt={4}>
      <Box display={'flex'} gap={2} alignItems={'center'} justifyContent={'space-between'}>
        <Box width={2 / 3}>
          <Link color={'text.primary'} component={RouterLink} to={'/'}>
            <ArrowBackIosNewOutlinedIcon fontSize={'small'} />
          </Link>
        </Box>
        <Box width={1 / 3} gap={3} alignItems={'center'} display={'flex'}>
          <FavoriteOutlinedIcon color={'error'} />

          <ShareOutlinedIcon />
          <Badge variant={'standard'} badgeContent={4} color="error" overlap={'circular'}>
            <ShoppingBasketOutlinedIcon />
          </Badge>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderDetail;
