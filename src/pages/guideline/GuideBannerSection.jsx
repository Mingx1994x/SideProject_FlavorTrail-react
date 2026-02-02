import { imgGuideBannerURl } from '@/data/imagesPath';
const GuideBannerSection = () => {
  return (
    <section className="guide-banner container mb-lg-12 nav-mt">
      <div className="guide-banner__cover position-relative mt-4 mt-lg-7">
        <img
          src={imgGuideBannerURl}
          alt="banner-img"
          className="guide-banner__img"
        />
      </div>
      <div className="guide-banner__header position-relative mb-lg-14 mb-10 row">
        <div className="slogan position-absolute top-0 end-0 mt-lg-10 mt-6 col-xl-4 fs-2 fw-bolder lh-1">
          <p className="text-end">剩食救援英雄</p>
          <p className="vertical-text text-lg-vertical ms-auto">零浪費</p>
        </div>
        <div className="guide-banner__title-wrap col-xl-8">
          <h2 className="mb-5 mb-lg-7 fs-lg-3 fs-4 fw-bold">WELCOME</h2>
          <div className="guide-banner__title d-flex flex-column flex-lg-row align-items-lg-center mb-10 mb-lg-7">
            <div className="d-flex align-items-center">
              <h3>歡迎</h3>
              <svg
                className="mx-5"
                width={83}
                height={85}
                viewBox="0 0 83 85"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.6759 17.8845L35.9606 47.4874M35.9606 47.4874L35.2171 76.5126M35.9606 47.4874L3 69.87M35.9606 47.4874L68.0537 49.509M35.9606 47.4874L53.8039 2M35.9606 47.4874L80.0732 71.1697M35.9606 47.4874L18.489 78.5343M35.9606 47.4874L4.61085 19.9061M35.9606 47.4874L66.0711 26.1155M35.9606 47.4874L8.82386 45.0325M35.9606 47.4874L53.8039 82"
                  stroke="#96FF00"
                  strokeWidth={10}
                />
              </svg>
            </div>
            <h3>臨餘味尋蹤</h3>
          </div>
          <p className="guide-banner__content w-xxl-75 w-xl-90 w-lg-70 fs-lg-4 text-gray-700">
            準備好成為剩食救援英雄了嗎？不管你是想分享美食的暖心大使，還是珍惜食物的環保勇士，這裡都歡迎你！讓我們一起打造一個「零浪費」的美食烏托邦吧！
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuideBannerSection;
