import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Collapse } from 'bootstrap';
import Marquee from '../../components/Marquee';
import MarqueeDesktop from '../../components/MarqueeDesktop';

const AboutUsMarquee = () => {
  const shareCollapseRef = useRef();
  const discoverCollapseRef = useRef();
  const connectCollapseRef = useRef();
  const collapseInstance = useRef({});

  const handleCollapse = (type) => {
    collapseInstance.current[type]?.toggle();
  };

  // mobile marquee 互動功能
  useEffect(() => {
    collapseInstance.current = {
      share: new Collapse(shareCollapseRef.current, {
        toggle: false,
      }),
      discover: new Collapse(discoverCollapseRef.current, {
        toggle: false,
      }),
      connect: new Collapse(connectCollapseRef.current, {
        toggle: false,
      }),
    };

    return () => {
      // 清理 Collapse 實例
      Object.values(collapseInstance.current).forEach((instance) => {
        instance?.dispose?.();
      });
    };
  }, []);

  // desktop marquee 互動功能
  const shareDesktopRef = useRef();
  const discoverDesktopRef = useRef();
  const connectDesktopRef = useRef();

  const shareDesktopTitleRef = useRef();
  const shareDesktopContentRef = useRef();
  const discoverDesktopTitleRef = useRef();
  const discoverDesktopContentRef = useRef();
  const connectDesktopTitleRef = useRef();
  const connectDesktopContentRef = useRef();
  useEffect(() => {
    const marqueeDesktopRef = {
      share: shareDesktopRef.current,
      discover: discoverDesktopRef.current,
      connect: connectDesktopRef.current,
    };

    const AnimationTitle = {
      share: shareDesktopTitleRef.current,
      discover: discoverDesktopTitleRef.current,
      connect: connectDesktopTitleRef.current,
    };

    const AnimationContent = {
      share: shareDesktopContentRef.current,
      discover: discoverDesktopContentRef.current,
      connect: connectDesktopContentRef.current,
    };

    const timeline = {
      share: gsap.timeline(),
      discover: gsap.timeline(),
      connect: gsap.timeline(),
    };

    let primaryColor = '#00503F';
    let whiteColor = '#FFFFFF';
    const slideInAnimation = (targetRight, targeLeft, element, timeline) => {
      timeline.clear();
      timeline.to(element, {
        backgroundColor: primaryColor,
        borderColor: whiteColor,
      });

      timeline.to(
        targeLeft,
        {
          duration: 0.3,
          x: 0,
          ease: 'elastic.out(1,1)',
        },
        '-=.1',
      );
      timeline.to(
        targetRight,
        {
          duration: 0.3,
          xPercent: -100,
          ease: 'elastic.out(1,1)',
        },
        '-=.4',
      );
    };
    const slideOutAnimation = (targetRight, targeLeft, element, timeline) => {
      timeline.clear();
      timeline.to(
        targeLeft,
        {
          duration: 0.3,
          x: -400,
          ease: 'power3.out',
        },
        '0',
      );
      timeline.to(
        targetRight,
        {
          duration: 0.3,
          xPercent: 0,
          ease: 'power3.out',
        },
        '0',
      );

      timeline.to(element, {
        duration: 0.2,
        backgroundColor: whiteColor,
        borderColor: primaryColor,
      });
    };

    const bindHover = (key) => {
      const targetElement = marqueeDesktopRef[key];
      if (!targetElement) return;

      const handleMouseEnter = () => {
        slideInAnimation(
          AnimationContent[key],
          AnimationTitle[key],
          targetElement,
          timeline[key],
        );
      };

      const handleMouseLeave = () => {
        slideOutAnimation(
          AnimationContent[key],
          AnimationTitle[key],
          targetElement,
          timeline[key],
        );
      };

      targetElement.addEventListener('mouseenter', handleMouseEnter);
      targetElement.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        targetElement.removeEventListener('mouseenter', handleMouseEnter);
        targetElement.removeEventListener('mouseleave', handleMouseLeave);
      };
    };

    const cleanups = [];

    Object.keys(marqueeDesktopRef).forEach((key) => {
      const cleanup = bindHover(key);
      cleanup && cleanups.push(cleanup);
    });

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <>
      {/* <!-- mobile --> */}
      <section className="aboutService d-lg-none">
        <Marquee
          text="分享美味"
          svgName="share"
          clickFunction={() => handleCollapse('share')}
        >
          <div
            className="aboutService-content collapse px-4 py-8"
            ref={shareCollapseRef}
          >
            <h3 className="aboutService-title display-3 mb-7">分享美味</h3>
            <p>
              輕鬆發佈你不再需要的食物，找到願意接受的人。
              <br />
              無論是派對後的剩餘餐點、即將到期的食材，或是購買過量的零食，都可以在這裡找到新主人！
            </p>
          </div>
        </Marquee>
        <Marquee
          text="尋找美食"
          svgName="discover"
          direction="right"
          clickFunction={() => handleCollapse('discover')}
        >
          <div
            className="aboutService-content collapse px-4 py-8"
            ref={discoverCollapseRef}
          >
            <h3 className="aboutService-title display-3 mb-7">尋找美食</h3>
            <p>
              在你附近發現免費的美味食物，快速領取不浪費。
              <br />
              我們提供地區搜尋、詳細的食物資訊，以及便捷的預約系統，讓美味不浪費！
            </p>
          </div>
        </Marquee>
        <Marquee
          text="食客互動"
          svgName="connect"
          clickFunction={() => handleCollapse('connect')}
        >
          <div
            className="aboutService-content collapse px-4 py-8"
            ref={connectCollapseRef}
          >
            <h3 className="aboutService-title display-3 mb-7">食客互動</h3>
            <p>
              方便的留言功能，讓你能夠詢問食物的詳細資訊、安排面交時間，建立溫暖的社群連結。
            </p>
          </div>
        </Marquee>
      </section>

      {/* <!-- desktop --> */}
      <section className="aboutService d-none d-lg-block">
        <MarqueeDesktop
          text="分享美味"
          svgName="share"
          id="aboutShare"
          ref={shareDesktopRef}
        >
          <div
            className="aboutService-content contentTitle ps-12"
            ref={shareDesktopTitleRef}
          >
            <h3 className="aboutService-title display-3 display-lg-1 mb-0">
              分享美味
            </h3>
            <h3 className="aboutService-title wrapTitle display-3 mb-0">
              分享
              <br />
              美味
            </h3>
          </div>
          <div
            className="aboutService-content contentText pe-12"
            ref={shareDesktopContentRef}
          >
            <p className="aboutService-text text-end">
              輕鬆發佈你不再需要的食物，找到願意接受的人。
              <br />
              無論是派對後的剩餘餐點、即將到期的食材，或是購買過量的零食，都可以在這裡找到新主人！
            </p>
            <p className="aboutService-text wrapText text-end">
              輕鬆發佈你不再需要的食物，找到願意接受的人。
              <br />
              無論是派對後的剩餘餐點、即將到期的食材，
              <br />
              或是購買過量的零食，都可以在這裡找到新主人！
            </p>
          </div>
        </MarqueeDesktop>

        <MarqueeDesktop
          text="尋找美食"
          svgName="discover"
          id="aboutDiscover"
          ref={discoverDesktopRef}
          direction="right"
        >
          <div
            className="aboutService-content contentTitle ps-12"
            ref={discoverDesktopTitleRef}
          >
            <h3 className="aboutService-title display-3 display-lg-1 mb-0">
              尋找美食
            </h3>
            <h3 className="aboutService-title wrapTitle display-3 mb-0">
              尋找
              <br />
              美食
            </h3>
          </div>
          <div
            className="aboutService-content contentText pe-12"
            ref={discoverDesktopContentRef}
          >
            <p className="aboutService-text text-end">
              在你附近發現免費的美味食物，快速領取不浪費。
              <br />
              我們提供地區搜尋、詳細的食物資訊，以及便捷的預約系統，讓美味不浪費！
            </p>
            <p className="aboutService-text wrapText text-end">
              在你附近發現免費的美味食物，快速領取不浪費。
              <br />
              我們提供地區搜尋、詳細的食物資訊，
              <br />
              以及便捷的預約系統，讓美味不浪費！
            </p>
          </div>
        </MarqueeDesktop>

        <MarqueeDesktop
          text="食客互動"
          svgName="connect"
          id="aboutConnect"
          ref={connectDesktopRef}
        >
          <div
            className="aboutService-content contentTitle ps-12"
            ref={connectDesktopTitleRef}
          >
            <h3 className="aboutService-title display-3 display-lg-1 mb-0">
              食客互動
            </h3>
            <h3 className="aboutService-title wrapTitle display-3 mb-0">
              食客
              <br />
              互動
            </h3>
          </div>
          <div
            className="aboutService-content contentText pe-12"
            ref={connectDesktopContentRef}
          >
            <p className="aboutService-text2 text-end">
              方便的留言功能，讓你能夠詢問食物的詳細資訊、安排面交時間，建立溫暖的社群連結。
            </p>
            <p className="aboutService-text2 wrapText text-end">
              方便的留言功能，讓你能夠詢問食物的詳細資訊、
              <br />
              安排面交時間，建立溫暖的社群連結。
            </p>
          </div>
        </MarqueeDesktop>
      </section>
    </>
  );
};

export default AboutUsMarquee;
