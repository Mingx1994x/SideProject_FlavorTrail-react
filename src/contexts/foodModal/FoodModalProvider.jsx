import { Modal } from 'bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';

import { shareFoodModalContext } from './shareFoodContext';
import AlertModal from '@/components/AlertModal';
import ShareFoodModal from '../../components/ShareFoodModal';
import { useEffect, useRef } from 'react';

const FoodModalProvider = ({ children }) => {
  const { isLogin } = useSelector((state) => state.loginSlice.loginStatus);
  const navigate = useNavigate();

  const foodModalRef = useRef(null);
  const foodModal = useRef(null);
  const openFoodModal = () => {
    if (isLogin) {
      foodModal.current?.show();
    } else {
      AlertModal.confirmAction({
        title: '請先登入',
        text: '迷路的尋者，登入後才能使用會員功能喔！',
        icon: 'info',
        confirmButtonText: '登入',
        cancelButtonText: '取消',
        onConfirm: () => {
          navigate('/login');
        },
      });
    }
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
