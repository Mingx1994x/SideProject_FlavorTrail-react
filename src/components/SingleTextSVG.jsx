import PropTypes from 'prop-types';

const SingleTextSVG = ({
  text,
  viewBox,
  position,
  displayClass,
  strokeStyleClass,
}) => {
  const { x, y } = position;

  return (
    <h2 className={`${displayClass}`}>
      <svg
        className={`title-stroke-svg ${strokeStyleClass} w-100`}
        aria-label={text}
        viewBox={viewBox}
        preserveAspectRatio="xMinYMin meet"
      >
        <text
          className="stroke-text"
          x={x}
          y={y}
          stroke="white"
          strokeWidth="8"
          fill="none"
        >
          {text}
        </text>
        <text className="fill-text" x={x} y={y} fill="#00503F">
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
  displayClass: PropTypes.string,
  strokeStyleClass: PropTypes.string,
};

export default SingleTextSVG;
