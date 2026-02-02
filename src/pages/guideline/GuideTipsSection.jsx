const GuideTipsSection = () => {
  return (
    <section className="tips nav-mt">
      <div className="container pt-20 pt-lg-18 pb-12 py-lg-18">
        <div className="path-section">
          <h3 className="tips-title fs-lg-3 fw-bold text-gray-900 mb-14 mb-lg-0">
            SAFETY TIPS
          </h3>
          <div className="path-text">
            <p className="stroke" data-stroke="安心使用小提醒">
              安心使用小提醒
            </p>
          </div>
          <svg
            className="d-lg-none"
            width={351}
            height={259}
            viewBox="0 0 371 259"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M185.5 10C68.1156 10 10 52.7675 10 105.524C10 138.194 33.4368 167.034 78.4482 184.259L54.4427 248L131.001 197.384C147.549 199.77 165.729 201.048 185.5 201.048C299.886 201.048 361 158.28 361 105.524C361 54.8113 299.744 -2.495 160.116 43.915"
              stroke="#00503F"
              strokeWidth={20}
              strokeLinejoin="round"
            />
            <path
              d="M343.784 164C356.746 177.834 327.311 209.029 312.494 217.361L333.228 249L285.741 230.92C277.104 234.242 264.552 238.325 234.551 238.325C205.926 238.325 165.555 230.92 167.04 209.707"
              stroke="#00503F"
              strokeWidth={20}
              strokeLinejoin="round"
            />
          </svg>
          <div className="tips-list row row-lg-cols-3 flex-column flex-lg-row justify-content-between">
            <div className="tips-item col ps-lg-0">
              <div className="tips-border">
                <div className="tips-subtitle fs-3 fw-bold">食物新鮮度</div>
                <div className="tips-deco bg-gray-900 my-7" />
                <ol className="tips-content mb-14 fw-lg-medium fs-lg-5">
                  <li>冷藏食品：建議24小時內領取</li>
                  <li>常溫食品：視保存方式而定</li>
                  <li>熟食：越快領取越好！</li>
                </ol>
              </div>
            </div>
            <div className="tips-item col my-7 my-lg-0">
              <div className="tips-border">
                <div className="tips-subtitle fs-3 fw-bold">約定注意事項</div>
                <div className="tips-deco bg-gray-900 my-7" />
                <ol className="tips-content mb-14 fw-lg-medium fs-lg-5">
                  <li>準時是基本禮貌</li>
                  <li>如果有意外情況，請提前告知</li>
                  <li>面交地點選安全、方便的場所</li>
                </ol>
              </div>
            </div>
            <div className="tips-item col pe-lg-0">
              <div className="tips-subtitle fs-3 fw-bold">友善互動原則</div>
              <div className="tips-deco bg-gray-900 my-7" />
              <ol className="tips-content mb-14 fw-lg-medium fs-lg-5">
                <li>保持禮貌和感恩的心</li>
                <li>遇到問題理性溝通</li>
                <li>分享和領取都是美好的緣分</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideTipsSection;
