// KakoLoginButton.js 코드

// **`useState`** 훅을 통해 **`isLoggedIn`**과 **`userInfo`** 상태를 관리하고 **`isLoggedIn`**은 사용자의 로그인 상태를 나타내고, **`userInfo`**는 로그인한 사용자의 정보를 저장

// **`responseKaKao`** 함수는 카카오 로그인 성공 시 호출되는 콜백 함수, 해당 함수에서는 로그인 상태를 변경하고 사용자 정보를 설정

// **`logoutKaKao`** 함수는 로그아웃을 처리하는 함수, 로그아웃 시 로그인 상태를 변경하고 사용자 정보를 초기화

// **`KakaoLoginButton`** 컴포넌트는 **`StyledKakaoLoginButton`** 컴포넌트로 감싸져 있으며, **`isLoggedIn`** 상태에 따라 로그인 또는 로그아웃 화면을 보여줌, 로그인 상태일 때는 사용자의 닉네임, 프로필 이미지, 이메일 정보를 표시하고 로그아웃 버튼을 제공, 로그인 상태가 아닐 때는 카카오 로그인을 위한 **`KakaoLogin`** 컴포넌트를 렌더링


import React, { useState } from 'react';
import styled from 'styled-components';
import KakaoLogin from 'react-kakao-login';

const StyledKakaoLoginButton = styled.div`
`;

const KakaoLoginButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const responseKaKao = (response) => {
    console.log(response);
    setIsLoggedIn(true);
    setUserInfo(response.profile);
  };

  const logoutKaKao = () => {
    console.log('logout');
    setIsLoggedIn(false);
    setUserInfo(null);
  };

  return (
    <StyledKakaoLoginButton>
      {isLoggedIn ? (
        <>
          <div>{userInfo?.nickname}</div>
          <div>{userInfo?.profile_image}</div>
          <div>{userInfo?.email}</div>
          <button onClick={logoutKaKao}>Logout</button>
        </>
      ) : (
        <KakaoLogin
          token="YOUR_KAKAO_REST_API_KEY"
          onSuccess={responseKaKao}
          onFailure={(err) => console.log(err)}
          getProfile={true}
        />
      )}
    </StyledKakaoLoginButton>
  );
};

export default KakaoLoginButton;
