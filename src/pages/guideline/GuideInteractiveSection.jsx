const GuideInteractiveSection = () => {
  return (
    <section className="interactive py-18 py-lg-19">
      <div className="container py-12 py-lg-0">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="row justify-content-between">
              <div className="col-lg-6">
                <div className="mb-16">
                  <h3 className="fs-4 fs-lg-3 fw-bold text-gray-900 mb-7">
                    INTERACTIVE GUIDE
                  </h3>
                  <p className="interactive-title-ch">
                    互動功能
                    <br />
                    小教室
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="interactive-item py-lg-12">
                  <h4 className="fs-3 fw-bold">通知系統</h4>
                  <div className="tips-deco bg-gray-900 my-7" />
                  <ol>
                    <li>有人想申請你的食物</li>
                    <li>發佈新食物</li>
                    <li>
                      <span className="d-xl-none">
                        申請領取的食物更新狀態
                        <br />
                        全都會第一時間通知你！
                      </span>
                      <span className="d-none d-xl-block">
                        申請領取的食物更新狀態全都會第一時間通知你！
                      </span>
                    </li>
                  </ol>
                </div>
                <div className="interactive-item">
                  <h4 className="fs-3 fw-bold">點讚留言</h4>
                  <div className="tips-deco bg-gray-900 my-7" />
                  <ul>
                    <li className="d-lg-none">
                      看到暖心的分享，別吝嗇你的讚！
                      <br />
                      想問更多細節？留言詢問就對了！
                    </li>
                    <li className="d-none d-lg-block">
                      看到暖心的分享，別吝嗇你的讚！想問更多細節？
                      <br />
                      留言詢問就對了！
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideInteractiveSection;
