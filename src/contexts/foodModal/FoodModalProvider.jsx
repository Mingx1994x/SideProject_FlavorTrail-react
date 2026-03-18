import { useEffect, useRef, useState } from 'react';
import { Modal } from 'bootstrap';
import PropTypes from 'prop-types';

import { shareFoodModalContext } from '@/contexts/modalContext';
import ShareFoodModal from '@/components/ShareFoodModal';

const defaultValues = {
  redeemCode: '',
  title: '',
  content: '',
  food: {
    name: '',
    type: '',
    saveMethod: '',
    totalQuantity: 0,
    restQuantity: 0,
    expiryDate: '',
    isPastBestBefore: '',
    dietType: '',
  },
  pickup: {
    city: '',
    district: '',
    time: '',
    address: '',
  },
  imagesUrl: [],
  viewCount: 1,
  commentCount: 0,
  likeCount: 0,
  userId: 1,
};

const FoodModalProvider = ({ children }) => {
  const [formFields, setFormFields] = useState(defaultValues);
  const [mode, setMode] = useState('share');
  const foodModalRef = useRef(null);
  const foodModal = useRef(null);
  const openFoodModal = (mode = 'share', data = null) => {
    setMode(mode);
    setFormFields(data || defaultValues);
    foodModal.current?.show();
  };

  const closeFoodModal = () => {
    foodModal.current?.hide();
    setMode('share');
    setFormFields(defaultValues);
  };

  useEffect(() => {
    if (foodModalRef.current) {
      foodModal.current = new Modal(foodModalRef.current);
    }
  }, []);

  return (
    <shareFoodModalContext.Provider value={{ openFoodModal, closeFoodModal }}>
      {children}
      <ShareFoodModal ref={foodModalRef} mode={mode} formFields={formFields} />
    </shareFoodModalContext.Provider>
  );
};

FoodModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FoodModalProvider;
