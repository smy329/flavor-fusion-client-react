import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiUserCircle } from 'react-icons/hi2';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isMenuOpen);
  return (
    <div className="relative pb-16">
      <div className=" navbar">
        <div className="navbar-start">
          <h1 className="font-extrabold text-3xl">Flavor Fusion</h1>
        </div>
        <div className="navbar-end md:navbar-center hidden md:flex flex-grow flex-col md:flex-row">
          <div className="flex flex-col md:flex-row text-right md:text-center ">
            <NavLink
              className={`text-base font-medium p-2 md:p-5 text-gray-500`}
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              className="text-base font-medium p-2 md:p-5 text-gray-500"
              to="/blog"
            >
              Blog
            </NavLink>
            <NavLink
              className="text-base font-medium p-2 md:p-5 text-[#757575]"
              to="/login"
            >
              Login
            </NavLink>
            {/* <NavLink className="p-2 md:p-5 ">
              <HiUserCircle className="h-8 w-8 text-gray-500" />
            </NavLink> */}
          </div>
          <div className="">
            <button className="theme-btn">Register Now</button>
          </div>
        </div>
        <div className="lg:hidden z-20">
          <button
            className="p-2 absolute right-5 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute z-20 top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <Link to="/">
                      <div className="navbar-start">
                        <h1 className="font-extrabold text-xl md:text-4xl">
                          Flavor Fusion
                        </h1>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <button
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <div className="flex flex-col md:flex-row text-right md:text-center">
                    <NavLink
                      className={`text-base font-medium p-2 md:p-5 text-[#757575] `}
                      to="/"
                    >
                      Home
                    </NavLink>

                    <NavLink
                      className="text-base font-medium p-2 md:p-5 text-[#757575]"
                      to="/blog"
                    >
                      Blogs
                    </NavLink>
                    <NavLink
                      className="text-base font-medium p-2 md:p-5 text-[#757575]"
                      to="/login"
                    >
                      Login
                    </NavLink>
                    <NavLink className="p-2 md:p-5 flex justify-end">
                      <HiUserCircle className="h-8 w-8 text-gray-500 justify-end" />
                    </NavLink>
                  </div>
                  <div className="flex justify-end">
                    <button className="theme-btn">Register Now</button>
                  </div>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
