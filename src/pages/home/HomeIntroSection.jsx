import PropTypes from 'prop-types';
import { Link } from 'react-router';

const HomeIntroSection = ({ startTriggerRef }) => {
  return (
    <section className="intro container" ref={startTriggerRef}>
      <div className="intro-title row d-flex flex-xxl-row flex-nowrap flex-column justify-content-center justify-content-xxl-between align-items-center mt-xxl-0 mt-20 mb-lg-19">
        <h3 className="mb-xxl-0 mb-auto me-auto mt-xxl-0 mt-8 col-xxl-4 text-primary px-xxl-0">
          WHO <br className="d-block d-xxl-none" />
          ARE (
        </h3>
        <div className="path-section-sm d-block d-xxl-none px-0">
          <Link className="path-sm" to="/about-us">
            <svg
              width="414"
              height="306"
              viewBox="0 0 414 306"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M234.639 17.7625L230.801 10.8203L223.826 14.5987L98.5989 82.4387L92.1806 85.9157L95.0567 92.6248L102.341 109.618L97.1288 112.44L100.208 119.229L106.796 133.751L18.1336 176.966L11.2562 180.318L14.2982 187.338L32.7664 229.958L35.7642 236.876L42.8477 234.293L106.991 210.901L112.873 226.268L115.513 233.166L122.6 231.083L141.725 225.463L151.951 249.521L154.845 256.33L161.859 253.976L179.638 248.009L178.692 248.9L184.292 254.726L216.631 288.366L222.12 294.076L227.884 288.645L326.614 195.632L331.34 191.18L327.956 185.639L321.055 174.339L331.145 169.269L337.723 165.963L334.975 159.133L326.29 137.554L396.25 105.303L403.272 102.066L400.275 94.9372L382.266 52.0999L379.312 45.0729L372.151 47.6845L326.352 64.386L316.392 41.0998L313.441 34.1994L306.366 36.7048L255.138 54.8469L234.639 17.7625Z"
                fill="#00503F"
                stroke="#00503F"
                strokeWidth="16"
              />
            </svg>
          </Link>
        </div>
        <div className="path-section d-none d-xxl-block col-xxl-4 px-0">
          <Link className="path" to="/about-us">
            <div className="card-hover w-100 h-100 position-absolute">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40 0L10 6.69388L17.6562 12.5714L0 27.2653C0 27.2653 4.58333 28.6946 8.4375 31.8367C12.2917 34.9788 14.8958 40 14.8958 40L28.4375 21.2245L34.5312 29.7143L40 0Z"
                  fill="#ffffff"
                />
              </svg>
              <div className="fs-4 fw-medium text-white mt-5">瞭解更多</div>
            </div>
            <div className="path-text">
              <p
                className="stroke"
                data-stroke="在餘味尋蹤，我們致力於減少食物浪費，並將多的美味食物分享給有需要的人。無論你是想分享家中的美食，還是希望尋找驚喜的味道，我們的平台都能滿足你的需求。"
              >
                在餘味尋蹤，我們致力於減少食物浪費，並將多的美味食物分享給有需要的人。無論你是想分享家中的美食，還是希望尋找驚喜的味道，我們的平台都能滿足你的需求。
              </p>
            </div>
            <svg
              width="725"
              height="535"
              viewBox="0 0 725 535"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M408.261 22.9182L403.46 14.1458L394.688 18.9464L167.78 143.118L159.839 147.463L163.375 155.797L178.249 190.847L176.994 191.534L168.884 195.97L172.671 204.403L186.478 235.15L21.8094 316.225L13.295 320.417L17.0364 329.138L50.5002 407.148L54.2416 415.87L63.147 412.589L183.48 368.262L195.726 400.583L199.018 409.27L207.923 406.626L246.369 395.213L266.471 442.986L270.082 451.568L278.9 448.578L330.797 430.982L324.505 436.97L317.261 443.864L324.155 451.108L382.752 512.682L389.646 519.926L396.89 513.032L575.786 342.785L581.607 337.245L577.449 330.367L562.31 305.325L585.059 293.778L593.203 289.644L589.823 281.16L572.433 237.51L703.162 176.632L711.859 172.582L708.173 163.725L675.541 85.317L671.855 76.4594L662.852 79.7757L575.918 111.8L556.19 65.2097L552.507 56.5114L543.613 59.6931L447.25 94.1661L408.261 22.9182Z"
                fill="#00503F"
                stroke="#00503F"
                strokeWidth="20"
              />
            </svg>
          </Link>
        </div>
        <h3 className="mt-xxl-0 mt-auto ms-auto col-xxl-3 text-primary text-end text-xxl-start px-xxl-0">
          ) WE ?
        </h3>
      </div>
      <div className="d-lg-none d-block mt-16 pb-20">
        <p className="mb-8 text-center fs-5 fw-medium text-primary">
          在餘味尋蹤，我們致力於減少食物浪費，並將多的美味食物分享給有需要的人。無論你是想分享家中的美食，還是希望尋找驚喜的味道，我們的平台都能滿足你的需求。
        </p>
        <Link
          to="/about-us"
          className="intro-btn d-flex align-items-center justify-content-center 
        gap-5 py-5 px-7 w-100 
        border border-2 border-primary rounded-3 fs-4 fw-medium"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40 0L10 6.69388L17.6562 12.5714L0 27.2653C0 27.2653 4.58333 28.6946 8.4375 31.8367C12.2917 34.9788 14.8958 40 14.8958 40L28.4375 21.2245L34.5312 29.7143L40 0Z"
              fill="#00503F"
              className="me-5"
            />
          </svg>
          瞭解更多
        </Link>
      </div>
    </section>
  );
};

HomeIntroSection.propTypes = {
  startTriggerRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default HomeIntroSection;
