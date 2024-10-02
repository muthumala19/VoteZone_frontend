import React from 'react';
import { Grid, Button, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import StyledCardLayout from './StyledCardLayout';

const StyledButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5),
  width: '100%',
  textAlign: 'center',
}));

interface ElectionActionsProps {
  electionId: number;
  onSendEmails: () => void;
  onEditElection: () => void;
  onDeleteElection: () => void;
}

const ElectionActions: React.FC<ElectionActionsProps> = ({
  electionId,
  onSendEmails,
  onEditElection,
  onDeleteElection,
}) => {
  return (
    <StyledCardLayout key={electionId} title="Election Actions">
      <Grid container spacing={2} pt={1}>
        <Grid item xs={12} sm={12} md={4}>
          <Tooltip title="Send Emails to Electors">
            <StyledButton
              variant="contained"
              color="primary"
              startIcon={<EmailIcon />}
              onClick={onSendEmails}
            >
              Send Emails
            </StyledButton>
          </Tooltip>
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <Tooltip title="Edit Election Details">
            <StyledButton
              variant="outlined"
              color="secondary"
              startIcon={<EditIcon />}
              onClick={onEditElection}
            >
              Edit Election
            </StyledButton>
          </Tooltip>
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <Tooltip title="Delete Election">
            <StyledButton
              variant="contained"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={onDeleteElection}
            >
              Delete Election
            </StyledButton>
          </Tooltip>
        </Grid>
      </Grid>
    </StyledCardLayout>
  );
};

export default ElectionActions;
