import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';

import Footer from './Footer';
import Header from './Header';
import FoodModalProvider from '@/contexts/foodModal/FoodModalProvider';

const Front = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname]);

  return (
    <>
      <FoodModalProvider>
        <Header />
        <Outlet />
        <Footer />
      </FoodModalProvider>
    </>
  );
};

export default Front;
