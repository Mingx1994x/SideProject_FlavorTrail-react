import AboutUsMarquee from '@/pages/about/AboutUsMarquee';
import AboutOurTeamSection from '@/pages/about/AboutOurTeamSection';
import AboutUsBannerSection from '@/pages/about/AboutUsBannerSection';
import AboutOurStorySection from './about/AboutOurStorySection';

const AboutUs = () => {
  return (
    <>
      <AboutUsBannerSection />
      <AboutOurStorySection />
      <AboutUsMarquee />
      <AboutOurTeamSection />
    </>
  );
};

export default AboutUs;
