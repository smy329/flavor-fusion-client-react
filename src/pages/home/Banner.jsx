import React from 'react';
import bannerImg from '../../assets/bg/loginPage.jpeg';

const Banner = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <h1 className="text-6xl font-black uppercase leading-tight text-amber-500">
          Bringing flavor to your table
        </h1>
        <p>
          Spice up your kitchen with our recipe collection - where every dish is
          a masterpiece waiting to be created. From classic comfort food to
          exotic cuisine, discover your new go-to meal here
        </p>
      </div>
      <div>
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
