import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';

interface IThemeWrapperProps {
  children: React.ReactNode;
}

export default function ThemeWrapper({ children }: IThemeWrapperProps) {
  const theme = createTheme({
    typography: {
      fontFamily: 'Satoshi, sans-serif',
      button: {
        fontFamily: 'Satoshi, sans-serif',
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '18px',
        letterSpacing: '0.5px',
      },
    },
    palette: {
      primary: {
        main: '#0056b3',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#A7E6FF',
        contrastText: '#0056b3',
      },
      text: {
        primary: '#333333',
        secondary: '#0056b3',
      },
      background: {
        default: '#f4f6f8',
        paper: '#ffffff',
      },
    },
    shape: {
      borderRadius: 8,
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableRipple: true,
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            textTransform: 'none',
            padding: '12px 24px',
            borderRadius: '8px',
            '&.MuiButton-contained': {
              backgroundColor: '#0056b3',
              color: '#ffffff',
              '&:hover': {
                backgroundColor: '#004494',
              },
              '&:disabled': {
                backgroundColor: '#e0e0e0',
                color: '#9e9e9e',
              },
            },
            '&.MuiButton-outlined': {
              borderColor: '#0056b3',
              color: '#0056b3',
              '&:hover': {
                backgroundColor: 'rgba(0, 86, 179, 0.04)',
                borderColor: '#004494',
              },
              '&:disabled': {
                borderColor: '#e0e0e0',
                color: '#9e9e9e',
              },
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiInputBase-root': {
              color: '#333333',
              backgroundColor: '#ffffff',
              borderRadius: '8px',
            },
            '& .MuiInputLabel-root': {
              color: '#555555',
              fontSize: '14px',
              '&.Mui-focused': {
                color: '#0056b3',
              },
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#cccccc',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#0056b3',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#0056b3',
            },
            '& .MuiInputBase-input::placeholder': {
              color: '#aaaaaa',
              fontSize: '14px',
            },
          },
        },
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
