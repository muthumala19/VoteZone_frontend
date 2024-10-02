import React from 'react';
import { Avatar, Box, Divider, Menu, MenuItem, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import styled from 'styled-components';

interface ProfileMenuProps {
  anchorEl: null | HTMLElement;
  isMenuOpen: boolean;
  handleProfileMenuClose: () => void;
}

const StyledMenuItem = styled(MenuItem)({
  minWidth: '200px',
  gap: '5px',
});
const StyledTypography = styled(Typography)({
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
});

const ProfileMenu: React.FC<ProfileMenuProps> = ({
  anchorEl,
  isMenuOpen,
  handleProfileMenuClose,
}) => {
  const userEmail = 'user@example.com';
  const userProfileImage = '';
  return (
    <Menu
      id="profile-menu"
      anchorEl={anchorEl}
      sx={{ mt: '40px' }}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleProfileMenuClose}
    >
      <Box display="flex" flexDirection="column" alignItems="center" p={2} mb={1}>
        <Avatar
          alt="User Profile"
          src={userProfileImage} // If available, otherwise use default
          sx={{ width: 56, height: 56 }}
        />
        <StyledTypography variant="body1" sx={{ mt: 1 }}>
          {userEmail}
        </StyledTypography>
      </Box>

      <Divider />

      <StyledMenuItem onClick={handleProfileMenuClose}>Profile</StyledMenuItem>
      <StyledMenuItem onClick={handleProfileMenuClose}>Settings</StyledMenuItem>
      <StyledMenuItem onClick={handleProfileMenuClose}>
        Logout
        <LogoutIcon />
      </StyledMenuItem>
    </Menu>
  );
};

export default ProfileMenu;
