import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import styled from 'styled-components';

const StyledWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minHeight: '100vh',
  background: 'linear-gradient(45deg, rgba(63, 81, 181, 0.1) 30%, rgba(48, 63, 159, 0.2) 90%)',
});

interface IMainContentProps {
  isCollapsed: boolean;
  drawerWidth: number;
  collapsedDrawerWidth: number;
  children: ReactNode;
}

const MainContent = ({
  isCollapsed,
  drawerWidth,
  collapsedDrawerWidth,
  children,
}: IMainContentProps) => {
  return (
    <Box
      component="main"
      p={{ xs: 0, sm: 0.5 }}
      sx={{
        width: { sm: `calc(100% - ${isCollapsed ? collapsedDrawerWidth : drawerWidth}px)` },
        flexGrow: 1,
        transition: 'all 0.3s ease',
        marginTop: '60px',
        background: (theme) => theme.palette.background.default,
      }}
    >
      <StyledWrapper>{children}</StyledWrapper>
    </Box>
  );
};

export default MainContent;
