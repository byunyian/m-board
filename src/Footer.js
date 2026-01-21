import React from 'react';
import { BiPhoneCall, BiMessageDetail } from "react-icons/bi";

export default function Footer() {
    return (
        <div style={{ 
            backgroundColor: 'white', 
            padding: '60px 20px', 
            borderTop: '1px solid #eee', 
            color: '#555', 
            fontSize: '12px' 
        }}>
            <div style={{ 
                maxWidth: '1200px', 
                margin: '0 auto', 
                display: 'flex', 
                justifyContent: 'space-between', 
                gap: '40px',
                flexWrap: 'wrap' // 화면 좁아지면 줄바꿈
            }}>
                
                {/* 1. 왼쪽: 고객센터 (CUSTOMER CENTER) */}
                <div style={{ flex: 1, minWidth: '250px' }}>
                    <h3 style={{ fontWeight: 'bold', marginBottom: '20px', fontSize: '14px' }}>CUSTOMER CENTER</h3>
                    <div style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>
                        1644-3225
                    </div>
                    <div style={{ lineHeight: '1.6', marginBottom: '20px' }}>
                        평일 : am 11:00 ~ pm 05:00 <br/>
                        점심 : pm 12:00 ~ pm 01:00 <br/>
                        (토/일/공휴일은 휴무)
                    </div>
                    
                    {/* 문의 버튼들 */}
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <button style={{ 
                            flex: 1, padding: '10px', border: '1px solid #eee', backgroundColor: 'white', 
                            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px'
                        }}>
                            <BiMessageDetail /> 카카오톡 문의
                        </button>
                        <button style={{ 
                            flex: 1, padding: '10px', border: '1px solid #eee', backgroundColor: 'white', 
                            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px'
                        }}>
                            <BiPhoneCall /> 네이버 톡톡
                        </button>
                    </div>
                </div>

                {/* 2. 가운데: 회사 정보 (ABOUT) */}
                <div style={{ flex: 1.5, minWidth: '300px' }}>
                    <h3 style={{ fontWeight: 'bold', marginBottom: '20px', fontSize: '14px' }}>ABOUT ATTRANGS</h3>
                    <div style={{ lineHeight: '1.8' }}>
                        상호명 : 주식회사 아뜨랑스 (대표: 정호) <br/>
                        주소 : 서울특별시 성동구 아차산로 123 (정호빌딩) <br/>
                        사업자등록번호 : 123-45-67890 <br/>
                        통신판매업신고 : 2024-서울성동-00000 <br/>
                        개인정보관리책임자 : 정호 (attrangs@naver.com) <br/>
                        제휴/광고 문의 : partner@attrangs.com
                    </div>
                </div>

                {/* 3. 오른쪽: 은행 정보 & SNS */}
                <div style={{ flex: 1, minWidth: '200px' }}>
                    <h3 style={{ fontWeight: 'bold', marginBottom: '20px', fontSize: '14px' }}>BANK INFO</h3>
                    <div style={{ lineHeight: '1.8', marginBottom: '20px' }}>
                        <strong>국민</strong> 123456-01-123456 <br/>
                        <strong>농협</strong> 123-1234-1234-00 <br/>
                        예금주 : 주식회사 아뜨랑스
                    </div>

                    <h3 style={{ fontWeight: 'bold', marginBottom: '15px', fontSize: '14px' }}>SOCIAL</h3>
                    <div style={{ display: 'flex', gap: '15px', fontSize: '24px', color: '#ccc' }}>
                        <span style={{ cursor: 'pointer', color: '#E1306C' }}>Instagram</span>
                        <span style={{ cursor: 'pointer', color: '#4267B2' }}>Facebook</span>
                        <span style={{ cursor: 'pointer', color: '#FF0000' }}>YouTube</span>
                    </div>
                </div>

            </div>

            {/* 맨 아래 저작권 표시 */}
            <div style={{ borderTop: '1px solid #eee', marginTop: '40px', paddingTop: '20px', textAlign: 'center', color: '#999' }}>
                Copyright © ATTRANGS. All Rights Reserved.
            </div>
        </div>
    );
}

