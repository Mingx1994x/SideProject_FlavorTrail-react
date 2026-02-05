import PropTypes from 'prop-types';
import shareSVG from '../assets/svg/share-flavor-sm.svg';
import shareDesktopSVG from '../assets/svg/discover-delicacies.svg';
import discoverSVG from '../assets/svg/discover-delicacies-sm.svg';
import discoverDesktopSVG from '../assets/svg/discover-delicacies.svg';
import connectSVG from '../assets/svg/foodle-connect-sm.svg';
import connectDesktopSVG from '../assets/svg/foodle-connect.svg';

const marqueeSVGContent = {
  mobile: {
    share: shareSVG,
    discover: discoverSVG,
    connect: connectSVG,
  },
  desktop: {
    share: shareDesktopSVG,
    discover: discoverDesktopSVG,
    connect: connectDesktopSVG,
  },
};

const Marquee = ({ text, svgName, children }) => {
  return (
    <div className="d-flex flex-column border-top border-primary border-4 ">
      <div className="marquee py-8 d-flex" data-collapse={text}>
        <div className="marquee-scroll d-flex align-items-center">
          <p className="aboutService-marquee-text display-3 display-lg-1 text-primary text-nowrap mb-0">
            {text}
          </p>
          <img src={marqueeSVGContent.mobile[svgName]} alt={text} />
          <p className="aboutService-marquee-text display-3 display-lg-1 text-primary text-nowrap mb-0">
            {text}
          </p>
          <img src={marqueeSVGContent.mobile[svgName]} alt={text} />
        </div>
        <div className="marquee-scroll2 d-flex align-items-center">
          <p className="aboutService-marquee-text display-3 display-lg-1 text-primary text-nowrap mb-0">
            {text}
          </p>
          <img src={marqueeSVGContent.mobile[svgName]} alt={text} />
          <p className="aboutService-marquee-text display-3 display-lg-1 text-primary text-nowrap mb-0">
            {text}
          </p>
          <img src={marqueeSVGContent.mobile[svgName]} alt={text} />
        </div>
      </div>
      {children}
    </div>
  );
};

Marquee.propTypes = {
  text: PropTypes.string.isRequired,
  svgName: PropTypes.oneOf(['share', 'discover', 'connect']).isRequired,
  children: PropTypes.node,
};

export default Marquee;
