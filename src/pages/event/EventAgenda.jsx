function EventAgenda() {
  return (
    <>
      <section className="event-agenda py-19">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="fs-4 fs-lg-3 fw-bold mb-5 mb-lg-7">
                EVENT AGENDA
              </h2>
              <h3 className="event-agenda-title fw-bolder mb-5 mb-lg-7 mb-18 mb-lg-0">
                活動
                <svg
                  className="event-agenda-deco vertical-align-top"
                  width="75"
                  height="74"
                  viewBox="0 0 83 82"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M34.1037 5.571C15.8294 10.7405 33.2316 35.708 33.2316 35.708C33.2316 35.708 0.983688 30.6905 5.41888 50.1313C9.85406 69.5721 37.0169 52.3001 37.0169 52.3001C37.0169 52.3001 31.4301 81.1064 51.3601 76.5014C71.29 71.8963 53.9365 45.6549 53.9365 45.6549C53.9365 45.6549 81.4746 48.867 77.6323 32.025C73.79 15.183 49.1325 32.0339 49.1325 32.0339C49.1325 32.0339 52.3779 0.401519 34.1037 5.571Z"
                    stroke="black"
                    strokeWidth="10"
                  />
                </svg>
                流程
              </h3>
            </div>
            <div className="col-lg-6 px-0 px-lg-3">
              <div className="step-list border-1 border-top border-bottom border-gray-400">
                <div className="step-item border-1 border-bottom border-gray-400">
                  <div className="step-item-content w-50 ps-3 ps-lg-0 py-12">
                    <div className="step-item-title fs-3 fs-lg-1 fw-bolder mb-5 mb-lg-7 lh-12">
                      集合與準備
                    </div>
                    <div className="step-item-time fs-lg-5 fw-bold mb-5 mb-lg-7 lh-12">
                      10:00
                    </div>
                    <div className="step-item-text">
                      活動介紹、分組及大會行前注意事項說明。
                    </div>
                  </div>
                </div>
                <div className="step-item d-flex flex-row-reverse align-items-center justify-content-between border-1 border-bottom border-gray-400">
                  <div className="step-item-content w-50 pe-3 py-12">
                    <div className="step-item-title fs-3 fs-lg-1 fw-bolder mb-5 mb-lg-7 lh-12">
                      分發餐點
                    </div>
                    <div className="step-item-time fs-lg-5 fw-bold mb-5 mb-lg-7 lh-12">
                      11:00
                    </div>
                    <div className="step-item-text">
                      由志工帶領,前往指定地點給街友送餐。
                    </div>
                  </div>
                </div>
                <div className="step-item d-flex align-items-center justify-content-between">
                  <div className="step-item-content w-50 ps-3 ps-lg-0 py-12">
                    <div className="step-item-title fs-3 fs-lg-1 fw-bolder mb-5 mb-lg-7 lh-12">
                      愛心聚餐
                    </div>
                    <div className="step-item-time fs-lg-5 fw-bold mb-5 mb-lg-7 lh-12">
                      14:00
                    </div>
                    <div className="step-item-text">
                      享用美味餐點,共同分享愛心經歷和心得。
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EventAgenda;
