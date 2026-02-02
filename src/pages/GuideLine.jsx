import {
  decoGuideUrl1,
  decoGuideUrl2,
  decoGuideUrl3,
  iconGuideBannerHand,
  iconGuideBannerHandshake,
  imgGuideBannerURl,
  imgGuideContactURl1,
  imgGuideContactURl2,
} from '@/data/imagesPath';

function GuideLine() {
  return (
    <>
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
          <ul
            className="nav nav-tabs d-none d-lg-flex"
            id="myTab"
            role="tablist"
          >
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
                          <span className="h6 fs-lg-5 fw-bold">
                            （分享美味）
                          </span>
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
                        <h6 className="text-deco-pink pt-5 fw-bold">
                          RECEIVER
                        </h6>
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
                        <h3 className="text-deco-pink pt-7 fw-bold">
                          尋寶攻略
                        </h3>
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
      <section className="contact overflow-hidden nav-mt mb-18 mb-lg-19">
        <div className="contact-info bg-white row row-lg-cols-3 flex-column flex-lg-row text-deco-green">
          <div className="col contact-info-item">
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center py-7">
              <svg
                width={120}
                height={120}
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={120} height={120} fill="white" />
                <path
                  d="M104.131 62.1095C100.253 38.1989 83.6274 20.6332 68.8228 24.8043C65.7092 25.6856 63.2418 27.7418 53.3133 38.0227C48.1435 43.3688 46.5573 44.6613 45.6761 44.3675C36.0413 40.6076 29.9902 45.3075 30.049 56.5872C30.049 62.5795 30.3429 64.1657 32.2816 70.2168C32.8103 71.803 26.1128 78.0303 17.7118 86.9013C10.9558 93.0699 18.0642 94.9498 28.2277 91.6599C45.7347 86.0201 43.0323 86.2551 49.0834 89.6625C59.0118 95.2436 71.9367 97.2998 77.8115 94.2448C78.9865 93.6574 79.6327 92.4237 79.5152 91.0725C79.5152 91.0137 78.9865 85.2563 78.9865 85.3151C87.035 82.0839 96.7285 78.7941 101.311 75.5042C105.893 72.1555 105.247 68.9243 104.131 62.1095ZM28.1692 86.1963C27.523 86.1963 35.2189 77.7366 35.7477 77.1491C35.8652 77.8541 37.5101 80.4977 39.86 82.0839C39.9188 82.3777 29.2267 86.1963 28.1692 86.1963ZM87.6811 73.3305C84.3912 74.0942 74.0516 78.2066 70.4092 80.2627C67.7655 81.7315 67.6479 81.9077 68.0004 83.7876C69.2929 90.9549 69.6455 90.5437 63.4182 88.9575C49.3186 85.3151 32.9864 57.6447 39.4487 48.3037C41.2699 45.66 43.7962 49.0086 43.9724 54.3547C44.1487 59.9946 49.1422 69.2768 52.6671 71.568C54.7233 72.9192 55.7807 71.2743 55.2519 70.2168C48.4371 57.6447 49.5534 54.296 50.0234 52.4161C50.0234 52.4161 65.0043 37.259 66.238 35.9078C70.7616 31.0904 74.7565 30.8554 79.1626 35.0853C87.2699 42.9576 93.4973 55.471 95.0835 66.9269C95.436 69.9818 92.9685 72.1555 87.6811 73.3305Z"
                  fill="#576E22"
                />
                <path
                  d="M88.0925 64.4012C81.3364 67.9849 67.8829 43.0756 74.1102 38.552C76.9301 36.4958 72.5827 33.9696 70.2328 36.6133C66.2966 41.0782 70.1155 65.5175 86.33 68.3374C89.2675 68.8661 91.6761 68.3374 91.9111 66.3399C92.1461 64.6362 89.9137 63.4025 88.0925 64.4012Z"
                  fill="#576E22"
                />
              </svg>
              <div className="fs-4 fs-lg-3 fw-bold text-center text-lg-start ms-lg-12 mt-5 mt-lg-0">
                設定常用地點，
                <br />
                發文更方便！
              </div>
            </div>
          </div>
          <div className="col contact-info-item">
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center py-7">
              <svg
                width={120}
                height={120}
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width={120}
                  height="119.255"
                  transform="translate(0 0.372559)"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M34.105 20.3024C30.5666 21.5112 30.677 21.4012 30.0688 24.0386C29.0183 28.4343 30.5664 66.8961 32.0592 74.5885C32.4463 76.4567 34.7684 77.0061 40.0208 76.5116C42.6194 76.2918 45.8264 76.2918 47.1533 76.5116C50.5812 77.116 51.5209 76.7314 51.9079 74.3138C52.4055 71.017 58.9849 42.9399 60.2013 32.1157C60.4224 30.0277 59.5931 27.9398 57.9897 26.5661C57.9897 26.5661 46.2133 16.1265 34.105 20.3024ZM50.4706 26.2365C51.5211 26.5112 51.7422 26.8958 51.4657 27.9947C51.2998 28.764 44.278 65.6324 43.6146 69.4236C43.2828 71.5115 43.2277 71.5115 40.9608 71.3467L38.6386 71.1819C37.8645 54.4235 37.4777 42.5003 35.8191 29.3134C35.5979 27.665 36.7588 26.1815 38.4175 25.9068C42.3983 25.3024 46.711 25.1925 50.4706 26.2365ZM70.485 36.9508C68.9922 37.7201 68.7713 38.3245 66.7809 47.2806C62.413 67.0061 61.5836 72.7753 62.7999 74.3138C64.5139 76.4567 73.5813 79.2589 78.0044 79.0391C79.9395 78.9292 81.7086 77.7754 82.5933 76.0721C88.6198 64.039 92.2688 56.951 95.3097 48.819C95.9732 47.0608 95.4757 45.0828 94.0382 43.874C87.8458 38.4343 74.8529 34.6431 70.485 36.9508ZM82.1511 42.5553C87.8458 44.6982 88.7304 45.1927 88.1775 45.852C87.7905 46.3466 75.7928 73.4346 75.1846 74.0391C74.5211 74.7533 69.9876 73.3797 70.3746 72.6105C71.0381 71.2918 73.4707 60.9071 75.4611 50.4125C76.5668 44.5333 77.4514 41.1817 77.8937 41.1817C78.336 41.2366 80.216 41.841 82.1511 42.5553ZM32.6121 81.6216C17.7947 86.8414 24.2082 100.852 41.4584 100.852C51.7421 100.852 57.437 97.281 57.1053 93.1052C56.7183 88.5447 41.6795 78.4347 32.6121 81.6216ZM66.1726 85.5776C55.336 90.9073 60.9201 100.303 74.9082 100.303C83.6438 100.303 90.4443 94.7535 87.2928 90.248C84.5284 86.4018 70.7616 83.3248 66.1726 85.5776ZM46.7108 88.4348C51.2998 91.6766 50.5259 93.6546 43.836 95.6876C36.7037 97.8305 31.0088 96.0172 31.0088 92.5007C30.9535 90.8524 37.367 81.8414 46.7108 88.4348ZM76.7879 89.1491C83.5332 92.9953 79.2759 98.6547 71.5355 96.1272C67.6653 94.8634 66.7807 92.281 69.1582 89.259C70.9274 86.8414 72.6966 86.8414 76.7879 89.1491Z"
                  fill="#576E22"
                />
              </svg>
              <div className="fs-4 fs-lg-3 fw-bold text-center text-lg-start ms-lg-12 mt-5 mt-lg-0">
                開啟通知，
                <br />
                不錯過周邊的美食分享
              </div>
            </div>
          </div>
          <div className="col contact-info-item">
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center py-7">
              <svg
                width={120}
                height={120}
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={120} height={120} fill="white" />
                <path
                  d="M72.8011 19.8089C74.952 15.4354 72.1558 12.2808 69.1804 15.7581C66.9937 18.3391 63.9109 25.688 64.4486 27.086C65.7033 30.2765 69.1446 27.2653 72.8011 19.8089Z"
                  fill="#576E22"
                />
                <path
                  d="M51.3999 28.6271C53.6583 29.344 54.4471 28.0176 54.1962 23.9309C53.6584 15.8651 51.1849 12.5313 46.9548 14.2161C44.9473 15.0048 48.8905 27.8384 51.3999 28.6271Z"
                  fill="#576E22"
                />
                <path
                  d="M28.7791 30.7071C33.8695 34.507 37.4183 36.1918 39.2107 35.5466C41.4333 34.7579 41.075 34.0051 37.0241 30.8146C31.862 26.6921 29.0299 25.4733 26.3054 26.1902C24.3696 26.6921 24.9792 27.8392 28.7791 30.7071Z"
                  fill="#576E22"
                />
                <path
                  d="M72.7641 32.0688C71.5452 33.3952 71.5453 33.431 72.4774 34.1121C75.1301 36.0479 77.9622 34.5065 89.1826 24.935C92.1938 22.354 87.2108 20.3106 83.6977 22.7125C81.8695 23.9671 74.198 30.5273 72.7641 32.0688Z"
                  fill="#576E22"
                />
                <path
                  d="M115.425 96.6668C114.17 95.6272 113.346 93.6914 112.987 90.9311C112.736 89.0312 108.721 57.6283 106.893 49.3474C105.388 42.4646 101.158 39.2024 97.7878 39.0232C95.6728 38.9156 94.4539 40.3137 93.5935 39.776C91.2634 38.3062 90.6181 37.6251 88.3238 37.8402C87.2483 37.9119 84.8465 38.5571 84.022 39.2741C83.4843 39.7043 82.8033 39.7043 81.2977 39.3099C73.913 37.3383 70.6507 44.3645 73.9846 55.0831C75.8845 61.2131 78.609 58.5245 77.8204 51.319C76.7808 41.7835 76.9959 40.7797 79.9713 41.8551C81.5844 42.4287 81.656 42.5721 81.5127 44.5437C81.2976 47.304 83.2335 59.9226 83.9504 60.3886C85.9221 61.6791 87.4277 59.3848 86.7824 55.9793C85.0258 46.4437 86.2089 40.5288 89.722 41.425C90.7974 41.7118 91.586 42.6797 91.586 43.7909C91.7652 54.5812 91.8728 61.7867 95.1708 61.7867C97.25 61.7867 97.25 61.8584 96.784 52.502C96.2821 42.5721 97.4652 42.0344 99.2217 42.5721C101.767 43.3608 102.018 49.3116 102.269 50.9247C102.269 50.9606 107.933 88.1708 107.933 88.2425C108.614 96.7027 113.883 104.123 117.576 101.757C118.329 101.255 116.931 97.9215 115.425 96.6668Z"
                  fill="#576E22"
                />
                <path
                  d="M26.8804 51.4982C26.8804 45.7267 26.9521 45.2607 28.0992 43.9701C30.1425 41.5683 30.7878 43.7551 31.1822 54.7963C31.469 62.8621 31.5049 62.9696 33.2256 63.4715C35.4482 64.1526 35.6633 63.113 35.4123 54.0076C35.1614 45.7984 35.1972 45.5116 36.2727 44.4362C38.4952 42.1778 38.9613 43.074 39.8933 50.853C40.4311 55.5849 40.3593 58.2377 39.6065 62.3244C39.4272 63.364 39.6064 63.6866 40.4668 63.9375C42.7969 64.5469 43.1912 63.7583 43.8723 56.9472C45.0553 45.1531 43.4422 41.6042 36.7745 41.5325C34.8029 41.4966 32.5444 41.2457 31.7558 40.8872C30.9671 40.5646 29.1747 40.3136 27.7766 40.3495C26.3785 40.3853 24.0842 40.2778 22.722 40.0986C21.073 39.8835 19.7109 40.0269 18.743 40.4571C14.6205 42.357 13.9035 44.5795 9.06403 70.7128C8.23952 75.2296 7.30744 80.8578 7.0565 83.1879C6.55463 87.5255 5.04894 92.5801 3.04145 96.7385C1.64337 99.6063 1.96608 100.646 4.18865 100.646C8.16779 100.646 11.896 94.1933 12.7922 85.6973C13.2582 81.1804 14.0828 79.3163 15.5167 68.9921C18.2411 49.0964 18.7429 46.8021 20.7503 44.472C23.5106 41.2815 23.2597 42.3212 23.6182 60.8904C23.6182 61.6791 24.3352 62.2885 25.1239 62.2168C26.5578 62.1093 26.8804 60.7829 26.8804 51.4982Z"
                  fill="#576E22"
                />
                <path
                  d="M93.7367 100.933C91.4783 96.7745 91.299 96.6311 87.2841 96.2009C82.4087 95.6632 78.6446 93.7633 77.0315 91.0388C73.4825 84.9805 68.4997 68.8847 69.0733 65.3357C69.862 60.3528 71.5109 60.7113 74.1995 66.3753C76.3146 70.8205 77.7127 72.3978 82.6956 76.126C84.9182 77.775 86.2804 79.2448 87.1766 81.0013C88.2879 83.1522 88.6821 83.5107 89.9727 83.5107C94.382 83.5107 89.1123 73.9393 83.7351 72.2186C81.4409 71.5016 80.7239 70.8922 80.7239 69.7092C80.7239 63.7943 72.0846 57.3775 67.496 59.8868C63.5527 62.0736 63.23 65.3716 65.9545 75.3015C71.1883 94.3368 74.1279 98.2084 83.9503 99.0688C87.786 99.4273 88.7179 100.072 90.6537 103.693C93.3065 108.676 96.3537 105.27 95.7442 104.482C95.5291 104.159 94.6329 102.582 93.7367 100.933Z"
                  fill="#576E22"
                />
                <path
                  d="M46.0945 62.2171C43.4776 63.4359 40.6456 66.4472 39.4267 69.315C38.5305 71.4301 38.2797 71.6451 36.2722 71.9678C31.8987 72.6489 28.0988 75.9111 27.5253 79.3883C27.0234 82.4713 30.1779 84.0486 31.325 81.2524C32.8307 77.6318 35.8061 74.8356 39.0682 74.0111C41.0757 73.5092 45.0908 69.4943 48.4964 64.6906C50.6473 61.6435 52.0811 65.7661 50.5755 70.5697C45.8436 85.4108 39.7135 93.5841 32.6515 94.3728C29.6761 94.7313 29.0308 95.3407 26.4855 100.395C24.8007 103.693 24.7649 103.873 25.6611 104.518C27.812 106.095 29.8554 104.589 31.2534 100.431C32.2213 97.5633 32.3289 97.4199 34.5157 96.8821C42.7607 94.7671 46.8473 89.8918 52.7623 75.23C57.2791 64.0454 54.3754 58.3814 46.0945 62.2171Z"
                  fill="#576E22"
                />
              </svg>
              <div className="fs-4 fs-lg-3 fw-bold text-center text-lg-start ms-lg-12 mt-5 mt-lg-0">
                記得分享你的使用心得，
                <br />
                讓更多人加入！
              </div>
            </div>
          </div>
        </div>
        <div className="contact-content bg-deco-green text-deco-bright-green">
          <div className="container">
            <div className="row flex-column flex-lg-row gap-19 align-items-center justify-content-between">
              <div className="col-lg-6">
                <div className="position-relative">
                  <h3 className="contact-title fw-bolder position-absolute">
                    美味分享超簡單！
                    <br />
                    快來發現更多驚喜～
                    <br />
                    祝你玩得愉快！
                    <br />
                  </h3>
                  <img
                    className="guide-contact-img img-fluid object-fit-cover"
                    src={imgGuideContactURl1}
                    alt="guide-contact-picture1"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <img
                  className="guide-contact-img guide-contact-img-two img-fluid object-fit-cover"
                  src={imgGuideContactURl2}
                  alt="guide-contact-picture2"
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="contact-sm-btn d-lg-none">
              <a
                href="#"
                className="mt-8 py-5 w-100 d-flex justify-content-center align-items-center border border-2 border-deco-bright-green rounded-3"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M40 0L10 6.69388L17.6562 12.5714L0 27.2653C0 27.2653 4.58333 28.6946 8.4375 31.8367C12.2917 34.9788 14.8958 40 14.8958 40L28.4375 21.2245L34.5312 29.7143L40 0Z"
                    fill="#96ff00"
                  />
                </svg>
                <div className="contact-btn-text fs-4 ms-5 fw-medium">
                  聯絡我們
                </div>
              </a>
            </div>
            <div className="contact-lg-btn d-none d-lg-block mt-19">
              <div className="d-flex justify-content-between align-items-center">
                <div className="fs-1 fw-bolder text-nowrap">有問題？</div>
                <div className="arrow-right fs-2 fw-bolder" />
                <div className="fs-1 fw-bolder">
                  （
                  <a
                    href="#"
                    className="contact-btn fs-1 fw-bolder text-nowrap"
                  >
                    聯絡我們
                  </a>
                  ）
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GuideLine;
