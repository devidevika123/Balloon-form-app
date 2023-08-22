import React from 'react';
import { Link } from 'react-router-dom';

function SubmitPage() {
  return (
    <div>
      <h1>Submission Page</h1>
      <p>Your form has been submitted successfully!</p>

      <Link to="/">Back to Balloon Page</Link>
    </div>
  );
}

export default SubmitPage;