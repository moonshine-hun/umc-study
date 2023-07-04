import styled from 'styled-components';

const FooterStyles = {
  FooterContainer: styled.footer`
    background-color: white;
    border-top: 1px solid #333;
  `,

  Inner: styled.div`
    padding: 40px 0 60px 0;
  `,

  Menu: styled.ul`
    display: flex;
    justify-content: center;
  `,

  Menuli: styled.li`
    position: relative;
    list-style: none;

    &::before {
      content: "";
      width: 3px;
      height: 3px;
      background-color: #555;
      position: absolute;
      top: 0;
      bottom: 0;
      right: -1px;
      margin: auto;
    }
  `,

  MenuLink: styled.a`
    color: #ccc;
    font-size: 12px;
    font-weight: 700;
    padding: 15px;
    display: block;

    &.red {
      color: red;
    }
  `,

  ButtonGroup: styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
  `,

  Button: styled.button`
    font-size: 12px;
    margin-right: 10px;

    &:last-child {
      margin: 0;
    }
  `,

  Info: styled.div`
    margin-top: 30px;
    text-align: center;
  `,

  InfoSpan: styled.span`
    margin-right: 20px;
    color: #999;
    font-size: 12px;

    &:last-child {
      margin-right: 0;
    }
  `,

  Copyright: styled.div`
    color: #999;
    font-size: 12px;
    text-align: center;
    margin-top: 12px;
  `,

  Logo: styled.div`
    margin: 30px auto 0;
  `,
};

export default FooterStyles;
