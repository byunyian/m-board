import React from 'react';
// 1. Swiper의 핵심 부품들을 가져오기
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// 2. Swiper 스타일(CSS) 가져오기 (이게 없으면 모양이 이상해져!)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Swiper 내부 스타일 커스텀 (화살표 색상 등)
import './MainBanner.css'; // 👈 3. 이 파일은 바로 다음에 만들 거야!

function MainBanner() {
  const banners = [
    "https://atimg.sonyunara.com/files/attrangs/new_banner/1768178820_0.jpg",
    "https://atimg.sonyunara.com/files/attrangs/new_banner/1765873065_0.jpg",
    "https://atimg.sonyunara.com/files/attrangs/new_banner/1768179396_0.jpg",
    "https://atimg.sonyunara.com/files/attrangs/new_banner/1767841335_0.gif"
  ];

  return (
    <div style={{ width: '100%', height: '700px' }}> {/* 배너 높이를 조금 키웠어 (500px) */}
      
      <Swiper
        // 사용할 모듈 등록 (화살표, 점, 자동재생)
        modules={[Navigation, Pagination, Autoplay]}
        
        spaceBetween={0}      // 사진 사이 간격 (0이면 딱 붙음)
        slidesPerView={1}     // 한 번에 보여줄 사진 개수 (1장)
        navigation            // 양옆 화살표 켜기 (< >)
        pagination={{ clickable: true }} // 아래 점 켜기 (클릭 가능)
        
        // 자동 재생 설정 (3초마다 넘어감, 마우스 올리면 멈춤 등)
        autoplay={{
            delay: 3000, 
            disableOnInteraction: false,
        }}
        loop={true}           // 무한 반복 (끝까지 가면 다시 처음으로)
        
        style={{ width: '100%', height: '100%' }}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <img 
              src={banner} 
              alt={`배너 ${index + 1}`} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
      
    </div>
  );
}

export default MainBanner;