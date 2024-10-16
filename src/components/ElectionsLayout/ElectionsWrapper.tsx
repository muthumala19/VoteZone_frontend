import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import styled from 'styled-components';

const StyledWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
});
interface IMainContentProps {
  children: ReactNode;
}

const ElectionsWrapper = ({ children }: IMainContentProps) => {
  return (
    <Box
      component="main"
      p={{ xs: 0, sm: 0.5 }}
      mt={{ xs: 4, sm: 8 }}
      sx={{
        width: { sm: '100%' },
        transition: 'all 0.3s ease',
      }}
    >
      <StyledWrapper>{children}</StyledWrapper>
    </Box>
  );
};

export default ElectionsWrapper;
