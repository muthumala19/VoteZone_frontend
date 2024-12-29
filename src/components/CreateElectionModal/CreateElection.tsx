import React, { useState } from 'react';
import NameAndDescriptionStep from './NameAndDescriptionStep';
import DateStep from './DateStep';

const ElectionCreation: React.FC = () => {
  const [open, setOpen] = useState(true);
  const [step, setStep] = useState(1);

  const handleClose = () => {
    setOpen(false);
  };

  const goNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const goBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <>
      {step === 1 && <NameAndDescriptionStep open={open} onClose={handleClose} onNext={goNext} />}
      {step === 2 && <DateStep open={open} onClose={handleClose} onBack={goBack} />}
    </>
  );
};

export default ElectionCreation;
