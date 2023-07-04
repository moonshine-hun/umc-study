import React from 'react';
import bannersStyles from './styles/banner';

function BannerSection() {
  return (
    <bannersStyles.bannerSection>
      <bannersStyles.backgroundLeft></bannersStyles.backgroundLeft>
      <bannersStyles.backgroundRight></bannersStyles.backgroundRight>
      <bannersStyles.inner>
        {/* <bannersStyles.buttonGroup>
          <bannersStyles.buttonSignUp>회원가입</bannersStyles.buttonSignUp>
          <bannersStyles.buttonSignIn>로그인</bannersStyles.buttonSignIn>
          <bannersStyles.buttonGift>번개페이 선물하기</bannersStyles.buttonGift>
        </bannersStyles.buttonGroup> */}
      </bannersStyles.inner>
    </bannersStyles.bannerSection>
  );
}

export default BannerSection;
