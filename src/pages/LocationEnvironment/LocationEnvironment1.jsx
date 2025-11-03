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

import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/premium01.jpg";
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
    titleText: "숭의역 초역세권·원도심 재생호재<br />미래가치 중심 입지",
    contentText:
      "수인·분당선 ‘숭의(인하대병원)역’ 도보권 초역세권<br />인천 내항·원도심 재생사업 등 다층 호재로 미래가치 기대",
  },
  {
    img: section2Image2,
    titleText: "의료 인프라 프리미엄<br />인하대병원 도보권",
    contentText:
      "인하대병원 인접(응급·전문센터 접근 용이)<br />인천의료원·전문의원 밀집으로 편리한 의료 네트워크",
  },
  {
    img: section2Image3,
    titleText: "철도·광역도로망<br />수도권 직결 광역접근성",
    contentText:
      "수인·분당선 이용, 인천/서울 도심 연결 수월<br />인천대로·제2경인고속도로·문학IC·도화IC로 차량 이동 편리",
  },
  {
    img: section2Image4,
    titleText: "생활 인프라 밀집<br />원스톱 도심 라이프",
    contentText:
      "전통시장·대형마트·관공서·문화시설 인접<br />금융·편의·상업시설이 가까운 도심 생활권",
  },
  {
    img: section2Image5,
    titleText: "직주근접·교육환경<br />균형 잡힌 생활권",
    contentText:
      "송도국제도시·항만·산업벨트 근접한 배후수요<br />초·중·고 및 대학(인하대) 인근으로 교육 여건 우수",
  },
  {
    img: section2Image6,
    titleText: "자연·휴식 인프라<br />바다·공원 생활권",
    contentText:
      "월미도·자유공원·근린공원 등 녹지 접근성<br />내항 수변·도심 조망(동·호수별 상이)으로 쾌적한 일상",
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
          <link rel="canonical" href="https://www.bunyang-114.com/LocationEnvironment/intro" />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="숭의역 라온프라이빗" />
          <meta property="og:title" content="숭의역 라온프라이빗 - 입지환경" />
          <meta
            property="og:description"
            content="숭의역 라온프라이빗 입지환경: 1호선 숭의역 도보권, 인천대로·제2순환고속도로 등 광역 교통망, 교육·쇼핑·공원 등 생활 인프라를 모두 갖춘 입지."
          />
          <meta property="og:url" content="https://www.bunyang-114.com/LocationEnvironment/intro" />
          <meta property="og:image" content="https://www.bunyang-114.com/img/og/location.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="숭의역 라온프라이빗 - 입지환경" />
          <meta
            name="twitter:description"
            content="숭의역 라온프라이빗 입지환경: 숭의역 초역세권, 인천대로·제2순환고속도로, 교육·편의·공원 인프라로 생활과 미래가치를 동시에 누리는 입지."
          />
          <meta name="twitter:image" content="https://www.bunyang-114.com/img/og/location.jpg" />
          <meta name="twitter:url" content="https://www.bunyang-114.com/LocationEnvironment/intro" />

          {/* JSON-LD (대표 이미지/브레드크럼 포함) */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "숭의역 라온프라이빗 - 입지환경",
              "url": "https://www.bunyang-114.com/LocationEnvironment/intro",
              "description":
                "인천 숭의역 라온프라이빗 입지환경: 1호선 숭의역 도보권, 인천대로·제2순환고속도로 교통망, 교육·쇼핑·공원 인프라를 두루 갖춘 핵심 입지.",
              "primaryImageOfPage": {
                "@type": "ImageObject",
                "contentUrl": "https://www.bunyang-114.com/img/og/location.jpg",
                "width": 1200,
                "height": 630
              },
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://www.bunyang-114.com/" },
                  { "@type": "ListItem", "position": 2, "name": "입지환경", "item": "https://www.bunyang-114.com/LocationEnvironment/intro" }
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
