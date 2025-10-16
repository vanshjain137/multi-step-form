import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: ''
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (input) => (e) => {
    setValues({ ...values, [input]: e.target.value });
  };

  switch (step) {
    case 1:
      return (
        <Step1
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 2:
      return (
        <Step2
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 3:
      return (
        <Step3
          prevStep={prevStep}
          values={values}
          setValues={setValues}
        />
      );
    default:
      return <div>Invalid step</div>;
  }
};

export default MultiStepForm;
