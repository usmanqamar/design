import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';
import WalletOutlinedIcon from '@mui/icons-material/WalletOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import { H4, Heading, SmallText, Title } from '../Typography';
import { Button, ButtonGroup } from '@mui/material';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

export default function DetailFooter() {
  return (
    <Box px={2} sx={{ pb: 7 }}>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, padding: '14px' }}
        elevation={3}>
        <BottomNavigation>
          <Box display={'flex'} width={1} alignItems={'center'} gap={4}>
            <Box width={'40%'}>
              <Box>
                <SmallText>Total Price</SmallText>
                <H4 color={'primary'}>$12.30</H4>
              </Box>
            </Box>
            <Box width={'60%'} textAlign={'right'}>
              <ButtonGroup variant="contained">
                <Button
                  sx={{ padding: '1rem' }}
                  color="primary"
                  startIcon={<ShoppingBasketOutlinedIcon />}>
                  1
                </Button>
                <Button color="secondary">Buy Now</Button>
              </ButtonGroup>
            </Box>
          </Box>
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
