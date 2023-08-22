import React, { useState } from 'react';
import './balloon.css';

const Balloon = () => {
  const [inflated, setInflated] = useState(false);

  const handleInflate = () => {
    setInflated(true);
  };

  const handleDeflate = () => {
    setInflated(true);
  };

  return (
     <div>
      <div
        className={`balloon ${inflated ? 'inflated' : 'deflated'}`}
      >
      </div>
      <div className="controls">
        <button onClick={handleInflate}>Inflate</button>
        <button onClick={handleDeflate}>Deflate</button>
      </div>
    </div>
  );
};

export default Balloon;
