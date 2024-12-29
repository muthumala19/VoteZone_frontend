import React from 'react';
import { Button, DialogActions, DialogContent, DialogContentText, TextField } from '@mui/material';

type Props = {
  onClose: () => void;
};

const NameAndDescriptionStep: React.FC<Props & { onNext: () => void }> = ({ onClose, onNext }) => {
  return (
    <>
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
        <Button variant="outlined" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="outlined" onClick={onNext}>
          Next
        </Button>
      </DialogActions>
    </>
  );
};

export default NameAndDescriptionStep;
