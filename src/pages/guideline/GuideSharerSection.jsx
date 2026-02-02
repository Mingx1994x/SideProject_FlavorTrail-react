import {
  decoGuideUrl1,
  decoGuideUrl2,
  decoGuideUrl3,
  iconGuideBannerHand,
  iconGuideBannerHandshake,
} from '@/data/imagesPath';

const GuideSharerSection = () => {
  return (
    <section className="guide-sharer">
      <div className="p-0">
        {/* tab */}
        {/* 手機版 */}
        <ul className="nav nav-tabs d-lg-none" id="myTab" role="tablist">
          <button
            className="nav-link active bg-deco-green border-deco-green w-50 rounded-0 py-5 text-deco-bright-green"
            id="share-tab"
            data-bs-toggle="tab"
            data-bs-target="#share-tab-pane"
            type="button"
            role="tab"
            aria-controls="share-tab-pane"
            aria-selected="true"
          >
            <p className="btn-share fs-4 fw-bold">(我想分享)</p>
          </button>
          <button
            className="nav-link bg-deco-blue border-deco-blue w-50 rounded-0 py-5 text-deco-pink"
            id="getfood-tab"
            data-bs-toggle="tab"
            data-bs-target="#getfood-tab-pane"
            type="button"
            role="tab"
            aria-controls="getfood-tab-pane"
            aria-selected="false"
          >
            <p className="fs-4 fw-bold btn-getfood">(我想領取)</p>
          </button>
        </ul>
        {/* 電腦版 */}
        <ul className="nav nav-tabs d-none d-lg-flex" id="myTab" role="tablist">
          <button
            className="nav-link active bg-deco-green border-deco-green w-50 rounded-0 text-deco-bright-green py-12"
            id="share-tab"
            data-bs-toggle="tab"
            data-bs-target="#share-tab-pane"
            type="button"
            role="tab"
            aria-controls="share-tab-pane"
            aria-selected="true"
          >
            <div className="text-center">
              <img src={iconGuideBannerHandshake} alt="guide-handshake" />
              <h2 className="display-1 pt-5 letter-space">(我想分享)</h2>
              <h4 className="fw-bold pt-5">SHARER</h4>
            </div>
          </button>
          <button
            className="nav-link bg-deco-blue border-deco-blue w-50 rounded-0 text-deco-pink py-12"
            id="getfood-tab"
            data-bs-toggle="tab"
            data-bs-target="#getfood-tab-pane"
            type="button"
            role="tab"
            aria-controls="getfood-tab-pane"
            aria-selected="false"
          >
            <div className="text-center">
              <img src={iconGuideBannerHand} alt="guide-hand" />
              <h2 className="display-1 pt-5 letter-space">(我想領取)</h2>
              <h4 className="fw-bold pt-5">RECEIVER</h4>
            </div>
          </button>
        </ul>
        {/* 內容 */}
        <div className="tab-content" id="myTabContent">
          {/* 我想分享 */}
          <div
            className="tab-pane fade show active bg-deco-green sharer-lg-lists"
            id="share-tab-pane"
            role="tabpanel"
            aria-labelledby="share-tab"
            tabIndex={0}
          >
            <div className="container">
              <div className="row">
                <div className="d-flex flex-column flex-lg-row mb-lg-18 px-lg-0">
                  <div className="col d-lg-none">
                    <div className="text-center pt-10 pb-12">
                      <img
                        src={iconGuideBannerHandshake}
                        alt="guide-handshake"
                      />
                      <h2 className="display-3 text-deco-bright-green pt-5 letter-space">
                        (我想分享)
                      </h2>
                      <h6 className="text-deco-bright-green pt-5 fw-bold">
                        SHARER
                      </h6>
                    </div>
                  </div>
                  <div className="col">
                    <div className="d-flex flex-column align-items-lg-start align-items-center pt-12 mb-14 pt-lg-0 mb-lg-0">
                      <img src={decoGuideUrl1} alt="deco-guide-1" />
                      <h3 className="text-deco-bright-green pt-7 fw-bold">
                        發佈食物大作戰
                      </h3>
                      <div className="fs-6 fs-lg-5 fw-lg-medium text-deco-bright-green pt-7 pe-lg-7 text-md-center text-lg-start">
                        首頁及所有貼文頁右下角有轉動的
                        <br />{' '}
                        <span className="h6 fs-lg-5 fw-bold">（分享美味）</span>
                        按鈕，{' '}
                        <span className="text-lg-wrap">
                          點下去即會彈出視窗，
                        </span>{' '}
                        <span className="text-lg-wrap">
                          如實填寫表格內容即可立即發佈貼文{' '}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-14 mb-lg-0 ">
                      <div className="text-center text-lg-start">
                        <img src={decoGuideUrl2} alt="deco-guide-2" />
                        <h3 className="text-deco-bright-green pt-7 fw-bold">
                          追蹤申請狀態
                        </h3>
                      </div>
                      <ol className="fs-6 fs-lg-5 fw-lg-medium text-deco-bright-green pt-7 p-0 ps-7 px-lg-7 mx-md-18 mx-lg-0">
                        <li>
                          若有申請領取您的食物，
                          <br />
                          會收到郵件通知，也會在個人帳號顯示{' '}
                        </li>
                        <li>收到申請通知時，請記得確認</li>
                        <li>可以和領取者約定面交時間</li>
                      </ol>
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-12 mb-lg-0 d-flex flex-column align-items-lg-start align-items-md-center">
                      <div className="text-center text-lg-start">
                        <img src={decoGuideUrl3} alt="deco-guide-3" />
                        <h3 className="text-deco-bright-green pt-7 fw-bold">
                          面交步驟
                        </h3>
                      </div>
                      <ol className="fs-6 fs-lg-5 fw-lg-medium text-deco-bright-green pt-7 p-0 ps-7 mx-md-18 mx-lg-0">
                        <li>
                          進行面交時，進入「我的發文」頁面，
                          <span className="text-lg-wrap">
                            點擊對應貼文標題旁的複製{' '}
                            <svg
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_1604_2215)">
                                <path
                                  d="M2.66732 10.6666C1.93398 10.6666 1.33398 10.0666 1.33398 9.33331V2.66665C1.33398 1.93331 1.93398 1.33331 2.66732 1.33331H9.33398C10.0673 1.33331 10.6673 1.93331 10.6673 2.66665M6.66732 5.33331H13.334C14.0704 5.33331 14.6673 5.93027 14.6673 6.66665V13.3333C14.6673 14.0697 14.0704 14.6666 13.334 14.6666H6.66732C5.93094 14.6666 5.33398 14.0697 5.33398 13.3333V6.66665C5.33398 5.93027 5.93094 5.33331 6.66732 5.33331Z"
                                  stroke="#96FF00"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1604_2215">
                                  <rect width={16} height={16} fill="white" />
                                </clipPath>
                              </defs>
                            </svg>{' '}
                            圖標，
                          </span>
                          <span className="text-lg-wrap">
                            複製領取碼並傳送給領取人
                          </span>
                        </li>
                        <li>
                          最後別忘了跟領取人確認，{' '}
                          <span className="text-lg-wrap">
                            已成功點擊「馬上領取」
                          </span>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 我想領取 */}
          <div
            className="tab-pane fade bg-deco-blue sharer-lg-lists"
            id="getfood-tab-pane"
            role="tabpanel"
            aria-labelledby="getfood-tab"
            tabIndex={0}
          >
            <div className="container">
              <div className="row">
                <div className="d-flex flex-column flex-lg-row mb-lg-18 px-lg-0">
                  <div className="col d-lg-none">
                    <div className="text-center pt-10 pb-12">
                      <img src={iconGuideBannerHand} alt="guide-hand" />
                      <h2 className="display-3 text-deco-pink pt-5 letter-space">
                        (我想領取)
                      </h2>
                      <h6 className="text-deco-pink pt-5 fw-bold">RECEIVER</h6>
                    </div>
                  </div>
                  <div className="col">
                    <div className="d-flex flex-column align-items-lg-start align-items-center pt-12 mb-14 pt-lg-0 mb-lg-0">
                      <svg
                        width={47}
                        height={117}
                        viewBox="0 0 47 117"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask id="path-1-inside-1_1604_2201" fill="white">
                          <path d="M0.0996094 1H46.8996V117H0.0996094V1Z" />
                        </mask>
                        <path
                          d="M46.8996 113H0.0996094V121H46.8996V113Z"
                          fill="#FFAB91"
                          mask="url(#path-1-inside-1_1604_2201)"
                        />
                        <path
                          d="M0.0996094 33.9L2.13961 17.22H4.77961C17.1396 17.22 25.2996 10.86 32.6196 0.539993H46.8996L37.4196 77.46H13.6596L19.0596 33.9H0.0996094Z"
                          fill="#FFAB91"
                        />
                      </svg>
                      <h3 className="text-deco-pink pt-7 fw-bold">尋寶攻略</h3>
                      <div className="fs-6 fs-lg-5 fw-lg-medium text-deco-pink pt-7 pe-lg-7">
                        篩選功能：可以按照食物類型、距離來找{' '}
                        <span className="text-lg-wrap">看到喜歡的？</span>
                        <span className="text-lg-wrap">
                          立刻點下
                          <span className="h6 fs-lg-5 fw-bold">
                            （我要領取）
                          </span>
                          按鈕！
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-14 mb-lg-0 d-flex flex-column align-items-lg-start align-items-md-center">
                      <div className="text-center text-lg-start">
                        <svg
                          width={69}
                          height={119}
                          viewBox="0 0 69 119"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask id="path-1-inside-1_1604_2206" fill="white">
                            <path d="M0.720703 1H68.2807V119H0.720703V1Z" />
                          </mask>
                          <path
                            d="M68.2807 115H0.720703V123H68.2807V115Z"
                            fill="#FFAB91"
                            mask="url(#path-1-inside-1_1604_2206)"
                          />
                          <path
                            d="M7.5607 26.2C9.8407 10.84 23.1607 0.639999 41.0407 0.639999C58.2007 0.639999 68.2807 9.4 68.2807 22.36C68.2807 35.92 58.5607 45.04 53.6407 49.48L41.6407 60.28H65.2807L62.8807 79.36H0.720703L1.8007 70.48L36.1207 38.08C39.6007 34.84 43.3207 31.12 43.3207 26.2C43.3207 22.6 40.3207 20.32 36.4807 20.32C30.9607 20.32 27.7207 24.76 27.7207 29.32L7.5607 26.2Z"
                            fill="#FFAB91"
                          />
                        </svg>
                        <h3 className="text-deco-pink pt-7 fw-bold">
                          與分享者互動
                        </h3>
                      </div>
                      <ol className="fs-6 fs-lg-5 fw-lg-medium text-deco-pink pt-7 p-0 ps-7 px-lg-7">
                        <li>留言時記得保持禮貌：「謝謝你願意分享！」</li>
                        <li>請記得要準時赴約呦</li>
                      </ol>
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-12 mb-lg-0 d-flex flex-column align-items-lg-start align-items-md-center">
                      <div className="text-center text-lg-start">
                        <svg
                          width={67}
                          height={119}
                          viewBox="0 0 67 119"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask id="path-1-inside-1_1604_2211" fill="white">
                            <path d="M0.6875 1H66.313V119H0.6875V1Z" />
                          </mask>
                          <path
                            d="M66.313 115H0.6875V123H66.313V115Z"
                            fill="#FFAB91"
                            mask="url(#path-1-inside-1_1604_2211)"
                          />
                          <path
                            d="M66.313 0.580017L65.473 8.38002L49.513 29.5C58.993 31.9 64.633 38.98 64.633 48.82C64.633 66.58 49.513 79.42 28.993 79.42C10.633 79.42 -0.526994 69.22 0.793006 54.82L23.473 50.86C22.753 55.78 25.873 59.14 30.913 59.14C36.073 59.14 40.153 54.94 40.153 49.66C40.153 45.46 37.273 42.58 32.593 42.58C29.353 42.58 26.473 43.66 24.433 44.98L20.713 37.06L34.153 19.66H8.11301L10.393 0.580017H66.313Z"
                            fill="#FFAB91"
                          />
                        </svg>
                        <h3 className="text-deco-pink pt-7 fw-bold">
                          面交步驟&amp;後續
                        </h3>
                      </div>
                      <ol className="fs-6 fs-lg-5 fw-lg-medium text-deco-pink pt-7 p-0 ps-7">
                        <li>進行面交時，出示領取通知</li>
                        <li>輸入領取碼後按下（馬上領取）按鈕</li>
                        <li>領取後別忘了給予評價：讓好心人收到鼓勵！</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideSharerSection;
