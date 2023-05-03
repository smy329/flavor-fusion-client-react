import React from 'react';

const Spinner = () => {
  return (
    <div class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
      <div class="border-t-transparent border-solid animate-spin  rounded-full border-amber-500 border-8 h-20 w-20"></div>
    </div>
  );
};

export default Spinner;
