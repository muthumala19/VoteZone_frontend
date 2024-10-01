import React from 'react';
import { Grid } from '@mui/material';
import DashboardLayout from '../../components/Dashboard/Dashboard';
import ElectionChecklist, { Status } from '../../components/EventDetails/ElectionChecklist';
import ElectionOverview from '../../components/EventDetails/ElectionOverview';
import TitleWrapper from '../../components/Dashboard/PageContent/TitleWrapper/TitleWrapper';

const ElectionDetails = () => {
  const checklistItems = [
    { id: 1, status: Status.CHECK, message: 'Election details & dates are added.' },
    {
      id: 2,
      status: Status.WARNING,
      message: 'No electors are added to this election.',
      link: '#manage-electors',
    },
    {
      id: 3,
      status: Status.WARNING,
      message: 'No questions are added to the ballot.',
      link: '#manage-questions',
    },
    {
      id: 5,
      status: Status.HOURGLASS,
      message: 'Election is not finalized.',
      link: '#finalize-election',
    },
    {
      id: 6,
      status: Status.HOURGLASS,
      message: 'Voting will begin on the start date once the election has been finalized.',
    },
  ];

  return (
    <DashboardLayout>
      <Grid display={'flex'} flexDirection={'column'}>
        <TitleWrapper
          id="1"
          name="Election Name"
          status="Draft"
          startTime="2023-09-29 23:59:00"
          isDraft={true}
        />
        <Grid container spacing={3} padding={{ xs: 1, sm: 2 }} display={'flex'}>
          <Grid item xs={12} md={6}>
            <ElectionOverview
              electionId={1}
              electionName="Election Name"
              startDate="2023-09-29"
              endDate="2023-09-30"
              badEmails={0}
              questions={999999999999}
              electors={999999999999}
              votes={999999999999}
              url={'https://www.example.com'}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ElectionChecklist title="Checklist" checklistItems={checklistItems} />
          </Grid>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default ElectionDetails;
