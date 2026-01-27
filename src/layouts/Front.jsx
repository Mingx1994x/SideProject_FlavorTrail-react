import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';

import Footer from './Footer';
import Header from './Header';
import ShareFoodModal from '../components/ShareFoodModal';
import FoodModalProvider from '../contexts/foodModal/FoodModalContext';

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
        <ShareFoodModal />
      </FoodModalProvider>
    </>
  );
};

export default Front;
