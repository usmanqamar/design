import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { BodyText, BodyText2, Heading, SmallText, Title } from '../Typography';
import { styled } from '@mui/system';
import { Divider, Grid, LinearProgress, Rating } from '@mui/material';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import AboutTab from './AboutTab';
import ReviewTab from './ReviewTab';

export const TabBox = styled(TabPanel)(({ theme }) => ({
  '& > .MuiBox-root': {
    padding: '4px',
    '& ul': {
      paddingLeft: theme.spacing(3)
    },
    '& ul >li': {
      color: theme.palette.text.secondary,
      fontSize: '80%'
    }
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function DetailTabs() {
  const itemRef = React.useRef(null);

  const [value, setValue] = React.useState(0);
  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };
  React.useEffect(() => {
    if (itemRef && itemRef.current) {
      window.scrollTo({
        top: itemRef.current.offsetTop - 20,
        behavior: 'smooth'
      });
    }
  });

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="About Item" />
          <Tab label="Reviews" />
        </Tabs>
      </Box>
      <TabBox>
        <div ref={value === 0 ? itemRef : null} style={{ minHeight: '200px' }}>
          <AboutTab />
        </div>
      </TabBox>

      <TabBox>
        <div ref={value === 1 ? itemRef : null} style={{ minHeight: '200px' }}>
          <ReviewTab />
        </div>
      </TabBox>
    </Box>
  );
}
