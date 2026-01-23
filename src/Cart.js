import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { bestProducts } from './data'; 
import { BiChevronLeft, BiChevronRight, BiInfoCircle, BiGift, BiCart, BiMessageRounded } from "react-icons/bi";

export default function Cart() {
    const navigate = useNavigate();
    const recommendations = bestProducts || [];

    return (
        <div style={{ fontFamily: '"Pretendard", sans-serif', color: '#333', backgroundColor: '#fbfbfb', minHeight: '100vh', paddingBottom: '100px' }}>
            
            {/* 1. 상단 헤더 영역 */}
            <div style={{ padding: '60px 0 40px', position: 'relative' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', padding: '0 20px' }}>
                    <div style={{ position: 'absolute', top: '-40px', left: '20px', fontSize: '11px', color: '#888' }}>
                        홈 &gt; 마이페이지 &gt; 장바구니
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <h2 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '20px', letterSpacing: '-1px' }}>
                            장바구니 <BiInfoCircle style={{ fontSize: '26px', color: '#ccc', verticalAlign: 'top', marginTop: '5px' }}/>
                        </h2>
                        <div style={{ fontSize: '14px', color: '#888', display: 'flex', justifyContent: 'center', gap: '20px' }}>
                            <span style={{ cursor:'pointer' }}>주문/배송조회</span>
                            <span style={{ cursor:'pointer' }}>최근 본 상품</span>
                            <span style={{ color: '#333', fontWeight: 'bold', backgroundColor: '#ffdbd3', padding: '0 5px' }}>장바구니</span>
                            <span style={{ cursor:'pointer' }}>좋아요</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. 메인 컨텐츠 영역 */}
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                
                {/* 컨트롤 바 */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '15px' }}>
                    <div style={{ fontSize: '12px', color: '#666' }}>
                        <input type="checkbox" style={{ marginRight: '5px', verticalAlign: '-2px' }} /> 
                        전체상품(0/0) &nbsp;&nbsp;|&nbsp;&nbsp; 오늘출발(0/0)
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '12px', color: '#aaa' }}>
                        <div>
                            <span style={{ color: '#333', fontWeight: 'bold' }}>01 장바구니</span> &gt; 02 주문/결제 &gt; 03 주문완료
                        </div>
                        <button style={{ border: '1px solid #ddd', backgroundColor: '#fff', padding: '5px 10px', fontSize: '11px', color: '#666', cursor: 'pointer' }}>선택 삭제</button>
                    </div>
                </div>

                {/* 빈 장바구니 박스 */}
                <div style={{ backgroundColor: '#fff', borderRadius: '20px', padding: '120px 0', textAlign: 'center', marginBottom: '50px' }}>
                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#f5f5f5', margin: '0 auto 20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <BiCart style={{ fontSize: '40px', color: '#aaa' }} />
                    </div>
                    <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#333', marginBottom: '8px' }}>장바구니가 비어있습니다.</div>
                    <div style={{ fontSize: '12px', color: '#aaa' }}>아뜨랑스의 유니크한 스타일을 찾아보세요.</div>
                </div>

                {/* 가격 요약 */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '60px', padding: '30px 0', fontSize: '14px', color: '#888' }}>
                    <div>선택한 상품 0개 <span style={{ marginLeft: '10px', fontWeight: 'bold', fontSize: '18px', color: '#ccc' }}>0원</span></div>
                    <div style={{ fontSize: '20px', color: '#ddd' }}>+</div>
                    <div>배송비 0원 <span style={{ fontSize: '11px', marginLeft: '5px' }}>(50,000원 이상 무료배송)</span></div>
                    <div style={{ fontSize: '20px', color: '#ddd' }}>=</div>
                    <div style={{ color: '#333', fontWeight: 'bold' }}>총 결제 예상금액 <span style={{ marginLeft: '10px', fontSize: '24px', color: '#333' }}>0원</span></div>
                </div>

                {/* 추천 상품 영역 */}
                <div style={{ marginTop: '80px', textAlign: 'center', backgroundColor:'#fff', padding:'50px 20px', borderRadius:'20px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '30px' }}>장바구니에 많이 담긴 상품</h3>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
                        <button style={{ border: 'none', background: 'none', cursor: 'pointer' }}><BiChevronLeft style={{ fontSize: '40px', color: '#ddd' }} /></button>
                        <div style={{ display: 'flex', gap: '20px', width: '100%', overflow: 'hidden' }}>
                            {recommendations.slice(0, 4).map((item, idx) => (
                                <div key={idx} style={{ flex: 1, textAlign: 'left', cursor: 'pointer' }} onClick={() => navigate(`/detail/${item.id}`)}>
                                    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '4px', marginBottom: '15px' }}>
                                        <img src={item.img} alt={item.title} style={{ width: '100%', height: '320px', objectFit: 'cover' }} />
                                    </div>
                                    <div style={{ fontSize: '13px', color: '#333', lineHeight: '1.4', marginBottom: '8px', height: '36px', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical' }}>{item.title}</div>
                                    <div>
                                        <div style={{ fontSize: '12px', color: '#bbb', textDecoration: 'line-through', marginBottom:'2px' }}>{item.originalPrice}원</div>
                                        <div style={{ fontSize: '16px', fontWeight: 'bold' }}>
                                            <span style={{ color: '#ff5454', marginRight: '5px' }}>{item.discount}</span>
                                            <span style={{ color: '#333' }}>{item.price}원</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button style={{ border: 'none', background: 'none', cursor: 'pointer' }}><BiChevronRight style={{ fontSize: '40px', color: '#ddd' }} /></button>
                    </div>
                </div>

                {/* ========================================================= */}
                {/* ▼ [1] 하단 주문 버튼 그룹 (사진 윗부분) ▼ */}
                {/* ========================================================= */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '60px', marginBottom: '30px' }}>
                    {/* 선물하기 */}
                    <button style={{ 
                        width: '60px', height: '60px', 
                        border: '1px solid #ddd', backgroundColor: '#fff', borderRadius: '2px', 
                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', 
                        fontSize: '12px', color: '#666', cursor: 'pointer' 
                    }}>
                        <BiGift style={{ fontSize: '24px', marginBottom: '4px', color:'#666' }}/> 선물하기
                    </button>
                    {/* 선택상품 주문하기 */}
                    <button style={{ 
                        width: '240px', height: '60px', 
                        border: '1px solid #ddd', backgroundColor: '#fff', borderRadius: '2px',
                        fontSize: '16px', color: '#333', cursor: 'pointer' 
                    }}>
                        선택상품 주문하기
                    </button>
                    {/* 전체상품 주문하기 (갈색) */}
                    <button style={{ 
                        width: '240px', height: '60px', 
                        border: 'none', backgroundColor: '#a87e6f', borderRadius: '2px',
                        fontSize: '16px', fontWeight: 'bold', color: '#fff', cursor: 'pointer' 
                    }}>
                        전체상품 주문하기
                    </button>
                </div>

                {/* ========================================================= */}
                {/* ▼ [2] 네이버페이 섹션 (사진 아랫부분 완벽 구현) ▼ */}
                {/* ========================================================= */}
                <div style={{ maxWidth: '600px', margin: '0 auto', borderTop: '2px solid #333', padding: '15px 0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px' }}>
                        {/* 왼쪽 텍스트 */}
                        <div style={{ textAlign: 'left', lineHeight: '1.3' }}>
                            <div style={{ color: '#00c73c', fontWeight: '900', fontSize: '15px', marginBottom:'2px' }}>NAVER</div>
                            <div style={{ fontSize: '11px', color: '#888' }}>네이버ID로 간편구매<br/>네이버페이</div>
                        </div>

                        {/* 가운데 N Pay 버튼 (초록 테두리) */}
                        <button style={{ 
                            flex: 1, margin: '0 15px', height: '55px', 
                            border: '2px solid #00c73c', backgroundColor: 'white', borderRadius: '2px', 
                            fontSize: '18px', fontWeight: 'bold', cursor: 'pointer',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px'
                        }}>
                            <span style={{ color: '#00c73c', fontWeight: '900', fontSize:'22px' }}>N</span> <span>pay 구매</span>
                        </button>

                        {/* 오른쪽 버튼 2개 (찜, N톡) */}
                        <div style={{ display: 'flex', gap: '5px' }}>
                            <button style={{ width: '45px', height: '45px', border: '1px solid #ddd', backgroundColor: 'white', borderRadius:'2px', cursor:'pointer', fontSize:'12px', color:'#666' }}>찜</button>
                            <button style={{ width: '45px', height: '45px', border: '1px solid #ddd', backgroundColor: 'white', borderRadius:'2px', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center' }}>
                                <span style={{ fontWeight:'bold', fontSize:'14px', color:'#333' }}>N</span>
                            </button>
                        </div>
                    </div>

                    {/* 하단 이벤트 배너 */}
                    <div style={{ borderTop: '1px solid #eee', padding: '12px 0 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px' }}>
                        <div>
                            <span style={{ color: '#00c73c', fontWeight: 'bold', marginRight: '8px' }}>이벤트</span>
                            <span style={{ color: '#666' }}>최대 10% 추가적립 혜택</span>
                        </div>
                        <div style={{ display: 'flex', gap: '2px' }}>
                            <button style={{ border: '1px solid #eee', background: 'white', cursor: 'pointer', padding:'2px 6px', color:'#999' }}>&lt;</button>
                            <button style={{ border: '1px solid #eee', background: 'white', cursor: 'pointer', padding:'2px 6px', color:'#999' }}>&gt;</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}