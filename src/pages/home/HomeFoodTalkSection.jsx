import axios from 'axios';
import { useEffect, useState } from 'react';
import AlertModal from '../../components/AlertModal';
import { decoTalkGreenUrl, decoTalkPinkUrl } from '../../data/imagesPath';

const { VITE_BASE_URL } = import.meta.env;

const HomeFoodTalkSection = () => {
  const [loadState, setLoadState] = useState(false);
  const [allFeedbacks, setAllFeedbacks] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [tempFeedbacks, setTempFeedbacks] = useState([
    {
      id: 1,
      content:
        '超級喜歡這個平台!在這裡我不僅能找到新鮮的食物,還能遇到很多友好的分享者。每次與其他Buddy的互動都充滿了正能量,這讓我覺得自己真的成為了這個社群的一部分，謝謝你們！',
      imageUrl:
        'https://raw.githubusercontent.com/Ariel0508/FlavorTrail/refs/heads/mergeDevTest/assets/images/home-3.jpg',
      user: {
        nickName: '街口阿勇',
      },
    },
    {
      id: 2,
      content:
        '謝謝 Flavor Trail的大家，今天收到一位超棒的分享者提供的美味午餐！真的很感謝你們的慷慨,讓我在窘困時期不再擔心吃飯問題。這種分享讓我感到社群的溫暖，謝謝你們！',
      imageUrl:
        'https://raw.githubusercontent.com/Ariel0508/FlavorTrail/refs/heads/mergeDevTest/assets/images/home-4.jpg',
      user: {
        nickName: '努力生存的勇者',
      },
    },
    {
      id: 3,
      content:
        '成為 Flavor buddy真的是一件非常有趣的事!我每次分享食物的時候都會特別注意衛生,因為知道它們可能會送到需要的人手中。這不僅是對食物的尊重,也是對這個社群的愛。',
      imageUrl:
        'https://raw.githubusercontent.com/Ariel0508/FlavorTrail/refs/heads/mergeDevTest/assets/images/home-5.jpg',
      user: {
        nickName: '巷口阿美',
      },
    },
  ]);
  const [flag, setFlag] = useState(0);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${VITE_BASE_URL}/feedbacks?_expand=user`);
        setAllFeedbacks(res.data);
      } catch (error) {
        AlertModal.errorMessage({
          title: '連線失敗',
          text: `${error}，請稍後再試`,
        });
      }
    })();
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      setLoadState((pre) => !pre);
      if (flag !== 0) {
        setTempFeedbacks(feedbacks);
      }
      switch (flag) {
        case 1:
          setFeedbacks(allFeedbacks.slice(0, 3));
          setFlag((pre) => pre + 1);
          break;
        case 2:
          setFeedbacks(allFeedbacks.slice(3, 6));
          setFlag((pre) => pre + 1);
          break;
        case 3:
          setFeedbacks(allFeedbacks.slice(6));
          setFlag(1);
          break;
        default:
          setFlag((pre) => pre + 1);
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [flag, feedbacks, allFeedbacks]);

  return (
    <section className="bg-deco-coral py-lg-18 py-12">
      <div className="container">
        <div className="row mb-lg-17 flex-column flex-lg-row mb-12 mb-lg-17">
          {loadState
            ? tempFeedbacks.map((feedback) => (
                <div className="col-lg-4 mb-7 mb-lg-0" key={feedback.id}>
                  <div
                    className="foodtalk-cover bg-primary position-relative h-100"
                    style={{
                      minHeight: '636px',
                    }}
                  >
                    <div className="foodtalk-back show w-100 h-100 position-absolute top-0 left-0">
                      <img src={decoTalkPinkUrl} alt="talk-pink" />
                    </div>
                    <div className="bg-primary">
                      <div className="foodtalk-img">
                        <img
                          src={feedback.imageUrl}
                          alt="home-3"
                          className="img border border-primary border-4 w-100"
                        />
                      </div>
                      <div className="p-7 h-100">
                        <p className="text-deco-coral fw-medium fs-5 mb-7">
                          {feedback.content}
                        </p>
                        <h3 className="text-deco-coral fw-bold lh-xs fs-md-4">
                          {`— ${feedback.user?.nickName} —`}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : feedbacks.map((feedback) => (
                <div className="col-lg-4 mb-7 mb-lg-0" key={feedback.id}>
                  <div className="bg-primary d-flex flex-column h-100">
                    <div className="foodtalk-img mb-7">
                      <img
                        src={feedback.imageUrl}
                        alt="home-3"
                        className="img border border-primary border-4 w-100"
                      />
                    </div>
                    <p className="text-deco-coral fw-medium fs-5 px-7 mb-7">
                      {feedback.content}
                    </p>
                    <h3 className="text-deco-coral fw-bold lh-xs fs-md-4 px-7 pb-7 mt-auto">
                      {`— ${feedback.user?.nickName} —`}
                    </h3>
                  </div>
                </div>
              ))}
        </div>
        <div className="row">
          <h4 className="text-primary fw-bold fs-lg-3 mb-5 mb-lg-7">
            WE ARE DEEPLY
            <br />
            THANKFUL
          </h4>
          <div className="position-relative">
            <div className="col-9 col-md-9 col-lg-12">
              <h2 className="text-primary display-3 display-lg-1 foodtalk-title">
                餘味尋者有 <span className="d-none d-lg-inline">說！</span>
              </h2>
            </div>
            <img
              src={decoTalkGreenUrl}
              alt="talk-green"
              className="position-absolute talk-talk"
            />
          </div>
          <h2 className="text-primary display-3 display-lg-1 text-end d-lg-none">
            說！
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HomeFoodTalkSection;
