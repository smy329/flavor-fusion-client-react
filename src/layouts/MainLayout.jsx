import React from 'react';
import NavigationBar from '../pages/shared/NavigationBar';
import Footer from '../pages/shared/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <div className="container mx-auto">
        <NavigationBar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
