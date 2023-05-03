import React from 'react';
import Banner from '../../components/Banner';
import OurChefs from '../../components/OurChefs';
import Newsletter from '../../components/Newsletter';
import NewlyArrivedRecipies from '../../components/NewlyArrivedRecipies';

const Home = () => {
  return (
    <div>
      <Banner />
      <OurChefs />
      <NewlyArrivedRecipies />
      <Newsletter />
    </div>
  );
};

export default Home;
