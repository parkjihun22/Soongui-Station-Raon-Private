import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";

const LocationSection = [
  {
    img: section2Image1,
    titleText: "도안신도시 개발호재 중심지<br />탄탄한 미래가치 입지",
    contentText:
      "서남부종합스포츠타운(예정)과 도안 3단계 개발로 주거·문화 인프라 확충<br />신규 도시개발과 기반시설 확장으로 미래가치 기대",
  },
  {
    img: section2Image2,
    titleText: "의료 인프라 프리미엄<br />건강케어 중심 입지",
    contentText:
      "충남대학교병원, 유성선병원 등 대형 종합병원 인접<br />다양한 전문의료기관과 건강검진센터로 편리한 의료 접근성",
  },
  {
    img: section2Image3,
    titleText: "도시철도 2호선(트램) + 광역도로망<br />뛰어난 광역접근성",
    contentText:
      "대전 도시철도 2호선(예정) 노선 수혜<br />유성IC·현충원IC(예정)로 세종·청주·전국 주요도시 연결",
  },
  {
    img: section2Image4,
    titleText: "생활 인프라 접근성<br />원스톱 도심생활 기반",
    contentText:
      "홈플러스, 대형마트, 카페거리, 문화시설 등 생활·문화 인프라 밀집<br />관공서, 금융기관 등 도심 생활 편의성 우수",
  },
  {
    img: section2Image5,
    titleText: "브랜드타운 스케일<br />5,000세대 라온프라이빗",
    contentText:
      "1·2·3·5단지 총 5,329세대 규모의 초대형 브랜드타운<br />라온건설 라온프라이빗 브랜드 가치와 단지 커뮤니티 활성화 기대",
  },
  {
    img: section2Image6,
    titleText: "쾌적한 자연·휴식 인프라<br />여유로운 생활환경",
    contentText:
      "갑천, 유림공원, 도안근린공원 등 녹지와 공원 인접<br />쾌적한 주거환경과 친환경 라이프스타일 실현",
  },
];



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
          {/* 페이지별 메타: title/description/og/canonical 만 관리 */}
          <title>숭의역 라온프라이빗 - 입지환경</title>
          <meta
            name="description"
            content="인천 숭의역 라온프라이빗의 입지환경을 확인하세요. 수도권 지하철 1호선 숭의역 초역세권 입지, 인천 내·외곽 교통망, 풍부한 생활 인프라와 쾌적한 주거 환경을 갖춘 핵심 입지."
          />
          <meta name="robots" content="index,follow" />
          <link rel="canonical" href="https://tradexmeds.com/LocationEnvironment/intro" />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="숭의역 라온프라이빗" />
          <meta property="og:title" content="숭의역 라온프라이빗 - 입지환경" />
          <meta
            property="og:description"
            content="숭의역 라온프라이빗 입지환경: 1호선 숭의역 도보권, 인천대로·제2순환고속도로 등 광역 교통망, 교육·쇼핑·공원 등 생활 인프라를 모두 갖춘 입지."
          />
          <meta property="og:url" content="https://tradexmeds.com/LocationEnvironment/intro" />
          <meta property="og:image" content="https://tradexmeds.com/img/og/location.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="숭의역 라온프라이빗 - 입지환경" />
          <meta
            name="twitter:description"
            content="숭의역 라온프라이빗 입지환경: 숭의역 초역세권, 인천대로·제2순환고속도로, 교육·편의·공원 인프라로 생활과 미래가치를 동시에 누리는 입지."
          />
          <meta name="twitter:image" content="https://tradexmeds.com/img/og/location.jpg" />
          <meta name="twitter:url" content="https://tradexmeds.com/LocationEnvironment/intro" />

          {/* JSON-LD (대표 이미지/브레드크럼 포함) */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "숭의역 라온프라이빗 - 입지환경",
              "url": "https://tradexmeds.com/LocationEnvironment/intro",
              "description":
                "인천 숭의역 라온프라이빗 입지환경: 1호선 숭의역 도보권, 인천대로·제2순환고속도로 교통망, 교육·쇼핑·공원 인프라를 두루 갖춘 핵심 입지.",
              "primaryImageOfPage": {
                "@type": "ImageObject",
                "contentUrl": "https://tradexmeds.com/img/og/location.jpg",
                "width": 1200,
                "height": 630
              },
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://tradexmeds.com/" },
                  { "@type": "ListItem", "position": 2, "name": "입지환경", "item": "https://tradexmeds.com/LocationEnvironment/intro" }
                ]
              }
            })}
          </script>
        </Helmet>

        <Header isChanged={isScroll} />
        <FixIcon />

        <Bener title="입지환경" />

        <MenuBar contents={menuContents} />

        {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
        <h1 className={styles.screenReaderOnly}>
          숭의역 라온프라이빗 - 입지환경
        </h1>
        <p className={styles.screenReaderOnly}>
          숭의역 라온프라이빗은 1호선 숭의역 도보권 초역세권 입지와 인천 주요 도로망을 갖춘 교통의 요지입니다. 
          교육·쇼핑·공원 등 풍부한 생활 인프라와 쾌적한 환경을 동시에 누리며 미래가치를 선점할 수 있는 입지를 제공합니다.
        </p>

        <div className={styles.textBox}>
          <div>숭의역 초역세권의 가치 위에</div>
          <div>편리한 생활 인프라와 쾌적한 자연환경</div>
          <div>미래를 선도할 라온프라이빗</div>
        </div>

        <img
          src={page1}
          className={styles.image2}
          alt="숭의역 라온프라이빗 입지환경 이미지1"
        />


      <div className={styles.section2}>
        {LocationSection.map((value, idx) => (
          <LocationSectionBox
            image={value.img}
            title={value.titleText}
            text={value.contentText}
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※본 홍보물의 내용과 지역도는 소비자의 이해를 돕기 위한 것으로, 개발 예정•계획 및 교통, 학교 계획 등에 관한 사항은 해당 기관의 아래 자료를 토대로 제작되었습니다. 사업계획 및 일정은 개발계획별 사업주체에 의해 변경될 수 있으며, 숭의역 라온프라이빗 사업주체 및 시공사와 무관합니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
