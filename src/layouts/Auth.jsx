import { Link, Outlet } from 'react-router';

import {
  decoLoginUrl1,
  decoLoginUrl2,
  decoLoginUrl3,
  imgHomeURl2,
  logoUrl,
} from '../data/imagesPath';
const Auth = () => {
  return (
    <section className="login container mt-7 mb-18">
      <Link to="/" className="mb-10">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.0007 31.6666L8.33398 19.9999M8.33398 19.9999L20.0007 8.33325M8.33398 19.9999H31.6673"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
      <div className="login-content row align-items-center justify-content-between">
        <div className="col-lg-6 d-none d-lg-block">
          <div className="position-relative h-100 w-100">
            <Link
              to="/"
              className="footer-logo position-absolute top-0 start-0 z-2"
            >
              <img
                src={logoUrl}
                alt="logo"
                style={{
                  width: '174px',
                  height: '174px',
                }}
              />
            </Link>
            <img
              className="login-img object-fit-cover"
              src={imgHomeURl2}
              alt="img_home2"
            />
            <div className="login-deco-1 position-absolute d-none d-lg-block">
              <img src={decoLoginUrl1} alt="login-deco1" />
            </div>
            <div className="login-deco-2 position-absolute d-none d-lg-block">
              <img src={decoLoginUrl2} alt="login-deco2" />
            </div>
            <div
              className="login-deco-3 position-absolute d-none d-lg-block"
              style={{
                width: '371px',
                height: '295px',
              }}
            >
              <div
                className="slogan fs-2 fw-bolder lh-1 position-absolute z-2"
                style={{
                  width: '256px',
                  height: '136px',
                }}
              >
                <p>快樂齊分享，美味</p>
                <p className="vertical-text text-lg-vertical ms-auto">再出發</p>
              </div>
              <img src={decoLoginUrl3} alt="login-deco" />
            </div>
          </div>
        </div>

        <div className="col-lg-5">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Auth;
