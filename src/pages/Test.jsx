import React from 'react';
import Pdf from 'react-to-pdf';
import { useRef, useState } from 'react';

const Test = () => {
  const ref = useRef();
  return (
    <div>
      <Pdf targetRef={ref} filename="document.pdf">
        {({ toPdf }) => (
          <button onClick={toPdf} className="button">
            Generate PDF
          </button>
        )}
      </Pdf>
      <div ref={ref}>
        <h1 className="text-5xl">Helloooo</h1>
      </div>
    </div>
  );
};

export default Test;
