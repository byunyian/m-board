// src/data.js

// 1. BEST 신상품 (id: 0 ~ )
export const bestProducts = [
    { 
        id: 0,
        title: "(보들니트소재/레이어드한듯♥) 키브 버튼 배색 레이어드 후드 가디건", 
        price: "19,180", 
        originalPrice: "35,000", 
        discount: "41%", 
        img: "https://atimg.sonyunara.com/files/attrangs/goods/169087/list13_696a64ce51216.gif",
        additionalImages: [
            "https://atimg.sonyunara.com/files/attrangs/goods/167463/68e8c8561fd38.jpg",
            "https://atimg.sonyunara.com/files/attrangs/goods/167463/68e8c85638ea8.jpg",
            "https://atimg.sonyunara.com/files/attrangs/goods/167463/68e8c8563ba71.jpg"
        ],
        colors: ['#ffced1', '#000000', '#83a4d4', '#e0d4e3'],
        reviews: "4", buyCount: 114
    },
    { 
        id: 1,
        title: "[2만5천장 돌파✨] (MADE/셔츠+니트조끼SET♥) 멜버른 펜던트 셔츠 무지 니트 베스트 세트", 
        price: "20,630", originalPrice: "40,000", discount: "48%", 
        img: "https://atimg.sonyunara.com/files/attrangs/goods/164291/list13_696917caad05d.gif",
        colors: ['#ffced1', '#000000'], reviews: 293, buyCount: 26454
    },
    { 
        id: 2,
        title: "[울함유] (10color/취향저격컬러♥/보송폭닥) 모렌 램스울 크롭 라운드 니트", 
        price: "15,800", originalPrice: "30,000", discount: "60%", 
        img: "https://atimg.sonyunara.com/files/attrangs/goods/168875/list1_694ac199eb427.gif",
        colors: ['#ffced1', '#000000'], reviews: 40, buyCount: 2980 
    },
    { 
        id: 3,
        title: "(2기장/S~2XL/기모슬랙스/맞춘듯착붙핏) 올리아 모직 히든밴딩 기모 부츠컷 슬랙스", 
        price: "24,490", originalPrice: "45,000", discount: "46%", 
        img: "https://atimg.sonyunara.com/files/attrangs/goods/168931/list1_6956b6632a988.gif",
        colors: ['#000000'], reviews: 17, buyCount: 907
    },
    { 
        id: 4,
        title: "(3기장/S~XL/베스트♥) 3기장 H라인 베이직 스커트", 
        price: "19,660", originalPrice: "38,000", discount: "48%", 
        img: "https://atimg.sonyunara.com/files/attrangs/goods/62359/list1_695d36d07cc65.gif",
        colors: ['#000000'], reviews: "1554", buyCount: 61792
    },
    { 
        id: 5,
        title: "[주문폭주] (털빠짐X/포근여리핏/타이&가디건SET♥) 이프유 헤어리 솔잎퍼 타이 세트 가디건", 
        price: "19,870", originalPrice: "40,000", discount: "46%", 
        img: "https://atimg.sonyunara.com/files/attrangs/goods/169071/list1_696a271cd104c.gif",
        colors: ['#ffced1'], reviews: 181, buyCount: 9
    },
    { 
        id: 6,
        title: "[1만장 돌파✨] (포인트룩추천♥/포근여리핏) 홀린 브러쉬 배색 스트라이프 카라넥 버튼 긴팔 니트", 
        price: "22,420", originalPrice: "50,000", discount: "55%", 
        img: "https://atimg.sonyunara.com/files/attrangs/goods/168563/list1_6921c8da88863.gif",
        colors: ['#ffced1', '#000000'], reviews: 114, buyCount: 12493 
    },
    { 
        id: 7,
        title: "[주문폭주] (레이스포인트/러블리♥) 스모아 라운드 프릴 실버 버튼 가디건", 
        price: "20,560", originalPrice: "40,000", discount: "53%", 
        img: "https://atimg.sonyunara.com/files/attrangs/goods/169019/list1_69638ca43ca83.gif",
        colors: ['#ffced1'], reviews: 11, buyCount: 491 
    },
];

// 2. 겨울 마중 (id: 100 ~ ) -> 겹치지 않게 설정
export const winterProducts = [
    { 
        id: 100,
        title: "(긴팔옵션추가/얼굴광채템♥/회의실여신)로이 리본 타이 소매 블라우스", 
        price: "30,700", originalPrice: "63,000", discount: "51%", 
        img: "https://atimg.sonyunara.com/files/attrangs/goods/167463/list13_68e8c85d99937.gif",
        reviews: 135, buyCount: 9087
    },
    {   
        id: 101,
        title: "[울함유] (실물1위/목짧아도예쁜핏/프리미엄울소재) 엘레나 핸드메이드 하이넥 울 숏 코트", 
        price: "55,200", originalPrice: "160,000", discount: "65%", 
        img: "https://atimg.sonyunara.com/files/attrangs/goods/163010/list13_6903934276ccf.gif", 
        reviews: 88, buyCount: 4716
    },
    {   
        id: 102,
        title: "[주문폭주] (MADE/국내제작/펄감한스푼=격식룩무드200%) 메르덴 펄 트위드 카라 긴팔 롱 원피스", 
        price: "87,000", originalPrice: "158,000", discount: "45%", 
        img: "https://atimg.sonyunara.com/files/attrangs/goods/167487/list13_68db2731b5fa0.gif", 
        reviews: 38, buyCount: 2008
    },
    {   
        id: 103,
        title: "[울함유] (MADE/울100%/디자인특허템/누빔탈착OK) 베노어 오버핏 스트랩 더블 하프 핸드메이드 코트", 
        price: "158,100", originalPrice: "300,000", discount: "47%", 
        img: "https://atimg.sonyunara.com/files/attrangs/goods/168033/list13_6900ed1907e6a.gif", 
        reviews: 43, buyCount: 964
    },
    { 
        id: 104,
        title: "[5000장 돌파✨] [울함유] (보드라운클래식/사랑받는핏♥) 어도브 배색 라인 골드 버튼 가디건", 
        price: "17,800", originalPrice: "38,000", discount: "53%", 
        img: "https://atimg.sonyunara.com/files/attrangs/goods/167637/list13_68f630b178875.gif",
        reviews: 93, buyCount: 5456
    },
    {   
        id: 105,
        title: "(도톰한겨울버전추가!/타이세트) 헤이즈 타이 세트 언발넥 사이드 버튼 골지 니트", 
        price: "23,460", originalPrice: "45,000", discount: "48%", 
        img: "https://atimg.sonyunara.com/files/attrangs/goods/168225/list1_693c3061b6220.gif", 
        reviews: 53, buyCount: 6280
    },
    {   
        id: 106,
        title: "(여리한쇄골라인/여성스러움UP) 오브텐 슬림 골지 언발 오프숄더 니트", 
        price: "12,420", originalPrice: "24,000", discount: "48%", 
        img: "https://atimg.sonyunara.com/files/attrangs/goods/167641/list1_68ffbffc518f8.gif", 
        reviews: 29, buyCount: 2583 
    },
    {   
        id: 107,
        title: "(밍크기모옵션추가/포근보들♥/투피스세트/활용도굿) 데일라 밍크기모 반집업 밴딩 와이드 팬츠 니트 세트", 
        price: "26,910", originalPrice: "60,000", discount: "55%", 
        img: "https://atimg.sonyunara.com/files/attrangs/goods/167633/list13_68f4791f856e7.gif", 
        reviews: 80, buyCount: 3988
    },
];

// 3. NEW ITEM (id: 200 ~ )
export const newItemProducts = [
    { 
        id: 200,
        title: "[주문폭주] (투톤무드/레이어드한듯) 무하르 체크 셔츠 배색 레이어드 오프숄더 골지 블라우스", 
        price: "33,460", originalPrice: "63,000", discount: "47%", 
        img: "https://atimg.sonyunara.com/files/attrangs/goods/169095/list1_696908c66ee07.gif",
        reviews: 8, buyCount: 54
    },
    { 
        id: 201,
        title: "(일체형/레이어드투톤♥) 시그니 펜던트 레이어드 배색 니트 가디건", 
        price: "20,630", originalPrice: "38,000", discount: "46%", 
        img: "https://atimg.sonyunara.com/files/attrangs/goods/169101/list13_696d161d3e2b4.gif",
        reviews: 4, buyCount: 2
    },
    { 
        id: 202,
        title: "[주문폭주] [울함유] (울&앙고라/레이어드필수/미니멀) 아비엘 앙고라 울 니트 뷔스티에", 
        price: "24,840", originalPrice: "50,000", discount: "47%", 
        img: "https://atimg.sonyunara.com/files/attrangs/goods/169035/list13_696a18f451f31.gif",
        reviews: 11, buyCount: 108 
    },
    { 
        id: 203,
        title: "(연프여신룩/남심저격템/페미닌무드♥) 아일렌 홀터넥 셔링 쉬폰 타이 블라우스", 
        price: "23,460", originalPrice: "50,000", discount: "53%", 
        img: "https://atimg.sonyunara.com/files/attrangs/goods/169271/696a2c488b1dc.jpg",
        reviews: 1, buyCount: 80
    },
    { 
        id: 204,
        title: "[울함유] (6컬러/소프트울/소장추천♥) 베린 울 라운드 긴팔 가디건", 
        price: "29,900", originalPrice: "38,000", discount: "21%", 
        img: "https://atimg.sonyunara.com/files/attrangs/goods/168969/list1_6966707f28039.gif",
        reviews: 9, buyCount: 186
    },
    { 
        id: 205,
        title: "[주문폭주] (니트셋업/후드&스커트/이지룩) 데이즈 반집업 후드 니트 롱 스커트 투피스 세트", 
        price: "33,460", originalPrice: "32,000", discount: "46%", 
        img: "https://atimg.sonyunara.com/files/attrangs/goods/169035/list13_696a18f451f31.gif",
        reviews: 8, buyCount: 47
    },
    { 
        id: 206,
        title: "(깔끔단정/포근한소재/겨울데이트룩♥) 코젤라 보카시 슬리브리스 원피스", 
        price: "50,000", originalPrice: "90,000", discount: "44%", 
        img: "https://atimg.sonyunara.com/files/attrangs/goods/168993/list13_69659833d24e3.gif",
        reviews: 9, buyCount: 105
    },
    { 
        id: 207,
        title: "(홀터나시+가디건/활용도갑/여리슬림핏♥) 리빗 홀터 나시 가디건 니트 세트", 
        price: "23,180", originalPrice: "45,000", discount: "48%", 
        img: "https://atimg.sonyunara.com/files/attrangs/goods/169001/list13_69639658ca8aa.gif",
        reviews: 12, buyCount: 229
    },
];

// 4. 오늘 출발 (id: 300 ~ )
export const todayProducts = [
    { 
        id: 300,
        title: "[주문폭주] (MADE/오늘은미니-내일은롱♥/구김없는하루) 에르베 2기장 하트넥 벨트 세트 원피스", 
        price: "34,150", originalPrice: "69,000", discount: "51%", 
        img: "https://atimg.sonyunara.com/files/attrangs/goods/167491/list13_68ea4beb0b396.gif",
        reviews: 16, buyCount: 611
    },
    { 
        id: 301,
        title: "[주문폭주] 새들러 스웨이드 프릴 A라인 미니 스커트", 
        price: "27,660", originalPrice: "60,000", discount: "54%", 
        img: "https://atimg.sonyunara.com/files/attrangs/goods/169021/list1_695c0a41cf553.gif",
        reviews: 10, buyCount: 64
    },
    { 
        id: 302,
        title: "(캠퍼스무드/꾸안꾸캐주얼) 에스크 레터링 루즈핏 기모 맨투맨", 
        price: "22,010", originalPrice: "42,000", discount: "48%", 
        img: "https://atimg.sonyunara.com/files/attrangs/goods/169077/list1_696a1eb3ea078.gif",
        reviews: 5, buyCount: 25
    },
    { 
        id: 303,
        title: "[주문폭주] (벨트구성/바지안감/롱부츠에찰떡♥) 블레미 벨티드 플리츠 미니 스커트", 
        price: "17,660", originalPrice: "35,000", discount: "41%", 
        img: "https://atimg.sonyunara.com/files/attrangs/goods/168577/list13_696a6655c21d5.gif",
        reviews: 14, buyCount: 727
    },
    { 
        id: 304,
        title: "[주문폭주] (코듀로이소재/치마바지/롱비율템) 레브니 코듀로이 미니 치마바지", 
        price: "22,770", originalPrice: "45,000", discount: "49%", 
        img: "https://atimg.sonyunara.com/files/attrangs/goods/169077/list13_696a1eb109e3c.gif",
        reviews: 1, buyCount: 42
    },
    { 
        id: 305,
        title: "(기모안감/담요팬츠/소프트웜♥) 멜프 와이드 밴딩 트레이닝 팬츠", 
        price: "20,350", originalPrice: "40,000", discount: "49%", 
        img: "https://atimg.sonyunara.com/files/attrangs/goods/168391/list13_6931e07e709e4.gif",
        reviews: 43, buyCount: 2403 
    },
    { 
        id: 306,
        title: "(기모안감/레이어드한듯♥) 티모즈 보트넥 배색 레이어드 기모 티셔츠", 
        price: "12,970", originalPrice: "24,000", discount: "46%", 
        img: "https://atimg.sonyunara.com/files/attrangs/goods/169073/list13_696ef7c3b1ac7.gif",
        reviews: 8, buyCount: 20
    },
    { 
        id: 307,
        title: "[주문폭주] (포근기모/말랑쫀득/신축성최고) 티에브 기모 스트라이프 밴딩 롱 스커트", 
        price: "13,660", originalPrice: "29,000", discount: "53%", 
        img: "https://atimg.sonyunara.com/files/attrangs/goods/169073/list1_696ef7c6346e6.gif",
        reviews: 8, buyCount: 44
    },
];