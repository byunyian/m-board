import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// 컴포넌트 가져오기
import Header from './Header';       // (기존에 있던 헤더 파일)
import MainBanner from './MainBanner'; // (기존 배너)
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import Footer from './Footer';       // (기존 푸터)

// 데이터 가져오기 (Best, Winter, New, Today 다 가져오기!)
import { bestProducts, winterProducts, newItemProducts, todayProducts } from './data';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        {/* 1. 메인 페이지 (상품 리스트들이 쭉 나오는 곳) */}
        <Route path="/" element={
          <>
            <MainBanner />
            
            <ProductList 
                title="BEST 신상품" 
                subtitle="시선집중! 지금 주목해야 할"
                products={bestProducts} 
            />
            
            <ProductList 
                title="겨울 마중" 
                subtitle={<span style={{ color: '#5dade2' }}>겨울혜택~80% ❄️</span>} 
                products={winterProducts} 
            />

            <ProductList 
                title="NEW ITEM" 
                subtitle="매일 업데이트 되는 신상" 
                products={newItemProducts} 
            />

            <ProductList 
                title="오늘 출발" 
                subtitle="오후 2시 전 주문 시 당일 발송 🚀" 
                products={todayProducts} 
            />
          </>
        } />

        {/* 2. 상세 페이지 (여기가 핵심!! 👉 /:id 를 꼭 붙여야 함) */}
        {/* :id는 "여기에 아무 숫자나 들어올 수 있다"는 뜻이야 */}
        <Route path="/detail/:id" element={<ProductDetail />} />

      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;