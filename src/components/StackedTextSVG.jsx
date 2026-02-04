import PropTypes from 'prop-types';

function getStackCount(isMobile, count) {
  const defaultCount = isMobile ? 8 : 16;
  return count || defaultCount;
}

const StackedTextSVG = ({
  text,
  viewBox,
  position,
  count,
  isMobile,
  className,
}) => {
  const actualCount = getStackCount(isMobile, count);

  const stackedElements = [];
  for (let i = 0; i < actualCount; i++) {
    stackedElements.push(
      <svg
        key={i}
        className={`title-stroke-svg ${className} w-100`}
        aria-label={text}
        viewBox={viewBox}
      >
        <text
          className={i === 0 ? 'stroke-text' : ''}
          x={position.x}
          y={position.y}
          stroke="white"
          strokeWidth="8"
          fill="none"
        >
          {text}
        </text>
        <text
          className={i === 0 ? 'fill-text' : 'stack-pattern fill-text'}
          x={position.x}
          y={position.y}
          fill="#00503F"
        >
          {text}
        </text>
      </svg>,
    );
  }

  return (
    <h2
      className={`${isMobile ? 'd-lg-none d-block' : 'd-none d-lg-block'} stack-container`}
    >
      {stackedElements}
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
  className: PropTypes.string,
  isMobile: PropTypes.bool,
  count: PropTypes.number,
};

export default StackedTextSVG;
