import React from 'react';
import { Badge, Box, TextField } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
const Header = () => {
  return (
    <Box position={'absolute'} top={30}>
      <Box display={'flex'} gap={2} alignItems={'center'} justifyContent={'space-between'}>
        <Box width={2 / 3}>
          <TextField
            placeholder={'Search...'}
            fullWidth
            size={'small'}
            InputProps={{
              startAdornment: (
                <Box pl={0} pt={1}>
                  <SearchOutlinedIcon sx={{ color: '#b2b3b9' }} />
                </Box>
              )
            }}
          />
        </Box>
        <Box width={1 / 3} gap={3} alignItems={'center'} display={'flex'}>
          <Badge variant={'standard'} badgeContent={4} color="error" overlap={'circular'}>
            <ShoppingBasketOutlinedIcon />
          </Badge>
          <Badge badgeContent={4} color="error" overlap={'circular'}>
            <MessageOutlinedIcon />
          </Badge>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
