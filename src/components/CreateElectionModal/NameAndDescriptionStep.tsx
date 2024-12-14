import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import DialogContentText from '@mui/material/DialogContentText';
import Box from '@mui/material/Box';

interface Props {
  goBack: () => void;
  goNext: () => void;
}

const NameAndDescriptionStep: React.FC<Props> = ({ goBack, goNext }) => {
  return (
    <Box>
      <DialogTitle>Create Election</DialogTitle>
      <DialogContent>
        <DialogContentText>Enter the name and description of the election.</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Election Name"
          type="text"
          fullWidth
        ></TextField>
        <TextField
          margin="dense"
          id="description"
          label="Description"
          type="text"
          fullWidth
        ></TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={goBack}>Back</Button>
        <Button onClick={goNext}>Next</Button>
      </DialogActions>
    </Box>
  );
};

export default NameAndDescriptionStep;
