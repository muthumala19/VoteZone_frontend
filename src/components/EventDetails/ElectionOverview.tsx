import React from 'react';
import { Grid, Paper, Typography, Box, Divider, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import PeopleIcon from '@mui/icons-material/People';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { Link } from 'react-router-dom';
import StyledCardLayout from './StyledCardLayout';
const StyledGridItem = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
  width: '100%',
  height: '100%',
  background: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  gap: theme.spacing(1),
}));

const StyledTypography = styled(Typography)({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

interface ElectionOverviewProps {
  electionId: number;
  electionName: string;
  startDate: string;
  endDate: string;
  badEmails: number;
  questions: number;
  electors: number;
  votes: number;
  url: string;
}

const ElectionOverview: React.FC<ElectionOverviewProps> = ({
  electionId,
  electionName,
  startDate,
  endDate,
  questions,
  electors,
  votes,
  url,
}) => {
  return (
    <StyledCardLayout key={electionId} title="Election Overview">
      <StyledTypography variant="h6">{electionName}</StyledTypography>
      <Box
        display={{ xs: 'block', md: 'flex' }}
        alignItems="center"
        gap={1}
        sx={{ width: '100%', overflow: 'hidden', whiteSpace: 'nowrap' }}
      >
        <Typography variant="h6">Election Portal Url:</Typography>
        <Link to={url}>{url}</Link>
      </Box>
      <Grid container spacing={3} alignItems="center" pb={1}>
        <Grid item xs={12} sm={12} md={6}>
          <Box display={'flex'} alignItems="center" gap={1}>
            <DateRangeIcon color="primary" />
            <Typography variant="body1">
              <strong>Start Date:</strong> {startDate}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <Box display={'flex'} alignItems="center" gap={1}>
            <DateRangeIcon color="primary" />
            <Typography variant="body1">
              <strong>End Date:</strong> {endDate}
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={1}>
        <StyledGridItem item xs={12} sm={6} md={4}>
          <StyledBox display="flex" alignItems="center" m={1}>
            <QuestionAnswerIcon color="primary" />
            <Tooltip title={`Questions: ${questions}`}>
              <StyledTypography variant="body1">
                Questions <strong>{questions}</strong>
              </StyledTypography>
            </Tooltip>
          </StyledBox>
        </StyledGridItem>
        <StyledGridItem item xs={12} sm={6} md={4}>
          <StyledBox display="flex" alignItems="center" m={1}>
            <PeopleIcon color="primary" />
            <Tooltip title={`Electors: ${electors}`}>
              <StyledTypography variant="body1">
                Electors <strong>{electors}</strong>
              </StyledTypography>
            </Tooltip>
          </StyledBox>
        </StyledGridItem>
        <StyledGridItem item xs={12} sm={6} md={4}>
          <StyledBox display="flex" alignItems="center" m={1}>
            <HowToVoteIcon color="primary" />
            <Tooltip title={`Votes: ${votes}`}>
              <StyledTypography variant="body1">
                Votes <strong>{votes}</strong>
              </StyledTypography>
            </Tooltip>
          </StyledBox>
        </StyledGridItem>
      </Grid>
    </StyledCardLayout>
  );
};

export default ElectionOverview;
