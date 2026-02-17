const AboutUsBannerSection = () => {
  return (
    <section className="our-ideal container nav-mt pb-12">
      <div className="ideal-banner mt-4 mt-lg-7">
        <div className="ideal-banner-img mb-6 mb-lg-10"></div>
        <div className="ideal-banner-deco-noise"></div>
        <div className="ideal-banner-deco"></div>
      </div>
      <div className="ideal-subtitle fw-bolder fs-2 mb-8 d-flex justify-content-end">
        <div className="d-flex flex-column">
          <div className="lh-32">世界更美好</div>
          <div className="ideal-text-vertical">味同行</div>
        </div>
      </div>
      <div className="ideal-content row">
        <div className="col-md-9 col-lg-8">
          <h4 className="fs-4 fs-lg-3 fw-bold ideal-content-subtitle">
            OUR PHILOSOPHY
          </h4>
          <div className="ideal-title pt-5 pt-lg-7 pb-10 pb-lg-7-">
            我們的理念
          </div>
          <p className="fs-6 fs-lg-4 text-gray-700">
            在「餘味尋蹤」，我們相信每一份食物都有它的價值。
            <br />
            無論是餐桌上的剩餘美味，還是廚房裡多出的食材，
            <br className="d-none d-md-block" />
            我們的使命是為它們找到下一位品味者，讓分享成為社群的一部分。
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsBannerSection;
