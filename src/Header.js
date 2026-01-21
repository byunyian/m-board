import React, { useState, useEffect } from "react";
import { BiSearch, BiUser, BiHeart, BiShoppingBag } from "react-icons/bi";
import NavMenu, { MENU_DATA } from './NavMenu';
// 👇 1. useLocation 가져오기 (이미 있음)
import { useLocation } from 'react-router-dom'; 

function Header() {
    // 👇 2. 현재 주소가 '/detail'로 시작하는지 확인!
    const location = useLocation();
    // startsWith를 써서 /detail/0, /detail/1 모두 포함되게 함
    const isDetail = location.pathname.startsWith('/detail'); 

    const [activeMenu, setActiveMenu] = useState(null);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const topPosition = Math.max(0, 40 - scrollY);

    // 🎨 배경색 규칙
    let backgroundColor;
    if (scrollY > 0) {
        backgroundColor = 'rgba(255, 255, 255, 0.8)'; // 스크롤 내리면 반투명
    } else if (isDetail) {
        backgroundColor = 'white'; // 💥 [수정] 상세 페이지 맨 위는 무조건 흰색 배경!
    } else {
        backgroundColor = 'transparent'; // 메인 맨 위는 투명
    }

    // 🎨 글씨 색깔 규칙
    // 💥 [수정] 상세 페이지(isDetail)이거나 스크롤을 내렸으면 무조건 검은색!
    // 아닐 때(메인 맨 위)만 흰색!
    const textColor = (isDetail || scrollY > 0) ? '#333' : 'white';

    return (
        <header style={{
            position: 'fixed',
            left: 0, right: 0, zIndex: 100,
            top: topPosition,
            
            backgroundColor: backgroundColor,
            backdropFilter: scrollY > 0 ? 'blur(10px)' : 'none',
            boxShadow: scrollY > 0 ? '0 4px 6px rgba(0,0,0,0.1)' : 'none',
            
            transition: 'background-color 0.3s ease', 
            
            padding: '20px 40px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            boxSizing: 'border-box',
            color: textColor 
        }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
                <h1 style={{ margin: 0, fontSize: '24px' }}>
                    <a href="/" style={{ color: textColor, textDecoration: 'none', fontFamily: 'serif' }}>  
                        ATTRANGS
                    </a>
                </h1>

                <nav style={{ display: 'flex', gap: '20px', fontSize: '14px', fontWeight: 'bold' }}>
                    {MENU_DATA.map((menu) => (
                        <NavMenu 
                            key={menu.id}
                            menu={menu}
                            isActive={activeMenu === menu.id}
                            setActiveMenu={setActiveMenu}
                            textColor={textColor} 
                        />
                    ))}
                </nav>
            </div>

            <div style={{ display: 'flex', gap: '20px', fontSize: '24px', color: textColor }}>
                <BiSearch style={{ cursor: 'pointer' }} />
                <BiUser style={{ cursor: 'pointer' }} />
                <BiHeart style={{ cursor: 'pointer' }} />
                <BiShoppingBag style={{ cursor: 'pointer' }} />
            </div>
        </header>
    );
}

export default Header;