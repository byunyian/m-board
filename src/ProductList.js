import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductList({ title, subtitle, products }) {
    const navigate = useNavigate();

    return (
        <div style={{ padding: '60px 0' }}>
            {/* 1. 섹션 제목 (BEST 신상품 등) */}
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>{title}</h2>
                <div style={{ color: '#999', fontSize: '14px' }}>{subtitle}</div>
            </div>

            {/* 2. 상품 리스트 그리드 */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', maxWidth: '1200px', margin: '0 auto', padding: '0 20px', justifyContent: 'flex-start' }}>
                {products.map((product, index) => (
                    <div 
                        key={index}
                        onClick={() => navigate(`/detail/${product.id}`)}
                        style={{ width: 'calc(25% - 23px)', cursor: 'pointer', marginBottom: '40px' }} // 간격 살짝 넓힘
                    >
                        {/* ==========================
                            (1) 상품 이미지 영역 
                           ========================== */}
                        <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '4px', marginBottom: '12px' }}>
                            <img 
                                src={product.img} 
                                alt={product.title} 
                                style={{ width: '100%', height: '350px', objectFit: 'cover', transition: 'transform 0.3s' }} 
                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            />
                            {/* 이미지 왼쪽 위 순위 뱃지 (BEST 상품일 때만 표시하는 느낌으로 index 활용) */}
                            {index < 3 && (
                                <div style={{ position: 'absolute', top: 0, left: 0, padding: '5px 10px', background: 'rgba(0,0,0,0.6)', color: 'white', fontSize: '12px', fontWeight: 'bold' }}>
                                    BEST {index + 1}
                                </div>
                            )}
                        </div>
                        
                        {/* ==========================
                            (2) 상품 정보 영역 (사진 레이아웃 완벽 구현!)
                           ========================== */}
                        <div style={{ padding: '0 5px', textAlign: 'left' }}>
                            
                            {/* [Row 1] 가격 정보: 할인율(주황) | 원래가격(취소선) | 판매가(굵게) */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px', lineHeight: '1' }}>
                                <span style={{ color: '#fa622f', fontWeight: 'bold', fontSize: '16px' }}>{product.discount}</span>
                                {product.originalPrice && (
                                    <span style={{ fontSize: '13px', color: '#bbb', textDecoration: 'line-through' }}>{product.originalPrice}</span>
                                )}
                                <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#333' }}>{product.price}</span>
                            </div>

                            {/* [Row 2] 쿠폰 적용가 배지 (갈색 박스) */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
                                <div style={{
                                    backgroundColor: '#b07c58', // 갈색 배경
                                    color: 'white',
                                    width: '20px', height: '20px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '11px', fontWeight: 'bold', borderRadius: '3px'
                                }}>%</div>
                                <span style={{ color: '#b07c58', fontSize: '12px', fontWeight: 'bold' }}>쿠폰적용가</span>
                            </div>

                            {/* [Row 3] 상품명 (2줄 말줄임) */}
                            <div style={{ 
                                fontSize: '13px', color: '#333', marginBottom: '8px', lineHeight: '1.4',
                                height: '36px', overflow: 'hidden', textOverflow: 'ellipsis',
                                display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical'
                            }}>
                                {product.title}
                            </div>

                            {/* [Row 4] 쇼핑몰 이름 (데이터에 없어서 하드코딩 또는 작성자명) */}
                            <div style={{ fontSize: '11px', color: '#999', marginBottom: '8px' }}>정호샵 (JEONGHO)</div>

                            {/* [Row 5] 색상 옵션 (동그라미) */}
                            {product.colors && (
                                <div style={{ display: 'flex', gap: '4px', marginBottom: '8px' }}>
                                    {product.colors.map((color, idx) => (
                                        <div key={idx} style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: color, border: '1px solid #eee' }}></div>
                                    ))}
                                </div>
                            )}

                            {/* [Row 6] 뱃지 & 구매 정보 */}
                            <div style={{ fontSize: '11px', color: '#888' }}>
                                {/* 뱃지들 */}
                                <div style={{ display: 'flex', gap: '5px', marginBottom: '4px', fontWeight: 'bold' }}>
                                    <span style={{ color: '#ff6b6b' }}>BEST</span>
                                    <span style={{ color: '#888' }}>오늘출발</span>
                                </div>
                                {/* 구매수 & 리뷰수 */}
                                <div>
                                    {product.buyCount ? product.buyCount.toLocaleString() : 0}개 구매중
                                    <span style={{ margin: '0 5px', color: '#ddd' }}>|</span>
                                    (리뷰 {product.reviews})
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}