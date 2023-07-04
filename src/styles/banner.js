import styled from 'styled-components';

const bannersStyles = {
  bannerSection: styled.section`
    position: relative;
    justify-content: center;
  `,

  inner: styled.div`
    background-image: url("https://m.bunjang.co.kr/pc-static/resource/237e17f5cbe07edc8fff.png");
    height: 400px;
    background-repeat: no-repeat;
    position: relative;
    background-position: center;
  `,

  buttonGroup: styled.div`
    position: absolute;
    bottom: 24px;
    right: 0;
    width: 250px;
    display: flex;
    flex-wrap: wrap;
  `,

  backgroundLeft: styled.div`
    width: 50%;
    height: 100%;
    background-color: #F5F5F5;
    position: absolute;
    top: 0;
    left: 0;
  `,

  backgroundRight: styled.div`
    width: 50%;
    height: 100%;
    background-color: #F5F5F5;
    position: absolute;
    top: 0;
    right: 0;
  `,

  // buttonSignUp: styled.button`
  //   margin-right: 10px;
  // `,

  // buttonSignIn: styled.button`
  //   width: 110px;
  // `,

  // buttonGift: styled.button`
  //   margin-top: 10px;
    
  // `,
};

export default bannersStyles;
