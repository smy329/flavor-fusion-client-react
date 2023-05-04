import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Newsletter = () => {
  return (
    <div className="mb-24">
      <div className="bg-newsletter bg-cover bg-center bg-no-repeat w-full rounded-2xl">
        <div className="bg-black bg-opacity-30 flex flex-col items-center rounded-2xl p-16">
          <div>
            <h1 className="text-5xl font-black text-center mb-5 text-white p-10 w-4/5 mx-auto">
              Subscribe Our Newsletter to Get Premium Recipes
            </h1>
          </div>
          <div className="">
            <div className="input-group mb-10">
              <input
                type="text"
                placeholder="Enter your email address here"
                className="p-5"
              />
              <button className="theme-btn">Subscribe</button>
            </div>
            {/* <form>
              <label
                for="search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative">
                <input
                  class="block w-full p-4 pl-10 text-lg text-gray-500 outline-none rounded-lg"
                  placeholder="Enter your email address here"
                />
                <button
                  type="submit"
                  class="theme-btn absolute right-0 input bottom-0"
                >
                  Search
                </button>
              </div>
            </form> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
