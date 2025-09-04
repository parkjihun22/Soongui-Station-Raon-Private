import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./FloorPlan.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

const Emodel = () => {
  const menuContents = [
    { title: "1,2단지", key: "1,2단지" },
    { title: "3,5단지", key: "3,5단지" },
    // { title: "84A", key: "84A" },
    // { title: "84B", key: "84B" },
  ];

  const vrUrls = {
    "1,2단지": "https://www.Raon.co.kr/upload/2024/07/20240719023756017530/tour.html",
    "3,5단지": "https://www.Raon.co.kr/upload/2024/11/20241107065049013129/tour.html",
    // "84A": "https://www.prugio.com/hb/2025/onecluster/vr/84a.html",
    // "84B": "https://www.prugio.com/hb/2025/onecluster/vr/84b.html",
  };





  const [selectedType, setSelectedType] = useState("1,2단지");
  const { pathname } = useLocation();
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <Helmet>
        {/* 핵심 SEO 페이지: E-모델하우스 */}
        <title>숭의역 라온프라이빗 - E-모델하우스</title>
        <meta
          name="description"
          content="인천 숭의역 라온프라이빗 E-모델하우스를 온라인에서 편리하게 둘러보세요. VR 가상 투어와 세대별 평면도, 인테리어까지 실감나게 확인하실 수 있습니다."
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://tradexmeds.com/FloorPlan/Emodel" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="숭의역 라온프라이빗" />
        <meta property="og:title" content="숭의역 라온프라이빗 - E-모델하우스" />
        <meta
          property="og:description"
          content="숭의역 라온프라이빗 E-모델하우스를 온라인에서 둘러보세요. VR 투어와 세대별 평면도를 통해 실제와 같은 공간을 체험할 수 있습니다."
        />
        <meta property="og:url" content="https://tradexmeds.com/FloorPlan/Emodel" />
        <meta property="og:image" content="https://tradexmeds.com/img/og/emodel.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="숭의역 라온프라이빗 - E-모델하우스" />
        <meta
          name="twitter:description"
          content="숭의역 라온프라이빗 E-모델하우스를 온라인에서 편리하게 둘러보세요. VR 투어와 평면도로 실제 같은 공간을 경험하세요."
        />
        <meta name="twitter:image" content="https://tradexmeds.com/img/og/emodel.jpg" />
        <meta name="twitter:url" content="https://tradexmeds.com/FloorPlan/Emodel" />

        {/* JSON-LD (구조화 데이터) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "숭의역 라온프라이빗 - E-모델하우스",
            "url": "https://tradexmeds.com/FloorPlan/Emodel",
            "description":
              "인천 숭의역 라온프라이빗 E-모델하우스를 온라인에서 편리하게 둘러보세요. VR 가상 투어와 세대별 평면도를 확인할 수 있습니다.",
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "contentUrl": "https://tradexmeds.com/img/og/emodel.jpg",
              "width": 1200,
              "height": 630
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://tradexmeds.com/" },
                { "@type": "ListItem", "position": 2, "name": "E-모델하우스", "item": "https://tradexmeds.com/FloorPlan/Emodel" }
              ]
            }
          })}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />
      <Bener title="E-모델하우스" />
      <MenuBar contents={menuContents} />

      <h1 className={styles.screenReaderOnly}>숭의역 라온프라이빗 - E-모델하우스</h1>
      <p className={styles.screenReaderOnly}>
        숭의역 라온프라이빗 E-모델하우스 페이지에서는 VR 가상 투어, 세대별 평면도, 
        인테리어 디자인 등을 온라인에서 실감나게 확인할 수 있습니다. 
        고객분들이 직접 방문하지 않아도 실제 공간을 체험하듯 둘러보실 수 있습니다.
      </p>


      <div className={styles.tabMenu}>
        {menuContents.slice(0, 5).map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedType(tab.key)}
            className={`${styles.tabButton} ${selectedType === tab.key ? styles.activeTab : ""}`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className={styles.vrSection}>
        <p className={styles.vrDescription}>
          화면의 아무 곳이나 클릭하시면 해당 VR을 감상하실 수 있습니다.
        </p>
        <iframe
          className={styles.vrIframe}
          src={vrUrls[selectedType]}
          title={`${selectedType} VR`}
          allowFullScreen
          frameBorder="0"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Emodel;
