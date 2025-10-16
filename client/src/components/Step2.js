import React from 'react';

const Step2 = ({ nextStep, prevStep, handleChange, values }) => {
  const continueStep = e => {
    e.preventDefault();
    nextStep();
  };

  const back = e => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div className="form-container">
      <h2>Step 2: Address Details</h2>
      <form onSubmit={continueStep}>
        <label>Address:</label>
        <input
          type="text"
          onChange={handleChange('address')}
          value={values.address}
          required
        />
        <label>City:</label>
        <input
          type="text"
          onChange={handleChange('city')}
          value={values.city}
          required
        />
        <label>Zip Code:</label>
        <input
          type="text"
          onChange={handleChange('zip')}
          value={values.zip}
          required
        />
        <div className="button-group">
          <button onClick={back} className="back-btn">Back</button>
          <button type="submit" className="next-btn">Next</button>
        </div>
      </form>
    </div>
  );
};

export default Step2;
