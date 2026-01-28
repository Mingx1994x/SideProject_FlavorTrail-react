import { useContext } from 'react';
import { shareFoodModalContext } from './shareFoodContext';
import { useSelector } from 'react-redux';
import AlertModal from '../../components/AlertModal';
import { useNavigate } from 'react-router';

const useOpenFoodModal = () => {
  const { openFoodModal } = useContext(shareFoodModalContext);
  const { isLogin } = useSelector((state) => state.loginSlice.loginStatus);
  const navigate = useNavigate();
  const loginAlertModal = () => {
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
  };
  return isLogin ? openFoodModal : loginAlertModal;
};

export default useOpenFoodModal;
