import { Box, ListItemIcon, ListItemText, Tooltip } from '@mui/material';
import styled from 'styled-components';

const ListItem = styled('button')<{ isSelected: boolean }>(({ isSelected }) => ({
  height: '56px',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  cursor: 'pointer',
  border: 'none',
  width: '100%',
  background: isSelected ? '#f5f5f5' : 'none',
  '&:hover': {
    backgroundColor: '#f5f5f5',
  },
  '&.Mui-selected': {
    backgroundColor: '#f5f5f5',
  },
}));

const StyledListItemIcon = styled(ListItemIcon)({
  display: 'flex',
  justifyContent: 'center',
});

const StyledListItemText = styled(ListItemText)({
  textAlign: 'left',
  paddingLeft: '8px',
});

const StyledListItemWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const DrawerListItem = ({
  icon,
  text,
  isCollapsed,
  onClick,
  tooltipTitle,
  isSelected,
}: {
  icon: React.ReactElement;
  text: string;
  isCollapsed: boolean;
  onClick: () => void;
  tooltipTitle?: string;
  isSelected: boolean;
}) => (
  <Tooltip title={tooltipTitle} placement="right" disableHoverListener={!isCollapsed}>
    <ListItem onClick={onClick} isSelected={isSelected}>
      <StyledListItemWrapper>
        <StyledListItemIcon>{icon}</StyledListItemIcon>
      </StyledListItemWrapper>
      {!isCollapsed && <StyledListItemText primary={text} />}
    </ListItem>
  </Tooltip>
);

export default DrawerListItem;
