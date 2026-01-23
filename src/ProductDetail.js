import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { bestProducts, winterProducts, newItemProducts, todayProducts } from './data';

import { 
    BiHeart, BiChevronRight, BiChevronLeft, BiChevronDown, BiChevronUp, 
    BiCopy, BiShareAlt, BiRefresh, BiGift, BiShoppingBag, BiHelpCircle 
} from "react-icons/bi";
import { AiFillHeart, AiOutlineMessage } from "react-icons/ai"; 
import { FaTruck } from "react-icons/fa";

export default function ProductDetail() {
    
    let { id } = useParams();

    // 1. 데이터 가져오기
    const allProducts = [...bestProducts, ...winterProducts, ...newItemProducts, ...todayProducts];
    const targetProduct = allProducts.find((item) => item.id == id);

    // 날짜 자동 계산
    const today = new Date();
    today.setDate(today.getDate() + 1); 
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const date = today.getDate().toString().padStart(2, '0');
    const day = ['일', '월', '화', '수', '목', '금', '토'][today.getDay()];
    const dateText = `${month}월 ${date}일 ${day}요일 도착`;

    // 2. 기본 데이터 (화면 구성을 위한 더미 데이터)
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
        optionsColors: [
            { id: 1, name: 'SkyBlue(긴팔)(model)', img: 'https://via.placeholder.com/400x500/87CEEB/ffffff?text=SkyBlue' },
            { id: 2, name: 'Pink(긴팔)(model)', img: 'https://via.placeholder.com/400x500/FFB6C1/ffffff?text=Pink' },
            { id: 3, name: 'Ivory(긴팔)', img: 'https://via.placeholder.com/400x500/FFFFF0/cccccc?text=Ivory' },
            { id: 4, name: 'Beige(긴팔)', img: 'https://via.placeholder.com/400x500/F5F5DC/cccccc?text=Beige' },
            { id: 5, name: 'Black(긴팔)', img: 'https://via.placeholder.com/400x500/000000/ffffff?text=Black' },
            { id: 6, name: 'Brown(긴팔)', img: 'https://via.placeholder.com/400x500/A52A2A/ffffff?text=Brown' },
            { id: 7, name: 'White(긴팔)', img: 'https://via.placeholder.com/400x500/FFFFFF/cccccc?text=White' },
        ],
        optionsSizes: [
            { id: 's1', name: 'Free', badge: true },
            { id: 's2', name: 'L + 4,000', badge: false },
        ],
        reviews: [
            { id: 1, user: '에이블리 **', img: 'https://via.placeholder.com/150', score: 5, text: 'E컵 여성 돼지입니다 결혼식룩에 대박 찰떡이었고...', option: 'Free / Charcoal(긴팔)(model)', tag: '색상-잘맞아요' },
            { id: 2, user: '지그재그 **', img: 'https://via.placeholder.com/150', score: 5, text: '옷에 살짝 운 자국?이 있지만...소재도 좋고...', option: 'Pink(긴팔)(model) / Free', tag: '색상-비슷해요' },
        ],
        relatedProducts: [
            { id: 991, title: '(실물극찬/고급미) 브이넥 펄 타이 블라우스', price: '39,000원', original: '65,000원', discount: '40%', img: 'https://via.placeholder.com/300x400/333/fff?text=Blouse' },
            { id: 992, title: '[울함유] 모던 램스울 크롭 라운드 니트', price: '22,900원', original: '30,000원', discount: '24%', img: 'https://via.placeholder.com/300x400/d8bfd8/fff?text=Knit' },
        ],
        reviewQueens: [
            { id: 1, img: 'https://via.placeholder.com/300x300/e0e0e0/333?text=Review+1', text: '[용기모안감/겨울내내따뜻♥]', count: 26, score: 5 },
        ],
        detailedReviews: [
            {
                id: 1,
                user: 'KAKAO_16818306*',
                info: '164cm | 52kg | 235mm',
                score: 5,
                option1: 'Charcoal(model)', match1: '똑같아요',
                option2: 'Free', match2: '잘맞아요',
                text: '소매가 긴편이라 제일 미운 윗부분 팔살 노출도 안되니 좋습니다 ~~!!!!',
                images: ['https://via.placeholder.com/100'],
                helpful: 2,
                comments: 1
            }
        ]
    };

    // ✨ [에러 해결 핵심] ✨
    // targetProduct의 데이터 중 reviews, options 등이 있어도 무시하고, defaultData의 배열을 우선 사용하도록 설정!
    const product = targetProduct ? {
        ...defaultData,
        ...targetProduct, // 여기서 기존 데이터가 덮어써지지만...
        
        // 👇 아래 항목들은 무조건 defaultData(배열)를 쓰겠다고 강제 지정!
        reviews: defaultData.reviews, 
        relatedProducts: defaultData.relatedProducts,
        reviewQueens: defaultData.reviewQueens,
        detailedReviews: defaultData.detailedReviews,
        optionsColors: defaultData.optionsColors,
        optionsSizes: defaultData.optionsSizes
    } : defaultData;

    if (targetProduct) {
        product.additionalImages = [targetProduct.img, ...defaultData.additionalImages.slice(1)];
    }

    const [mainImg, setMainImg] = useState(product.img || product.additionalImages[0]);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);
    
    // 아코디언 상태
    const [isCouponOpen, setIsCouponOpen] = useState(false);
    const [isCareOpen, setIsCareOpen] = useState(false);
    const [isSizeInfoOpen, setIsSizeInfoOpen] = useState(false);

    const tabs = [
        { name: '상품정보', count: null },
        { name: '디테일', count: null },
        { name: '관련상품', count: null },
        { name: '구매후기', count: 136, active: true },
        { name: '상품문의', count: 15 },
        { name: '쇼핑가이드', count: null },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
        if(targetProduct) setMainImg(targetProduct.img);
    }, [targetProduct]);

    const handleQuantity = (type) => {
        if(type === 'plus') setQuantity(quantity + 1);
        else if(type === 'minus' && quantity > 1) setQuantity(quantity - 1);
    };

    const handleColorClick = (colorName, colorImg) => {
        setSelectedColor(colorName);
        setMainImg(colorImg);
    };

    const priceNumber = parseInt(String(product.price).replace(/[^0-9]/g, '')) || 0;
    const totalPrice = (selectedColor && selectedSize) ? priceNumber * quantity : 0; 

    if (!targetProduct) return <div style={{padding:'100px', textAlign:'center'}}>상품을 찾을 수 없습니다.</div>;

    return (
        <div style={{ fontFamily: '"Pretendard", sans-serif', color: '#333' }}>
            
            {/* 1. 상단 상품 상세 정보 */}
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px 50px' }}>
                <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', marginBottom: '80px' }}>
                    
                    {/* 왼쪽 이미지 */}
                    <div style={{ width: '500px', flexShrink: 0 }}>
                        <img src={mainImg} alt="Main" style={{ width: '100%', borderRadius: '0', marginBottom: '10px' }} />
                        <div style={{ display: 'flex', gap: '8px', overflow: 'auto' }}>
                            {product.additionalImages.map((imgUrl, index) => (
                                <img key={index} src={imgUrl} alt="thumb" onClick={() => setMainImg(imgUrl)} style={{ width: '60px', height: '60px', objectFit: 'cover', cursor: 'pointer', border: mainImg === imgUrl ? '2px solid #333' : '1px solid #eee' }} />
                            ))}
                        </div>
                    </div>

                    {/* 오른쪽 정보 영역 */}
                    <div style={{ flex: 1 }}>
                        
                        {/* 상단 정보 */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', color: '#888', fontSize: '12px' }}>
                            <div>상품번호 : {product.id} <BiCopy style={{ cursor: 'pointer', verticalAlign: 'middle', marginLeft:'4px' }}/></div>
                            <BiShareAlt style={{ fontSize: '20px', cursor: 'pointer', border:'1px solid #ddd', borderRadius:'50%', padding:'5px' }}/>
                        </div>

                        <h2 style={{ fontSize: '22px', margin: '0 0 15px 0', fontWeight: 'bold', lineHeight: '1.4', wordBreak: 'keep-all', color: '#333' }}>
                            {product.title}
                        </h2>

                        <div style={{ display: 'flex', gap: '5px', marginBottom: '20px' }}>
                            {['쿠폰할인', '부분오늘출발', '1+1할인', '사이즈교환무료'].map((tag, i) => (
                                <span key={i} style={{ fontSize: '11px', color: i < 2 ? '#a87e6f' : '#888', backgroundColor: i < 2 ? '#f5ebe7' : '#f5f5f5', padding: '4px 8px' }}>{tag}</span>
                            ))}
                            <div style={{ marginLeft: 'auto', fontSize: '12px', color: '#333', fontWeight: 'bold' }}>
                                ♥ 4.8 <span style={{ textDecoration: 'underline', color: '#888', fontWeight: 'normal' }}>리뷰 136</span>
                            </div>
                        </div>

                        {/* 가격 & 쿠폰 */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid #333', paddingBottom: '20px', marginBottom: '10px' }}>
                            <div>
                                <div style={{ textDecoration: 'line-through', color: '#bbb', fontSize: '14px', marginBottom: '5px' }}>{product.originalPrice}</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span style={{ fontSize: '28px', fontWeight: 'bold', color: '#333' }}>{product.price}원</span>
                                    <span style={{ color: '#ff5454', fontSize: '24px', fontWeight: 'bold' }}>{product.discount}</span>
                                </div>
                                <div style={{ fontSize: '12px', color: '#ff5454', marginTop: '5px' }}>총 18,500원 할인 <span style={{ color: '#aaa' }}>- 할인특가 09 : 57 : 24 남았습니다</span></div>
                            </div>
                            <div style={{ border: '1px solid #a87e6f', borderRadius: '4px', padding: '8px 15px', textAlign: 'center', cursor: 'pointer', color: '#a87e6f' }}>
                                <div style={{ fontSize: '10px' }}>COUPON</div>
                                <div style={{ fontSize: '13px', fontWeight: 'bold' }}>내 쿠폰함 &gt;</div>
                            </div>
                        </div>

                        {/* 쿠폰 아코디언 */}
                        <div onClick={() => setIsCouponOpen(!isCouponOpen)} style={{ backgroundColor: '#f9f9f9', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', color: '#666', marginBottom: '20px', cursor: 'pointer' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <span>쿠폰 사용 시 최대 할인 금액</span> <BiHelpCircle style={{ fontSize: '16px', color: '#bbb' }} /> 
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <span style={{ color: '#333', fontWeight: 'bold' }}>51% 30,700원</span>
                                {isCouponOpen ? <BiChevronUp style={{ fontSize: '18px' }}/> : <BiChevronDown style={{ fontSize: '18px' }}/>}
                            </div>
                        </div>

                        {/* 혜택/배송 정보 */}
                        <div style={{ fontSize: '13px', color: '#666', lineHeight: '2.4', marginBottom: '30px' }}>
                            <div style={{ display: 'flex' }}><div style={{ width: '90px', color: '#333' }}>카드혜택</div><div>무이자 혜택</div></div>
                            <div style={{ display: 'flex' }}><div style={{ width: '90px', color: '#333' }}>멤버십혜택</div><div>등급별혜택보기</div></div>
                            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                                <div style={{ width: '90px', color: '#333', marginTop:'3px' }}>배송예상</div>
                                <div>
                                    <span style={{ textDecoration: 'underline', color:'#333' }}>부분 오늘출발 가능</span><br/>
                                    <span style={{ color: '#a87e6f', fontWeight: 'bold' }}>{dateText}</span>
                                    <span style={{ color: '#999', fontSize: '12px' }}> - 오후 9시 이전 주문 시 ⓘ</span>
                                </div>
                            </div>
                        </div>

                        {/* 배너들 */}
                        <div style={{ backgroundColor: '#a87e6f', color: 'white', padding: '12px', textAlign: 'center', fontSize: '13px', fontWeight: 'bold', marginBottom: '10px', cursor: 'pointer' }}>
                            💬 아뜨랑스 카카오 채널 추가 시 3,000원 할인 쿠폰 지급 &gt;
                        </div>
                        <div style={{ padding: '12px', textAlign: 'center', fontSize: '12px', color: '#666', marginBottom: '10px', border: '1px solid #eee', cursor: 'pointer', display:'flex', alignItems:'center', justifyContent:'center', gap:'5px' }}>
                            <span style={{ color: '#888' }}>⌄</span> 오늘출발 상품만 보기
                        </div>
                        <div style={{ backgroundColor: '#fdf5f5', padding: '15px', textAlign: 'center', fontSize: '13px', color: '#d68b8b', border: '1px solid #f8e0e0', marginBottom: '30px' }}>
                            1+1 할인♡ 2장 구매시 2,000원 추가할인
                        </div>

                        {/* 옵션 선택 */}
                        <div style={{ marginBottom: '30px' }}>
                            {/* 색상 */}
                            <div style={{ display: 'flex', marginBottom: '20px' }}>
                                <div style={{ width: '60px', paddingTop: '5px', fontSize: '13px', color: '#333', fontWeight:'bold' }}>옵션</div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontSize: '13px', marginBottom: '10px', color: selectedColor ? '#333' : '#aaa', fontWeight: selectedColor ? 'bold' : 'normal' }}>
                                        {selectedColor || "옵션을 선택해주세요"}
                                    </div>
                                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                        {product.optionsColors.map((opt) => (
                                            <div key={opt.id} onClick={() => handleColorClick(opt.name, opt.img)}
                                                style={{ 
                                                    width: '50px', height: '50px', 
                                                    border: selectedColor === opt.name ? '2px solid #333' : '1px solid #eee', 
                                                    cursor: 'pointer', borderRadius: '4px', overflow: 'hidden'
                                                }} title={opt.name}>
                                                <img src={opt.img} alt={opt.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* 사이즈 */}
                            <div style={{ display: 'flex', marginBottom: '20px' }}>
                                <div style={{ width: '60px', paddingTop: '10px', fontSize: '13px', color: '#333', fontWeight:'bold' }}>사이즈</div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontSize: '13px', marginBottom: '10px', color: '#aaa' }}>
                                        {selectedColor ? "사이즈를 선택해주세요" : "색상을 먼저 선택해 주세요"}
                                    </div>
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        {product.optionsSizes.map((size) => (
                                            <button key={size.id} onClick={() => setSelectedSize(size.name)} disabled={!selectedColor}
                                                style={{ 
                                                    padding: '10px 15px', 
                                                    border: selectedSize === size.name ? '1px solid #333' : '1px solid #eee', 
                                                    backgroundColor: 'white', color: selectedSize === size.name ? '#333' : (selectedColor ? '#666' : '#eee'),
                                                    cursor: selectedColor ? 'pointer' : 'default', fontSize: '12px', borderRadius: '4px',
                                                    display: 'flex', alignItems: 'center', gap: '5px'
                                                }}>
                                                {size.badge && <FaTruck style={{color: '#a87e6f'}} />} {size.name}
                                                {size.badge && <span style={{color: '#a87e6f', fontSize:'11px'}}>[오늘출발]</span>}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* 사이즈 버튼 */}
                            <div style={{ paddingLeft: '60px', display: 'flex', gap: '5px', marginBottom: '30px' }}>
                                <button style={{ flex: 1, padding: '12px', border: '1px solid #eee', backgroundColor: '#fafafa', fontSize: '12px', color: '#666', cursor:'pointer' }}>내 사이즈 찾기</button>
                                <button style={{ flex: 1, padding: '12px', border: '1px solid #eee', backgroundColor: '#fafafa', fontSize: '12px', color: '#666', cursor:'pointer' }}>사이즈 추가요청</button>
                            </div>

                            {/* 선택된 옵션 박스 */}
                            {(selectedColor && selectedSize) && (
                                <div style={{ backgroundColor: '#f9f9f9', padding: '20px', marginBottom: '20px', position: 'relative' }}>
                                    <div style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '10px' }}>{product.title}</div>
                                    <div style={{ fontSize: '12px', color: '#666', marginBottom: '15px' }}>- {selectedColor} / {selectedSize}</div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div style={{ display: 'flex', border: '1px solid #ddd', backgroundColor: 'white' }}>
                                            <button onClick={() => handleQuantity('minus')} style={{ width: '25px', height: '25px', border: 'none', background: 'transparent', cursor: 'pointer' }}>-</button>
                                            <div style={{ width: '35px', height: '25px', lineHeight: '25px', textAlign: 'center', fontSize: '12px', borderLeft: '1px solid #eee', borderRight: '1px solid #eee' }}>{quantity}</div>
                                            <button onClick={() => handleQuantity('plus')} style={{ width: '25px', height: '25px', border: 'none', background: 'transparent', cursor: 'pointer' }}>+</button>
                                        </div>
                                        <div style={{ fontWeight: 'bold' }}>{totalPrice.toLocaleString()}원</div>
                                    </div>
                                    <button onClick={() => {setSelectedColor(null); setSelectedSize(null); setQuantity(1);}} style={{ position: 'absolute', top: '10px', right: '10px', border: 'none', background: 'none', cursor: 'pointer', fontSize:'16px', color:'#999' }}>✕</button>
                                </div>
                            )}
                        </div>

                        {/* 총 금액 */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderTop: '1px solid #333', paddingTop: '20px' }}>
                            <div style={{ width: '60px', fontSize: '14px', color: '#333', fontWeight: 'bold' }}>총금액</div>
                            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>{totalPrice.toLocaleString()}<span style={{fontSize:'16px'}}>원</span></div>
                        </div>

                        <button style={{ width: '100%', padding: '15px', backgroundColor: '#f5f5f5', border: 'none', fontSize: '13px', color: '#333', marginBottom: '20px', cursor: 'pointer' }}>
                            코디상품 한번에 구매하기 +
                        </button>

                        {/* 하단 버튼 */}
                        <div style={{ display: 'flex', gap: '0', marginBottom: '15px', height: '60px' }}>
                            <div style={{ width: '60px', border: '1px solid #ccc', borderRight: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', color: '#666' }}>
                                <BiHeart style={{ fontSize: '20px', marginBottom: '2px' }}/> <span style={{ fontSize: '11px' }}>1,942</span>
                            </div>
                            <div style={{ width: '60px', border: '1px solid #ccc', borderRight: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', color: '#666' }}>
                                <BiGift style={{ fontSize: '20px', marginBottom: '2px' }}/> <span style={{ fontSize: '11px' }}>선물하기</span>
                            </div>
                            <Link to="/cart" style={{ flex: 1, textDecoration: 'none' }}>
                                <button style={{ width: '100%', height: '100%', border: '1px solid #ccc', backgroundColor: '#f5f5f5', fontSize: '15px', color: '#333', cursor: 'pointer', borderRight: 'none' }}>
                                    장바구니
                                </button>
                            </Link>
                            <button style={{ flex: 1, height: '100%', border: 'none', backgroundColor: '#a87e6f', fontSize: '16px', fontWeight: 'bold', color: 'white', cursor: 'pointer', position: 'relative' }}>
                                구매하기
                                <div style={{ position: 'absolute', top: '-32px', right: '0', backgroundColor: '#ffeb3b', padding: '6px 10px', borderRadius: '20px', fontSize: '11px', color: '#333', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '3px', boxShadow:'0 2px 5px rgba(0,0,0,0.1)' }}>
                                    <span style={{ fontWeight: '900', fontSize:'12px' }}>N</span> pay 결제기능
                                    <div style={{position:'absolute', bottom:'-4px', right:'15px', width:'8px', height:'8px', background:'#ffeb3b', transform:'rotate(45deg)'}}></div>
                                </div>
                            </button>
                        </div>

                        {/* 네이버 페이 */}
                        <div style={{ border: '1px solid #ddd', padding: '15px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ textAlign: 'left', marginRight:'10px' }}>
                                <div style={{ color: '#00c73c', fontWeight: '900', fontSize: '14px', marginBottom: '2px' }}>NAVER</div>
                                <div style={{ fontSize: '10px', color: '#888', lineHeight:'1.2' }}>네이버ID로 간편구매<br/>네이버페이</div>
                            </div>
                            <button style={{ flex: 1, height: '45px', border: '1px solid #00c73c', backgroundColor: 'white', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3px' }}>
                                <span style={{ color: '#00c73c', fontWeight: '900', fontSize:'22px' }}>N</span> pay 구매
                            </button>
                            <div style={{ display: 'flex', gap: '5px', marginLeft:'10px' }}>
                                <button style={{ width: '40px', height: '45px', border: '1px solid #ddd', backgroundColor: 'white', fontSize: '12px', color: '#666', cursor:'pointer' }}>찜</button>
                                <button style={{ width: '40px', height: '45px', border: '1px solid #ddd', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor:'pointer' }}>
                                    <span style={{ fontWeight: 'bold', fontSize: '13px', color: '#333' }}>N</span>
                                </button>
                            </div>
                        </div>
                        <div style={{ marginTop: '10px', fontSize: '12px', color: '#666', display: 'flex', justifyContent: 'space-between', alignItems:'center' }}>
                            <div><span style={{ color: '#00c73c', fontWeight: 'bold' }}>이벤트</span> 최대 10% 추가적립 혜택</div>
                            <div style={{ border: '1px solid #eee', display: 'flex' }}><button style={{ border: 'none', background: 'white', padding: '2px 6px', cursor:'pointer' }}>&lt;</button><button style={{ border: 'none', background: 'white', padding: '2px 6px', cursor:'pointer', borderLeft:'1px solid #eee' }}>&gt;</button></div>
                        </div>

                        <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '30px 0' }} />

                        {/* 하단 드롭다운 (관리팁 / 사이즈정보) */}
                        <div onClick={() => setIsCareOpen(!isCareOpen)} style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 0', cursor: 'pointer', borderBottom: '1px solid #eee' }}>
                            <div style={{ fontSize: '13px', color: '#333', fontWeight: 'bold' }}>관리 팁 <span style={{ fontWeight: 'normal', color: '#888', marginLeft: '10px' }}>텐셀(79%) 폴리,폴리에스터(21%)</span></div>
                            <BiChevronRight style={{ color: '#ccc', fontSize: '20px', transform: isCareOpen ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }} />
                        </div>
                        {isCareOpen && <div style={{ padding: '15px', backgroundColor: '#f9f9f9', fontSize: '12px', color: '#666' }}>드라이크리닝을 권장합니다.</div>}

                        <div onClick={() => setIsSizeInfoOpen(!isSizeInfoOpen)} style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 0', cursor: 'pointer', borderBottom: '1px solid #eee' }}>
                            <div style={{ fontSize: '13px', color: '#333', fontWeight: 'bold' }}>모델,상품 사이즈 정보</div>
                            <BiChevronRight style={{ color: '#ccc', fontSize: '20px', transform: isSizeInfoOpen ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }} />
                        </div>
                        {isSizeInfoOpen && <div style={{ padding: '15px', backgroundColor: '#f9f9f9', fontSize: '12px', color: '#666' }}>모델 키 168cm, 상의 55사이즈 착용.</div>}

                    </div>
                </div>
            </div>

            {/* 2. 리얼 후기 */}
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

            {/* 3. 함께 많이 본 상품 */}
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

            {/* 탭 메뉴 */}
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

            {/* 4. 이번주 리뷰퀸 섹션 */}
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

            {/* 5. 상세 구매후기 & 평점 섹션 */}
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