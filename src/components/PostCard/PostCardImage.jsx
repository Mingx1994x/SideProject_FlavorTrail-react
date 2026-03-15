import PropTypes from 'prop-types';
import { Link } from 'react-router';

const PostCardImage = ({ id, title, imageUrl, variant }) => {
  return (
    <>
      <Link
        to={`/post/${id}`}
        className="img-hover position-relative w-100 h-100"
      >
        {variant === 'default' && (
          <div className="card-hover bg-primary w-100 h-100 position-absolute top-0 start-0 rounded-3">
            <svg
              width={40}
              height={40}
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40 0L10 6.69388L17.6562 12.5714L0 27.2653C0 27.2653 4.58333 28.6946 8.4375 31.8367C12.2917 34.9788 14.8958 40 14.8958 40L28.4375 21.2245L34.5312 29.7143L40 0Z"
                fill="#ffffff"
              />
            </svg>
            <div className="fs-4 fw-medium text-white mt-5">查看更多</div>
          </div>
        )}

        <img
          src={imageUrl}
          alt={title}
          className="img-fluid rounded-3 object-fit-cover"
        />
      </Link>
    </>
  );
};

PostCardImage.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'otherPost']),
};

export default PostCardImage;
