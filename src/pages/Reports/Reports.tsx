import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import TitleWrapper from '../../components/Dashboard/PageContent/TitleWrapper/TitleWrapper';
import DashboardLayout from '../../components/Dashboard/DashboardLayout';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Tooltip,
  Legend
);

const Reports = () => {
  const votesData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Votes Over Time',
        data: [300, 500, 400, 700, 600, 800],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const questionsData = {
    labels: ['Election 1', 'Election 2', 'Election 3'],
    datasets: [
      {
        label: 'Questions Per Election',
        data: [5, 7, 3],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        borderColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <DashboardLayout>
      <Grid display={'flex'} flexDirection={'column'}>
        <TitleWrapper
          id={1}
          name="Election Name"
          status="Draft"
          startTime="2023-09-29 23:59:00"
          isDraft={true}
        />
        <Grid container spacing={3} p={2}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6" gutterBottom>
                Votes Over Time
              </Typography>
              <Line data={votesData} />
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6" gutterBottom>
                Questions Per Election
              </Typography>
              <Bar data={questionsData} />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default Reports;
