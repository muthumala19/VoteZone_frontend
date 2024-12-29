import styled from 'styled-components';
import { Button } from '@mui/material';
import { useState } from 'react';
import CreateElectionModal from '../CreateElectionModal/CreateElection';

// Styles
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url('/assets/homeBackground.jpg') no-repeat center center;
  background-size: cover;
  min-height: 99vh;
  text-align: center;
  color: white;
`;

const HomeTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 600;
  margin-bottom: 20px;
`;

const HomeSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
  width: 60%;
  line-height: 1.6;
`;

const HomeButton = styled.button`
  padding: 12px 30px;
  font-size: 1.2rem;
  color: black;
  background-color: #a7e6ff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #3572ef;
  }

  svg {
    margin-left: 10px;
  }
`;

const HomePage = () => {
  const [createElection, setCreateElection] = useState(false);
  return (
    <HomeContainer>
      <HomeTitle>Online Election Perfection</HomeTitle>
      <HomeSubtitle>
        VoteZone is a web-based online voting system that helps you manage your elections easily and
        securely.
      </HomeSubtitle>
      <Button variant="contained" color="primary" onClick={() => setCreateElection(true)}>
        Try Now
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="20px"
          height="20px"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Button>
      {createElection && <CreateElectionModal />}
    </HomeContainer>
  );
};

export default HomePage;
