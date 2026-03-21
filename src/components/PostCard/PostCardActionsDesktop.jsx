import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';

const PostCardActionsDesktop = ({
  userId,
  postRoute,
  isAvailable,
  isFollow,
  isLike,
  handleChangeLike,
  handelChangeFollow,
}) => {
  const { userInfo } = useSelector((state) => state.authSlice);
  return (
    <div className="post-card-md-btn-list d-none d-md-block mt-5">
      <div className="row mx-0">
        {userId !== userInfo.id && (
          <div className="col ps-0 pe-1">
            <button
              // onClick={() => {
              //   navigate(postRoute);
              // }}
              type="button"
              className={`get-btn btn bg-black text-white w-100 ${
                !isAvailable ? 'not-allowed' : ''
              }`}
              disabled={!isAvailable}
            >
              <span className="me-2">我要領取</span>
              <svg
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.0001 11V6C18.0001 5.46957 17.7894 4.96086 17.4143 4.58579C17.0392 4.21071 16.5305 4 16.0001 4C15.4697 4 14.961 4.21071 14.5859 4.58579C14.2108 4.96086 14.0001 5.46957 14.0001 6M14.0001 10V4C14.0001 3.46957 13.7894 2.96086 13.4143 2.58579C13.0392 2.21071 12.5305 2 12.0001 2C11.4697 2 10.961 2.21071 10.5859 2.58579C10.2108 2.96086 10.0001 3.46957 10.0001 4V6M10.0001 6V10.5M10.0001 6C10.0001 5.46957 9.78939 4.96086 9.41432 4.58579C9.03924 4.21071 8.53054 4 8.0001 4C7.46967 4 6.96096 4.21071 6.58589 4.58579C6.21082 4.96086 6.0001 5.46957 6.0001 6V14M18.0001 8C18.0001 7.46957 18.2108 6.96086 18.5859 6.58579C18.961 6.21071 19.4697 6 20.0001 6C20.5305 6 21.0392 6.21071 21.4143 6.58579C21.7894 6.96086 22.0001 7.46957 22.0001 8V14C22.0001 16.1217 21.1572 18.1566 19.657 19.6569C18.1567 21.1571 16.1218 22 14.0001 22H12.0001C9.2001 22 7.5001 21.14 6.0101 19.66L2.4101 16.06C2.06604 15.6789 1.88169 15.1802 1.89523 14.6669C1.90876 14.1537 2.11915 13.6653 2.48282 13.303C2.8465 12.9406 3.3356 12.7319 3.84888 12.7202C4.36215 12.7085 4.86027 12.8946 5.2401 13.24L7.0001 15"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
        <div className="col px-1">
          <button
            onClick={handleChangeLike}
            type="button"
            className="nomoral-btn btn w-100 d-flex justify-content-center align-items-center"
          >
            <span className={`me-2 ${isLike ? 'text-primary' : ''}`}>點讚</span>
            <svg
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill={isLike ? '#00503F' : 'none'}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10V22M15 5.88L14 10H19.83C20.1405 10 20.4467 10.0723 20.7244 10.2111C21.0021 10.35 21.2437 10.5516 21.43 10.8C21.6163 11.0484 21.7422 11.3367 21.7977 11.6422C21.8533 11.9477 21.8369 12.2619 21.75 12.56L19.42 20.56C19.2988 20.9754 19.0462 21.3404 18.7 21.6C18.3538 21.8596 17.9327 22 17.5 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V12C2 11.4696 2.21071 10.9609 2.58579 10.5858C2.96086 10.2107 3.46957 10 4 10H6.76C7.13208 9.9998 7.49674 9.89581 7.81296 9.69972C8.12917 9.50363 8.38442 9.22321 8.55 8.89L12 2C12.4716 2.00584 12.9357 2.11817 13.3578 2.3286C13.7799 2.53902 14.1489 2.84211 14.4374 3.2152C14.7259 3.5883 14.9263 4.02176 15.0237 4.4832C15.1212 4.94464 15.113 5.42213 15 5.88Z"
                stroke={isLike ? '#fff' : '#121212'}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="col px-1">
          <Link
            to={postRoute}
            className="nomoral-btn btn w-100 d-flex justify-content-center align-items-center"
          >
            <span className="me-2">留言</span>
            <svg
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.9 20C9.80858 20.9791 12.0041 21.2443 14.0909 20.7478C16.1777 20.2514 18.0186 19.0259 19.2818 17.2922C20.545 15.5586 21.1474 13.4308 20.9806 11.2922C20.8137 9.15366 19.8886 7.14502 18.3718 5.62824C16.855 4.11146 14.8464 3.1863 12.7078 3.01946C10.5693 2.85263 8.44147 3.45509 6.70782 4.71829C4.97417 5.98149 3.74869 7.82236 3.25222 9.90916C2.75575 11.996 3.02094 14.1915 4 16.1L2 22L7.9 20Z"
                stroke="#121212"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
        <div className="col ps-1 pe-0">
          <button
            onClick={handelChangeFollow}
            type="button"
            className="nomoral-btn btn w-100 d-flex justify-content-center align-items-center"
          >
            <span className={`me-2 ${isFollow ? 'text-primary' : ''}`}>
              追蹤貼文
            </span>
            <svg
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill={isFollow ? '#00503F' : 'none'}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3 21C10.4674 21.3044 10.7134 21.5583 11.0125 21.7352C11.3115 21.912 11.6526 22.0053 12 22.0053C12.3474 22.0053 12.6885 21.912 12.9875 21.7352C13.2866 21.5583 13.5326 21.3044 13.7 21M6 8C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2C13.5913 2 15.1174 2.63214 16.2426 3.75736C17.3679 4.88258 18 6.4087 18 8C18 15 21 17 21 17H3C3 17 6 15 6 8Z"
                stroke={isFollow ? '#00503F' : '#121212'}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

PostCardActionsDesktop.propTypes = {
  userId: PropTypes.number,
  postRoute: PropTypes.string,
  isFollow: PropTypes.bool,
  isLike: PropTypes.bool,
  isAvailable: PropTypes.bool,
  handelChangeFollow: PropTypes.func,
  handleChangeLike: PropTypes.func,
};

export default PostCardActionsDesktop;
