import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/BusinessGuide/BusinessGuide1/page1.jpg";
import tableImage from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";
import { Helmet } from "react-helmet-async";




// 텍스트만 교체
const projectData = [
	{ label: '사업명', value: '숭의역 라온프라이빗' },
	{ label: '사업위치', value: '인천광역시 중구 신흥동3가 일원' },
	{ label: '대지면적', value: '추후 공지' },
	{ label: '건축면적', value: '추후 공지' },
	{ label: '연면적', value: '추후 공지' },
	{ label: '용적률', value: '추후 공지' },
	{ label: '건축규모', value: '지하 5층 ~ 지상 41층, 주상복합 4개동' },
	{ label: '세대수', value: '아파트 440세대 / 오피스텔 168실' },
  ];
  
  const BusinessGuide1 = () => {
	const menuContents = [
	  { title: "사업안내", url: "/BusinessGuide/intro" },
	  { title: "분양일정", url: "/BusinessGuide/plan" },
	  // { title: "공급안내", url: "/BusinessGuide/documents" }
	];
	const [isScroll, setIsScroll] = useState(false);
	const { pathname } = useLocation();
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
  
	useEffect(() => {
	  window.scrollTo(0, 0);
	}, [pathname]);
  
	useEffect(() => {
	  const handleScroll = () => setIsScroll(window.scrollY > 0);
	  window.addEventListener('scroll', handleScroll);
	  return () => window.removeEventListener('scroll', handleScroll);
	}, []);
  
	return (
	  <div className={styles.container}>
  
		<Helmet>
		  {/* 페이지별 메타: title/description/og/canonical 만 관리 */}
		  <title>숭의역 라온프라이빗 - 사업안내</title>
		  <meta
			name="description"
			content="인천 숭의역 라온프라이빗의 사업 개요와 입지 정보를 확인하세요. 숭의역 도보권 초역세권, 지상 41층 주상복합(아파트 59·84㎡, 오피스텔 44㎡)로 완성되는 주거 가치를 안내합니다."
		  />
		  <meta name="robots" content="index,follow" />
		  <link rel="canonical" href="https://tradexmeds.com/BusinessGuide/intro" />
  
		  {/* Open Graph */}
		  <meta property="og:type" content="website" />
		  <meta property="og:site_name" content="숭의역 라온프라이빗" />
		  <meta property="og:title" content="숭의역 라온프라이빗 - 사업안내" />
		  <meta
			property="og:description"
			content="숭의역 라온프라이빗 사업 개요: 인천 중구 신흥동3가, 지상 41층 주상복합(아파트 440세대 · 오피스텔 168실), 숭의역 도보권 입지."
		  />
		  <meta property="og:url" content="https://tradexmeds.com/BusinessGuide/intro" />
		  <meta property="og:image" content="https://tradexmeds.com/img/og/business.jpg" />
		  <meta property="og:image:width" content="1200" />
		  <meta property="og:image:height" content="630" />
  
		  {/* Twitter */}
		  <meta name="twitter:card" content="summary_large_image" />
		  <meta name="twitter:title" content="숭의역 라온프라이빗 - 사업안내" />
		  <meta
			name="twitter:description"
			content="숭의역 라온프라이빗 사업 개요와 입지: 숭의역 초역세권, 41층 주상복합(아파트 59·84㎡, 오피스텔 44㎡)의 프리미엄 가치."
		  />
		  <meta name="twitter:image" content="https://tradexmeds.com/img/og/business.jpg" />
		  <meta name="twitter:url" content="https://tradexmeds.com/BusinessGuide/intro" />
  
		  {/* JSON-LD (대표 이미지/브레드크럼 포함) */}
		  <script type="application/ld+json">
			{JSON.stringify({
			  "@context": "https://schema.org",
			  "@type": "WebPage",
			  "name": "숭의역 라온프라이빗 - 사업안내",
			  "url": "https://tradexmeds.com/BusinessGuide/intro",
			  "description":
				"인천 숭의역 라온프라이빗 사업 개요와 입지 정보. 지상 41층 주상복합, 아파트 440세대·오피스텔 168실, 숭의역 도보권 입지.",
			  "primaryImageOfPage": {
				"@type": "ImageObject",
				"contentUrl": "https://tradexmeds.com/img/og/business.jpg",
				"width": 1200,
				"height": 630
			  },
			  "breadcrumb": {
				"@type": "BreadcrumbList",
				"itemListElement": [
				  { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://tradexmeds.com/" },
				  { "@type": "ListItem", "position": 2, "name": "사업안내", "item": "https://tradexmeds.com/BusinessGuide/intro" }
				]
			  }
			})}
		  </script>
		</Helmet>
  
		<Header isChanged={isScroll} />
		<FixIcon />
  
		<Bener title="사업개요" />
  
		<MenuBar contents={menuContents} />
		{/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
		<h1 className={styles.screenReaderOnly}>숭의역 라온프라이빗 - 사업안내</h1>
		<p className={styles.screenReaderOnly}>
		  숭의역 라온프라이빗은 숭의역 도보권의 초역세권 입지와 합리적인 평면 설계를 갖춘 주상복합 단지입니다.
		  이 페이지에서는 프로젝트의 개요, 주요 설계 특징, 주변 생활 인프라 및 교통 환경을 안내합니다.
		</p>
  

			<div className={styles.textBox}>
				<div>특별한 라이프 컬렉션</div>
				<div>숭의역 라온프라이빗의 새로운 자부심으로 찾아옵니다.</div>
			</div>

			<img className={styles.img3} src={page1} alt="숭의역 라온프라이빗-image1"/>

			<div className={styles.tableContainer}>
				{!isMobile && <img className={styles.tableImg} src={tableImage} />}
				<table className={styles.projectTable}>
					<tbody>
						{projectData.map((item, index) => (
							<tr key={index}>
								<td className={styles.label}>{item.label}</td>
								<td className={styles.contents}>{item.value}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			 <div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 본 홈페이지에 표기된 내용은 하기의 내용을 근거로 한 내용이며, 추후 계획의 변동 등은 당사와 무관합니다.
				</div>
				
			</div> 


			<Footer />
		</div>
	)
}

export default BusinessGuide1;
