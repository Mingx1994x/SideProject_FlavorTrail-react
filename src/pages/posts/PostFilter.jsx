import PropTypes from 'prop-types';
import usePostFilterParams from '@/hooks/usePostFilterParams';
import useFormSelectOptions from '@/hooks/useFormSelectOptions';
import { postSortOptions } from '@/data/postSortOptions';

const defaultFilter = {
  sort: 'all',
  location: '',
  category: '',
};

const PostFilter = ({ postLength }) => {
  const { cityData, foodType } = useFormSelectOptions();
  const { filterParams: filter, updateParams } = usePostFilterParams();
  const handleTagsFilter = (sort) => {
    updateParams({
      sort,
    });
  };
  const handleCityFilter = (e, location) => {
    e.preventDefault();
    updateParams({
      location,
    });
  };
  const handleFoodTypeFilter = (e, category) => {
    e.preventDefault();
    updateParams({
      category,
    });
  };
  const handleClearFilter = () => {
    updateParams(defaultFilter);
  };

  return (
    <div className="row flex-lg-nowrap justify-content-between align-items-center bg-white rounded-3 p-3">
      {/*貼文類型篩選*/}
      <div className="col-lg-auto px-0">
        {/* 大螢幕時顯示按鈕群組 */}
        <div className="d-none d-lg-block">
          <div className="d-flex align-items-stretch bg-light rounded-3">
            {postSortOptions.map(({ name, tag, icon }) => (
              <button
                key={name}
                onClick={() => handleTagsFilter(tag)}
                type="button"
                className={`filter-btn btn fw-normal text-gray-700 btn-gray-200 py-2 px-3 d-flex justify-content-center align-items-center ${
                  filter?.sort === tag ? 'active' : ''
                }`}
                style={{
                  width: 112,
                  height: 40,
                }}
              >
                <span style={{ width: 16, height: 16 }} className="me-2">
                  {icon}
                </span>
                {name}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="col-auto d-flex justify-content-lg-between flex-grow-1 px-0">
        {/*貼文地理位置 & 美食類型篩選*/}
        <div className="d-flex flex-grow-1">
          <div className="me-2 mx-lg-2">
            <div className="dropdown position-relative">
              <button
                className="dropdown-btn d-flex align-items-center justify-content-between py-1 px-3 rounded-3 border-0"
                type="button"
                data-bs-toggle="dropdown"
                style={{ width: 116, height: 40 }}
              >
                {filter?.location ? filter.location : '地理位置'}
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ms-5 dropdown-arrow"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="black"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <ul className="dropdown-menu custom-dropdown-menu position-absolute overflow-y-scroll scrollbar-max-height hide-scrollbar">
                {cityData &&
                  cityData.map((city) => (
                    <li key={city.id}>
                      <a
                        onClick={(e) => handleCityFilter(e, city.name)}
                        className={`dropdown-item ${filter.location === city.name ? 'active' : ''}`}
                        href="#"
                      >
                        {city.name}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="dropdown position-relative">
            <button
              className="dropdown-btn d-flex align-items-center justify-content-between py-1 px-3 rounded-3 border-0"
              type="button"
              data-bs-toggle="dropdown"
              style={{ width: 116, height: 40 }}
            >
              {filter?.category ? filter.category : '美食類型'}
              <svg
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ms-5 dropdown-arrow"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <ul className="dropdown-menu custom-dropdown-menu position-absolute overflow-y-scroll scrollbar-max-height hide-scrollbar">
              {foodType &&
                foodType.map((food) => (
                  <li key={food.id}>
                    <a
                      onClick={(e) => handleFoodTypeFilter(e, food.type)}
                      className={`dropdown-item ${filter.category === food.type ? 'active' : ''}`}
                      href="#"
                    >
                      {food.type}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
          <div className="d-lg-none d-flex align-items-center">
            <a
              href="#"
              className="btn btn-gray-200 justify-content-center align-items-center p-3 ms-2 rounded-3 pe-none"
              style={{ width: 40, height: 40 }}
            >
              {postLength ? postLength : '0'}
            </a>
            <button
              type="button"
              onClick={handleClearFilter}
              className="clear-btn d-flex btn btn-gray-200 justify-content-center text-center align-items-center p-3 mx-3 rounded-3"
              style={{ height: 40 }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.00033 9.33317L2.66699 5.99984M2.66699 5.99984L6.00033 2.6665M2.66699 5.99984H9.66699C10.1485 5.99984 10.6253 6.09468 11.0702 6.27895C11.515 6.46321 11.9192 6.7333 12.2597 7.07378C12.6002 7.41426 12.8703 7.81847 13.0546 8.26333C13.2388 8.70819 13.3337 9.18499 13.3337 9.6665C13.3337 10.148 13.2388 10.6248 13.0546 11.0697C12.8703 11.5145 12.6002 11.9187 12.2597 12.2592C11.9192 12.5997 11.515 12.8698 11.0702 13.0541C10.6253 13.2383 10.1485 13.3332 9.66699 13.3332H7.33366"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        {/*數字 & 重置*/}
        <div className="d-flex align-items-center">
          <a
            href="#"
            className="d-none d-lg-flex btn btn-gray-200 justify-content-center align-items-center p-3 ms-2 rounded-3 pe-none"
            style={{ width: 40, height: 40 }}
            aria-label="Page 1"
          >
            {postLength ? postLength : '0'}
          </a>
          <button
            type="button"
            onClick={handleClearFilter}
            className="clear-btn d-none d-lg-flex btn btn-gray-200 justify-content-center align-items-center p-3 px-7 ms-2 rounded-3"
            style={{ height: 40 }}
          >
            清空篩選
            <svg
              className="ms-2"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.00033 9.33317L2.66699 5.99984M2.66699 5.99984L6.00033 2.6665M2.66699 5.99984H9.66699C10.1485 5.99984 10.6253 6.09468 11.0702 6.27895C11.515 6.46321 11.9192 6.7333 12.2597 7.07378C12.6002 7.41426 12.8703 7.81847 13.0546 8.26333C13.2388 8.70819 13.3337 9.18499 13.3337 9.6665C13.3337 10.148 13.2388 10.6248 13.0546 11.0697C12.8703 11.5145 12.6002 11.9187 12.2597 12.2592C11.9192 12.5997 11.515 12.8698 11.0702 13.0541C10.6253 13.2383 10.1485 13.3332 9.66699 13.3332H7.33366"
                stroke="black"
                strokeWidth="1.5"
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

PostFilter.propTypes = {
  postLength: PropTypes.number,
};

export default PostFilter;
