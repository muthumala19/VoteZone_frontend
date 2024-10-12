import React, { useState } from 'react';
import { Box, CssBaseline, useTheme, useMediaQuery } from '@mui/material';
import AppBarComponent from './Appbar/Appbar';
import DrawerComponent from './Drawer/Drawer';
import MainContent from './PageContent/PageContent';
import styled from 'styled-components';

const drawerWidth = 240;
const collapsedDrawerWidth = 70;

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

const DashboardLayout = ({ children }: IProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedPage, setSelectedPage] = useState<number>(1);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleCollapseToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <DashboardWrapper>
      <CssBaseline />
      <AppBarComponent
        isMobile={isMobile}
        isCollapsed={isCollapsed}
        drawerWidth={drawerWidth}
        collapsedDrawerWidth={collapsedDrawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />
      <DrawerComponent
        isMobile={isMobile}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        isCollapsed={isCollapsed}
        handleCollapseToggle={handleCollapseToggle}
        drawerWidth={drawerWidth}
        collapsedDrawerWidth={collapsedDrawerWidth}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <MainContent
        isCollapsed={isCollapsed}
        drawerWidth={drawerWidth}
        collapsedDrawerWidth={collapsedDrawerWidth}
      >
        {children}
      </MainContent>
    </DashboardWrapper>
  );
};

export default DashboardLayout;
