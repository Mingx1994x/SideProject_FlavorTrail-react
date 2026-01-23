import PropTypes from 'prop-types';

const PostHeroSection = ({ id, imagesUrl }) => {
  return (
    <>
      <div className="post-img-sm d-block d-lg-none position-relative">
        <div className="mt-3">
          <img
            className="w-100 h-100 rounded-3 object-fit-cover"
            src={imagesUrl[0]}
            alt={`post${id}-banner`}
            style={{ maxHeight: '580px' }}
          />
        </div>
      </div>
      <div className="post-img-lg d-none d-lg-block w-100 h-100">
        <img
          className="w-100 h-100 rounded-3 object-fit-cover"
          src={imagesUrl[0]}
          alt={`post${id}-banner`}
          style={{ maxHeight: '580px' }}
        />
      </div>
    </>
  );
};

PostHeroSection.propTypes = {
  id: PropTypes.number,
  imagesUrl: PropTypes.array.isRequired,
};

export default PostHeroSection;
