function EventBreadcrumb() {
  return (
    <>
      <nav
        aria-label="breadcrumb"
        className="container d-lg-block d-none nav-mt"
      >
        <ol className="breadcrumb  pt-7 mb-0 lh-xs">
          <li className="breadcrumb-item fw-bold text-primary">
            <a href="#">活動提案</a>
          </li>
          <li className="d-flex align-items-center px-5">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="#484848"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </li>
          <li
            className="breadcrumb-item text-gray-400 active"
            aria-current="page"
          >
            街友送餐活動
          </li>
        </ol>
      </nav>
    </>
  );
}

export default EventBreadcrumb;
