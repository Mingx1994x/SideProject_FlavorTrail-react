import { useRef } from 'react';
import { Link, useNavigate } from 'react-router';
import { Modal } from 'bootstrap';
import { useSelector } from 'react-redux';
import ShareFoodModal from '../components/ShareFoodModal';

import CircleCTAButton from '../components/CircleCTAButton';
import HomeYummySection from './section/HomeYummySection';
import HomeFoodTalkSection from './section/HomeFoodTalkSection';
import AlertModal from '../components/AlertModal';
const Home = () => {
  const startTriggerRef = useRef();
  const endTriggerRef = useRef();
  const navigate = useNavigate();
  const { isLogin } = useSelector((state) => state.loginSlice.loginStatus);
  const openShareFoodModal = (e) => {
    e.preventDefault();
    if (isLogin) {
      const shareFoodModal = new Modal(
        document.getElementById('shareFoodModal')
      );
      shareFoodModal.show();
    } else {
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
    }
  };
  return (
    <>
      {/* bannerSection */}
      <section className="banner container">
        <div>
          <img
            src="./assets/images/home-1.jpg"
            alt="banner-img"
            className="mt-4 mt-lg-7 banner-cover"
          />
        </div>
        <div className="banner-content d-flex flex-lg-row flex-column-reverse">
          <div className="banner-logo">
            <img src="/images/Logo.png" alt="logo" />
          </div>
          <div className="d-flex flex-column ms-auto mb-auto align-items-end">
            <div className="slogan mt-lg-5 mt-4 fs-2 fw-bolder lh-1">
              <p>快樂齊分享，美味</p>
              <p className="vertical-text text-lg-vertical ms-auto">再出發</p>
            </div>
            <div className="banner-cta-group d-lg-block d-none fs-1 fw-bolder lh-xs">
              <span>（</span>
              <a href="#" className="banner-cta">
                附近美味
              </a>
              <span className="me-7">）</span>

              <span>（</span>
              <a
                onClick={(e) => openShareFoodModal(e)}
                href="#"
                className="banner-cta"
              >
                分享美味
              </a>
              <span>）</span>
            </div>
          </div>
          <ShareFoodModal />
        </div>
      </section>
      {/* introSection */}
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
      {/* awesomeSection */}
      <section className="awesome bg-deco-green pb-12">
        <div className="awesome-img text-end">
          <svg
            width="91"
            height="102"
            viewBox="0 0 91 102"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M63.8268 50.2421C47.8403 44.6549 37.9905 54.6045 46.3005 61.9338M82.0565 76.8258C78.9884 80.5129 73.1304 83.1158 62.7213 82.4975C52.8596 81.9117 47.7999 78.6256 45.6044 74.6826M82.0565 76.8258C83.53 83.5149 81.4155 96.6099 61.6863 94.8708C56.8236 94.4421 53.1971 93.3793 50.5382 91.9271M82.0565 76.8258C85.5183 72.6656 85.0738 66.3782 83.9422 62.4865M45.6044 74.6826C43.22 70.4004 44.4016 65.1577 46.3005 61.9338M45.6044 74.6826C43.3238 79.408 42.4093 87.4873 50.5382 91.9271M19.166 42.3814C20.779 42.3814 22.2496 42.1973 23.5961 41.8551M51.0473 91.7725C50.8779 91.8251 50.7082 91.8767 50.5382 91.9271M23.5961 41.8551C41.7292 37.2464 37.0414 2.55476 54.5226 4.04674C72.4765 5.57906 56.7164 39.3167 56.7164 39.3167C67.0726 37.8099 86.4112 40.1288 86.982 53.0003C87.1608 57.0305 85.9958 60.1488 83.9422 62.4865M23.5961 41.8551C23.5961 41.8551 21.7534 35.7945 16.652 35.4015C-1.8895 33.973 2.04501 94.2588 15.0055 97.5397C24.5984 99.968 27.3127 91.9979 27.3127 91.9979M27.3127 91.9979C24.4546 90.9501 22.0668 89.4527 20.1329 87.5404M27.3127 91.9979C33.4861 94.261 42.328 94.3638 50.5382 91.9271M83.9422 62.4865C75.6847 71.8866 55.092 69.6878 46.3005 61.9338"
              stroke="#96FF00"
              strokeWidth="8"
            />
          </svg>
          <img src="/images/home-2.jpg" alt="awesome-img" />
        </div>
        <div className="awesome-content container">
          <h2 className="fs-4 fs-lg-3 text-deco-bright-green fw-bold mb-5 mb-lg-7">
            WE ARE AWESOME
          </h2>
          <div className="row">
            <div className="col-9 col-lg-6">
              <div className="text-deco-bright-green d-flex flex-column">
                <h3 className="awesome-title fw-bolder d-block d-lg-none">
                  <div>我們</div>
                  <div>的</div>
                  行動超酷
                </h3>
                <h3 className="awesome-title fw-bolder d-none d-lg-block">
                  <div className="container">
                    <div className="row">
                      <div className="col-5 px-0 text-nowrap">
                        <div>我們</div>
                        <div>的</div>
                        <div>行動超</div>
                      </div>
                      <div className="col-7 position-relative">
                        <div className="awesome-deco position-absolute">
                          <div className="d-flex align-items-center">
                            <svg
                              className="ms-3 ms-xl-7 me-7"
                              width="277"
                              height="160"
                              viewBox="0 0 277 160"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M42.2805 7.48529L92.9388 0L107.737 49.0006L137.819 43.3736L144.42 55.7997L174.908 46.6981L196.744 62.4652L209.911 49.3469L237.554 43.5589L277 58.8945L258.246 107.151L234.505 97.9208L217.693 114.67L184.278 117.319L171.903 108.384L167.886 118.888L133.223 121.023L131.526 135.262L94.0444 138.545V154.631L42.8433 160L35.9762 127.604L0 118.862L19.6118 38.1283L42.2805 38.4618V7.48529Z"
                                fill="#96FF00"
                              />
                            </svg>
                            <div>酷</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </h3>
              </div>
            </div>
          </div>
          <div className="container">
            <ul className="awesome-card-list mt-16 mt-lg-19 list-unstyled row border border-2 border-deco-bright-green">
              <li className="awesome-card-item col-md-6 col-lg-3">
                <div className="awesome-card-item-content text-deco-bright-green text-center py-7">
                  <svg
                    width="81"
                    height="64"
                    viewBox="0 0 81 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M55.2471 0.0487529C48.9033 -0.927274 47.7934 13.0864 41.4502 12.1063C37.5589 11.5051 37.3673 5.2611 33.4721 5.83616C29.7567 6.38469 30.5535 11.2904 27.4875 13.4966C19.063 19.5585 8.56712 -3.07267 1.97299 6.53158C-7.60377 20.48 25.0663 21.3096 19.5157 32.099C16.4858 37.9885 4.45613 34.9094 5.55181 41.4636C7.19957 51.3205 23.5016 37.9462 29.6907 45.3428C33.8298 50.2894 27.9515 58.8853 33.8186 61.4434C40.6529 64.4234 40.6015 50.6886 47.5629 48.0311C59.9771 43.2922 68.7311 71.2533 78.541 62.1726C88.3741 53.0704 62.5642 41.9964 67.4541 29.4146C69.826 23.3115 81.5454 23.3353 79.1733 17.2322C76.6583 10.7617 66.3181 20.4193 60.5622 16.667C54.8412 12.9374 61.964 1.08219 55.2471 0.0487529Z"
                      fill="#96FF00"
                    />
                  </svg>
                  <div className="awesome-card-item-title fs-3 fw-bold pt-7">
                    輕鬆分享
                  </div>
                  <div className="awesome-card-item-text w-75 mx-auto pt-7">
                    只需幾步，即可將多出的食物分享給附近的朋友和鄰居，讓愛心傳遞。
                  </div>
                </div>
              </li>
              <li className="awesome-card-item col-md-6 col-lg-3 awesome-card-item-border">
                <div className="awesome-card-item-content text-deco-bright-green text-center py-7">
                  <svg
                    width="73"
                    height="64"
                    viewBox="0 0 73 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M57.2145 0.549635C49.3353 -3.33991 49.0672 14.658 40.3478 15.5474C30.8117 16.5201 29.8322 -3.74449 20.6612 2.06953C12.6573 7.14359 28.2818 17.6963 23.4811 25.8959C18.6046 34.225 0.0896261 24.4694 0.400349 34.1447C0.818318 47.1593 22.7781 29.6283 28.9553 39.2439C34.0779 47.2177 16.9094 58.8959 27.1799 63.5403C36.0913 67.57 32.2405 43.8005 41.9753 43.1433C48.7076 42.6888 52.3483 56.1267 57.2145 51.3921C62.5195 46.2305 49.955 41.7009 52.184 35.6444C55.0794 27.7778 72.6016 38.1875 72.6016 29.7953C72.6016 21.4031 56.8008 30.9181 52.184 23.9462C47.0419 16.1809 65.5142 4.64675 57.2145 0.549635Z"
                      fill="#96FF00"
                    />
                  </svg>
                  <div className="awesome-card-item-title fs-3 fw-bold pt-7">
                    快樂領取
                  </div>
                  <div className="awesome-card-item-text w-75 mx-auto pt-7">
                    快速找到附近可領取的美味食物，減少食物浪費，享受驚喜味道。
                  </div>
                </div>
              </li>
              <li className="awesome-card-item col-md-6 col-lg-3 awesome-card-item-border">
                <div className="awesome-card-item-content text-deco-bright-green text-center py-7">
                  <svg
                    width="81"
                    height="64"
                    viewBox="0 0 81 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M55.2471 0.0487529C48.9033 -0.927274 47.7934 13.0864 41.4502 12.1063C37.5589 11.5051 37.3673 5.2611 33.4721 5.83616C29.7567 6.38469 30.5535 11.2904 27.4875 13.4966C19.063 19.5585 8.56712 -3.07267 1.97299 6.53158C-7.60377 20.48 25.0663 21.3096 19.5157 32.099C16.4858 37.9885 4.45613 34.9094 5.55181 41.4636C7.19957 51.3205 23.5016 37.9462 29.6907 45.3428C33.8298 50.2894 27.9515 58.8853 33.8186 61.4434C40.6529 64.4234 40.6015 50.6886 47.5629 48.0311C59.9771 43.2922 68.7311 71.2533 78.541 62.1726C88.3741 53.0704 62.5642 41.9964 67.4541 29.4146C69.826 23.3115 81.5454 23.3353 79.1733 17.2322C76.6583 10.7617 66.3181 20.4193 60.5622 16.667C54.8412 12.9374 61.964 1.08219 55.2471 0.0487529Z"
                      fill="#96FF00"
                    />
                  </svg>
                  <div className="awesome-card-item-title fs-3 fw-bold pt-7">
                    社群互動
                  </div>
                  <div className="awesome-card-item-text w-75 mx-auto pt-7">
                    追蹤你喜愛的分享者，點讚和留言，建立一個溫暖有愛的美食社群。
                  </div>
                </div>
              </li>
              <li className="awesome-card-item col-md-6 col-lg-3 awesome-card-item-border">
                <div className="awesome-card-item-content text-deco-bright-green text-center py-7">
                  <svg
                    width="73"
                    height="64"
                    viewBox="0 0 73 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M57.2145 0.549635C49.3353 -3.33991 49.0672 14.658 40.3478 15.5474C30.8117 16.5201 29.8322 -3.74449 20.6612 2.06953C12.6573 7.14359 28.2818 17.6963 23.4811 25.8959C18.6046 34.225 0.0896261 24.4694 0.400349 34.1447C0.818318 47.1593 22.7781 29.6283 28.9553 39.2439C34.0779 47.2177 16.9094 58.8959 27.1799 63.5403C36.0913 67.57 32.2405 43.8005 41.9753 43.1433C48.7076 42.6888 52.3483 56.1267 57.2145 51.3921C62.5195 46.2305 49.955 41.7009 52.184 35.6444C55.0794 27.7778 72.6016 38.1875 72.6016 29.7953C72.6016 21.4031 56.8008 30.9181 52.184 23.9462C47.0419 16.1809 65.5142 4.64675 57.2145 0.549635Z"
                      fill="#96FF00"
                    />
                  </svg>
                  <div className="awesome-card-item-title fs-3 fw-bold pt-7">
                    環保行動
                  </div>
                  <div className="awesome-card-item-text w-75 mx-auto pt-7">
                    每一次分享和領取，都是在為環境保護做出貢獻，讓地球更美好。
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* yummySection */}
      <HomeYummySection />

      {/* foodTalkSection  */}
      <HomeFoodTalkSection />

      {/* inviteSection */}
      <section className="invite py-19">
        <div className="container">
          <div className="invite-content mb-16 mb-lg-19">
            <h2 className="fs-4 fs-lg-3 text-xxl-end me-xxl-20 text-primary fw-bold">
              WE INVITE YOU
            </h2>
            <h3 className="col-xxl-4 ps-xxl-12 invite-title text-primary fw-bolder ms-xl-auto">
              <div>
                一起來
                <span className="deco-invite text-white">玩</span>
              </div>
            </h3>
          </div>
          <div className="invite-event row">
            <div className="col-lg-6">
              <svg
                className="mb-5"
                width="80"
                height="62"
                viewBox="0 0 80 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 21.311L22.4371 62L75.117 47.1438L80 5.74886C80 5.74886 67.8139 23.4876 57.231 21.4441C47.0968 19.4873 41.5893 0 41.5893 0C41.5893 0 39.0375 23.6713 27.6927 28.4091C17.3846 32.714 0 21.311 0 21.311Z"
                  fill="#00503F"
                />
              </svg>
              <h2 className="fs-1 fw-bolder">愛心分享：街友送餐活動</h2>
              <div className="my-5 text-gray-700">2024.11.15</div>
              <p className="mb-5 text-gray-700">
                我們總是不小心在忙碌的生活中忽略一些需要我們的關愛和支持的人。為了讓社會多一份溫暖，我們決定舉辦這次「愛心分享：街友送餐活動」。這不是一個普通的活動，而是一個讓我們能夠用實際行動傳遞愛心的機會。8月15日，讓我們集合在台北市中山區中山公園，準備好一份份溫暖的餐點，送給街友們。活動結束後，我們還會一起聚餐，分享彼此的感動與故事。真心期待你的參與，讓我們一起為這個社會帶來一點溫暖！
              </p>
            </div>
            <div className="col-lg-6">
              <div className="invite-event-img position-relative">
                <img
                  src="./assets/images/home_event-6.jpg"
                  alt="home-event-img"
                />
                <Link
                  to="/event"
                  className="invite-btn position-absolute bottom-0 end-0 d-flex justify-content-center align-items-center"
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* marqueeSection */}
      <section className="index-marquee mb-19" ref={endTriggerRef}>
        <div className="marquee py-lg-12 py-8 border-top border-bottom border-primary border-4 d-flex">
          <p className="marquee-scroll display-3 display-lg-1 text-primary ms-7 text-nowrap mb-0 letter-spacing-1">
            WE INVITE YOU{' '}
            <span className="marquee-stroke ms-7">WE INVITE YOU</span> WE INVITE
            YOU <span className="marquee-stroke ms-7">WE INVITE YOU</span>
          </p>
          <p className="marquee-scroll2 display-3 display-lg-1 text-primary ms-7 text-nowrap mb-0">
            WE INVITE YOU{' '}
            <span className="marquee-stroke ms-7">WE INVITE YOU</span> WE INVITE
            YOU <span className="marquee-stroke ms-7">WE INVITE YOU</span>
          </p>
          <p className="marquee-scroll display-3 display-lg-1 text-primary ms-7 text-nowrap mb-0">
            WE INVITE YOU{' '}
            <span className="marquee-stroke ms-7">WE INVITE YOU</span> WE INVITE
            YOU <span className="marquee-stroke ms-7">WE INVITE YOU</span>
          </p>
          <p className="marquee-scroll2 display-3 display-lg-1 text-primary ms-7 text-nowrap mb-0">
            WE INVITE YOU{' '}
            <span className="marquee-stroke ms-7">WE INVITE YOU</span> WE INVITE
            YOU <span className="marquee-stroke ms-7">WE INVITE YOU</span>
          </p>
        </div>
      </section>

      {/* CTA */}
      <CircleCTAButton
        title={'分享美味'}
        startTriggerRef={startTriggerRef}
        endTriggerRef={endTriggerRef}
        startPosition={'top 20%'}
        endPosition={'bottom 60%'}
      />
    </>
  );
};

export default Home;
