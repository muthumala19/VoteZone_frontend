import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, useTheme, Theme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';

const StyledAppbar = styled(AppBar)({
  transition: 'all 0.3s ease',
  position: 'fixed',
});

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  background: `linear-gradient(90deg, ${theme.palette?.primary?.main} 30%, ${theme.palette?.primary?.dark} 90%)`,
}));

const AppBarComponent = ({
  isMobile,
  isCollapsed,
  drawerWidth,
  collapsedDrawerWidth,
  handleDrawerToggle,
}: {
  isMobile: boolean;
  isCollapsed: boolean;
  drawerWidth: number;
  collapsedDrawerWidth: number;
  handleDrawerToggle: () => void;
}) => {
  const theme = useTheme();
  return (
    <StyledAppbar
      sx={{
        width: { sm: `calc(100% - ${isCollapsed ? collapsedDrawerWidth : drawerWidth}px)` },
        ml: { sm: `${isCollapsed ? collapsedDrawerWidth : drawerWidth}px` },
      }}
    >
      <StyledToolbar theme={theme}>
        {isMobile && (
          <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="body1" noWrap>
          Dashboard
        </Typography>
      </StyledToolbar>
    </StyledAppbar>
  );
};

export default AppBarComponent;
