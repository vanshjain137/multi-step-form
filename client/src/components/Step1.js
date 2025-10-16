import React from 'react';

const Step1 = ({ nextStep, handleChange, values }) => {
  const continueStep = e => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="form-container">
      <h2>Step 1: Personal Details</h2>
      <form onSubmit={continueStep}>
        <label>Name:</label>
        <input
          type="text"
          onChange={handleChange('name')}
          value={values.name}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          onChange={handleChange('email')}
          value={values.email}
          required
        />
        <button type="submit" className="next-btn">Next</button>
      </form>
    </div>
  );
};

export default Step1;
