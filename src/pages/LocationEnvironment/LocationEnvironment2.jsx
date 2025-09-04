import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import Ready from "../../components/Ready/Ready";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
import { Helmet } from "react-helmet-async";
// import page1 from "../../assets/LocationEnvironment/LocationEnvironment2/page1.jpg";


const LocationEnvironment1 = () => {
  const menuContents = [
    // { title: "입지 안내영상", url: "/FloorPlan/videos" },
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/premium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
        <Helmet>
          <title>숭의역 라온프라이빗 - 프리미엄</title>
          <meta
            name="description"
            content="인천 숭의역 라온프라이빗 프리미엄을 확인하세요. 1호선 숭의역 초역세권 입지, 인천 도심과 수도권을 연결하는 교통망, 생활·교육·문화 인프라와 함께 라온프라이빗 브랜드 가치가 더해진 프리미엄 주거 환경을 제공합니다."
          />
          <link rel="canonical" href="https://tradexmeds.com/LocationEnvironment/premium" />
          <meta name="robots" content="index,follow" />
        </Helmet>

        <Header isChanged={isScroll} />
        <FixIcon />

        <Bener title="프리미엄" />

        <MenuBar contents={menuContents} />

        {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
        <h1 className={styles.screenReaderOnly}>
          숭의역 라온프라이빗 - 프리미엄
        </h1>
        <p className={styles.screenReaderOnly}>
          숭의역 라온프라이빗만의 차별화된 프리미엄을 확인하세요. 
          1호선 숭의역 도보권 입지, 인천 도심·수도권과의 뛰어난 연결성, 
          풍부한 생활·교육·문화 인프라와 라온프라이빗의 브랜드 가치가 더해져 
          독보적인 주거 프리미엄을 제공합니다.
        </p>

        <div className={styles.textBox}>
          <div>숭의역 초역세권의 눈부신 가치 위에</div>
          <div>숭의역 라온프라이빗의 새로운 자부심으로 찾아옵니다.</div>
        </div>


      {/* <img
        src={page1}
        className={styles.image3}
        alt="숭의역 라온프라이빗-image1"
      /> */}
      <Ready/>
      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
