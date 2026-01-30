import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

import { daysFromNow } from '@/utils/formatTIme';
import { postByIdQueryOption } from '@/query/handleQueryOption';

// components
import FullScreenLoading from '@/components/FullScreenLoading';
import PostComments from '@/components/postPage/PostComments';
import OtherPosts from '@/components/postPage/OtherPosts';
import PostBreadcrumbSection from './post-detail/PostBreadcrumbSection';
import PostHeroSection from './post-detail/PostHeroSection';
import PostMobileFoodInfo from './post-detail/PostMobileFoodInfo';
import PostSidebarFoodInfo from './post-detail/PostSidebarFoodInfo';

const logoUrl = './assets/images/Logo.png';

const PostDetail = () => {
  const { id } = useParams();

  const { data: post, isLoading, error } = useQuery(postByIdQueryOption(id));

  // foodApplyModal
  // const foodApplyRef = useRef(null);
  // const foodApplyModalRef = useRef(null);
  // const [applyInfo, setApplyInfo] = useState({
  //   postId: 0,
  //   postTitle: '',
  //   userNickname: '',
  // });
  const openApplyModal = () => {
    // if (!isLogin) {
    //   AlertModal.confirmAction({
    //     title: '請先登入',
    //     text: '迷路的尋者，登入後才能使用會員功能喔!',
    //     icon: 'info',
    //     confirmButtonText: '登入',
    //     cancelButtonText: '取消',
    //     onConfirm: () => {
    //       navigate('/login');
    //     },
    //   });
    //   return;
    // }

    // if (checkFoodApplications(userInfo.foodApplications, post.id)) {
    //   AlertModal.customMessage({
    //     text: '尊敬的尋者唷！您已申請了唷，請等候通知！',
    //   });
    //   return;
    // }
    // setApplyInfo((pre) => ({
    //   ...pre,
    //   postId: post.id,
    //   postTitle: post.title,
    //   postImgUrl: post.imagesUrl,
    //   userId: userInfo.userId,
    //   userNickname: userInfo.nickname,
    // }));
    // foodApplyRef.current.show();
    alert('須先登入');
  };

  if (isLoading) return <FullScreenLoading />;
  if (error)
    return <div style={{ marginTop: '60px' }}>錯誤: {error.message}</div>;

  return (
    <>
      {post && (
        <>
          {/* Breadcrumb 導覽列區塊 */}
          <PostBreadcrumbSection title={post.title} />
          <main className="post-page">
            <section className="post-receiving-area container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="row mb-7">
                    <div className="col-lg-12">
                      {/* 貼文主圖 */}
                      <PostHeroSection
                        id={post.id}
                        imagesUrl={post.imagesUrl}
                      />
                    </div>
                  </div>
                  {/* 貼文 */}
                  <div className="bg-white rounded-3 p-5 mb-5">
                    <div className="row mx-0 py-5 border-bottom align-items-center">
                      <div className="col-lg-8 d-flex align-items-center justify-content-between p-0">
                        <div className="d-flex me-5">
                          <img
                            className="rounded-circle object-fit-cover"
                            src={post.user?.avatarUrl || logoUrl}
                            alt="user-img"
                            style={{
                              width: '48px',
                              height: '48px',
                            }}
                          />
                        </div>
                        <div className="flex-grow-1">
                          <div className="fs-4">{post.user?.nickName}</div>
                          <div
                            style={{
                              fontSize: '14px',
                            }}
                          >
                            {`${post.user?.pickupCity} / ${
                              post.user?.pickupDistrict
                            }· ${daysFromNow(post.createdPostDate)}`}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mx-0 border-bottom">
                      <div className="d-flex justify-content-between align-items-center py-5 pt-lg-7 px-0">
                        <h4 className="fs-3 fw-bold">{post.title}</h4>
                      </div>
                      <div className="row pb-5">
                        <p className="px-0">{post.content}</p>
                      </div>
                      <div className="row w-auto d-inline justify-content-start pb-7">
                        <div className="col d-inline ps-0">
                          <svg
                            className="me-2"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.37468 8.23224C1.31912 8.08256 1.31912 7.91792 1.37468 7.76824C1.91581 6.45614 2.83435 5.33427 4.01386 4.54484C5.19336 3.75541 6.58071 3.33398 8.00001 3.33398C9.41932 3.33398 10.8067 3.75541 11.9862 4.54484C13.1657 5.33427 14.0842 6.45614 14.6253 7.76824C14.6809 7.91792 14.6809 8.08256 14.6253 8.23224C14.0842 9.54434 13.1657 10.6662 11.9862 11.4556C10.8067 12.2451 9.41932 12.6665 8.00001 12.6665C6.58071 12.6665 5.19336 12.2451 4.01386 11.4556C2.83435 10.6662 1.91581 9.54434 1.37468 8.23224Z"
                              stroke="black"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8.00001 10.0002C9.10458 10.0002 10 9.10481 10 8.00024C10 6.89567 9.10458 6.00024 8.00001 6.00024C6.89544 6.00024 6.00001 6.89567 6.00001 8.00024C6.00001 9.10481 6.89544 10.0002 8.00001 10.0002Z"
                              stroke="black"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span>{post.viewCount}</span>
                        </div>
                        <div className="col d-inline">
                          <svg
                            className="me-2"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.26634 13.3332C6.53873 13.9859 8.0024 14.1627 9.3936 13.8317C10.7848 13.5007 12.012 12.6838 12.8542 11.528C13.6963 10.3722 14.098 8.95367 13.9867 7.52798C13.8755 6.10228 13.2587 4.76318 12.2475 3.752C11.2364 2.74081 9.89727 2.12404 8.47157 2.01281C7.04587 1.90159 5.62732 2.30323 4.47155 3.14537C3.31579 3.9875 2.4988 5.21474 2.16782 6.60594C1.83684 7.99714 2.01364 9.46082 2.66634 10.7332L1.33301 14.6665L5.26634 13.3332Z"
                              stroke="black"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span>{post.commentCount}</span>
                        </div>
                        <div className="col d-inline">
                          <svg
                            className="me-2"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_188_5647)">
                              <path
                                d="M4.66634 6.66683V14.6668M9.99967 3.92016L9.33301 6.66683H13.2197C13.4267 6.66683 13.6308 6.71502 13.816 6.80759C14.0011 6.90016 14.1621 7.03457 14.2863 7.20016C14.4105 7.36576 14.4945 7.55799 14.5315 7.76165C14.5685 7.9653 14.5576 8.17478 14.4997 8.3735L12.9463 13.7068C12.8656 13.9838 12.6971 14.2271 12.4663 14.4002C12.2355 14.5733 11.9548 14.6668 11.6663 14.6668H2.66634C2.31272 14.6668 1.97358 14.5264 1.72353 14.2763C1.47348 14.0263 1.33301 13.6871 1.33301 13.3335V8.00016C1.33301 7.64654 1.47348 7.3074 1.72353 7.05735C1.97358 6.80731 2.31272 6.66683 2.66634 6.66683H4.50634C4.7544 6.6667 4.9975 6.59737 5.20831 6.46664C5.41912 6.33592 5.58929 6.14897 5.69967 5.92683L7.99967 1.3335C8.31406 1.33739 8.6235 1.41228 8.90488 1.55256C9.18625 1.69284 9.43229 1.8949 9.62461 2.14363C9.81693 2.39236 9.95055 2.68134 10.0155 2.98896C10.0804 3.29659 10.075 3.61492 9.99967 3.92016Z"
                                stroke="black"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_188_5647">
                                <rect width="16" height="16" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <span>{post.likeCount}</span>
                        </div>
                      </div>
                    </div>
                    <div className="post-card-md-btn-list d-none d-md-block mt-5">
                      <div className="row mx-0">
                        <div className="col px-1">
                          <button
                            type="button"
                            className="normal-btn btn border-0 w-100"
                          >
                            <span className="me-2">點讚</span>
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7 10V22M15 5.88L14 10H19.83C20.1405 10 20.4467 10.0723 20.7244 10.2111C21.0021 10.35 21.2437 10.5516 21.43 10.8C21.6163 11.0484 21.7422 11.3367 21.7977 11.6422C21.8533 11.9477 21.8369 12.2619 21.75 12.56L19.42 20.56C19.2988 20.9754 19.0462 21.3404 18.7 21.6C18.3538 21.8596 17.9327 22 17.5 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V12C2 11.4696 2.21071 10.9609 2.58579 10.5858C2.96086 10.2107 3.46957 10 4 10H6.76C7.13208 9.9998 7.49674 9.89581 7.81296 9.69972C8.12917 9.50363 8.38442 9.22321 8.55 8.89L12 2C12.4716 2.00584 12.9357 2.11817 13.3578 2.3286C13.7799 2.53902 14.1489 2.84211 14.4374 3.2152C14.7259 3.5883 14.9263 4.02176 15.0237 4.4832C15.1212 4.94464 15.113 5.42213 15 5.88Z"
                                stroke="#121212"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                        <div className="col px-1">
                          <button
                            type="button"
                            className="normal-btn btn border-0 w-100"
                          >
                            <span className="me-2">留言</span>
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.9 20C9.80858 20.9791 12.0041 21.2443 14.0909 20.7478C16.1777 20.2514 18.0186 19.0259 19.2818 17.2922C20.545 15.5586 21.1474 13.4308 20.9806 11.2922C20.8137 9.15366 19.8886 7.14502 18.3718 5.62824C16.855 4.11146 14.8464 3.1863 12.7078 3.01946C10.5693 2.85263 8.44147 3.45509 6.70782 4.71829C4.97417 5.98149 3.74869 7.82236 3.25222 9.90916C2.75575 11.996 3.02094 14.1915 4 16.1L2 22L7.9 20Z"
                                stroke="#121212"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                        <div className="col ps-1 pe-0">
                          <button
                            type="button"
                            className="normal-btn btn border-0 w-100"
                          >
                            <span className="me-2">追蹤貼文</span>
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.3 21C10.4674 21.3044 10.7134 21.5583 11.0125 21.7352C11.3115 21.912 11.6526 22.0053 12 22.0053C12.3474 22.0053 12.6885 21.912 12.9875 21.7352C13.2866 21.5583 13.5326 21.3044 13.7 21M6 8C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2C13.5913 2 15.1174 2.63214 16.2426 3.75736C17.3679 4.88258 18 6.4087 18 8C18 15 21 17 21 17H3C3 17 6 15 6 8Z"
                                stroke="#121212"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                        <div className="col px-1">
                          <button
                            type="button"
                            className="normal-btn btn border-0 w-100"
                          >
                            <span className="me-2">編輯貼文</span>
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.33366 14.6668H12.0003C12.3539 14.6668 12.6931 14.5264 12.9431 14.2763C13.1932 14.0263 13.3337 13.6871 13.3337 13.3335V4.66683L10.0003 1.3335H4.00033C3.6467 1.3335 3.30756 1.47397 3.05752 1.72402C2.80747 1.97407 2.66699 2.31321 2.66699 2.66683V9.00016M9.33366 1.3335V4.00016C9.33366 4.35378 9.47413 4.69292 9.72418 4.94297C9.97423 5.19302 10.3134 5.3335 10.667 5.3335H13.3337M8.91899 10.4175C9.05049 10.286 9.1548 10.1299 9.22596 9.95808C9.29713 9.78627 9.33376 9.60213 9.33376 9.41616C9.33376 9.2302 9.29713 9.04605 9.22596 8.87425C9.1548 8.70244 9.05049 8.54633 8.91899 8.41483C8.7875 8.28333 8.63139 8.17902 8.45958 8.10786C8.28777 8.03669 8.10362 8.00006 7.91766 8.00006C7.73169 8.00006 7.54755 8.03669 7.37574 8.10786C7.20393 8.17902 7.04782 8.28333 6.91632 8.41483L3.57633 11.7562C3.41782 11.9146 3.30181 12.1104 3.23899 12.3255L2.68099 14.2388C2.66426 14.2962 2.66326 14.357 2.67809 14.4149C2.69292 14.4728 2.72304 14.5256 2.76529 14.5679C2.80754 14.6101 2.86038 14.6402 2.91827 14.6551C2.97615 14.6699 3.03696 14.6689 3.09433 14.6522L5.00766 14.0942C5.22277 14.0313 5.41858 13.9153 5.57699 13.7568L8.91899 10.4175Z"
                                stroke="#121212"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="post-card-sm-btn-list d-block d-md-none mt-5">
                      <div className="row">
                        <div className="col ps-0 pe-1 d-flex justify-content-center">
                          <button className="btn">
                            <svg
                              className="d-block"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7 10V22M15 5.88L14 10H19.83C20.1405 10 20.4467 10.0723 20.7244 10.2111C21.0021 10.35 21.2437 10.5516 21.43 10.8C21.6163 11.0484 21.7422 11.3367 21.7977 11.6422C21.8533 11.9477 21.8369 12.2619 21.75 12.56L19.42 20.56C19.2988 20.9754 19.0462 21.3404 18.7 21.6C18.3538 21.8596 17.9327 22 17.5 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V12C2 11.4696 2.21071 10.9609 2.58579 10.5858C2.96086 10.2107 3.46957 10 4 10H6.76C7.13208 9.9998 7.49674 9.89581 7.81296 9.69972C8.12917 9.50363 8.38442 9.22321 8.55 8.89L12 2C12.4716 2.00584 12.9357 2.11817 13.3578 2.3286C13.7799 2.53902 14.1489 2.84211 14.4374 3.2152C14.7259 3.5883 14.9263 4.02176 15.0237 4.4832C15.1212 4.94464 15.113 5.42213 15 5.88Z"
                                stroke="#121212"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                        <div className="col px-1 d-flex justify-content-center">
                          <button className="btn">
                            <svg
                              className="d-block"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.9 20C9.80858 20.9791 12.0041 21.2443 14.0909 20.7478C16.1777 20.2514 18.0186 19.0259 19.2818 17.2922C20.545 15.5586 21.1474 13.4308 20.9806 11.2922C20.8137 9.15366 19.8886 7.14502 18.3718 5.62824C16.855 4.11146 14.8464 3.1863 12.7078 3.01946C10.5693 2.85263 8.44147 3.45509 6.70782 4.71829C4.97417 5.98149 3.74869 7.82236 3.25222 9.90916C2.75575 11.996 3.02094 14.1915 4 16.1L2 22L7.9 20Z"
                                stroke="#121212"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                        <div className="col ps-1 pe-0 d-flex justify-content-center">
                          <button className="btn">
                            <svg
                              className="d-block"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.3 21C10.4674 21.3044 10.7134 21.5583 11.0125 21.7352C11.3115 21.912 11.6526 22.0053 12 22.0053C12.3474 22.0053 12.6885 21.912 12.9875 21.7352C13.2866 21.5583 13.5326 21.3044 13.7 21M6 8C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2C13.5913 2 15.1174 2.63214 16.2426 3.75736C17.3679 4.88258 18 6.4087 18 8C18 15 21 17 21 17H3C3 17 6 15 6 8Z"
                                stroke="#121212"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 手機版領取資訊 */}
                  <div className="d-lg-none">
                    <PostMobileFoodInfo food={post.food} pickup={post.pickup} />
                  </div>
                  {/* 留言區 */}
                  <PostComments id={id} commentCount={post.commentCount} />
                  {/* 其他貼文 */}
                  <OtherPosts
                    id={id}
                    clickMethod={() => openApplyModal(post)}
                  />
                </div>
                <div className="col-lg-4 d-none d-lg-block">
                  {/* <!--右邊領取區--> */}
                  <PostSidebarFoodInfo food={post.food} pickup={post.pickup} />
                </div>
              </div>
            </section>
          </main>
        </>
      )}
    </>
  );
};

export default PostDetail;
