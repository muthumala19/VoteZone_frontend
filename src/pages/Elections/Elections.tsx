import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import ElectionsLayout from '../../components/ElectionsLayout/ElectionsLayout';
import { Divider, Tooltip } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

export default function Elections() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const filteredElections = electionData.filter((election) => {
    return (
      election.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === '' || election.status === statusFilter)
    );
  });

  const statusIcon = (status) => {
    return status === 'Ongoing' ? (
      <CheckCircleIcon sx={{ color: '#4caf50', marginRight: 1 }} />
    ) : (
      <HourglassBottomIcon sx={{ color: '#ff9800', marginRight: 1 }} />
    );
  };

  const progressBar = (progress) => {
    return (
      <Box mt={2}>
        <LinearProgress variant="determinate" value={progress} />
        <Typography variant="body2" color="text.secondary" align="right">
          {progress}% completed
        </Typography>
      </Box>
    );
  };

  // Helper to calculate if a date is within this week or last month
  const isThisWeek = (date) => {
    const now = new Date();
    const electionDate = new Date(date);
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(now.getDate() - 7);
    return electionDate >= oneWeekAgo && electionDate <= now;
  };

  const isLastMonth = (date) => {
    const now = new Date();
    const electionDate = new Date(date);
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(now.getMonth() - 1);
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(now.getDate() - 7);
    return electionDate >= oneMonthAgo && electionDate < oneWeekAgo;
  };

  // Function to render election cards
  const renderElections = (elections) => (
    <Grid container spacing={2} mt={0.5}>
      {elections.map((election) => (
        <Grid item xs={12} sm={6} md={4} key={election.title}>
          <Card
            sx={{
              backgroundColor: '#ffffff',
              borderRadius: 2,
              display: 'flex',
              height: '245px', // Fixed card height for consistency
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)', // Shadow effect for modern look
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 6px 30px rgba(0,0,0,0.15)',
              },
            }}
          >
            <CardActionArea
              sx={{
                flexGrow: 1,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
              }}
            >
              <CardContent>
                <Box display="flex" alignItems="center">
                  {statusIcon(election.status)}
                  <Typography
                    variant="h6"
                    sx={{ color: election.status === 'Ongoing' ? '#4caf50' : '#ff9800' }}
                  >
                    {election.title}
                  </Typography>
                </Box>

                {/* Tooltip for long details */}
                <Tooltip title={election.details.length > 100 ? election.details : ''}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginTop: 1, marginBottom: 1 }}
                  >
                    {election.details.length > 100
                      ? `${election.details.substring(0, 100)}...`
                      : election.details}
                  </Typography>
                </Tooltip>

                <Typography variant="body2" color="text.secondary">
                  <strong>Start Date:</strong> {election.startDate}
                </Typography>

                {/* Election Progress */}
                {election.status === 'Ongoing' && progressBar(election.progress)}

                <Box mt={2}>
                  <Chip
                    label={election.status}
                    color={election.status === 'Ongoing' ? 'success' : 'default'}
                    variant="outlined"
                  />
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  const thisWeekElections = electionData.filter((election) => isThisWeek(election.startDate));

  const lastMonthElections = electionData.filter((election) => isLastMonth(election.startDate));

  return (
    <ElectionsLayout>
      <Box sx={{ padding: 2 }} width={{ md: '100%', lg: '95%' }}>
        {/* Filter section */}
        <Grid container spacing={2} alignItems="center" sx={{ marginBottom: 2 }}>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="Search Elections"
              variant="outlined"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select value={statusFilter} label="Status" onChange={handleFilterChange}>
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Ongoing">Ongoing</MenuItem>
                <MenuItem value="Upcoming">Upcoming</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={4} sx={{ textAlign: 'right' }}>
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </Grid>
        </Grid>
        <Divider />

        {/* Show all filtered elections together when filtering */}
        {searchQuery || statusFilter ? (
          renderElections(filteredElections)
        ) : (
          <>
            {/* Section for "This Week" */}
            <Typography variant="h5" sx={{ marginTop: 2, marginBottom: 1 }}>
              This Week
            </Typography>
            {thisWeekElections.length > 0 ? (
              renderElections(thisWeekElections)
            ) : (
              <Typography>No elections this week.</Typography>
            )}

            {/* Section for "Last Month" */}
            <Typography variant="h5" sx={{ marginTop: 3, marginBottom: 1 }}>
              Last Month
            </Typography>
            {lastMonthElections.length > 0 ? (
              renderElections(lastMonthElections)
            ) : (
              <Typography>No elections last month.</Typography>
            )}
          </>
        )}
      </Box>
    </ElectionsLayout>
  );
}

const electionData = [
  {
    title: 'Presidential Election',
    details:
      'Electing the next President of the country. This is a critical moment for the future of our nation, and every vote counts.',
    startDate: '2024-10-15',
    status: 'Ongoing',
    progress: 80, 
  },
  {
    title: 'Presidential Election',
    details:
      'Electing the next President of the country. This is a critical moment for the future of our nation, and every vote counts.',
    startDate: '2024-10-15',
    status: 'Ongoing',
    progress: 80, 
  },
  {
    title: 'Presidential Election',
    details:
      'Electing the next President of the country. This is a critical moment for the future of our nation, and every vote counts.',
    startDate: '2024-10-15',
    status: 'Ongoing',
    progress: 80, 
  },
  {
    title: 'Presidential Election',
    details:
      'Electing the next President of the country. This is a critical moment for the future of our nation, and every vote counts.',
    startDate: '2024-10-15',
    status: 'Ongoing',
    progress: 80, 
  },
  {
    title: 'City Council Election',
    details: 'Selecting new members for the city council to represent local communities.',
    startDate: '2024-09-01',
    status: 'Upcoming',
    progress: 0,
  },
  {
    title: 'Community Leader Election',
    details:
      'Voting for the next community leaders who will work on improving the neighborhood conditions and address key issues.',
    startDate: '2024-10-20',
    status: 'Upcoming',
    progress: 0,
  },
  {
    title: 'Local Referendum',
    details:
      'A referendum for local governance issues. Make sure to cast your vote to influence decisions on important local policies.',
    startDate: '2024-11-15',
    status: 'Upcoming',
    progress: 0,
  },
];
