import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Enum for Election Status
export enum ElectionStatus {
  UPCOMING = 'UPCOMING',
  ONGOING = 'ONGOING',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

// Election Model
export interface Election {
  electionId: number;
  electionName: string;
  description?: string;
  startDateTime?: string;
  endDateTime?: string;
  status: ElectionStatus;
  isAnonymous: boolean;
  createdDateTime?: Date;
  updatedDateTime?: Date;
  createdBy: number;
  registeredNumberOfVotes?: number;
  eligibleVoters?: string[];
  candidates?: Candidate[];
}

export interface Candidate {
  candidateId: number;
  electionId: number;
  name: string;
  biography?: string;
  createdBy: number;
  createdDateTime?: Date;
  updatedDateTime?: Date;
  imageUrl?: string;
  votes?: Vote[];
}

export interface Vote {
  voteId: number;
  voterId: number;
  electionId: number;
  firstChoiceCandidateId?: number;
  secondChoiceCandidateId?: number;
  thirdChoiceCandidateId?: number;
  timestamp?: Date;
  ipAddress?: string;
  userAgent?: string;
}

export interface ElectionState {
  elections: Election[];
  electionsLoading: boolean;
  error: string | null;
}

const initialState: ElectionState = {
  elections: [
    {
      electionId: 1,
      electionName: 'Election 1',
      description: 'Election 1 Description',
      startDateTime: new Date().toISOString(),
      endDateTime: new Date().toISOString(),
      status: ElectionStatus.UPCOMING,
      isAnonymous: true,
      createdBy: 1,
      registeredNumberOfVotes: 0,
      eligibleVoters: ['User 1', 'User 2'],
    },
  ],
  electionsLoading: false,
  error: null,
};

const electionSlice = createSlice({
  name: 'election',
  initialState,
  reducers: {
    fetchElections(state, _action: PayloadAction<{ userId: number }>) {
      state.electionsLoading = true;
      state.error = null;
    },
    fetchElectionsSuccess(state, action: PayloadAction<Election[]>) {
      console.log('fetchElectionsSuccess', action.payload);
      state.elections = action.payload;

      state.electionsLoading = false;
      state.error = null;
      console.log('state.elections', state.elections);
    },
    fetchElectionsFailure(state, action: PayloadAction<string>) {
      state.electionsLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchElections, fetchElectionsSuccess, fetchElectionsFailure } =
  electionSlice.actions;
export default electionSlice.reducer;
