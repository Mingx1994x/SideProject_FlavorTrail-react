import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { Modal } from 'bootstrap';

import ShareFoodModal from '@/components/ShareFoodModal';
import AlertModal from '@/components/AlertModal';
import { imgHomeURl1, logoUrl } from '@/data/imagesPath';

const HomeBannerSection = () => {
  const { isLogin } = useSelector((state) => state.loginSlice.loginStatus);
  const navigate = useNavigate();
  const openShareFoodModal = (e) => {
    e.preventDefault();
    if (isLogin) {
      const shareFoodModal = new Modal(
        document.getElementById('shareFoodModal'),
      );
      shareFoodModal.show();
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
  return (
    <section className="banner container">
      <div>
        <img
          src={imgHomeURl1}
          alt="banner-img"
          className="mt-4 mt-lg-7 banner-cover"
        />
      </div>
      <div className="banner-content d-flex flex-lg-row flex-column-reverse">
        <div className="banner-logo">
          <img src={logoUrl} alt="logo" />
        </div>
        <div className="d-flex flex-column ms-auto mb-auto align-items-end">
          <div className="slogan mt-lg-5 mt-4 fs-2 fw-bolder lh-1">
            <p>快樂齊分享，美味</p>
            <p className="vertical-text text-lg-vertical ms-auto">再出發</p>
          </div>
          <div className="banner-cta-group d-lg-block d-none fs-1 fw-bolder lh-xs">
            <span>（</span>
            <a href="#" className="banner-cta">
              附近美味
            </a>
            <span className="me-7">）</span>

            <span>（</span>
            <a
              onClick={(e) => openShareFoodModal(e)}
              href="#"
              className="banner-cta"
            >
              分享美味
            </a>
            <span>）</span>
          </div>
        </div>
        <ShareFoodModal />
      </div>
    </section>
  );
};

export default HomeBannerSection;
