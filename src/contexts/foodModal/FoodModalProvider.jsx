import { useEffect, useRef } from 'react';
import { Modal } from 'bootstrap';
import PropTypes from 'prop-types';

import { shareFoodModalContext } from './shareFoodContext';
import ShareFoodModal from '@/components/ShareFoodModal';

const FoodModalProvider = ({ children }) => {
  const foodModalRef = useRef(null);
  const foodModal = useRef(null);
  const openFoodModal = () => {
    foodModal.current?.show();
  };

  const closeFoodModal = () => {
    foodModal.current?.hide();
  };

  useEffect(() => {
    if (foodModalRef.current) {
      foodModal.current = new Modal(foodModalRef.current);
    }
  }, []);

  return (
    <shareFoodModalContext.Provider value={{ openFoodModal, closeFoodModal }}>
      {children}
      <ShareFoodModal ref={foodModalRef} />
    </shareFoodModalContext.Provider>
  );
};

FoodModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FoodModalProvider;
