import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="숭의역 라온프라이빗-benerimage"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
    if (text === '라온프라이빗' || text === '홍보영상' || text === '체크포인트' || text === '당첨자서류안내' || text === '숭의역 라온프라이빗') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    하루의 무게를 내려놓는 순간, 바다와 도심을 품은 프리미엄.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    인천 중구 숭의역 초역세권, 41층 주상복합의 새로운 기준.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    NO.1 브랜드, 숭의역 라온프라이빗과 함께합니다.
                </div>
            </>
        );
    } else if (text === '사업개요' || text === '세대안내' || text === '인테리어' || text === '청약안내' || text === '모집공고안내' || text === '인지세납부안내') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    숭의역 도보권, 인천의 새로운 랜드마크 주거공간.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    수인분당선 숭의역과 송도 KTX(예정)·GTX-B(추진)로 이어지는 교통 프리미엄.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    브랜드 명성과 함께 높여가는 일상의 가치.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    숭의역 라온프라이빗
                </div>
            </>
        );
    } else if (text === '입지환경'|| text === '프리미엄') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    역·학·생활 모두 가까운, 완성형 생활 인프라.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    신광초·인하대병원·대형마트·공공청사까지, 숭의역 라온프라이빗에서 누리세요.
                </div>
            </>
        );
    } else if (text === '단지안내') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    주거의 품격과 가치를 높이는 특화 설계.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    오피스텔과 아파트를 아우르는 최적의 공간 배치.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    숭의역 라온프라이빗, 인천 중구 숭의역 초역세권에서 찾아옵니다.
                </div>
            </>
        );
    }
}

