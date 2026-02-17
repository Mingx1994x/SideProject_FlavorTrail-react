import PropTypes from 'prop-types';
import shareDesktopSVG from '../assets/svg/discover-delicacies.svg';
import discoverDesktopSVG from '../assets/svg/discover-delicacies.svg';
import connectDesktopSVG from '../assets/svg/foodle-connect.svg';
import { forwardRef } from 'react';

const marqueeSVGContent = {
  share: shareDesktopSVG,
  discover: discoverDesktopSVG,
  connect: connectDesktopSVG,
};

const MarqueeDesktop = forwardRef(
  ({ text, svgName, id, direction = 'left', children }, ref) => {
    return (
      <div
        className="marquee aboutService-marquee-desktop py-12 d-flex"
        id={id}
        ref={ref}
        data-about={svgName}
      >
        <div
          className={`${direction === 'left' ? 'marquee-scroll' : 'marquee-scroll-reverse'} d-flex align-items-center`}
        >
          <p className="aboutService-marquee-text display-3 display-lg-1 text-primary text-nowrap mb-0">
            {text}
          </p>

          <img src={marqueeSVGContent[svgName]} alt={text} />
          <p className="aboutService-marquee-text display-3 display-lg-1 text-primary text-nowrap mb-0">
            {text}
          </p>
          <img src={marqueeSVGContent[svgName]} alt={text} />
        </div>
        <div
          className={`${direction === 'left' ? 'marquee-scroll' : 'marquee-scroll-reverse'} d-flex align-items-center`}
        >
          <p className="aboutService-marquee-text display-3 display-lg-1 text-primary text-nowrap mb-0">
            {text}
          </p>
          <img src={marqueeSVGContent[svgName]} alt={text} />

          <p className="aboutService-marquee-text display-3 display-lg-1 text-primary text-nowrap mb-0">
            {text}
          </p>
          <img src={marqueeSVGContent[svgName]} alt={text} />
        </div>
        <div
          className={`${direction === 'left' ? 'marquee-scroll' : 'marquee-scroll-reverse'} d-flex align-items-center`}
        >
          <p className="aboutService-marquee-text display-3 display-lg-1 text-primary text-nowrap mb-0">
            {text}
          </p>
          <img src={marqueeSVGContent[svgName]} alt={text} />

          <p className="aboutService-marquee-text display-3 display-lg-1 text-primary text-nowrap mb-0">
            {text}
          </p>
          <img src={marqueeSVGContent[svgName]} alt={text} />
        </div>
        <div
          className={`${direction === 'left' ? 'marquee-scroll' : 'marquee-scroll-reverse'} d-flex align-items-center`}
        >
          <p className="aboutService-marquee-text display-3 display-lg-1 text-primary text-nowrap mb-0">
            {text}
          </p>
          <img src={marqueeSVGContent[svgName]} alt={text} />

          <p className="aboutService-marquee-text display-3 display-lg-1 text-primary text-nowrap mb-0">
            {text}
          </p>
          <img src={marqueeSVGContent[svgName]} alt={text} />
        </div>
        {children}
      </div>
    );
  },
);

MarqueeDesktop.propTypes = {
  text: PropTypes.string.isRequired,
  svgName: PropTypes.oneOf(['share', 'discover', 'connect']).isRequired,
  id: PropTypes.oneOf(['aboutShare', 'aboutDiscover', 'aboutConnect'])
    .isRequired,
  direction: PropTypes.oneOf(['right', 'left']),
  children: PropTypes.node,
};

MarqueeDesktop.displayName = 'MarqueeDesktop';

export default MarqueeDesktop;
