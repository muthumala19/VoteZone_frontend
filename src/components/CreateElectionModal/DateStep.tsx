import React from 'react';
import { Button, DialogActions, DialogContent, DialogContentText, TextField } from '@mui/material';

const DateStep: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <>
      <DialogContent>
        <DialogContentText>Select the Date and Time for the Election.</DialogContentText>
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
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <TextField
            margin="dense"
            id="start-time"
            label="Start Time"
            type="time"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
          <TextField
            margin="dense"
            id="end-time"
            label="End Time"
            type="time"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
        </div>
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
