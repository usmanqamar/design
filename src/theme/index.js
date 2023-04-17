import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: ['"Montserrat"', 'Open Sans'].join(','),
    fontSize: 14,
    h1: {
      fontSize: '3rem'
    },
    h2: {
      fontSize: '2.5rem'
    }
  },
  components: {
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: '6px',
          height: '8px'
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontSize: '80%',
          textDecoration: 'none',
          fontWeight: '500'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          '&.Mui-selected': {
            fontWeight: '700'
          }
        }
      }
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          borderRadius: 2
        }
      }
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          '.Mui-selected': {
            fontWeight: 'bold'
          }
        }
      }
    }
  },
  palette: {
    primary: {
      main: '#48af96',
      contrastText: '#fff'
    },
    secondary: {
      main: '#2b2d40'
    },
    error: {
      main: '#e65986'
    }
  }
});
