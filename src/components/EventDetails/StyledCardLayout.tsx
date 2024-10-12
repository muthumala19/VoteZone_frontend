import { Divider, Paper, Typography } from '@mui/material';
import styled from 'styled-components';

export const StyledPaper = styled(Paper)({
  padding: 24,
  borderRadius: 8,
  boxShadow: '0 12px 12px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  '@media (max-width: 600px)': {
    padding: 16,
    gap: 8,
  },
});

const StyledCardLayout = ({ children, title }: { children: React.ReactNode; title: string }) => {
  return (
    <StyledPaper>
      <Typography variant="h5" component="h2" gutterBottom>
        {title}
      </Typography>
      <Divider sx={{ boxShadow: '0 12px 12px rgba(0, 0, 0, 0.1)' }} />
      {children}
    </StyledPaper>
  );
};

export default StyledCardLayout;
