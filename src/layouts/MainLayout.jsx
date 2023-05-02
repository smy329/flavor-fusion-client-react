import React from 'react';
import NavigationBar from '../pages/shared/NavigationBar';
import Footer from '../pages/shared/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="container mx-auto">
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
