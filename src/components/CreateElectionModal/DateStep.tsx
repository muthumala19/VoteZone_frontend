import React from 'react';
import { Button, DialogActions, DialogContent, DialogContentText, TextField } from '@mui/material';

const DateStep: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <>
      <DialogContent>
        <DialogContentText>Select the Date You want to hold the Election.</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="date"
          label="Date"
          type="date"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onBack}>
          Back
        </Button>
        <Button variant="outlined" onClick={() => alert('Final Step')}>
          Next
        </Button>
      </DialogActions>
    </>
  );
};

export default DateStep;
