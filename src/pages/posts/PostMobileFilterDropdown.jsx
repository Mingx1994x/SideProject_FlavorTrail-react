import usePostFilterParams from '@/hooks/usePostFilterParams';

const filterOptions = [
  {
    name: '全部貼文',
    tag: 'all',
    icon: (
      <svg
        className="align-baseline"
        width={16}
        height={16}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 2V6M12 2V6M16 2V6M8 10H14M8 14H16M8 18H13M6 4H18C19.1046 4 20 4.89543 20 6V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V6C4 4.89543 4.89543 4 6 4Z"
          stroke="#484848"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: '熱門貼文',
    tag: 'hot',
    icon: (
      <svg
        className="align-baseline"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.66634 9.66667C6.10837 9.66667 6.53229 9.49107 6.84485 9.17851C7.15741 8.86595 7.33301 8.44203 7.33301 8C7.33301 7.08 6.99967 6.66667 6.66634 6C5.95167 4.57133 6.51701 3.29733 7.99967 2C8.33301 3.66667 9.33301 5.26667 10.6663 6.33333C11.9997 7.4 12.6663 8.66667 12.6663 10C12.6663 10.6128 12.5456 11.2197 12.3111 11.7859C12.0766 12.352 11.7328 12.8665 11.2995 13.2998C10.8662 13.7332 10.3517 14.0769 9.78553 14.3114C9.21934 14.546 8.61251 14.6667 7.99967 14.6667C7.38684 14.6667 6.78 14.546 6.21382 14.3114C5.64763 14.0769 5.13318 13.7332 4.69984 13.2998C4.2665 12.8665 3.92276 12.352 3.68824 11.7859C3.45371 11.2197 3.33301 10.6128 3.33301 10C3.33301 9.23133 3.62167 8.47067 3.99967 8C3.99967 8.44203 4.17527 8.86595 4.48783 9.17851C4.80039 9.49107 5.22431 9.66667 5.66634 9.66667Z"
          stroke="#484848"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: '最新貼文',
    tag: 'latest',
    icon: (
      <svg
        className="align-baseline"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_188_5464)">
          <path
            d="M5.52651 8.47355L3.79317 10.2069C3.58148 10.0903 3.34696 10.0211 3.10586 10.0041C2.86476 9.98715 2.62286 10.0228 2.39693 10.1087C2.171 10.1945 1.96644 10.3285 1.79744 10.5013C1.62844 10.6741 1.49904 10.8815 1.41822 11.1093C1.3374 11.3371 1.30708 11.5797 1.32937 11.8204C1.35166 12.0611 1.42603 12.294 1.54732 12.503C1.66861 12.7121 1.83391 12.8923 2.03177 13.0311C2.22963 13.1699 2.45532 13.264 2.69317 13.3069C2.73985 13.5416 2.83654 13.7636 2.97667 13.9576C3.11681 14.1517 3.29709 14.3133 3.50526 14.4314C3.71344 14.5496 3.94461 14.6215 4.18306 14.6423C4.42152 14.663 4.66165 14.6322 4.88713 14.5519C5.11261 14.4716 5.31814 14.3437 5.48974 14.1768C5.66135 14.0099 5.795 13.8081 5.8816 13.5849C5.9682 13.3618 6.00573 13.1226 5.99162 12.8837C5.97751 12.6447 5.9121 12.4116 5.79984 12.2002L7.52651 10.4735M10.2665 10.4202C9.26875 10.7403 8.27894 10.7481 7.44274 10.4423C6.60654 10.1366 5.96812 9.53346 5.62144 8.72175C5.27477 7.91003 5.23814 6.9326 5.51696 5.9333C5.79578 4.93399 6.37531 3.9656 7.17027 3.17064C7.96523 2.37569 8.93362 1.79615 9.93292 1.51733C10.9322 1.23852 11.9097 1.27514 12.7214 1.62182C13.5331 1.96849 14.1362 2.60691 14.442 3.44311C14.7477 4.27931 14.74 5.26912 14.4198 6.26688C13.9566 6.00266 13.3694 5.93693 12.7568 6.08077C12.1442 6.2246 11.5437 6.56921 11.0563 7.05664C10.5688 7.54407 10.2242 8.14458 10.0804 8.75716C9.93656 9.36974 10.0023 9.95702 10.2665 10.4202Z"
            stroke="#484848"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_188_5464">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    name: '追蹤貼文',
    latest: 'follow',
    icon: (
      <svg
        className="align-baseline"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.6663 9.33333C13.6597 8.36 14.6663 7.19333 14.6663 5.66667C14.6663 4.69421 14.28 3.76158 13.5924 3.07394C12.9048 2.38631 11.9721 2 10.9997 2C9.82634 2 8.99967 2.33333 7.99967 3.33333C6.99967 2.33333 6.17301 2 4.99967 2C4.02721 2 3.09458 2.38631 2.40695 3.07394C1.71932 3.76158 1.33301 4.69421 1.33301 5.66667C1.33301 7.2 2.33301 8.36667 3.33301 9.33333L7.99967 14L12.6663 9.33333Z"
          stroke="#484848"
          strokeWidth="1.5"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];
const PostMobileFilterDropdown = () => {
  const { filterParams: filter, updateParams } = usePostFilterParams();
  const selectFilterSortName = filterOptions.find(
    (option) => option.tag === filter.sort,
  ).name;
  return (
    <div className="account-nav dropdown position-relative d-lg-none mt-10 mb-13">
      <h1 className="d-flex align-items-center fs-1 fw-bolder">
        {selectFilterSortName}
        <button
          className="dropdown-btn d-flex align-items-center justify-content-between p-2 rounded-3 bg-white rounded-circle border-0 ms-2"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="true"
        >
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="dropdown-arrow"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="black"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <ul
          className="dropdown-menu custom-dropdown-menu"
          data-bs-popper="static"
        >
          {filterOptions.map(({ name, tag, icon }) => (
            <button
              key={name}
              onClick={() => updateParams({ sort: tag })}
              type="button"
              className={`filter-btn btn w-100 fw-normal text-gray-700 btn-gray-200 py-2 px-3 d-flex justify-content-start align-items-center ${
                filter?.sort === tag ? 'active' : ''
              }`}
              style={{
                height: 40,
              }}
            >
              <span style={{ width: 16, height: 16 }} className="me-2">
                {icon}
              </span>
              {name}
            </button>
          ))}
        </ul>
      </h1>
    </div>
  );
};

export default PostMobileFilterDropdown;
