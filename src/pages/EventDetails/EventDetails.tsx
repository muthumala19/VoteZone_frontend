import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import DashboardLayout from '../../components/Dashboard/DashboardLayout';
import ElectionChecklist, { Status } from '../../components/EventDetails/ElectionChecklist';
import ElectionOverview from '../../components/EventDetails/ElectionOverview';
import TitleWrapper from '../../components/Dashboard/PageContent/TitleWrapper/TitleWrapper';
import ElectionActions from '../../components/EventDetails/ElectionActions';
import EditElectionModal from './EditElectionModal';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchElections } from '../../redux/election/slice';

const ElectionDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [electionData, setElectionData] = useState({
    electionName: 'Election Name',
    startDate: '2023-09-29',
    endDate: '2023-09-30',
  });

  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveElection = (updatedData: {
    electionName: string;
    startDate: string;
    endDate: string;
  }) => {
    setElectionData(updatedData);
  };

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

  const election = useAppSelector((state) => state.election.elections[0]);
  const electionsLoading = useAppSelector((state) => state.election.electionsLoading);

  useEffect(() => {
    dispatch(fetchElections({ userId: 1 }));
  }, [dispatch]);

  if (electionsLoading) {
    return <div>Loading...</div>;
  }
  console.log('election', election);

  return (
    <DashboardLayout>
      <Grid display={'flex'} flexDirection={'column'}>
        <TitleWrapper
          id={election.electionId}
          name={election.electionName}
          status={election.status}
          startTime={election.startDateTime}
          isDraft={true}
        />
        <Grid container spacing={3} padding={{ xs: 1, sm: 2 }} display={'flex'}>
          <Grid item xs={12} md={6}>
            <ElectionOverview
              electionId={1}
              electionName={election.electionName}
              startDate={election.startDateTime}
              endDate={election.endDateTime}
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
          <Grid item xs={12} md={8}>
            <ElectionActions
              electionId={1}
              onSendEmails={() => {}}
              onEditElection={() => setIsModalOpen(true)}
              onDeleteElection={() => {}}
            />
          </Grid>
        </Grid>
      </Grid>
      <EditElectionModal
        open={isModalOpen}
        onClose={handleCloseModal}
        electionData={electionData}
        onSave={handleSaveElection}
      />
    </DashboardLayout>
  );
};

export default ElectionDetails;
