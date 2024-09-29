import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

interface IThemeWrapperProps {
  children: React.ReactNode;
}

export default function ThemeWrapper({ children }: IThemeWrapperProps) {
  const theme = createTheme({
    typography: {
      fontFamily: "Satoshi",
      button: {
        fontFamily: "Satoshi",
        fontWeight: 500,
        fontSize: "15px",
        lineHeight: "20px",
      },
    },
    palette: {
      primary: {
        main: "#3ABEF9", 
        dark: "#5794FF", 
        light: "#A7E6FF", 
      },
      secondary: {
        main: "#A7E6FF", 
        dark: "#3ABEF9",
        light: "#A7E6FF", 
      },
      text: {
        primary: "#fffff", 
        secondary: "#3ABEF9", 
        disabled: "#A7E6FF", 
      },
      warning: {
        main: "#E16162", 
      },
      background: {
        default: "#FFFFFF",
        paper: "#F5F5F5", 
      },
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableRipple: true,
          disableElevation: true,
          style: {
            textTransform: "capitalize",
            padding: "10px 32px",
            borderRadius: "50px",
          },
        },
        styleOverrides: {},
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
