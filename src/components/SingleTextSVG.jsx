import PropTypes from 'prop-types';

const SingleTextSVG = ({ text, viewBox, position, className, isMobile }) => {
  return (
    <h2>
      <svg
        className={`${
          isMobile ? 'd-lg-none d-block' : 'd-none d-lg-block'
        } title-stroke-svg ${className} w-100`}
        aria-label={text}
        viewBox={viewBox}
        preserveAspectRatio="xMinYMin meet"
      >
        <text
          className="stroke-text"
          x={position.x}
          y={position.y}
          stroke="white"
          strokeWidth="8"
          fill="none"
        >
          {text}
        </text>
        <text
          className="fill-text"
          x={position.x}
          y={position.y}
          fill="#00503F"
        >
          {text}
        </text>
      </svg>
    </h2>
  );
};

SingleTextSVG.propTypes = {
  text: PropTypes.string.isRequired,
  viewBox: PropTypes.string.isRequired,
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
  className: PropTypes.string,
  isMobile: PropTypes.bool,
};

export default SingleTextSVG;
