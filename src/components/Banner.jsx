import React, { useContext } from 'react';
import bannerImg from '../assets/bannerImg.png';

const Banner = () => {
  return (
    <div className="grid grid-cols-2 gap-5 items-center">
      <div className="w-11/12">
        <h1 className="text-6xl font-black uppercase leading-tight text-amber-500 mb-8 drop-shadow-xl">
          Bringing flavor to your table
        </h1>
        <p className="font-semibold text-lg text-gray-500 w-10/12">
          Spice up your kitchen with our recipe collection - where every dish is
          a masterpiece waiting to be created. From classic comfort food to
          exotic cuisine, discover your new go-to meal here
        </p>
      </div>
      <div>
        <img src={bannerImg} alt="" className="drop-shadow-2xl" />
      </div>
    </div>
  );
};

export default Banner;
