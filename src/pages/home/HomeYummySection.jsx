import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import AlertModal from '../../components/AlertModal';
import { decoArrowPinkUrl1, decoArrowPinkUrl2 } from '@/data/imagesPath';

const { VITE_BASE_URL } = import.meta.env;
const HomeYummySection = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${VITE_BASE_URL}/posts?_expand=user`);
        setPosts(res.data.filter((post, index) => index >= 10));
      } catch (error) {
        AlertModal.errorMessage({
          title: '連線失敗',
          text: `${error}，請稍後再試`,
        });
      }
    })();
  }, []);
  return (
    <>
      <section className="yummy bg-deco-blue text-deco-pink py-12 pt-lg-19">
        <div className="container">
          <h2 className="fs-4 fs-lg-3 text-lg-end fw-bold mb-5 mb-lg-7">
            WE ARE YUMMY
          </h2>
          <div className="row">
            <div className="col-lg-5">
              <h3 className="yummy-title d-flex flex-column flex-lg-row justify-content-between fw-bolder">
                <div className="mb-5 mb-lg-0 yummy-letter-spacing">快來</div>
                <div className="deco-eyes position-relative">
                  <svg
                    className="deco-eyes-one position-absolute"
                    width="170"
                    height="101"
                    viewBox="0 0 170 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M99.5872 44.1369L86.5389 44.7043L76.0987 59.4836L77.279 41.9933L67.3891 34.9778L81.0063 35.0036L89.067 21.7938L88.6719 35.7454L99.5872 44.1369Z"
                      fill="#0000C2"
                    />
                    <path
                      d="M5.61094 74.0911C13.9194 52.248 26.4911 35.63 41.8348 24.3474C61.6443 9.78121 86.0742 4.10798 111.916 7.5652C128.919 9.8398 146.532 16.0667 163.843 26.3135C139.213 91.0667 58.8608 114.826 5.61094 74.0911Z"
                      fill="#0000C2"
                    />
                    <path
                      d="M111.916 7.5652C128.919 9.8398 146.532 16.0667 163.843 26.3135C139.213 91.0667 58.8608 114.826 5.61094 74.0911C13.9194 52.248 26.4911 35.63 41.8348 24.3474M111.916 7.5652C122.982 18.0451 128.58 34.416 123.615 51.8964C116.426 77.2081 90.202 87.1421 67.9191 79.0027C45.6361 70.8634 35.4215 52.2471 40.715 28.3618C41.0195 26.9876 41.3945 25.649 41.8348 24.3474M111.916 7.5652C86.0742 4.10798 61.6443 9.78121 41.8348 24.3474M99.5872 44.1369L88.6719 35.7454L89.067 21.7938L81.0063 35.0036L67.3891 34.9778L77.279 41.9933L76.0987 59.4836L86.5389 44.7043L99.5872 44.1369Z"
                      stroke="#FFAB91"
                      strokeWidth="12"
                      strokeLinejoin="bevel"
                    />
                  </svg>
                  <svg
                    className="z-1 position-relative"
                    width="281"
                    height="160"
                    viewBox="0 0 281 160"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M166.963 84.9537L147.898 75.0252L120.856 87.4987L136.931 63.5415L128.608 45.4042L147.995 56.6464L170.354 44.4518L158.31 64.0115L166.963 84.9537Z"
                      fill="#0000C2"
                    />
                    <path
                      d="M8.37159 50.3153C38.1878 26.0198 69.7805 12.6795 100.934 9.22488C141.154 4.76483 180.642 16.7819 214.629 42.9744C236.99 60.2071 256.97 83.576 273.211 112.425C184.822 184.449 50.7474 152.192 8.37159 50.3153Z"
                      fill="#0000C2"
                    />
                    <path
                      d="M214.629 42.9744C236.99 60.2071 256.97 83.576 273.211 112.425C184.822 184.449 50.7474 152.192 8.37159 50.3153C38.1878 26.0198 69.7805 12.6795 100.934 9.22488M214.629 42.9744C221.777 67.0167 216.284 94.9563 194.823 115.785C163.748 145.945 118.198 138.525 93.1361 108.588C68.0746 78.6509 68.835 43.7121 96.0344 14.0249C97.5993 12.3169 99.2352 10.7175 100.934 9.22488M214.629 42.9744C180.642 16.7819 141.154 4.76483 100.934 9.22488M166.962 84.9537L158.31 64.0115L170.354 44.4518L147.995 56.6464L128.608 45.4042L136.931 63.5415L120.856 87.4987L147.898 75.0252L166.962 84.9537Z"
                      stroke="#FFAB91"
                      strokeWidth="16"
                      strokeLinejoin="bevel"
                    />
                  </svg>
                </div>
                <div className="text-end mb-11 mb-lg-0">啊</div>
              </h3>
            </div>
            <div className="col-lg-7 mb-16 mb-lg-0 px-lg-0">
              <h3 className="yummy-title fw-bolder deco-arrow d-flex flex-lg-row-reverse">
                <div className="deco-arrow-text">
                  <div className="d-flex flex-column flex-lg-row">
                    <div className="text-nowrap yummy-letter-spacing">這裡</div>
                    <div className="text-nowrap yummy-letter-spacing">有</div>
                    <div className="text-nowrap yummy-letter-spacing">
                      好吃的！
                    </div>
                  </div>
                </div>
                <div className="deco-arrow-pic">
                  <picture>
                    <source
                      media="(min-width:992px)"
                      srcSet={decoArrowPinkUrl1}
                    />
                    <img
                      src={decoArrowPinkUrl2}
                      className="d-block pe-7 pe-lg-0 pt-lg-16"
                      alt="deco-arrow"
                    />
                  </picture>
                </div>
              </h3>
            </div>
          </div>
        </div>
        <div className="container">
          {/* yummySection-Swiper */}
          <Swiper
            modules={[Navigation, Grid]}
            spaceBetween={24}
            slidesPerView={1}
            slidesPerGroup={1}
            navigation
            grid={{
              rows: 3,
            }}
            breakpoints={{
              992: {
                grid: {
                  rows: 1,
                },
                slidesPerView: 2,
                spaceBetween: 48,
              },
              1200: {
                grid: {
                  rows: 1,
                },
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
          >
            {posts.map((post) => (
              <SwiperSlide key={post.id}>
                <Link
                  to={`/post/${post.id}`}
                  className="foodCard mx-auto bg-deco-blue text-deco-pink position-relative"
                >
                  <div className="card-hover bg-deco-pink w-100 h-100 position-absolute top-0 start-0">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M40 0L10 6.69388L17.6562 12.5714L0 27.2653C0 27.2653 4.58333 28.6946 8.4375 31.8367C12.2917 34.9788 14.8958 40 14.8958 40L28.4375 21.2245L34.5312 29.7143L40 0Z"
                        fill="#0000C2"
                      />
                    </svg>
                    <div className="fs-4 fw-medium text-deco-blue  mt-5">
                      查看細節
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center border border-2 border-deco-pink">
                    <div className="foodCard-title lh-xs fs-3 fw-bold px-7 text-truncate">
                      {post.user.nickName}
                    </div>
                    <div className="foodCard-icon bg-deco-pink d-flex justify-content-center align-items-center">
                      <svg
                        width="44"
                        height="48"
                        viewBox="0 0 50 53"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.7326 28.2691L5.02824 29.5269L3 21.2838L24.3599 15.5967M10.7326 28.2691L14.1689 50L30.8702 47.1245M10.7326 28.2691L26.5732 24.7764M42.4138 21.2838L47.0507 20.2614L44.9591 10.1652L24.3599 15.5967M42.4138 21.2838L47.5714 44.249L30.8702 47.1245M42.4138 21.2838L26.5732 24.7764M24.3599 15.5967L26.5732 24.7764M24.3599 15.5967C23.1556 8.82328 18.0216 1.15528 13.5215 5.30877C8.34175 10.0895 17.261 17.4867 24.3599 15.5967ZM24.3599 15.5967C23.1329 8.69547 26.4261 -0.0563268 31.5854 2.43328C37.5444 5.30876 31.1101 13.7994 24.3599 15.5967ZM26.5732 24.7764L30.8702 47.1245"
                          stroke="#0000C2"
                          strokeWidth="4"
                        />
                      </svg>
                    </div>
                  </div>
                  <div
                    className="foodCard-text p-7 border border-top-0 border-2 border-deco-pink"
                    style={{
                      height: '100%',
                      minHeight: '146px',
                    }}
                  >
                    <p className="multiline-ellipsis">{post.content}</p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="more-post-sm-btn d-lg-none">
            <Link
              to="/all-posts"
              className="mt-8 py-5 w-100 d-flex justify-content-center align-items-center border border-2 border-deco-pink rounded-3"
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
                  fill="#FFAB91"
                />
              </svg>
              <div className="more-post-btn-text fs-4 ms-5 fw-medium">
                還有更多貼文
              </div>
            </Link>
          </div>
          <div className="more-post-lg-btn d-none d-lg-block mt-7">
            <div className="d-flex justify-content-between align-items-center">
              <div className="fs-1 fw-bolder text-deco-pink text-nowrap">
                認領這邊請
              </div>
              <div className="arrow-right fs-2 fw-bolder text-deco-pink"></div>
              <div className="fs-1 fw-bolder">
                （
                <Link
                  to="/all-posts"
                  className="more-post-btn fs-1 fw-bolder text-nowrap"
                >
                  還有更多貼文
                </Link>
                ）
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeYummySection;
