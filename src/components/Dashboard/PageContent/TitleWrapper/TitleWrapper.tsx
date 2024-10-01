import { Box, Chip, Grid2, Typography } from '@mui/material';

interface ITitleWrapperProps {
  id: string;
  name: string;
  status: string;
  startTime: string;
  isDraft: boolean;
}

const TitleWrapper = ({ id, name, status, startTime, isDraft }: ITitleWrapperProps) => {
  return (
    <Box
      key={id}
      margin={{ xs: '4px 8px 0 8px', sm: '16px 16px 0 16px' }}
      sx={{
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'row',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        p: 2,
      }}
    >
      <Box
        flex={4}
        justifyContent={'flex-start'}
        flexDirection={'row'}
        display={'flex'}
        alignItems={'center'}
        gap={2}
      >
        <Chip label={name} />
        <Typography variant="body1">Election Details</Typography>
      </Box>
      <Box
        flex={4}
        justifyContent={'flex-end'}
        flexDirection={'row'}
        display={'flex'}
        alignItems={'center'}
        gap={2}
        sx={{
          '@media (max-width: 768px)': {
            display: 'none',
          },
        }}
      >
        <Typography variant="h5">{isDraft ? 'Draft' : status}</Typography>
        <Typography variant="body1">{startTime}</Typography>
      </Box>
    </Box>
  );
};

export default TitleWrapper;
