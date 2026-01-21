import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function TopBanner() {
    // 여기에 보여주고 싶은 공지사항들을 적으면 돼!
    const notices = [
        "📢 오늘 밤 9시까지 주문하면 오/늘/출/발! 🚚",
        "❄️ 겨울 신상 최대 50% 할인 이벤트 중!",
        "🎁 회원가입 시 3,000원 쿠폰 즉시 지급!"
    ];

    return (
        <div style={{ backgroundColor: '#a67c52', color: 'white', fontSize: '12px', height: '40px' }}>
            <Swiper
                modules={[Autoplay]}
                loop={true}           // 무한 반복
                autoplay={{
                    delay: 3000,      // 3초마다 넘어감
                    disableOnInteraction: false,
                }}
                direction="horizontal" // 옆으로 넘기기 (위로 넘기려면 'vertical'로 변경)
                style={{ width: '100%', height: '100%' }}
            >
                {notices.map((text, index) => (
                    <SwiperSlide key={index}>
                        <div style={{ 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            height: '100%',
                            fontWeight: 'bold'
                        }}>
                            {text}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}