import PropTypes from 'prop-types';

const PostMobileFoodInfo = ({ food, pickup }) => {
  return (
    <div className="bg-white rounded-3 p-5 mb-3">
      <div className="row gx-0 mb-7">
        <div className="col text-center border-end">
          <small>總共份量</small>
          <h3>{food?.totalQuantity}</h3>
        </div>
        <div className="col text-center border-end">
          <small>已領取</small>
          <h3>{food?.totalQuantity - food?.restQuantity}</h3>
        </div>
        <div className="col text-center">
          <small>待領取</small>
          <h3>{food?.restQuantity}</h3>
        </div>
      </div>
      <div className="row py-7 gx-0 d-lg-flex d-none">
        <button
          type="button"
          className="btn btn-dark d-flex align-items-center justify-content-center"
        >
          <span className="me-2">我要領取</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1246_2155)">
              <path
                d="M11.9997 7.3335V4.00016C11.9997 3.64654 11.8593 3.3074 11.6092 3.05735C11.3592 2.80731 11.02 2.66683 10.6664 2.66683C10.3128 2.66683 9.97365 2.80731 9.7236 3.05735C9.47355 3.3074 9.33308 3.64654 9.33308 4.00016M9.33308 6.66683V2.66683C9.33308 2.31321 9.1926 1.97407 8.94255 1.72402C8.6925 1.47397 8.35337 1.3335 7.99974 1.3335C7.64612 1.3335 7.30698 1.47397 7.05693 1.72402C6.80689 1.97407 6.66641 2.31321 6.66641 2.66683V4.00016M6.66641 4.00016V7.00016M6.66641 4.00016C6.66641 3.64654 6.52593 3.3074 6.27589 3.05735C6.02584 2.80731 5.6867 2.66683 5.33308 2.66683C4.97945 2.66683 4.64032 2.80731 4.39027 3.05735C4.14022 3.3074 3.99974 3.64654 3.99974 4.00016V9.3335M11.9997 5.3335C11.9997 4.97987 12.1402 4.64074 12.3903 4.39069C12.6403 4.14064 12.9795 4.00016 13.3331 4.00016C13.6867 4.00016 14.0258 4.14064 14.2759 4.39069C14.5259 4.64074 14.6664 4.97987 14.6664 5.3335V9.3335C14.6664 10.748 14.1045 12.1045 13.1043 13.1047C12.1041 14.1049 10.7476 14.6668 9.33308 14.6668H7.99974C6.13308 14.6668 4.99974 14.0935 4.00641 13.1068L1.60641 10.7068C1.37703 10.4528 1.25413 10.1203 1.26316 9.77812C1.27218 9.43597 1.41244 9.1104 1.65489 8.8688C1.89734 8.62721 2.22341 8.48811 2.56559 8.48029C2.90777 8.47248 3.23985 8.59656 3.49308 8.82683L4.66641 10.0002"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_1246_2155">
                <rect width="16" height="16" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      <div className="py-7 border-top border-bottom border-gray-200 gx-0">
        <div className="row justify-content-between gx-0 mb-2">
          <div className="col">食物名稱</div>
          <div className="col text-end">{food?.name}</div>
        </div>
        <div className="row justify-content-between gx-0 mb-2">
          <div className="col">取餐地點</div>
          <div className="col text-end">{`${pickup?.city} / ${pickup?.district}`}</div>
        </div>
        <div className="row justify-content-between gx-0 mb-2">
          <div className="col">取餐時間</div>
          <div className="col text-end">{pickup?.time}</div>
        </div>
        <div className="row justify-content-between gx-0 mb-2">
          <div className="col">食品有效期限</div>
          <div className="col text-end">{food?.expiryDate}</div>
        </div>
      </div>
      <div className="row pt-7 pt-5">
        <div className="d-flex flex-wrap gap-4">
          {food?.dietType && (
            <h6>
              <svg
                className="me-1"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.99967 5.8335C5.18377 5.8335 5.33301 5.68426 5.33301 5.50016C5.33301 5.31607 5.18377 5.16683 4.99967 5.16683C4.81558 5.16683 4.66634 5.31607 4.66634 5.50016C4.66634 5.68426 4.81558 5.8335 4.99967 5.8335Z"
                  fill="black"
                />
                <path
                  d="M8.39034 2.22416C8.14035 1.9741 7.80127 1.83357 7.44767 1.8335H2.66634C2.31272 1.8335 1.97358 1.97397 1.72353 2.22402C1.47348 2.47407 1.33301 2.81321 1.33301 3.16683V7.94816C1.33308 8.30176 1.47361 8.64084 1.72367 8.89083L7.52634 14.6935C7.82935 14.9946 8.23917 15.1636 8.66634 15.1636C9.09351 15.1636 9.50333 14.9946 9.80634 14.6935L14.193 10.3068C14.4941 10.0038 14.6631 9.594 14.6631 9.16683C14.6631 8.73966 14.4941 8.32984 14.193 8.02683L8.39034 2.22416Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.99967 5.8335C5.18377 5.8335 5.33301 5.68426 5.33301 5.50016C5.33301 5.31607 5.18377 5.16683 4.99967 5.16683C4.81558 5.16683 4.66634 5.31607 4.66634 5.50016C4.66634 5.68426 4.81558 5.8335 4.99967 5.8335Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="fw-bold">{food?.dietType}</span>
            </h6>
          )}
          {food?.type && (
            <h6>
              <svg
                className="me-1"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.99967 5.8335C5.18377 5.8335 5.33301 5.68426 5.33301 5.50016C5.33301 5.31607 5.18377 5.16683 4.99967 5.16683C4.81558 5.16683 4.66634 5.31607 4.66634 5.50016C4.66634 5.68426 4.81558 5.8335 4.99967 5.8335Z"
                  fill="black"
                />
                <path
                  d="M8.39034 2.22416C8.14035 1.9741 7.80127 1.83357 7.44767 1.8335H2.66634C2.31272 1.8335 1.97358 1.97397 1.72353 2.22402C1.47348 2.47407 1.33301 2.81321 1.33301 3.16683V7.94816C1.33308 8.30176 1.47361 8.64084 1.72367 8.89083L7.52634 14.6935C7.82935 14.9946 8.23917 15.1636 8.66634 15.1636C9.09351 15.1636 9.50333 14.9946 9.80634 14.6935L14.193 10.3068C14.4941 10.0038 14.6631 9.594 14.6631 9.16683C14.6631 8.73966 14.4941 8.32984 14.193 8.02683L8.39034 2.22416Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.99967 5.8335C5.18377 5.8335 5.33301 5.68426 5.33301 5.50016C5.33301 5.31607 5.18377 5.16683 4.99967 5.16683C4.81558 5.16683 4.66634 5.31607 4.66634 5.50016C4.66634 5.68426 4.81558 5.8335 4.99967 5.8335Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="fw-bold">{food?.type}</span>
            </h6>
          )}
          {food?.saveMethod && (
            <h6>
              <svg
                className="me-1"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.99967 5.8335C5.18377 5.8335 5.33301 5.68426 5.33301 5.50016C5.33301 5.31607 5.18377 5.16683 4.99967 5.16683C4.81558 5.16683 4.66634 5.31607 4.66634 5.50016C4.66634 5.68426 4.81558 5.8335 4.99967 5.8335Z"
                  fill="black"
                />
                <path
                  d="M8.39034 2.22416C8.14035 1.9741 7.80127 1.83357 7.44767 1.8335H2.66634C2.31272 1.8335 1.97358 1.97397 1.72353 2.22402C1.47348 2.47407 1.33301 2.81321 1.33301 3.16683V7.94816C1.33308 8.30176 1.47361 8.64084 1.72367 8.89083L7.52634 14.6935C7.82935 14.9946 8.23917 15.1636 8.66634 15.1636C9.09351 15.1636 9.50333 14.9946 9.80634 14.6935L14.193 10.3068C14.4941 10.0038 14.6631 9.594 14.6631 9.16683C14.6631 8.73966 14.4941 8.32984 14.193 8.02683L8.39034 2.22416Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.99967 5.8335C5.18377 5.8335 5.33301 5.68426 5.33301 5.50016C5.33301 5.31607 5.18377 5.16683 4.99967 5.16683C4.81558 5.16683 4.66634 5.31607 4.66634 5.50016C4.66634 5.68426 4.81558 5.8335 4.99967 5.8335Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="fw-bold">{food?.saveMethod}</span>
            </h6>
          )}
        </div>
      </div>
    </div>
  );
};

PostMobileFoodInfo.propTypes = {
  food: PropTypes.shape({
    dietType: PropTypes.string.isRequired,
    expiryDate: PropTypes.string.isRequired,
    isPastBestBefore: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    restQuantity: PropTypes.number.isRequired,
    saveMethod: PropTypes.string.isRequired,
    totalQuantity: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  }),
  pickup: PropTypes.shape({
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    district: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }),
};

export default PostMobileFoodInfo;
