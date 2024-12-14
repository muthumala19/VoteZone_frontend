import { useState } from 'react';
import React from 'react';
import Dialog from '@mui/material/Dialog';
import NameAndDescriptionStep from './NameAndDescriptionStep';

interface Props {
  open: boolean;
  onClose: () => void;
}

const CreateElectionModal: React.FC<Props> = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <NameAndDescriptionStep goBack={handleClose} goNext={handleClose} />
    </Dialog>
  );
};

export default CreateElectionModal;
