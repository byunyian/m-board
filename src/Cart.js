import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { bestProducts } from './data'; 
import { BiChevronLeft, BiChevronRight, BiInfoCircle, BiGift, BiCart } from "react-icons/bi";

export default function Cart() {
    const navigate = useNavigate();
    const recommendations = bestProducts || [];

    return (
        <div style={{ fontFamily: '"Pretendard", sans-serif', color: '#333', backgroundColor: '#fbfbfb', minHeight: '100vh', paddingBottom: '100px' }}>
            
            {/* 1. 상단 헤더 영역 */}
            <div style={{ padding: '60px 0 40px', position: 'relative' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', padding: '0 20px' }}>
                    
                    {/* [위치 재수정] top: 22px로 변경해서 큰 글씨랑 높이 맞춤 */}
                    <div style={{ 
                        position: 'absolute', 
                        top: '22px',  // 8px -> 22px로 더 내림!
                        left: '20px', 
                        fontSize: '11px', 
                        color: '#888' 
                    }}>
                        홈 &gt; 마이페이지 &gt; 장바구니
                    </div>

                    {/* 메인 타이틀 */}
                    <div style={{ textAlign: 'center' }}>
                        <h2 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '20px', letterSpacing: '-1px' }}>
                            장바구니 <BiInfoCircle style={{ fontSize: '26px', color: '#ccc', verticalAlign: 'top', marginTop: '5px' }}/>
                        </h2>

                        {/* 서브 메뉴 */}
                        <div style={{ fontSize: '14px', color: '#888', display: 'flex', justifyContent: 'center', gap: '20px' }}>
                            <span style={{ cursor:'pointer' }}>주문/배송조회</span>
                            <span style={{ cursor:'pointer' }}>최근 본 상품</span>
                            {/* 분홍색 형광펜 효과 */}
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
                    
                    {/* 단계 표시 & 선택삭제 버튼 */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '12px', color: '#aaa' }}>
                        <div>
                            <span style={{ color: '#333', fontWeight: 'bold' }}>01 장바구니</span>
                            <span style={{ margin: '0 10px' }}>&gt;</span>
                            <span>02 주문/결제</span>
                            <span style={{ margin: '0 10px' }}>&gt;</span>
                            <span>03 주문완료</span>
                        </div>
                        <button style={{ border: '1px solid #ddd', backgroundColor: '#fff', padding: '5px 10px', fontSize: '11px', color: '#666', cursor: 'pointer' }}>
                            선택 삭제
                        </button>
                    </div>
                </div>

                {/* 빈 장바구니 박스 */}
                <div style={{ 
                    backgroundColor: '#fff', 
                    borderRadius: '20px', 
                    padding: '120px 0', 
                    textAlign: 'center', 
                    marginBottom: '50px'
                }}>
                    <div style={{ 
                        width: '80px', height: '80px', 
                        borderRadius: '50%', 
                        backgroundColor: '#f5f5f5', 
                        margin: '0 auto 20px', 
                        display: 'flex', justifyContent: 'center', alignItems: 'center' 
                    }}>
                        <BiCart style={{ fontSize: '40px', color: '#aaa' }} />
                    </div>
                    <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#333', marginBottom: '8px' }}>장바구니가 비어있습니다.</div>
                    <div style={{ fontSize: '12px', color: '#aaa' }}>아뜨랑스의 유니크한 스타일을 찾아보세요.</div>
                </div>

                {/* 가격 요약 */}
                <div style={{ 
                    display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '60px', 
                    padding: '30px 0', 
                    fontSize: '14px', color: '#888'
                }}>
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
                                    <div style={{ fontSize: '13px', color: '#333', lineHeight: '1.4', marginBottom: '8px', height: '36px', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical' }}>
                                        {item.title}
                                    </div>
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

                {/* 하단 버튼 그룹 */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '50px' }}>
                    <button style={{ width: '60px', height: '55px', border: '1px solid #ddd', backgroundColor: '#fff', borderRadius: '4px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: '11px', color: '#666', cursor: 'pointer' }}>
                        <BiGift style={{ fontSize: '22px', marginBottom: '3px' }}/> 선물하기
                    </button>
                    <button style={{ width: '220px', height: '55px', border: '1px solid #ddd', backgroundColor: '#fff', fontSize: '15px', fontWeight: 'bold', color: '#333', cursor: 'pointer' }}>선택상품 주문하기</button>
                    <button style={{ width: '220px', height: '55px', border: 'none', backgroundColor: '#a87e6f', fontSize: '15px', fontWeight: 'bold', color: '#fff', cursor: 'pointer' }}>전체상품 주문하기</button>
                </div>

                {/* 네이버 페이 */}
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <div style={{ border: '1px solid #00c73c', padding: '12px 50px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', backgroundColor:'#fff' }}>
                        <span style={{ color: '#00c73c', fontWeight: 'bold', fontSize:'18px' }}>N</span> <span style={{ fontWeight: 'bold', fontSize:'14px' }}>Pay 구매</span>
                    </div>
                </div>

            </div>
        </div>
    );
}