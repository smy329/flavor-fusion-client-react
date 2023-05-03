import React, { useContext } from 'react';
import Banner from '../../components/Banner';
import OurChefs from '../../components/OurChefs';
import Newsletter from '../../components/Newsletter';
import NewlyArrivedRecipies from '../../components/NewlyArrivedRecipies';
import { AuthContext } from '../../providers/AuthProviders';
import Spinner from '../../components/Spinner';

const Home = () => {
  const { loading, setLoading } = useContext(AuthContext);
  setLoading(true);
  return (
    <div>
      {loading && <Spinner />}
      <Banner />
      <OurChefs />
      <NewlyArrivedRecipies />
      <Newsletter />
      {setLoading(false)}
    </div>
  );
};

export default Home;
