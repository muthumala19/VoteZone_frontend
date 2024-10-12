import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import styled from 'styled-components';

const StyledWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
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
      mt={{ xs: 4, sm: 8 }}
      sx={{
        width: { sm: `calc(100% - ${isCollapsed ? collapsedDrawerWidth : drawerWidth}px)` },
        flexGrow: 1,
        transition: 'all 0.3s ease',
      }}
    >
      <StyledWrapper>{children}</StyledWrapper>
    </Box>
  );
};

export default MainContent;
