import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // useLocation 추가!
import { BiSearch, BiUser, BiShoppingBag, BiHeart } from "react-icons/bi";
import NavMenu, { MENU_DATA } from './NavMenu';

export default function Header() {
    const [activeMenu, setActiveMenu] = useState(null);
    
    const navigate = useNavigate();
    const location = useLocation(); // 현재 페이지 위치 정보 가져오기

    // ✨ 로고 클릭 핸들러 (핵심 기능!)
    const handleLogoClick = (e) => {
        e.preventDefault(); // Link의 기본 이동 동작 잠깐 멈춰!

        if (location.pathname === '/') {
            // 1. 이미 메인 페이지라면? -> 맨 위로 부드럽게 스크롤
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            // 2. 다른 페이지라면? -> 메인으로 이동
            navigate('/');
        }
    };

    return (
        <header style={{ 
            fontFamily: '"Pretendard", sans-serif', 
            backgroundColor: 'white', 
            borderBottom: '1px solid #eee', 
            position: 'sticky', 
            top: 0, 
            zIndex: 1000, 
            width: '100%' 
        }}>
            {/* 최상단 배너 */}
            <div style={{ backgroundColor: '#a87e6f', color: 'white', textAlign: 'center', fontSize: '11px', padding: '6px 0', fontWeight: 'bold' }}>
                오늘 밤 9시까지 주문하면 오/늘/출/발! 🚚
            </div>

            {/* 메인 헤더 영역 */}
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                
                {/* 1. 로고 (클릭 이벤트 연결) */}
                <div style={{ fontSize: '24px', fontWeight: 'bold', letterSpacing: '2px', marginRight: '40px' }}>
                    <a href="/" onClick={handleLogoClick} style={{ textDecoration: 'none', color: '#333', cursor: 'pointer' }}>
                        ATTRANGS
                    </a>
                </div>

                {/* 2. 메뉴 리스트 */}
                <nav style={{ flex: 1, display: 'flex', gap: '30px', fontSize: '14px', fontWeight: '700', height: '100%' }}>
                    {MENU_DATA.map((menu) => (
                        <NavMenu 
                            key={menu.id} 
                            menu={menu} 
                            isActive={activeMenu === menu.id}
                            setActiveMenu={setActiveMenu}
                        />
                    ))}
                </nav>

                {/* 3. 우측 아이콘 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '22px', color: '#333' }}>
                    <BiSearch style={{ cursor: 'pointer' }} />
                    <BiUser style={{ cursor: 'pointer' }} />
                    
                    {/* 장바구니 링크 */}
                    <Link to="/cart" style={{ color: '#333', display: 'flex', alignItems: 'center' }}>
                        <BiShoppingBag style={{ cursor: 'pointer' }} />
                    </Link>

                    <BiHeart style={{ cursor: 'pointer' }} />
                    <span style={{ fontSize: '11px', marginLeft: '5px', cursor: 'pointer', fontWeight: 'normal' }}>로그인</span>
                </div>
            </div>
        </header>
    );
}