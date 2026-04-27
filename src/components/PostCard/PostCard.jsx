import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import useOpenFoodModal from '@/contexts/foodModal/useFoodModal';
import {
  daysFromNow,
  daysStateExpired,
  daysStateNew,
} from '@/utils/formatTIme';

import PostCardImage from './PostCardImage';
import PostCardActionsDesktop from './PostCardActionsDesktop';
import PostCardActionsMobile from './PostCardActionsMobile';
import AlertModal from '@/components/AlertModal';

const PostCard = ({ post, variant = 'default' }) => {
  const { userInfo, isLogin } = useSelector((state) => state.authSlice);
  const openFoodModal = useOpenFoodModal();
  const timeAgo = daysFromNow(post.createdPostDate);
  const isNewPost = daysStateNew(post.createdPostDate);
  const isAvailable =
    post.food.restQuantity > 0 && daysStateExpired(post.food.expiryDate);
  const isPopular = post.likeCount > 100;
  // const isTaken = useState(false);
  const postRoute = `/post/${post.id}`;

  const navigate = useNavigate();
  const [isLike, setIsLike] = useState(false);
  const [isFollow, setIsFollow] = useState(false);

  const handleChangeLike = () => {
    // 登入後才能按讚
    if (!isLogin) {
      AlertModal.confirmAction({
        title: '請先登入',
        text: '迷路的尋者，登入後才能使用會員功能喔！',
        icon: 'info',
        confirmButtonText: '登入',
        cancelButtonText: '取消',
        onConfirm: () => {
          navigate('/login');
        },
      });
      return;
    }

    setIsLike((prevState) => !prevState);
    // setLike((prevLikes) => {
    //   const updatedLikes = { ...prevLikes };
    //   return updatedLikes;
    // });
  };
  const handelChangeFollow = () => {
    if (!isLogin) {
      AlertModal.confirmAction({
        title: '請先登入',
        text: '迷路的尋者，登入後才能使用會員功能喔！',
        icon: 'info',
        confirmButtonText: '登入',
        cancelButtonText: '取消',
        onConfirm: () => {
          navigate('/login');
        },
      });
      return;
    }

    setIsFollow((prevState) => !prevState);
    // setFollows((prev) => {
    //   const follows = { ...prev };
    //   if (follows[id]) {
    //     delete follows[id];
    //   } else {
    //     follows[id] = true;
    //   }
    //   return follows;
    // });
  };

  return (
    <div className="post-card bg-white p-5 my-5 rounded-3">
      <div className="row flex-column-reverse flex-lg-row">
        <div className="col-lg-9 position-relative">
          {variant === 'default' && (
            <Link
              to={postRoute}
              className="position-absolute top-0 start-0 w-100 h-75"
            />
          )}
          <div className="ps-lg-5">
            <div className="d-flex flex-wrap align-items-center py-4">
              <div className="card-header d-flex align-items-center me-auto mb-5 mb-md-0">
                <div className="d-flex align-items-center">
                  <img
                    src={post?.user?.avatarUrl}
                    alt={post?.user?.avatarUrl}
                    className="rounded-circle me-4 object-fit-cover"
                    width={48}
                    height={48}
                  />
                  <div>
                    <h2 className="h5 mb-1">{post?.user?.nickName}</h2>
                    <p className="text-gray-700 small mb-0">
                      {post.pickup?.city} / {post.pickup?.district}· {timeAgo}
                    </p>
                  </div>
                </div>
                {post?.user?.nickName === userInfo.nickname && isLogin && (
                  <a
                    className="z-1 ms-auto d-md-none"
                    onClick={(e) => {
                      e.preventDefault();
                      openFoodModal('edit', post);
                    }}
                    // onClick={() => handleEditPost(post.id)}
                  >
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 3.00023H5C4.46957 3.00023 3.96086 3.21094 3.58579 3.58601C3.21071 3.96109 3 4.46979 3 5.00023V19.0002C3 19.5307 3.21071 20.0394 3.58579 20.4144C3.96086 20.7895 4.46957 21.0002 5 21.0002H19C19.5304 21.0002 20.0391 20.7895 20.4142 20.4144C20.7893 20.0394 21 19.5307 21 19.0002V12.0002M18.375 2.62523C18.7728 2.2274 19.3124 2.00391 19.875 2.00391C20.4376 2.00391 20.9772 2.2274 21.375 2.62523C21.7728 3.02305 21.9963 3.56262 21.9963 4.12523C21.9963 4.68784 21.7728 5.2274 21.375 5.62523L12.362 14.6392C12.1245 14.8765 11.8312 15.0501 11.509 15.1442L8.636 15.9842C8.54995 16.0093 8.45874 16.0108 8.37191 15.9886C8.28508 15.9663 8.20583 15.9212 8.14245 15.8578C8.07907 15.7944 8.03389 15.7151 8.01164 15.6283C7.9894 15.5415 7.9909 15.4503 8.016 15.3642L8.856 12.4912C8.95053 12.1693 9.12453 11.8763 9.362 11.6392L18.375 2.62523Z"
                        stroke="black"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                )}
              </div>
              <div className="d-flex flex-wrap gap-2">
                {isNewPost && <span className="badge bg-primary">最新</span>}
                {isPopular && <span className="badge bg-primary">熱門</span>}
                {isAvailable && (
                  <span className="badge bg-primary">仍可領取</span>
                )}
                {/* {isAvailable ? (
                  <span className="badge bg-primary">仍可領取</span>
                ) : (
                  isTaken && (
                    <span className="badge bg-primary-200">已領取</span>
                  )
                )} */}
              </div>
            </div>
            <div className="py-7 border-top border-bottom">
              <div className="d-flex">
                <h2 className="fs-3 mb-5">{post.title}</h2>
                {post?.user?.nickName === userInfo.nickname && isLogin && (
                  <a
                    className="z-1 ms-auto d-none d-md-block"
                    onClick={(e) => {
                      e.preventDefault();
                      openFoodModal('edit', post);
                    }}
                  >
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 3.00023H5C4.46957 3.00023 3.96086 3.21094 3.58579 3.58601C3.21071 3.96109 3 4.46979 3 5.00023V19.0002C3 19.5307 3.21071 20.0394 3.58579 20.4144C3.96086 20.7895 4.46957 21.0002 5 21.0002H19C19.5304 21.0002 20.0391 20.7895 20.4142 20.4144C20.7893 20.0394 21 19.5307 21 19.0002V12.0002M18.375 2.62523C18.7728 2.2274 19.3124 2.00391 19.875 2.00391C20.4376 2.00391 20.9772 2.2274 21.375 2.62523C21.7728 3.02305 21.9963 3.56262 21.9963 4.12523C21.9963 4.68784 21.7728 5.2274 21.375 5.62523L12.362 14.6392C12.1245 14.8765 11.8312 15.0501 11.509 15.1442L8.636 15.9842C8.54995 16.0093 8.45874 16.0108 8.37191 15.9886C8.28508 15.9663 8.20583 15.9212 8.14245 15.8578C8.07907 15.7944 8.03389 15.7151 8.01164 15.6283C7.9894 15.5415 7.9909 15.4503 8.016 15.3642L8.856 12.4912C8.95053 12.1693 9.12453 11.8763 9.362 11.6392L18.375 2.62523Z"
                        stroke="black"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                )}
              </div>
              <p className="text-gray-700 text-truncate mb-5">{post.content}</p>
              <div className="d-flex gap-7 text-black">
                <div className="d-flex align-items-center">
                  <svg
                    className="me-2"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.06251 12.3479C1.97916 12.1234 1.97916 11.8764 2.06251 11.6519C2.87421 9.68373 4.25202 8.00091 6.02128 6.81677C7.79053 5.63263 9.87155 5.00049 12.0005 5.00049C14.1295 5.00049 16.2105 5.63263 17.9797 6.81677C19.749 8.00091 21.1268 9.68373 21.9385 11.6519C22.0218 11.8764 22.0218 12.1234 21.9385 12.3479C21.1268 14.316 19.749 15.9988 17.9797 17.183C16.2105 18.3671 14.1295 18.9993 12.0005 18.9993C9.87155 18.9993 7.79053 18.3671 6.02128 17.183C4.25202 15.9988 2.87421 14.316 2.06251 12.3479Z"
                      stroke="black"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.0005 14.9999C13.6574 14.9999 15.0005 13.6567 15.0005 11.9999C15.0005 10.343 13.6574 8.99987 12.0005 8.99987C10.3437 8.99987 9.00051 10.343 9.00051 11.9999C9.00051 13.6567 10.3437 14.9999 12.0005 14.9999Z"
                      stroke="black"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {post.viewCount}
                </div>
                <div className="d-flex align-items-center">
                  <svg
                    className="me-2"
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
                  {post.commentCount}
                </div>
                <div className="d-flex align-items-center">
                  <svg
                    className="me-2"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 10V22M15 5.88L14 10H19.83C20.1405 10 20.4467 10.0723 20.7244 10.2111C21.0021 10.35 21.2437 10.5516 21.43 10.8C21.6163 11.0484 21.7422 11.3367 21.7977 11.6422C21.8533 11.9477 21.8369 12.2619 21.75 12.56L19.42 20.56C19.2988 20.9754 19.0462 21.3404 18.7 21.6C18.3538 21.8596 17.9327 22 17.5 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V12C2 11.4696 2.21071 10.9609 2.58579 10.5858C2.96086 10.2107 3.46957 10 4 10H6.76C7.13208 9.9998 7.49674 9.89581 7.81296 9.69972C8.12917 9.50363 8.38442 9.22321 8.55 8.89L12 2C12.4716 2.00584 12.9357 2.11817 13.3578 2.3286C13.7799 2.53902 14.1489 2.84211 14.4374 3.2152C14.7259 3.5883 14.9263 4.02176 15.0237 4.4832C15.1212 4.94464 15.113 5.42213 15 5.88Z"
                      stroke="#121212"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {post.likeCount}
                </div>
              </div>
            </div>
            <PostCardActionsDesktop
              userId={post.user?.id}
              postRoute={postRoute}
              isAvailable={isAvailable}
              isFollow={isFollow}
              isLike={isLike}
              handelChangeFollow={handelChangeFollow}
              handleChangeLike={handleChangeLike}
            />
            <PostCardActionsMobile
              userId={post.user?.id}
              postRoute={postRoute}
              isAvailable={isAvailable}
              isFollow={isFollow}
              isLike={isLike}
              handelChangeFollow={handelChangeFollow}
              handleChangeLike={handleChangeLike}
            />
          </div>
        </div>
        <div className="post-card-img col-lg-3 px-4 mb-7 mb-lg-0">
          <PostCardImage
            id={post.id}
            title={post.title}
            imageUrl={post.imagesUrl?.[0]}
            variant={variant}
          />
        </div>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
    createdPostDate: PropTypes.string,
    commentCount: PropTypes.number,
    likeCount: PropTypes.number,
    viewCount: PropTypes.number,
    redeemCode: PropTypes.string,
    imagesUrl: PropTypes.arrayOf(PropTypes.string),
    pickup: PropTypes.shape({
      city: PropTypes.string,
      district: PropTypes.string,
      address: PropTypes.string,
      time: PropTypes.string,
    }),
    food: PropTypes.shape({
      dietType: PropTypes.string,
      expiryDate: PropTypes.string,
      isPastBestBefore: PropTypes.string,
      name: PropTypes.string,
      restQuantity: PropTypes.number,
      saveMethod: PropTypes.string,
      totalQuantity: PropTypes.number,
      type: PropTypes.string,
    }),
    userId: PropTypes.number,
    user: PropTypes.shape({
      avatarUrl: PropTypes.string,
      email: PropTypes.string,
      id: PropTypes.number,
      introduce: PropTypes.string,
      name: PropTypes.string,
      nickName: PropTypes.string,
      pickupCity: PropTypes.string,
      pickupDistrict: PropTypes.string,
    }),
  }),
  variant: PropTypes.oneOf(['default', 'otherPost']),
};

export default PostCard;
