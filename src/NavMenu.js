// src/NavMenu.js
import React from 'react';


//================================== 반복되는 코드 따로 뺴기 ========================================


/* export 쓰냐 export default 쓰냐 이유
   1. "이 파일은 이거 하나를 위해 존재해!" (정체성)
   리액트에서는 보통 파일 하나에 컴포넌트 하나를 만드는 게 규칙이야. (Header.js, Footer.js 처럼) 이때 default를 쓰면 "이 파일의 핵심은 바로 나야!" 라고 쾅! 박아주는 느낌을 줘.
   import Header from './Header'
   딱 보면 "아, 헤더 가져오는구나" 하고 바로 알 수 있지.

   2. "이름을 내 마음대로 부를 수 있어!" (별명 기능) ✨
   이게 진짜 강력한 이유야. **주인공(Default)**은 가져오는 쪽에서 이름을 마음대로 지어줄 수 있어.
   예를 들어, 네가 엄청 긴 이름의 컴포넌트를 만들었다고 쳐보자.
   원래 이름: SuperAmazingFantasticButton
   [상황 A: export] 이름을 토시 하나 안 틀리고 똑같이 불러야 해. (오타 나면 에러!)
   import { SuperAmazingFantasticButton } from './Button'; // 너무 길어... 😩
   [상황 B: export Default] 가져올 때 내가 원하는 짧은 별명을 붙여도 돼.
   import CoolBtn from './Button'; // 내 맘대로 'CoolBtn'이라고 불러도 됨! 😎
 */



// 1. 메뉴 데이터 (Header에서도 써야 하니까 export를 붙여줘!)
// export { } : "나 필요한 사람 있으면 가져다 써~" (데이터, 설정값, 작은 함수들)
export const MENU_DATA = [
    { 
        id: 'best', // 각 메뉴의 주민등록번호 (컴퓨터가 구별하기 위함)
        label: 'BEST', // 화면에 보여줄 이름 (예:"BEST")
        list: ["원피스", "블라우스", "아우터", "니트", "티셔츠", "스커트", "팬츠", "언더웨어"] // 마우스를 올렸을때 촤르륵 펼처질 세부 이름들
    },
    { 
        id: 'new', 
        label: 'NEW', 
        list: ["오늘의 신상", "이번주 신상", "재입고 상품", "신상 할인"], 
        color: '#5c13bbff'
    },
    {  
        id: 'outer',
        label: '아우터', 
        list: ["자체제작", "단독진행", "핸드메이드", "트위드", "패딩", "코트", "자켓", "가디건", "니트", "조끼", "점퍼", "가죽&모피", "셋업"] 
    },  
    {  
        id: 'onepiece', 
        label: '원피스', 
        list: ["자체제작", "아르떼", "라라플로아", "단독진행", "하객룩", "미니", "미디", "롱", "패턴", "니트", "H라인", "A라인", "서스팬더", "투피스", "머메이드", "플레어"] 
    },
    {   
        id: 'knit', 
        label: '니트', 
        list: ["자체제작", "단독진행", "긴소매", "반소매", "민소매", "가디건"] 
    },
    { 
        id: 'tshirt', 
        label: '티셔츠', 
        list: ["자체제작", "단독진행", "긴소매", "반소매", "민소매"] 
    },
    { 
        id: 'blouseShirt',
        label: '블라우스셔츠', 
        list: ["자체제작", "단독진행", "무지", "셔츠", "민소매", "패턴", "리본&타이", "오프숄더", "레이스"] 
    },
    { 
        id: 'skirt', 
        label: '스커트', 
        list: ["자체제작", "3기장", "단독진행", "H라인", "A라인", "플레어", "프릴", "서스팬더", "미니", "미디", "롱", "하이웨스트", "데님", "프린트", "니트","머메이드"] 
    },
    { 
        id: 'underwhere', 
        label: '언더웨어', 
        list: ["세트", "브라", "캐미솔", "팬티", "다이어트웨어", "액세서리", "양말/스타킹", "파자마", "에슬레저룩"] 
    },
    { 
        id: 'accessory', 
        label: '악세잡화', 
        list: ["봄/여름", "가을/겨울", "슈즈", "가방", "모자", "헤어악세", "엑세서리", "주얼리"] 
    },
];


// =================================================================
// 🍳 2. 메뉴 기계 (NavMenu 컴포넌트)
// : 데이터를 받아 실제 화면(HTML)을 찍어내는 기계야.
// : 부모(Header)가 이 기계를 부를 때 { menu, isActive, setActiveMenu }라는 3가지 도구를 쥐여줘.

export default function NavMenu({ menu, isActive, setActiveMenu }) { 
    return (
        <div
            // 🖱️ 마우스 이벤트: 마우스를 올리면 부모에게 "나(menu.id) 선택됐어!"라고 알림 
            onMouseEnter={() => setActiveMenu(menu.id)}  // 마우스를 올렸을때  // menu.id 값을 가져올수 있는 이유는 Header에서 MENU_DATA.map(menu) => ( 로 불러옴

            onMouseLeave={() => setActiveMenu(null)}      // 👋 마우스 떠남: 마우스가 나가면 "이제 아무도 선택 안 함(null)"이라고 알림   
            style={{ position: 'relative', cursor: 'pointer', paddingBottom: '20px', marginBottom: '-20px' }}
        >
            {/* 메뉴 이름 컬러 변경 (BEST, NEW 등) */}
            <span style={{ 
                color: menu.color ? menu.color : '#333', // 색이 있으면 쓰고, 없으면 흰색
                transition: 'color 0.2s' 
                }}>
                    {menu.label}
            </span> 
            
            {/* 드롭다운: 활성화됐고, 리스트가 있을 때만 보여줘! */}

            {/* 🚦 조건부 렌더링 (검문소) */}
            {/* 1. isActive: 지금 마우스가 나한테 올라와 있니? (YES) */}
            {/* 2. menu.list.length > 0: 보여줄 세부 메뉴가 있니? (YES) */}
            {/* 👉 둘 다 YES여야만 아래 드롭다운 박스(div)를 보여준다! (&& 연산자) */}
            {isActive && menu.list.length > 0 && (  // menu 에는 BEST메뉴가 담겨져있다 위 순서대로 반복함  예) best 출력하고 new 출력하고 outer 출력하고 반복.... 
                <div style={dropdownStyle}>

                    {/* 🔄 반복문 (map): 세부 메뉴 리스트를 하나씩 꺼내서 span 태그로 변신시킴 */}
                    {menu.list.map((item) => (
                        <span 
                            key={item} // 🔑 이름표: 리액트가 헷갈리지 않게 붙여주는 고유 번호 (여기선 메뉴 이름 사용)
                            style={itemStyle} // 멘아래 따로 뺴 놓은 스타일 적용

                            // ✨ 마우스 효과: 글자에 마우스 대면 색깔 변하게 하기
                            onMouseEnter={(e) => e.target.style.color = '#ff7f7f'}
                            onMouseLeave={(e) => e.target.style.color = '#333'}
                        >
                            {item}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}

// --- 스타일 (이 파일 안에서만 쓰니까 export 안 해도 됨) ---
const dropdownStyle = {
    position: 'absolute', top: '30px', left: '-10px', width: '120px',
    backgroundColor: 'white', boxShadow: '0px 4px 12px rgba(0,0,0,0.15)',
    padding: '15px', borderRadius: '5px',
    display: 'flex', flexDirection: 'column', gap: '12px',
    color: '#333', fontWeight: 'normal', zIndex: 100, textAlign: 'left'
};

const itemStyle = {
    fontSize: '13px', cursor: 'pointer', transition: 'color 0.2s'
};