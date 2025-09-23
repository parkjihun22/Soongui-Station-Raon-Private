// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/premium01.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [ 
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>사업명</strong>
          <span>숭의역 라온프라이빗</span>
        </li>
        <li>
          <strong>대지위치</strong>
          <span>인천광역시 중구 신흥동3가 7-79번지 외 25필지</span>
        </li>
        <li>
          <strong>건축규모</strong>
          <span>지하 5층 ~ 지상 41층, 주상복합 4개동</span>
        </li>
        <li>
          <strong>주택형</strong>
          <span>아파트 전용 59·84㎡ / 오피스텔 전용 44㎡</span>
        </li>
        <li>
          <strong>세대수</strong>
          <span>아파트 440세대(일반분양 일부 포함), 오피스텔 168실</span>
        </li>
      </ul>
    ),
  },
  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="입지환경 지도 1"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="입지환경 지도 2"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        {/* 프리미엄 섹션 상단 문단 */}
        <div className={styles.premiumIntro}>
          <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
          <p className={styles.premiumSubtitle}>
            숭의역 초역세권과 완성형 생활 인프라를 누리는<br />
            숭의역 라온프라이빗 프리미엄 라이프
          </p>
        </div>
        {/* 슬라이더 */}
        <PremiumSlider />
      </>
    ),
  },
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "제물포 르네상스·내항 복합개발 수혜 기대",
      desc:
        "인천 내항(1·8부두 등) 단계적 복합개발 추진<br/>도심·해양 레저·상업문화 인프라 확충으로 미래가치 상승",
    },
    {
      img: slide2,
      title: "의료·건강 인프라 도보권",
      desc:
        "인하대병원 도보권 접근<br/>인근 전문의료기관과 검진센터 이용 편의<br/>안심 생활을 위한 탄탄한 의료 네트워크",
    },
    {
      img: slide3,
      title: "광역 교통망 프리미엄",
      desc:
        "수인분당선 숭의역 도보권<br/>송도 KTX(예정)·GTX-B(추진)로 서울·수도권 접근성 강화<br/>경인고속도로 등 도로망 이용 편리",
    },
    {
      img: slide4,
      title: "교육·생활 인프라 밀집",
      desc:
        "신광초·송도중·신흥중 등 주변 학군<br/>이마트·홈플러스·공공청사·체육문화시설 인접<br/>생활과 교육을 한 번에",
    },
    {
      img: slide5,
      title: "초고층 주거 랜드마크",
      desc:
        "지상 41층 주상복합(일부 오션뷰 기대)<br/>아파트 59·84㎡ 중심, 오피스텔 44㎡ 구성",
    },
    {
      img: slide6,
      title: "라온프라이빗 브랜드 가치",
      desc:
        "라온건설 시공의 품질 신뢰<br/>일상을 높이는 합리적 설계와 커뮤니티",
    },
  ];
  // (기존 슬라이더 렌더 코드는 그대로 사용)

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const toggle = (key) => setOpenKey(openKey === key ? null : key);

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
        <div className={styles.preTitle}>Raon BUSINESS</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      {/* ─── 히어로 이미지 ─── */}
      <img src={heroImage} className={styles.heroImage} alt="단지 전경" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div key={key} className={styles.accordionItem}>
          <button
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
