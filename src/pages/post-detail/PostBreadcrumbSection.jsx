import { Link } from 'react-router';
import PropTypes from 'prop-types';

const PostBreadcrumbSection = ({ title }) => {
  return (
    <header>
      <div className="container nav-mt">
        <nav
          className="pt-7 d-none d-lg-block"
          style={{
            '--bs-breadcrumb-divider':
              'url(data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M9%2018L15%2012L9%206%22%20stroke%3D%22%23484848%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E)',
          }}
          aria-label="breadcrumb"
        >
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/all-posts" className="link-primary fw-bold">
                所有貼文
              </Link>
            </li>
            <li
              className="breadcrumb-item active fw-bold text-gray-400 ps-5"
              aria-current="page"
            >
              {`分享${title}`}
            </li>
          </ol>
        </nav>
      </div>
    </header>
  );
};

PostBreadcrumbSection.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PostBreadcrumbSection;
