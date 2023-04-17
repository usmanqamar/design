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

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
  }, [value]);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, padding: '14px' }}
        elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}>
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Voucher" icon={<RedeemOutlinedIcon />} />
          <BottomNavigationAction label="Wallet" icon={<WalletOutlinedIcon />} />
          <BottomNavigationAction label="Settings" icon={<SettingsOutlinedIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
