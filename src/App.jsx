import './App.css';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import Home from './components/pages/Home';
import { Routes, Route, useLocation } from 'react-router-dom';
import Detail from './components/pages/Detail';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <ThemeProvider theme={theme}>
      <AnimatePresence mode={'wait'}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="detail" element={<Detail />} />
        </Routes>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
