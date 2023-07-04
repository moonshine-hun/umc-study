import React from 'react'
import FooterStyles from './styles/footer';

const Footer = () => {
  return (
      <FooterStyles.FooterContainer>
        <FooterStyles.Inner>
        <FooterStyles.Menu>
          <FooterStyles.Menuli><FooterStyles.MenuLink href="javascript:void(0)" className="red">개인정보처리방침</FooterStyles.MenuLink></FooterStyles.Menuli>
          <FooterStyles.Menuli><FooterStyles.MenuLink href="javascript:void(0)">회사소개</FooterStyles.MenuLink></FooterStyles.Menuli>
          <FooterStyles.Menuli><FooterStyles.MenuLink href="javascript:void(0)">홈페이지 이용약관</FooterStyles.MenuLink></FooterStyles.Menuli>
          <FooterStyles.Menuli><FooterStyles.MenuLink href="javascript:void(0)">청소년 보호 정책</FooterStyles.MenuLink></FooterStyles.Menuli>
          <FooterStyles.Menuli><FooterStyles.MenuLink href="javascript:void(0)">번개장터 이용약관</FooterStyles.MenuLink></FooterStyles.Menuli>
          <FooterStyles.Menuli><FooterStyles.MenuLink href="javascript:void(0)">광고제휴</FooterStyles.MenuLink></FooterStyles.Menuli>
        </FooterStyles.Menu>

        <FooterStyles.ButtonGroup>
          <FooterStyles.Button>공지 사항</FooterStyles.Button>
          <FooterStyles.Button>1:1 문의하기</FooterStyles.Button>
          <FooterStyles.Button>자주 묻는 질문</FooterStyles.Button>
        </FooterStyles.ButtonGroup>

        <FooterStyles.Info>
          <FooterStyles.InfoSpan>사업자등록번호 : 113-86-45836 </FooterStyles.InfoSpan>
          <FooterStyles.InfoSpan>(주)번개장터 대표이사 : 최재화, 강승현</FooterStyles.InfoSpan>
          <FooterStyles.InfoSpan>EMAIL : help@bunjang.co.kr   |   FAX : 02-598-8241</FooterStyles.InfoSpan>
          <FooterStyles.InfoSpan>개인정보보호책임자 : 박병성</FooterStyles.InfoSpan>
        </FooterStyles.Info>

        <FooterStyles.Copyright>
          &copy; Bungaejangter. Inc All rights reserved.
        </FooterStyles.Copyright>
        <FooterStyles.Logo src="./public/images/1.png" alt="" className="logo" />
      </FooterStyles.Inner>
    </FooterStyles.FooterContainer>
  );
};

export default Footer;
