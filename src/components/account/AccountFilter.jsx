import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { iconSearchUrl } from '@/data/imagesPath';

function AccountFilter({
  setFilter,
  filter,
  postData = [],
  appData = [],
  title,
  placeholder,
  filterOptions = [],
}) {
  const allPostsCount = postData.length;

  const today = dayjs().startOf('day');

  const expiredPostsCount = postData.filter((item) => {
    return today.diff(dayjs(item.createdPostDate).startOf('day'), 'day') > 30;
  }).length;

  const notExpiredPostsCount = postData.filter((item) => {
    return today.diff(dayjs(item.createdPostDate).startOf('day'), 'day') <= 30;
  }).length;

  const applyPostsCount = appData.filter(
    (item) => item.type === '申請通知',
  ).length;
  const receivePostsCount = appData.filter(
    (item) => item.type === '領取通知',
  ).length;
  const commentPostsCount = appData.filter(
    (item) => item.type === '評價通知',
  ).length;

  const scrollContainerRef = useRef(null);
  const searchInputRef = useRef(null);

  const filterOptionDetails = {
    all: {
      text: '全部',
      svg: null,
      count: filterOptions.includes('all')
        ? allPostsCount || appData.length
        : 0,
    },
    notExpired: {
      text: '未過期',
      svg: (
        <path
          d="M13.3327 4L5.99935 11.3333L2.66602 8"
          stroke={filter === 'notExpired' ? 'white' : '#484848'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
      count: notExpiredPostsCount,
    },
    expired: {
      text: '已過期',
      svg: (
        <g clipPath="url(#clip0_228_3113)">
          <path
            d="M8.00065 1.33337V4.00004M10.8007 5.20004L12.734 3.26671M12.0007 8.00004H14.6673M10.8007 10.8L12.734 12.7334M8.00065 12V14.6667M3.26732 12.7334L5.20065 10.8M1.33398 8.00004H4.00065M3.26732 3.26671L5.20065 5.20004"
            stroke={filter === 'expired' ? 'white' : '#484848'}
            strokeOpacity="0.533333"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      ),
      count: expiredPostsCount,
    },
    apply: {
      text: '申請通知',
      svg: null,
      count: applyPostsCount,
    },
    receive: {
      text: '領取通知',
      svg: null,
      count: receivePostsCount,
    },
    comment: {
      text: '評價通知',
      svg: null,
      count: commentPostsCount,
    },
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    const searchInput = searchInputRef.current;
    if (container && searchInput) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          searchInput.classList.toggle('border-white', entry.isIntersecting);
        },
        { threshold: 0 },
      );
      observer.observe(searchInput);
      return () => observer.unobserve(searchInput);
    }
  }, []);

  return (
    <div className="container">
      <h2 className="fw-bolder text-black mb-7 d-none d-lg-block">{title}</h2>
      <div className="posts-wrap account-filter">
        <ul
          ref={scrollContainerRef}
          className="g-2 mt-2 mb-2 d-flex align-items-center gap-2 posts-menu 
          d-lg-flex account-filter-overflow"
        >
          {filterOptions.map((option) => (
            <li
              className="col-2 list-group-item border-0 p-0 w-auto"
              key={option}
            >
              <button
                type="button"
                onClick={() => setFilter(option)}
                className={`btn py-3 px-5 text-start w-100 text-nowrap btn-sm rounded-3 d-flex align-items-center justify-content-between ${
                  filter === option ? 'btn-primary' : 'btn-light'
                }`}
              >
                {filterOptionDetails[option].svg && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {filterOptionDetails[option].svg}
                    <defs>
                      <clipPath id="clip0_228_3113">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                )}
                <span
                  className={`fs-6 ms-2 pe-12 ${
                    filter === option ? '' : 'text-gray-700'
                  }`}
                >
                  {filterOptionDetails[option].text}
                </span>
                <span
                  className={`badge-square text-primary rounded-circle fw-medium py-2 ${
                    filter === option ? 'bg-white' : 'bg-badge-color'
                  }`}
                >
                  {filterOptionDetails[option].count}
                </span>
              </button>
            </li>
          ))}
          <li className="list-group-item border-0 p-0 w-100 d-flex justify-content-between">
            <form className="d-flex w-100">
              <input
                ref={searchInputRef}
                className="form-control bg-white border-white py-4 px-5 posts-rounded"
                type="search"
                placeholder={placeholder}
                aria-label="Search"
              />
            </form>
            <img
              src={iconSearchUrl}
              alt="icon-search"
              className="bg-white rounded-end pe-5 "
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

AccountFilter.propTypes = {
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  postData: PropTypes.array,
  appData: PropTypes.array,
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  filterOptions: PropTypes.array,
};

export default AccountFilter;
