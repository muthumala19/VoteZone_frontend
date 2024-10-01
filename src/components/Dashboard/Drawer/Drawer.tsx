import React from 'react';
import { Drawer as MuiDrawer, List as MuiList, Box, Divider, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PeopleIcon from '@mui/icons-material/People';
import HelpIcon from '@mui/icons-material/Help';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PublicIcon from '@mui/icons-material/Public';
import DrawerListItem from './DrawerItem';

export const drawerItems = [
  { id: 1, icon: <ListAltIcon />, text: 'Election Data', tooltipTitle: 'Election Data' },
  { id: 2, icon: <PeopleIcon />, text: 'Voters', tooltipTitle: 'Voters' },
  { id: 3, icon: <HelpIcon />, text: 'Election Questions', tooltipTitle: 'Election Questions' },
  { id: 4, icon: <AssessmentIcon />, text: 'Reports', tooltipTitle: 'Reports' },
  { id: 5, icon: <PublicIcon />, text: 'Election Portal', tooltipTitle: 'Election Portal' },
];

const Drawer = styled(MuiDrawer)(
  ({
    isCollapsed,
    collapsedDrawerWidth,
    drawerWidth,
  }: {
    isCollapsed: boolean;
    collapsedDrawerWidth: number;
    drawerWidth: number;
  }) => ({
    '& .MuiDrawer-paper': {
      display: 'flex',
      boxSizing: 'border-box',
      width: isCollapsed ? collapsedDrawerWidth : drawerWidth,
      transition: 'all 0.3s ease',
    },
  })
);

const StyledBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  padding: '16px 0',
});

const List = styled(MuiList)({
  padding: 0,
});

interface DrawerComponentProps {
  isMobile: boolean;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
  isCollapsed: boolean;
  handleCollapseToggle: () => void;
  drawerWidth: number;
  collapsedDrawerWidth: number;
  selectedPage: number;
  setSelectedPage: (_value: number) => void;
}
const DrawerComponent = ({
  isMobile,
  mobileOpen,
  handleDrawerToggle,
  isCollapsed,
  handleCollapseToggle,
  drawerWidth,
  collapsedDrawerWidth,
  selectedPage,
  setSelectedPage,
}: DrawerComponentProps) => {
  console.log('DrawerComponent', selectedPage);
  const drawer = (
    <Box>
      <StyledBox>
        {!isCollapsed ? (
          <Typography variant="h6" noWrap>
            Vote Zone
          </Typography>
        ) : (
          <Typography variant="h6" noWrap>
            VZ
          </Typography>
        )}
      </StyledBox>
      <Divider />
      <List>
        {drawerItems.map((item) => (
          <DrawerListItem
            key={item.text}
            icon={item.icon}
            text={item.text}
            isCollapsed={isCollapsed}
            onClick={() => setSelectedPage(item.id)}
            tooltipTitle={item.tooltipTitle}
            isSelected={selectedPage === item.id}
          />
        ))}
        <DrawerListItem
          icon={!isCollapsed ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          text="Hide"
          isCollapsed={isCollapsed}
          onClick={handleCollapseToggle}
          isSelected={false}
        />
      </List>
    </Box>
  );

  return (
    <StyledBox
      className="nav"
      sx={{
        width: { sm: isCollapsed ? collapsedDrawerWidth : drawerWidth },
        flexShrink: { sm: 0 },
      }}
    >
      <Drawer
        isCollapsed={isCollapsed}
        collapsedDrawerWidth={collapsedDrawerWidth}
        drawerWidth={drawerWidth}
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isMobile ? mobileOpen : true}
        onClose={handleDrawerToggle}
        sx={{
          width: isCollapsed ? collapsedDrawerWidth : drawerWidth,
        }}
      >
        {drawer}
      </Drawer>
    </StyledBox>
  );
};

export default DrawerComponent;
