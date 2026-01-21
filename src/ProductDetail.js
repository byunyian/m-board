import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { bestProducts, winterProducts, newItemProducts, todayProducts } from './data';

import { BiHeart, BiChevronRight, BiChevronLeft, BiChevronDown, BiGift, BiCopy, BiShareAlt, BiRefresh } from "react-icons/bi";
import { AiFillHeart, AiOutlineMessage } from "react-icons/ai"; 
import { RiKakaoTalkFill } from "react-icons/ri";

export default function ProductDetail() {
    
    let { id } = useParams();

    // 1. 데이터 가져오기
    const allProducts = [...bestProducts, ...winterProducts, ...newItemProducts, ...todayProducts];
    const targetProduct = allProducts.find((item) => item.id == id);

    // 2. 기본 템플릿 데이터
    const defaultData = {
        title: "상품 정보 로딩 중...",
        price: "0",
        img: "",
        additionalImages: [
            "https://atimg.sonyunara.com/files/attrangs/goods/167463/68e8c8561fd38.jpg",
            "https://atimg.sonyunara.com/files/attrangs/goods/167463/68e8c85638ea8.jpg",
            "https://atimg.sonyunara.com/files/attrangs/goods/167463/68e8c8563ba71.jpg",
            "https://atimg.sonyunara.com/files/attrangs/goods/167463/68e8c8563e290.jpg",
            "https://via.placeholder.com/100x100/e0e0e0/999?text=Add5",
        ],
        options: [
            { id: 1, name: '기본컬러(OneSize)', img: 'https://via.placeholder.com/100' },
            { id: 2, name: 'Pink(긴팔)', img: 'https://via.placeholder.com/600x800/ffb6c1/fff?text=Pink+Image' },
            { id: 3, name: 'Ivory(긴팔)', img: 'https://via.placeholder.com/600x800/fffff0/ccc?text=Ivory+Image' },
            { id: 4, name: 'Beige(긴팔)', img: 'https://via.placeholder.com/600x800/f5f5dc/ccc?text=Beige+Image' },
            { id: 5, name: 'Black(긴팔)', img: 'https://via.placeholder.com/600x800/000000/fff?text=Black+Image' },
            { id: 6, name: 'Brown(긴팔)', img: 'https://via.placeholder.com/600x800/a52a2a/fff?text=Brown+Image' },
        ],
        // 가로 스크롤용 리얼 후기 데이터
        reviews: [
            { id: 1, user: '에이블리 **', img: 'https://via.placeholder.com/150', score: 5, text: 'E컵 여성 돼지입니다 결혼식룩에 대박 찰떡이었고...', option: 'Free / Charcoal(긴팔)(model)', tag: '색상-잘맞아요' },
            { id: 2, user: '지그재그 **', img: 'https://via.placeholder.com/150', score: 5, text: '옷에 살짝 운 자국?이 있지만...소재도 좋고...', option: 'Pink(긴팔)(model) / Free', tag: '색상-비슷해요' },
            { id: 3, user: '지그재그 **', img: 'https://via.placeholder.com/150', score: 5, text: '친구 결혼식 가려고 새로 샀어용...', option: 'Pink(긴팔)(model) / Free', tag: '색상-어두워요' },
            { id: 4, user: '지그재그 **', img: 'https://via.placeholder.com/150', score: 5, text: '사진에 보이는대로 시스루라 밝은색 이너...', option: 'Ivory(긴팔) / Free', tag: '색상-비슷해요' },
        ],
        relatedProducts: [
            { id: 991, title: '(실물극찬/고급미) 브이넥 펄 타이 블라우스', price: '39,000원', original: '65,000원', discount: '40%', img: 'https://via.placeholder.com/300x400/333/fff?text=Blouse' },
            { id: 992, title: '[울함유] 모던 램스울 크롭 라운드 니트', price: '22,900원', original: '30,000원', discount: '24%', img: 'https://via.placeholder.com/300x400/d8bfd8/fff?text=Knit' },
            { id: 993, title: '올리비아 모직 히든밴딩 기모 슬랙스', price: '35,500원', original: '45,000원', discount: '21%', img: 'https://via.placeholder.com/300x400/333/fff?text=Slacks' },
            { id: 994, title: '홀린 브러쉬 배색 스트라이프 카라넥 니트', price: '32,500원', original: '50,000원', discount: '35%', img: 'https://via.placeholder.com/300x400/a52a2a/fff?text=Stripe+Knit' },
        ],
        reviewQueens: [
            { id: 1, img: 'https://via.placeholder.com/300x300/e0e0e0/333?text=Review+1', text: '[용기모안감/겨울내내따뜻♥]', count: 26, score: 5 },
            { id: 2, img: 'https://via.placeholder.com/300x300/d0d0d0/333?text=Review+2', text: '[단독벨트추가!/바지안감]', count: 71, score: 5 },
            { id: 3, img: 'https://via.placeholder.com/300x300/c0c0c0/333?text=Review+3', text: '[울함유/MADE/영롱뽀송]', count: 53, score: 4.9 },
            { id: 4, img: 'https://via.placeholder.com/300x300/b0b0b0/333?text=Review+4', text: '[기모버전 출시!] 플로브', count: 362, score: 5 },
        ],
        // 상세 리뷰 리스트 데이터
        detailedReviews: [
            {
                id: 1,
                user: 'KAKAO_16818306*',
                info: '164cm | 52kg | 235mm',
                score: 5,
                option1: 'Charcoal(model)', match1: '똑같아요',
                option2: 'Free', match2: '잘맞아요',
                text: '소매가 긴편이라 제일 미운 윗부분 팔살 노출도 안되니 좋습니다 ~~!!!! 비침이 있는 편이라 그런지 목 부분에 리본으로 묶어도 크게 답답한 느낌은 안 들더라구요 ㅎㅎ 딱 기념일, 가족행사, 하객룩으로 좋은 디자인으로 나왔어여 가격대비 퀄 좋아유',
                images: ['https://via.placeholder.com/100', 'https://via.placeholder.com/100', 'https://via.placeholder.com/100'],
                helpful: 2,
                comments: 1
            }
        ]
    };

    const product = targetProduct ? {
        ...defaultData,        
        ...targetProduct,      
        reviews: defaultData.reviews, // 배열 유지
        detailedReviews: defaultData.detailedReviews
    } : defaultData;

    // 사진 연동 로직
    if (targetProduct) {
        product.additionalImages = [targetProduct.img, ...defaultData.additionalImages.slice(1)];
        product.options[0].img = targetProduct.img;
        product.options[0].name = "기본컬러 (Selected)";
    }

    const [mainImg, setMainImg] = useState(product.img || product.additionalImages[0]);
    const [selectedOption, setSelectedOption] = useState(product.options[0]);
    const [quantity, setQuantity] = useState(1);
    
    // 탭 메뉴 설정
    const tabs = [
        { name: '상품정보', count: null },
        { name: '디테일', count: null },
        { name: '관련상품', count: null },
        { name: '구매후기', count: 136, active: true }, // 구매후기 활성화
        { name: '상품문의', count: 15 },
        { name: '쇼핑가이드', count: null },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
        if(targetProduct) {
            setMainImg(targetProduct.img);
        }
    }, [targetProduct]);

    const handleQuantity = (type) => {
        if(type === 'plus') setQuantity(quantity + 1);
        else if(type === 'minus' && quantity > 1) setQuantity(quantity - 1);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option); 
        setMainImg(option.img);     
    };

    if (!targetProduct) return <div style={{padding:'100px', textAlign:'center', fontSize:'20px'}}>상품을 찾을 수 없습니다. 😢</div>;

    return (
        <div style={{ fontFamily: '"Pretendard", sans-serif', color: '#333' }}>
            
            {/* ================================================== */}
            {/* 1. 상단 상품 상세 정보 */}
            {/* ================================================== */}
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '160px 20px 50px' }}>
                <div style={{ display: 'flex', gap: '50px', alignItems: 'flex-start', marginBottom: '80px' }}>
                    <div style={{ width: '500px', flexShrink: 0 }}>
                        <img src={mainImg} alt="Main" style={{ width: '100%', borderRadius: '4px', marginBottom: '10px' }} />
                        <div style={{ display: 'flex', gap: '8px', overflow: 'auto' }}>
                            {product.additionalImages.map((imgUrl, index) => (
                                <img key={index} src={imgUrl} alt="thumb" onClick={() => setMainImg(imgUrl)} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px', cursor: 'pointer', border: mainImg === imgUrl ? '2px solid #333' : '1px solid #eee' }} />
                            ))}
                        </div>
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ marginBottom: '20px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                                <div style={{ fontSize: '13px', color: '#666', display: 'flex', alignItems: 'center', gap: '5px' }}>상품번호 : {product.id} <BiCopy style={{ cursor: 'pointer' }} /></div>
                                <button style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #e5e5e5', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', color: '#666', fontSize: '20px' }}><BiShareAlt /></button>
                            </div>
                            <h2 style={{ fontSize: '22px', margin: '0 0 15px 0', fontWeight: 'normal', lineHeight: '1.4', wordBreak: 'keep-all' }}>{product.title}</h2>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                    <span style={{ fontSize: '11px', color: '#a87e6f', border: '1px solid #e8dcd6', padding: '4px 8px', borderRadius: '2px', backgroundColor: '#fff' }}>쿠폰할인</span>
                                    <span style={{ fontSize: '11px', color: '#a87e6f', border: '1px solid #e8dcd6', padding: '4px 8px', borderRadius: '2px', backgroundColor: '#fff' }}>부분오늘출발</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '14px', marginBottom: '5px' }}>
                                    <AiFillHeart style={{ color: '#a87e6f' }} /> <span style={{ fontWeight: 'bold' }}>4.8</span><span style={{ color: '#999', textDecoration: 'underline', cursor: 'pointer' }}>리뷰 135</span>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid #eee', paddingBottom: '25px', marginBottom: '25px' }}>
                            <div>
                                <div style={{ fontSize: '26px', fontWeight: 'bold', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    {product.originalPrice && <span style={{ textDecoration: 'line-through', color: '#bbb', fontSize: '16px', fontWeight: 'normal' }}>{product.originalPrice}</span>}
                                    <span>{product.price}원</span>
                                    <span style={{ color: '#ff5454' }}>{product.discount}</span>
                                </div>
                                <div style={{ fontSize: '13px', color: '#ff5454', fontWeight: '600' }}>총 18,500원 할인 <span style={{ color: '#999', fontWeight: 'normal' }}>- 할인특가 15 : 18 : 35 남았습니다</span></div>
                            </div>
                            <div style={{ border: '1px solid #a87e6f', borderRadius: '4px', color: '#a87e6f', padding: '10px 15px', fontSize: '13px', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: '1.2' }}>
                                <span style={{ fontSize: '10px' }}>COUPON</span><span style={{ fontWeight: 'bold' }}>내 쿠폰함 <BiChevronRight style={{ verticalAlign: '-1px' }}/></span>
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#f9f9f9', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', color: '#555', marginBottom: '20px' }}>
                            <span>쿠폰 사용 시 최대 할인 금액 <span style={{ fontSize: '11px', border: '1px solid #ddd', borderRadius: '50%', padding: '0 4px' }}>?</span></span>
                            <div><span style={{ fontWeight: 'bold', marginRight: '5px' }}>51%</span><span style={{ fontWeight: 'bold', fontSize: '16px', color: '#333' }}>30,700원</span><BiChevronDown style={{ verticalAlign: 'middle', marginLeft: '5px' }} /></div>
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <div style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '10px' }}>옵션 <span style={{ fontWeight: 'normal', marginLeft: '10px', color: '#a87e6f' }}>{selectedOption.name}</span></div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                                {product.options.map((option) => (
                                    <img key={option.id} src={option.img} alt={option.name} onClick={() => handleOptionClick(option)} style={{ width: '55px', height: '70px', objectFit: 'cover', borderRadius: '3px', cursor: 'pointer', border: selectedOption.id === option.id ? '2px solid #a87e6f' : '1px solid #eee', boxSizing: 'border-box' }} />
                                ))}
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#f7f7f7', padding: '15px', marginBottom: '20px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ display: 'flex', border: '1px solid #ddd', backgroundColor: 'white' }}>
                                    <button onClick={() => handleQuantity('minus')} style={{ width: '30px', height: '30px', border: 'none', background: 'transparent', cursor: 'pointer' }}>-</button>
                                    <div style={{ width: '30px', height: '30px', lineHeight: '30px', textAlign: 'center', fontSize: '13px', borderLeft: '1px solid #eee', borderRight: '1px solid #eee' }}>{quantity}</div>
                                    <button onClick={() => handleQuantity('plus')} style={{ width: '30px', height: '30px', border: 'none', background: 'transparent', cursor: 'pointer' }}>+</button>
                                </div>
                                <span style={{ fontWeight: 'bold', fontSize: '14px' }}>{(parseInt(String(product.price).replace(/[^0-9]/g, '')) * quantity).toLocaleString()}원</span>
                            </div>
                        </div>
                        <button style={{ width: '100%', padding: '15px', border: '1px solid #eee', background: '#f9f9f9', color: '#666', fontSize: '13px', marginBottom: '20px', cursor: 'pointer' }}>코디상품 한번에 구매하기 +</button>
                        <div style={{ display: 'flex', gap: '5px', marginBottom: '30px' }}>
                            <button style={{ flex: 2, height: '50px', border: 'none', background: '#a87e6f', fontSize: '16px', fontWeight: 'bold', color: 'white', cursor: 'pointer' }}>구매하기</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================================================== */}
            {/* 2. 리얼 후기 (아뜨랑스 스타일 가로 스크롤) */}
            {/* ================================================== */}
            <div style={{ textAlign: 'center', marginBottom: '80px', padding: '0 20px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>아뜨랑스 리얼후기</h3>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', marginBottom: '20px', color: '#a87e6f', fontWeight: 'bold', fontSize: '14px' }}>
                    <AiFillHeart /> 4.8 / 5 <span style={{ color: '#ddd', margin: '0 5px' }}>|</span> <span style={{ color: '#666', fontWeight: 'normal' }}>리뷰 총 135건</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent:'center' }}>
                    <button style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #eee', backgroundColor: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}><BiChevronLeft style={{ fontSize: '24px' }} /></button>
                    <div style={{ display: 'flex', gap: '15px', overflowX: 'auto', padding: '10px 0', scrollbarWidth: 'none', maxWidth:'1000px' }}>
                        {product.reviews.map((review) => (
                            <div key={review.id} style={{ minWidth: '240px', width: '240px', textAlign: 'left', border: '1px solid #eee', borderRadius: '8px', padding: '15px', backgroundColor: '#fdfdfd' }}>
                                <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                                    <img src={review.img} alt="review" style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
                                    <div style={{ fontSize: '12px', color: '#666' }}>
                                        <div style={{ color: '#a87e6f', marginBottom: '3px' }}>♥♥♥♥♥</div>
                                        <div>{review.tag}</div>
                                        <div>사이즈-잘맞아요</div>
                                        <div>-cm/-kg</div>
                                    </div>
                                </div>
                                <div style={{ fontSize: '11px', color: '#999', marginBottom: '8px' }}>선택옵션 - {review.option}</div>
                                <div style={{ fontSize: '12px', color: '#333', lineHeight: '1.5', height: '40px', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', marginBottom: '10px' }}>{review.text}</div>
                                <div style={{ fontSize: '11px', color: '#ccc' }}>{review.user}</div>
                            </div>
                        ))}
                    </div>
                    <button style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #eee', backgroundColor: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}><BiChevronRight style={{ fontSize: '24px' }} /></button>
                </div>
            </div>

            {/* ================================================== */}
            {/* 3. 함께 많이 본 상품 */}
            {/* ================================================== */}
            <div style={{ textAlign: 'center', marginBottom: '80px', padding: '0 20px', paddingBottom: '30px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '30px' }}>함께 많이 본 상품</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent:'center' }}>
                    <BiChevronLeft style={{ fontSize: '30px', color: '#ddd', cursor: 'pointer' }} />
                    <div style={{ display: 'flex', gap: '20px', maxWidth: '1200px', overflow:'hidden' }}>
                        {product.relatedProducts.map((item) => (
                            <div key={item.id} style={{ width: '250px', textAlign: 'left', cursor: 'pointer' }}>
                                <img src={item.img} alt={item.title} style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '4px', marginBottom: '15px' }} />
                                <div style={{ fontSize: '13px', color: '#333', lineHeight: '1.4', marginBottom: '10px', height: '36px', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical' }}>
                                    {item.title}
                                </div>
                                <div style={{ fontSize: '15px', fontWeight: 'bold' }}>
                                    <span style={{ color: '#ff5454', marginRight: '5px' }}>{item.discount}</span>
                                    {item.price}
                                </div>
                            </div>
                        ))}
                    </div>
                    <BiChevronRight style={{ fontSize: '30px', color: '#333', cursor: 'pointer' }} />
                </div>
            </div>

            {/* ================================================== */}
            {/* [NEW] 탭 메뉴 (Tab Bar) - 사진 속 디자인 적용 */}
            {/* ================================================== */}
            <div style={{ maxWidth: '1200px', margin: '0 auto 60px', border: '1px solid #eee', borderBottom: '1px solid #a87e6f' }}>
                <ul style={{ display: 'flex', margin: 0, padding: 0, listStyle: 'none' }}>
                    {tabs.map((tab, i) => (
                        <li key={i} style={{ 
                            flex: 1, 
                            textAlign: 'center', 
                            padding: '15px 0', 
                            fontSize: '13px', 
                            color: tab.active ? '#fff' : '#666', 
                            backgroundColor: tab.active ? '#a87e6f' : '#fff',
                            cursor: 'pointer',
                            borderRight: i !== tabs.length -1 ? '1px solid #eee' : 'none',
                            fontWeight: tab.active ? 'bold' : 'normal'
                        }}>
                            {tab.name} {tab.count && `(${tab.count})`}
                        </li>
                    ))}
                </ul>
            </div>

            {/* ================================================== */}
            {/* 4. 이번주 리뷰퀸 섹션 */}
            {/* ================================================== */}
            <div style={{ backgroundColor: '#faf9f7', padding: '80px 0 100px', textAlign: 'center' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                    <div style={{ marginBottom: '40px' }}>
                        <h3 style={{ color: '#d68b8b', fontSize: '32px', margin: '20px 0', fontWeight: '500' }}>이번주 리뷰퀸</h3>
                        <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6', fontWeight: '300' }}>아뜨랑스에서는 매주 1회 가장 예쁘게 코디하여 정성스런 포토후기를 올려주신 리뷰퀸을 뽑아요</p>
                    </div>
                    <div style={{ display: 'flex', gap: '15px', overflow: 'hidden', justifyContent: 'center' }}>
                        {product.reviewQueens.map((item) => (
                            <div key={item.id} style={{ width: '250px', position: 'relative', height: '300px', cursor: 'pointer' }}>
                                <img src={item.img} alt="review queen" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px', background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)', color: 'white', textAlign: 'left', fontSize: '13px' }}>
                                    <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>{item.text}</div>
                                    <div>리뷰 : {item.count} 평점 : {item.score}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ================================================== */}
            {/* 5. 상세 구매후기 & 평점 섹션 */}
            {/* ================================================== */}
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 20px' }}>
                
                {/* (1) 상단 통계 & 필터 영역 */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '50px' }}>
                    <div style={{ flex: 1, textAlign: 'center', borderRight: '1px solid #eee' }}>
                        <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '15px' }}>구매고객 총 평점</div>
                        <div style={{ color: '#a87e6f', fontSize: '50px', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                            <AiFillHeart /> 4.9 <span style={{ fontSize: '30px', color: '#ddd' }}>/ 5</span>
                        </div>
                        <div style={{ fontSize: '13px', color: '#999', marginTop: '5px' }}>리뷰 총 135</div>
                    </div>

                    <div style={{ flex: 1.5, padding: '0 40px', borderRight: '1px solid #eee' }}>
                        <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '15px', textAlign: 'center' }}>평점 비율</div>
                        <div style={{ display: 'flex', alignItems: 'center', fontSize: '13px', marginBottom: '10px' }}>
                            <span style={{ width: '50px', border: '1px solid #eee', padding: '5px', textAlign: 'center', borderRadius: '15px', marginRight: '10px' }}>색상</span>
                            <span style={{ marginRight: '10px' }}>똑같아요</span>
                            <div style={{ flex: 1, height: '10px', backgroundColor: '#eee', borderRadius: '5px', position: 'relative' }}>
                                <div style={{ width: '83%', height: '100%', backgroundColor: '#dcdcdc', borderRadius: '5px' }}></div>
                            </div>
                            <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>83%</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', fontSize: '13px' }}>
                            <span style={{ width: '50px', border: '1px solid #eee', padding: '5px', textAlign: 'center', borderRadius: '15px', marginRight: '10px' }}>사이즈</span>
                            <span style={{ marginRight: '10px' }}>잘 맞아요</span>
                            <div style={{ flex: 1, height: '10px', backgroundColor: '#eee', borderRadius: '5px', position: 'relative' }}>
                                <div style={{ width: '85%', height: '100%', backgroundColor: '#dcdcdc', borderRadius: '5px' }}></div>
                            </div>
                            <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>85%</span>
                        </div>
                    </div>

                    <div style={{ flex: 1.2, paddingLeft: '40px' }}>
                        <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '15px', textAlign: 'center' }}>리뷰필터</div>
                        <div style={{ display: 'flex', gap: '5px', marginBottom: '15px', justifyContent: 'center' }}>
                            <button style={{ padding: '8px 15px', border: '1px solid #ddd', borderRadius: '20px', background: 'white', fontSize: '12px', cursor: 'pointer', color: '#666' }}>옵션색상</button>
                            <button style={{ padding: '8px 15px', border: '1px solid #ddd', borderRadius: '20px', background: 'white', fontSize: '12px', cursor: 'pointer', color: '#666' }}>옵션사이즈</button>
                            <button style={{ padding: '8px 15px', border: '1px solid #ddd', borderRadius: '20px', background: 'white', fontSize: '12px', cursor: 'pointer', color: '#666' }}>최신순</button>
                        </div>
                        <div style={{ display: 'flex', gap: '5px' }}>
                            <button style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #ddd', background: 'white', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <BiRefresh style={{ fontSize: '20px', color: '#999' }} />
                            </button>
                            <button style={{ flex: 1, backgroundColor: '#a87e6f', color: 'white', border: 'none', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold' }}>검색</button>
                        </div>
                    </div>
                </div>

                {/* (2) 포토 리뷰 썸네일 리스트 */}
                <div style={{ display: 'flex', gap: '5px', marginBottom: '40px', position: 'relative', overflowX: 'auto', paddingBottom:'10px' }}>
                    {product.reviews.concat(product.reviews).map((review, idx) => ( 
                        <div key={idx} style={{ width: '120px', height: '120px', flexShrink: 0, overflow: 'hidden', borderRadius: '4px', cursor: 'pointer' }}>
                            <img src={review.img} alt="photo review" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    ))}
                </div>

                {/* (3) 리뷰 토글 & 쓰기 버튼 */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #333', paddingBottom: '15px', marginBottom: '30px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '11px', color: '#999', border: '1px solid #eee', padding: '3px 6px' }}>체형정보를 입력하시면 비슷한 체형의 리뷰를 볼 수 있어요!</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
                            <div style={{ width: '30px', height: '18px', backgroundColor: '#ddd', borderRadius: '10px', position: 'relative' }}>
                                <div style={{ width: '14px', height: '14px', backgroundColor: 'white', borderRadius: '50%', position: 'absolute', top: '2px', left: '2px' }}></div>
                            </div>
                            <span style={{ fontSize: '13px', fontWeight: 'bold' }}>내 체형 리뷰만 보기</span>
                        </div>
                    </div>
                    <span style={{ fontSize: '13px', textDecoration: 'underline', color: '#666', cursor: 'pointer' }}>리뷰쓰기</span>
                </div>

                {/* (4) 상세 리뷰 리스트 */}
                <div>
                    {product.detailedReviews && product.detailedReviews.map((review) => (
                        <div key={review.id} style={{ display: 'flex', gap: '20px', paddingBottom: '30px', borderBottom: '1px solid #eee', marginBottom: '30px' }}>
                            <div style={{ width: '150px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#eee', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#aaa', fontWeight: 'bold' }}>me+</div>
                                    <div style={{ fontSize: '13px', fontWeight: 'bold' }}>{review.user}</div>
                                </div>
                                <div style={{ fontSize: '12px', color: '#999' }}>{review.info}</div>
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ color: '#a87e6f', marginBottom: '15px' }}>♥♥♥♥♥ <span style={{ color: '#333', fontWeight: 'bold', marginLeft: '5px' }}>{review.score}</span></div>
                                <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px', fontSize: '12px', color: '#666', marginBottom: '20px', border: '1px solid #f0f0f0' }}>
                                    선택한 옵션1 : <span style={{ color: '#333' }}>{review.option1}</span> - <span style={{ color: '#ff7f7f' }}>{review.match1}</span>
                                    <span style={{ color: '#ddd', margin: '0 10px' }}>|</span>
                                    선택한 옵션2 : <span style={{ color: '#333' }}>{review.option2}</span> - <span style={{ color: '#ff7f7f' }}>{review.match2}</span>
                                </div>
                                <div style={{ fontSize: '13px', lineHeight: '1.6', color: '#333', marginBottom: '30px' }}>
                                    {review.text}
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <span style={{ fontSize: '12px', color: '#999' }}><b>{review.helpful}명</b>에게 도움이 되었습니다.</span>
                                        <button style={{ padding: '5px 15px', border: '1px solid #d8bfd8', backgroundColor: 'white', color: '#a87e6f', fontSize: '12px', cursor: 'pointer' }}>도움이 돼요</button>
                                    </div>
                                    <button style={{ border: '1px solid #eee', backgroundColor: 'white', padding: '5px 10px', cursor: 'pointer' }}><AiOutlineMessage /> {review.comments}</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}