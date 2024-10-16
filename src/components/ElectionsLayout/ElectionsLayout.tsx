import React, { useState } from 'react';
import { Box, CssBaseline, useTheme, useMediaQuery } from '@mui/material';
import styled from 'styled-components';
import AppBarComponent from '../Dashboard/Appbar/Appbar';
import ElectionsWrapper from './ElectionsWrapper';

const DashboardWrapper = styled(Box)({
  display: 'flex',
  background: 'linear-gradient(45deg, rgba(63, 81, 181, 0.1) 30%, rgba(48, 63, 159, 0.2) 90%)',
  minHeight: '100vh',
  '@media (max-width: 600px)': {
    display: 'block',
  },
});

interface IProps {
  children: React.ReactNode;
}

const ElectionsLayout = ({ children }: IProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <DashboardWrapper>
      <CssBaseline />
      <AppBarComponent
        isMobile={isMobile}
        isCollapsed={true}
        drawerWidth={0}
        collapsedDrawerWidth={0}
        handleDrawerToggle={handleDrawerToggle}
      />
      <ElectionsWrapper>{children}</ElectionsWrapper>
    </DashboardWrapper>
  );
};

export default ElectionsLayout;
