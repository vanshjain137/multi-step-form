import React from 'react';

const Step3 = ({ prevStep, values }) => {
  const back = e => {
    e.preventDefault();
    prevStep();
  };

  const submitForm = async e => {
    e.preventDefault();
    try {
      console.log('Submitting data:', values);
      
      // Direct URL to backend
      const response = await fetch('http://localhost:5001/api/form', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      
      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers.get('content-type'));
      
      // Check if response is JSON
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        console.log('Response data:', data);

        if (response.ok) {
          alert('✅ Form submitted successfully!');
        } else {
          alert(`❌ Submission failed: ${data.error || 'Unknown error'}`);
        }
      } else {
        // Response is not JSON
        const text = await response.text();
        console.log('Response text:', text);
        
        if (response.ok) {
          alert('✅ Form submitted successfully!');
        } else {
          alert(`❌ Submission failed: ${text}`);
        }
      }
    } catch (error) {
      console.error('Detailed error:', error);
      alert(`⚠️ Error submitting form: ${error.message}`);
    }
  };

  return (
    <div className="form-container">
      <h2>Step 3: Confirm Details</h2>
      <ul className="confirm-list">
        <li><strong>Name:</strong> {values.name}</li>
        <li><strong>Email:</strong> {values.email}</li>
        <li><strong>Address:</strong> {values.address}</li>
        <li><strong>City:</strong> {values.city}</li>
        <li><strong>Zip Code:</strong> {values.zip}</li>
      </ul>
      <div className="button-group">
        <button onClick={back} className="back-btn">Back</button>
        <button onClick={submitForm} className="submit-btn">Submit</button>
      </div>
    </div>
  );
};

export default Step3;