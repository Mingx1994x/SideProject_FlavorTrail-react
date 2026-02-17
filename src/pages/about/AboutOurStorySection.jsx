import { imgAboutURl2 } from '@/data/imagesPath';
import StackedTextSVG from '@/components/StackedTextSVG';
import SingleTextSVG from '@/components/SingleTextSVG';

const titleTextPositions = {
  default: {
    topLeft: { x: 4, y: 60 },
    topRight: { x: 0, y: 60 },
    bottomLeft: { x: 32, y: 60 },
    bottomRight: { x: 34, y: 89 },
  },
  desktop: {
    topLeft: { x: 2, y: 74 },
    topRight: { x: 0, y: 60 },
    bottomLeft: { x: 16, y: 73 },
    bottomRight: { x: 18, y: 87 },
  },
};

const titleTextStyle = {
  topLeft: 'title-stroke-svg__our-left',
  topRight: 'title-stroke-svg__our-right',
  bottomLeft: 'title-stroke-svg__story-left',
  bottomRight: 'title-stroke-svg__story-right',
};

const AboutOurStorySection = () => {
  return (
    <section className="about-story position-relative bg-primary py-12 py-lg-18">
      <div className="container">
        <div className="about-story__container d-flex">
          <div className="about-story__title-first-left title-wrapper">
            <SingleTextSVG
              text="我們"
              viewBox="0 0 160 100"
              position={titleTextPositions.desktop.topLeft}
              displayClass="d-none d-lg-block"
              strokeStyleClass={titleTextStyle.topLeft}
            />
            <SingleTextSVG
              text="我們"
              viewBox="0 0 140 100"
              position={titleTextPositions.default.topLeft}
              displayClass="d-lg-none d-block"
              strokeStyleClass={titleTextStyle.topLeft}
            />
          </div>

          <div className="about-story__title-first-right title-wrapper">
            <StackedTextSVG
              text={'的'}
              viewBox={'0 -15 100 100'}
              position={titleTextPositions.desktop.topRight}
              displayClass="d-none d-lg-block"
              strokeStyleClass={titleTextStyle.topRight}
              count={16}
            />
            <StackedTextSVG
              text={'的'}
              viewBox={'0 0 100 100'}
              position={titleTextPositions.default.topRight}
              displayClass="d-lg-none d-block"
              strokeStyleClass={titleTextStyle.topRight}
              count={8}
            />
          </div>

          <div className="about-story__title-second-left title-wrapper">
            <StackedTextSVG
              text="故"
              viewBox="0 0 100 100"
              position={titleTextPositions.desktop.bottomLeft}
              displayClass="d-none d-lg-block"
              strokeStyleClass={titleTextStyle.bottomLeft}
              count={16}
            />

            <StackedTextSVG
              text="故"
              viewBox="0 0 100 100"
              position={titleTextPositions.default.bottomLeft}
              displayClass="d-lg-none d-block"
              strokeStyleClass={titleTextStyle.bottomLeft}
              count={8}
            />
          </div>

          <div className="about-story__title-second-right title-wrapper">
            <SingleTextSVG
              text="事"
              viewBox="0 0 100 100"
              position={titleTextPositions.desktop.bottomRight}
              displayClass="d-none d-lg-block"
              strokeStyleClass="title-stroke-svg__story-right"
            />
            <SingleTextSVG
              text={'事'}
              viewBox="0 0 100 100"
              position={titleTextPositions.default.bottomRight}
              displayClass="d-lg-none d-block"
              strokeStyleClass="title-stroke-svg__story-right"
            />
          </div>

          <div className="about-story__content row">
            <div className="about-story__content--first col-9 col-lg-6 offset-lg-1">
              <p className="fs-lg-4 text-white">
                這個平台的誕生，源於我們對食物浪費的深切關注。在一次社區活動中，我們發現許多好吃的食物因無法及時消耗而被丟棄，而另一邊，卻有許多人因為經濟困難而無法滿足基本的飲食需求。
              </p>
            </div>
            <div className="about-story__content--second col-9 col-lg-6 offset-lg-5 offset-3">
              <p className="fs-lg-4 text-white">
                於是,我們決定創建「餘味尋蹤」，讓每一份多餘的美味都能找到新的主人,減少浪費，同時也為有需要的人提供幫助。
              </p>
            </div>
          </div>

          <div className="about-story__deco"></div>
          <div className="about-story__background">
            <img
              className="about-story__background-img"
              src={imgAboutURl2}
              alt="about-story__background"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOurStorySection;
