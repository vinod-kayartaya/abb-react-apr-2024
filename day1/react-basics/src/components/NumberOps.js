import React, { useState } from 'react';

const NumberOps = () => {
  console.log('NumberOps rendered at', new Date());
  let [number, setNumber] = useState(1234);

  function decrement() {
    setNumber(number - 1);
  }

  const increment = () => {
    setNumber(number + 1);
  };

  return (
    <>
      <h3>
        <button className='btn btn-outline-primary me-3' onClick={decrement}>
          Decrement
        </button>
        {number}
        <button className='btn btn-outline-primary ms-3' onClick={increment}>
          Increment
        </button>
      </h3>
    </>
  );
};

export default NumberOps;
