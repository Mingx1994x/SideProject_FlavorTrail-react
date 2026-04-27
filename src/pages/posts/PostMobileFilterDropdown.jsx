import usePostFilterParams from '@/hooks/usePostFilterParams';
import { postSortOptions } from '@/data/postSortOptions';

const PostMobileFilterDropdown = () => {
  const { filterParams: filter, updateParams } = usePostFilterParams();
  const selectFilterSortName = postSortOptions.find(
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
          {postSortOptions.map(({ name, tag, icon }) => (
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
