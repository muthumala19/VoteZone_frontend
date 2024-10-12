import { gql } from '@apollo/client';

export const GET_ELECTIONS = gql`
  query GetElections {
    getElections {
      electionId
      electionName
      description
      startDateTime
      endDateTime
      status
      isAnonymous
      createdDateTime
      updatedDateTime
      createdBy
      registeredNumberOfVotes
      eligibleVoters
    }
  }
`;
