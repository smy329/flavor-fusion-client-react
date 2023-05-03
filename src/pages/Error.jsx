import React from 'react';
import errorImg from '../assets/bg/404.jpg';

const Error = () => {
  return (
    <div className="bg-error">
      <img src={errorImg} alt="" className="h-screen w-screen" />
    </div>
  );
};

export default Error;
