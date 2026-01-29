import { useRef } from 'react';

import CircleCTAButton from '../components/CircleCTAButton';
import HomeBannerSection from '@/pages/home/HomeBannerSection';
import HomeYummySection from '@/pages/home/HomeYummySection';
import HomeFoodTalkSection from '@/pages/home/HomeFoodTalkSection';
import HomeAwesomeSection from '@/pages/home/HomeAwesomeSection';
import HomeIntroSection from '@/pages/home/HomeIntroSection';
import HomeInviteSection from '@/pages/home/HomeInviteSection';
import HomeMarqueeSection from '@/pages/home/HomeMarqueeSection';

const Home = () => {
  const startTriggerRef = useRef(null);
  const endTriggerRef = useRef(null);
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
