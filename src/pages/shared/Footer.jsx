import React from 'react';
import { IoLogoFacebook, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io5';

const Footer = () => {
  return (
    <div className="bg-gray-950">
      <div className="container mx-auto">
        <div className=" grid grid-cols-4 gap-5 py-20 px-5 ml-5">
          <div>
            <h1 className="font-extrabold text-4xl text-white py-5 mb-5 ">
              Flavor Fusion
            </h1>
            <p className="text-gray-500 leading-[55px] font-bold text-xl">
              Social
            </p>
            <div className="flex text-white gap-5">
              <IoLogoFacebook className="h-8 w-8" />
              <IoLogoYoutube className="h-8 w-8" />
              <IoLogoTwitter className="h-8 w-8" />
            </div>
          </div>
          <div>
            <ul className="text-white leading-[55px] font-normal text-xl">
              <li>Diners</li>
              <li>Meals</li>
              <li>Ingrdients</li>
              <li>Kitchen Tips</li>
              <li>News</li>
            </ul>
          </div>
          <div>
            <ul className="text-white leading-[55px] font-normal text-xl">
              <li>About Us</li>
              <li>Anti-Racism Pledge</li>
              <li>Product Vetting</li>
              <li>Advertise</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <ul className="text-white leading-[55px] font-normal text-xl">
              <li>Editorial Process</li>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>Careers</li>
              <li>Community Guidelines</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
