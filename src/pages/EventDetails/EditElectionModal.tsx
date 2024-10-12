import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import CustomModal from '../../components/CustomModal/CustomModal';

interface EditElectionModalProps {
  open: boolean;
  onClose: () => void;
  electionData: {
    electionName: string;
    startDate: string;
    endDate: string;
  };
  onSave: (_updatedData: { electionName: string; startDate: string; endDate: string }) => void;
}

const EditElectionModal: React.FC<EditElectionModalProps> = ({
  open,
  onClose,
  electionData,
  onSave,
}) => {
  const [formValues, setFormValues] = useState(electionData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSave = () => {
    onSave(formValues);
    onClose();
  };

  return (
    <CustomModal
      open={open}
      onClose={onClose}
      title="Edit Election"
      actions={
        <>
          <Button onClick={onClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSave} variant="contained" color="primary">
            Save
          </Button>
        </>
      }
    >
      <TextField
        margin="dense"
        id="electionName"
        name="electionName"
        label="Election Name"
        fullWidth
        value={formValues.electionName}
        onChange={handleInputChange}
      />
      <TextField
        margin="dense"
        id="startDate"
        name="startDate"
        label="Start Date"
        type="date"
        fullWidth
        value={formValues.startDate}
        onChange={handleInputChange}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        margin="dense"
        id="endDate"
        name="endDate"
        label="End Date"
        type="date"
        fullWidth
        value={formValues.endDate}
        onChange={handleInputChange}
        InputLabelProps={{ shrink: true }}
      />
    </CustomModal>
  );
};

export default EditElectionModal;
