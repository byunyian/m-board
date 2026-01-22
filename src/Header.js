import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiSearch, BiUser, BiShoppingBag, BiHeart } from "react-icons/bi";

// 1. 네가 만든 NavMenu 부품과 데이터 가져오기!
import NavMenu, { MENU_DATA } from './NavMenu';

export default function Header() {
    // 2. 어떤 메뉴에 마우스가 올라갔는지 기억하는 상태 (State)
    const [activeMenu, setActiveMenu] = useState(null);

    return (
        <header style={{ 
            fontFamily: '"Pretendard", sans-serif', 
            borderBottom: '1px solid #eee', 
            backgroundColor: 'white',
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
                
                {/* 1. 로고 */}
                <div style={{ fontSize: '24px', fontWeight: 'bold', letterSpacing: '2px', marginRight: '40px' }}>
                    <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>ATTRANGS</Link>
                </div>

                {/* 2. 메뉴 리스트 (여기서 NavMenu를 사용!) */}
                <nav style={{ flex: 1, display: 'flex', gap: '30px', fontSize: '14px', fontWeight: '700', height: '100%' }}>
                    {/* MENU_DATA를 돌면서 NavMenu 부품을 하나씩 찍어내기 */}
                    {MENU_DATA.map((menu) => (
                        <NavMenu 
                            key={menu.id} 
                            menu={menu} 
                            isActive={activeMenu === menu.id} // "지금 마우스가 나한테 있니?"
                            setActiveMenu={setActiveMenu}     // "마우스 들어오면 알려줘!"
                        />
                    ))}
                </nav>

                {/* 3. 우측 아이콘 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '22px', color: '#333' }}>
                    <BiSearch style={{ cursor: 'pointer' }} />
                    <BiUser style={{ cursor: 'pointer' }} />
                    <Link to="/cart" style={{ color: '#333', display: 'flex' }}>
                        <BiShoppingBag style={{ cursor: 'pointer' }} />
                    </Link>
                    <BiHeart style={{ cursor: 'pointer' }} />
                    <span style={{ fontSize: '11px', marginLeft: '5px', cursor: 'pointer', fontWeight: 'normal' }}>로그인</span>
                </div>
            </div>
        </header>
    );
}