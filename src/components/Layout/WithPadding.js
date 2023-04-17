import React from 'react';
import { Box } from '@mui/material';

const WithPadding = ({ children, ...props }) => {
  return (
    <Box {...props} px={2}>
      {children}
    </Box>
  );
};

export default WithPadding;
