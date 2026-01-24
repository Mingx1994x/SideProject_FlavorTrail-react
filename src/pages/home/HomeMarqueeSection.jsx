import PropTypes from 'prop-types';

const HomeMarqueeSection = ({ endTriggerRef }) => {
  return (
    <section className="index-marquee mb-19" ref={endTriggerRef}>
      <div className="marquee py-lg-12 py-8 border-top border-bottom border-primary border-4 d-flex">
        <p className="marquee-scroll display-3 display-lg-1 text-primary ms-7 text-nowrap mb-0 letter-spacing-1">
          WE INVITE YOU{' '}
          <span className="marquee-stroke ms-7">WE INVITE YOU</span> WE INVITE
          YOU <span className="marquee-stroke ms-7">WE INVITE YOU</span>
        </p>
        <p className="marquee-scroll2 display-3 display-lg-1 text-primary ms-7 text-nowrap mb-0">
          WE INVITE YOU{' '}
          <span className="marquee-stroke ms-7">WE INVITE YOU</span> WE INVITE
          YOU <span className="marquee-stroke ms-7">WE INVITE YOU</span>
        </p>
        <p className="marquee-scroll display-3 display-lg-1 text-primary ms-7 text-nowrap mb-0">
          WE INVITE YOU{' '}
          <span className="marquee-stroke ms-7">WE INVITE YOU</span> WE INVITE
          YOU <span className="marquee-stroke ms-7">WE INVITE YOU</span>
        </p>
        <p className="marquee-scroll2 display-3 display-lg-1 text-primary ms-7 text-nowrap mb-0">
          WE INVITE YOU{' '}
          <span className="marquee-stroke ms-7">WE INVITE YOU</span> WE INVITE
          YOU <span className="marquee-stroke ms-7">WE INVITE YOU</span>
        </p>
      </div>
    </section>
  );
};

HomeMarqueeSection.propTypes = {
  endTriggerRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default HomeMarqueeSection;
