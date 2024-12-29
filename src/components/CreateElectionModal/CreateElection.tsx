import React, { useState } from 'react';
import NameAndDescriptionStep from './NameAndDescriptionStep';
import DateStep from './DateStep';
import { DialogActions, DialogTitle, Backdrop, Dialog } from '@mui/material';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

const StyledDialogContent = styled(Dialog)`
  && {
    .MuiPaper-root.MuiDialog-paper {
      border-radius: 10px;
    }

  && {
    .MuiDialogContent-root {
        max-width: 500px;
      }}
`;

type Props = {
  open: boolean;
  onClose: () => void;
};

const ElectionCreation: React.FC<Props> = ({ open, onClose }) => {
  const [step, setStep] = useState(1);

  const goNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const goBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <Backdrop open={open}>
      <StyledDialogContent open={open} onClose={onClose}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <DialogTitle>Create Election</DialogTitle>
          <DialogActions>
            <CloseIcon
              style={{ marginRight: '10px', cursor: 'pointer' }}
              onClick={onClose}
              color="primary"
            />
          </DialogActions>
        </div>
        {step === 1 && <NameAndDescriptionStep onClose={onClose} onNext={goNext} />}
        {step === 2 && <DateStep onBack={goBack} />}
      </StyledDialogContent>
    </Backdrop>
  );
};

export default ElectionCreation;
