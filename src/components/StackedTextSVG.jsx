import PropTypes from 'prop-types';

const StackedTextSVG = ({
  text,
  viewBox,
  position,
  count,
  displayClass,
  strokeStyleClass,
}) => {
  const { x, y } = position;

  return (
    <h2 className={`stack-container ${displayClass} `}>
      {Array.from({ length: count }, (_, index) => (
        <svg
          key={index}
          className={`title-stroke-svg ${strokeStyleClass} w-100`}
          aria-label={text}
          viewBox={viewBox}
        >
          <text
            className={index === 0 ? 'stroke-text' : ''}
            x={x}
            y={y}
            stroke="white"
            strokeWidth="8"
            fill="none"
          >
            {text}
          </text>
          <text
            className={index === 0 ? 'fill-text' : 'stack-pattern fill-text'}
            x={x}
            y={y}
            fill="#00503F"
          >
            {text}
          </text>
        </svg>
      ))}
    </h2>
  );
};

StackedTextSVG.propTypes = {
  text: PropTypes.string.isRequired,
  viewBox: PropTypes.string.isRequired,
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
  count: PropTypes.number,
  displayClass: PropTypes.string,
  strokeStyleClass: PropTypes.string,
};

export default StackedTextSVG;
