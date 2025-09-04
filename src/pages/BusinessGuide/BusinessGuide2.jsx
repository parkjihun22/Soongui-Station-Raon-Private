import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";


// import page1 from "../../assets/BusinessGuide/BusinessGuide2/page1.jpg";
import Ready from "../../components/Ready/Ready";

const BusinessGuide2 = () => {
    const menuContents = [
      { title: "사업안내", url: "/BusinessGuide/intro" },
      { title: "분양일정", url: "/BusinessGuide/plan" },
      // { title: "계약서류안내", url: "/BusinessGuide/documents" },
    ];

    const [isScroll, setIsScroll] = useState(false);
    const [isImageVisible, setIsImageVisible] = useState(false); // ✅ 기존 이미지 가시성 상태 유지
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }

            // ✅ 기존 이미지 로딩 로직도 유지 (하지만 Ready가 표시됨)
            if (window.scrollY > 200) {
                setIsImageVisible(true);
            } else {
                setIsImageVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.container}>
            <Helmet>
                <title>숭의역 라온프라이빗 - 분양일정</title>
                <meta
                    name="description"
                    content="인천 숭의역 라온프라이빗 분양일정을 한눈에 확인하세요. 청약 접수일, 특별공급·1순위 일정, 모델하우스 오픈, 당첨자 발표 및 계약 일정까지 상세히 안내합니다."
                />
                <link rel="canonical" href="https://tradexmeds.com/BusinessGuide/plan" />
                <meta name="robots" content="index,follow" />
            </Helmet>

            <Header isChanged={isScroll} />
            <FixIcon />

            <Bener title="분양일정" />
            <MenuBar contents={menuContents} />

            <h1 className={styles.screenReaderOnly}>숭의역 라온프라이빗 - 분양일정</h1>
            <p className={styles.screenReaderOnly}>
                숭의역 라온프라이빗의 분양 일정은 청약 접수, 모델하우스 오픈, 당첨자 발표 및 계약까지
                모든 주요 일정을 안내하는 핵심 정보입니다.
            </p>

            <div className={styles.textBox}>
                <div>숭의역 초역세권의 눈부신 가치 위에</div>
                <div>숭의역 라온프라이빗의 새로운 자부심으로 찾아옵니다.</div>
            </div>



            {/* ✅ 기존 이미지 부분 주석 처리하고 Ready 컴포넌트 표시 */}
            {/* <img className={`${styles.image4} ${isImageVisible ? styles.visible : ''}`} src={page1} alt="숭의역 라온프라이빗 분양일정안내-image1" /> */}

            <div className={styles.readyContainer}>
           
            </div>

            <Ready/>
            <Footer />
        </div>
    );
};

export default BusinessGuide2;
