import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

const page = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.9, -0.05, 0.01, 0.1]
    }
  }
};

const WithAinmate = ({ children }) => {
  return (
    <>
      <motion.div variants={page} initial={'initial'} animate={'animate'}>
        {children}
      </motion.div>
    </>
  );
};

export default WithAinmate;
