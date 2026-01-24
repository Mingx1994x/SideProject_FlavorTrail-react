import { useRef } from 'react';
// import { Modal } from 'bootstrap';

import CircleCTAButton from '../components/CircleCTAButton';
import HomeBannerSection from '@/pages/home/HomeBannerSection';
import HomeYummySection from '@/pages/home/HomeYummySection';
import HomeFoodTalkSection from '@/pages/home/HomeFoodTalkSection';
import HomeAwesomeSection from '@/pages/home/HomeAwesomeSection';
import HomeIntroSection from '@/pages/home/HomeIntroSection';
import HomeInviteSection from '@/pages/home/HomeInviteSection';
import HomeMarqueeSection from '@/pages/home/HomeMarqueeSection';
import ShareFoodModal from '@/components/ShareFoodModal';
// import AlertModal from '../components/AlertModal';

const Home = () => {
  const startTriggerRef = useRef(null);
  const endTriggerRef = useRef(null);
  // const openShareFoodModal = (e) => {
  //   e.preventDefault();
  //   if (isLogin) {
  //     const shareFoodModal = new Modal(
  //       document.getElementById('shareFoodModal')
  //     );
  //     shareFoodModal.show();
  //   } else {
  //     AlertModal.confirmAction({
  //       title: '請先登入',
  //       text: '迷路的尋者，登入後才能使用會員功能喔！',
  //       icon: 'info',
  //       confirmButtonText: '登入',
  //       cancelButtonText: '取消',
  //       onConfirm: () => {
  //         navigate('/login');
  //       },
  //     });
  //   }
  // };
  return (
    <>
      <HomeBannerSection />
      <HomeIntroSection startTriggerRef={startTriggerRef} />
      <HomeAwesomeSection />
      <HomeYummySection />
      <HomeFoodTalkSection />
      <HomeInviteSection />
      <HomeMarqueeSection endTriggerRef={endTriggerRef} />
      {/* CTA */}
      <ShareFoodModal />
      <CircleCTAButton
        title={'分享美味'}
        startTriggerRef={startTriggerRef}
        endTriggerRef={endTriggerRef}
        startPosition={'top 20%'}
        endPosition={'bottom 60%'}
      />
    </>
  );
};

export default Home;
