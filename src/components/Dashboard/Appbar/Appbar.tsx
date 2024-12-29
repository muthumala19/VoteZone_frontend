import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useTheme,
  Avatar,
  Menu,
  MenuItem,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styled from 'styled-components';
import { Logout } from '@mui/icons-material';
import ProfileMenu from './ProfileMenu';

const StyledAppbar = styled(AppBar)({
  transition: 'all 0.3s ease',
  position: 'fixed',
});

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  background: `linear-gradient(90deg, ${theme.palette?.primary?.main} 30%, ${theme.palette?.primary?.dark} 90%)`,
  display: 'flex',
  justifyContent: 'space-between',
}));

const StyledMenuItem = styled(MenuItem)({
  minWidth: '200px',
  gap: '5px',
});

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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const isMenuOpen = Boolean(anchorEl);

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
        <Box>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls="profile-menu"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <Avatar sx={{ bgcolor: 'secondary.dark' }}>
              <AccountCircleIcon sx={{ fontSize: '2.5rem' }} />
            </Avatar>
          </IconButton>
        </Box>
        <ProfileMenu
          anchorEl={anchorEl}
          isMenuOpen={isMenuOpen}
          handleProfileMenuClose={handleProfileMenuClose}
        />
      </StyledToolbar>
    </StyledAppbar>
  );
};

export default AppBarComponent;
