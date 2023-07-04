import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';


import React, { useState } from 'react';
import styled from 'styled-components';

import { BrowserRouter, Route, Link, Routes, useNavigate} from "react-router-dom";

import Modal from './Modal';

// kakao 로그인 기능
import KakaoLogin from 'react-kakao-login';
import KakaoLoginButton from './KakoLoginButton';

// footer
import Footer from './footer';

// banner
import bannerSection from './banner';
import BannerSection from './banner';






// 액션 타입 정의
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';

// 액션 생성자 함수
const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    text,
  },
});

const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: {
    id,
  },
});

// 초기 상태 및 리듀서 함수 정의
const initialState = {
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload.text,
          },
        ],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    default:
      return state;
  }
};

// 스토어 생성
const store = createStore(reducer);

// To-do 목록 컴포넌트
const TodoList = ({ todos, addTodo, removeTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      addTodo(text);
      setText('');
    }
  };

  const handleRemove = (id) => {
    removeTodo(id);
  };

  return (
    <div style={{ position: 'fixed', bottom: '20px', left: '20px', backgroundColor: 'transparent', padding: '20px' }}>
      <form onSubmit={handleSubmit} style={{ marginBottom: '10px' }}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ padding: '5px', marginRight: '10px' }}
        />
        <button type="submit" style={{ padding: '5px 10px', backgroundColor: 'red', color: 'white', border: 'none', cursor: 'pointer' }}>
          Add
        </button>
      </form>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: '5px' }}>
            {todo.text}{' '}
            <button
              onClick={() => handleRemove(todo.id)}
              style={{ padding: '2px 5px', backgroundColor: '#ff0000', color: '#fff', border: 'none', cursor: 'pointer' }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
  
};

// Redux 상태와 액션을 컴포넌트의 props로 연결
const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  addTodo,
  removeTodo,
};

// 컴포넌트를 Redux에 연결
const ConnectedTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);










export const Body = styled.body`
  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAxMTNfMTE5%2FMDAxNjEwNTIxMjIxNzg4.D17-aElTqNemy6oQH--mV2msR13cX5P1g4Z2BjiuWpQg.pISX2bsNfq-XaH1uxRyeiWmelDBsDv9nR_AUi369-k4g.JPEG.op_nion%2F1%25C1%25FD_1.jpeg&type=sc960_832');
  background-size: contain;
  background-position: center center;
  /* background-repeat: no-repeat; */
  
  color: #333;
  font-size: 16px;
  font-weight: 400;

  /* font 글꼴 연결 */
  font-family: 'Nanum Gothic', sans-serif; 
  /* 스크롤 만들기 */
`;


export const Image = styled.img`
  display: block;
`;

export const a = styled.a`
  /* 텍스트 밑줄 - 제거 */
  text-decoration: none;
`;






const ImageGallery = styled.div`
  position: fixed;
  height: 10%;
  width: 150px;
  top: 30%;
  right: 20px;
  transform: translateY(-50%);
  /* background-color: #fff; */
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageItemImage = styled.img`
  width: 100%;
  height: 100%;
`;

const ImageDescription = styled.p`
  text-align: left;
  font-size: 16px;
  font-family: 'Nanum Gothic', sans-serif; 
  margin-top: 10px;
  font-weight: 900;
`;

const ScrollToTop = styled.div`
  text-align: center;
  font-size: 16px;
  font-family: 'Nanum Gothic', sans-serif; 
  margin-top: 0;
  font-weight: 900;

  &:hover {
    font-family: 'Nanum Gothic', sans-serif; 
    /* background-color: #fff; */
    color: black;
  }
`;

const RecentlyViewed = styled.div`
  position: relative;
  height: 10%;
  width: 150px;
  top: 75%;
  right: 0;
  transform: translate(0, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RecentlyViewedImg = styled.img`
  width: 140px;
  height: 140px;
  margin-bottom: 5px;
`;

const RecentlyViewedSpan = styled.span`
  font-size: 22px;
  text-align: center;
`;

const Header = styled.header`
  /* 상단바와 배지 고정 */
  position: fixed;
  /* 가로 너비 최대 사용 */
  width: 100%;
  height: 10%;
  background-color: white;
  border-bottom: 1px solid white;
  top: 0;
  /* section보다 위 */
  z-index: 9;
`;

const HeaderInner = styled.div`
  height: 60%;
`;

const Logoimage = styled.img`
  height: 60%;
  position: absolute;
  left: 20px;
  /* 중앙에 오도록 설정 */
  top: 0;
  bottom: 0;
  margin: auto;
`;

const SubMenu = styled.div`
  position: absolute;
  height: 0%;
  right: 50px;
  top: 0;
  bottom: 0;
`;

const SubMenuUl = styled.ul`
  font-family: Arial, sans-serif;
  display: flex;
`;

const SubMenuLi = styled.li`
  position: relative;
  list-style: none;

  &:before {
    content: "";
    width: 1px;
    height: 12px;
    background-color: gray;
    position: absolute;
    /* 중앙에 오도록 설정 */
    top: 0;
    bottom: 0;
    margin: auto;
  }
  
  &:first-child:before {
    display: none;
  }
`;

const SubMenuLink = styled.a`
  font-size: 20px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 5px;
  display: block;
  color: #656565;
  text-decoration: none; 

  &:hover {
    color: #000;
  }
`;

const SearchContainer = styled.div`
  height: 34px;
  position: relative;
`;

const SearchInput = styled.input`
  width: 300px;
  height: 100%;
  padding: 4px 10px;
  border: 1px solid red;
  box-sizing: border-box;
  outline: none;
  /* background-color: #fff; */
  color: #777;
  font-size: 12px;
  transition: width .4s;

  &:focus {
    width: 600px;
    /* border-color: #669900; */
  }
`;

const SearchIcon = styled.span`
  height: 24px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 5px;
  margin: auto;
  transition: .4s;
`;

const SearchContainerFocused = styled(SearchContainer)`
  ${SearchIcon} {
    opacity: 0;
  }
`;




// 앱 컴포넌트
function App() {
  const [isOpen, setIsOpen] = useState(false); // modal
  const [recentlyViewed, setRecentlyViewed] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState(''); // state 추가
  const [modalTitle, setModalTitle] = useState(''); // state 추가
    
  const handleClick = (imageSrc, title) => {
    setIsOpen(true);
    setModalImageSrc(imageSrc);
    setModalTitle(title);
  };
  

  return (
  <>
  <Body>
      <BannerSection></BannerSection>
      <Provider store={store}>
        <ConnectedTodoList />
        </Provider>

      <ImageGrid handleClick={handleClick} />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          <img src={modalImageSrc} alt="Modal Image" />
          <p>{modalTitle}</p>
      </Modal>

      <div>
        <ImageGallery>
          <a href="https://www.google.com">
            <ImageItem data-product="product1" onClick={handleClick}>
              <ImageItemImage src="images/image1.jpg" alt="Image 1" />
              <ImageDescription>신상품</ImageDescription>
            </ImageItem>
          </a>
          <a href="https://www.google.com">
          <ImageItem data-product="product2" onClick={handleClick}>
              <ImageItemImage src="images/image2.jpg" alt="Image 2" />
              <ImageDescription>인기상품</ImageDescription>
            </ImageItem>
          </a>
          <ScrollToTop>
            <a href="#top">T O P</a>
          </ScrollToTop>
          <recentlyViewed>
            <button style={{ backgroundColor: 'white'}} onClick={() => setRecentlyViewed(!recentlyViewed)}>최근 본 상품</button>
              {recentlyViewed && (
                <a href="https://www.google.com">
                  <RecentlyViewedImg src="images/image2.jpg" alt="최근 본 상품" />
                  <span>최근 본 상품</span>
                </a>
              )}
          </recentlyViewed>
        </ImageGallery>
      </div>

        <Header>
          <HeaderInner>
            <a href="/" className="logo">
              <Logoimage src="images/1.png" alt="app" />
            </a>
            <SubMenu>
              <SubMenuUl>
              <lSubMenuLi>
                <SearchContainer>
                  <SearchInput type="text" />
                  <SearchIcon className="material-icons">🔍︎</SearchIcon>
                </SearchContainer>
              </lSubMenuLi>
                  <SubMenuLi>
                    <SubMenuLink href="/singin">판매하기</SubMenuLink>
                </SubMenuLi>
                  <SubMenuLi>
                    <SubMenuLink href="javascript:void(0)">내상점</SubMenuLink>
                  </SubMenuLi>
                  <SubMenuLi>
                    <SubMenuLink href="javascript:void(0)">번개톡</SubMenuLink>
                  </SubMenuLi>
                  <KakaoLoginButton /> 
                </SubMenuUl>
              </SubMenu>
            </HeaderInner>
        </Header>

        <BrowserRouter>
            <div style={{ backgroundColor: 'white', padding: 20, margin: 40, border: '5px solid gray' }}>
            <Link to="/">홈</Link><br />
            <Link to="/photo">사진2</Link><br />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/photo" element={<Photo />} />
            </Routes>
            </div>
        </BrowserRouter>
        <Footer></Footer>
  </Body>
  </>
  );
}

const Grid = styled.div`
  margin-top: 1%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 50px 50px;
  padding: 20px;
  margin-right: 200px;
  margin-left: 200px;
`;

function ImageGrid({ handleClick }) {
  return (
    // ImageItem 에 data-product 속성 추가
        <Grid>
          <ImageItem data-product="product1" onClick={() => handleClick('images/image1.jpg', '1번째 상품')}>
            <ImageItemImage src="images/image1.jpg" alt="Image 1" />
            <ImageDescription>
              선장 짱구 eft
              <br />
              180,000원
            </ImageDescription>
          </ImageItem>

          <ImageItem data-product="product2" onClick={() => handleClick('images/image2.jpg', '2번째 상품')}>
            <ImageItemImage src="images/image2.jpg" alt="Image 2" />
            <ImageDescription>
              백미러 짱구 eft
              <br />
              30,000원
            </ImageDescription>
          </ImageItem>

        <ImageItem data-product="product3" onClick={() => handleClick('images/image3.jpg', '3번째 상품')}>
          <ImageItemImage src="images/image3.jpg" alt="Image 3" />
          <ImageDescription>
            액션가면 짱구 eft
            <br />
            42,000원
          </ImageDescription>
        </ImageItem>

          <ImageItem data-product="product4" onClick={() => handleClick('images/image4.jpg', '4번째 상품')}>
            <ImageItemImage src="images/image4.jpg" alt="Image 4" />
            <ImageDescription>
              엽기 짱구 eft
              <br />
              60,000원
            </ImageDescription>
          </ImageItem>

          <ImageItem data-product="product5" onClick={() => handleClick('images/image5.jpg', '5번째 상품')}>
            <ImageItemImage src="images/image5.jpg" alt="Image 5" />
            <ImageDescription>
              우산 짱구 eft
              <br />
              45,000원
            </ImageDescription>
          </ImageItem>

          <ImageItem data-product="product6" onClick={() => handleClick('images/image6.jpg', '6번째 상품')}>
            <ImageItemImage src="images/image6.jpg" alt="Image 6" />
            <ImageDescription>
              원숭이 짱구 eft
              <br />
              40,000원
            </ImageDescription>
          </ImageItem>

          <ImageItem data-product="product7" onClick={() => handleClick('images/image7.jpg', '7번째 상품')}>
            <ImageItemImage src="images/image7.jpg" alt="Image 7" />
            <ImageDescription>
              먹방 짱구 eft
              <br />
              74,000원
            </ImageDescription>
          </ImageItem>

          <ImageItem data-product="product8" onClick={() => handleClick('images/image8.jpg', '8번째 상품')}>
            <ImageItemImage src="images/image8.jpg" alt="Image 8" />
            <ImageDescription>
              매미 짱구 eft
              <br />
              125,000원
            </ImageDescription>
          </ImageItem>

          <ImageItem data-product="product9" onClick={() => handleClick('images/image9.jpg', '9번째 상품')}>
            <ImageItemImage src="images/image9.jpg" alt="Image 9" />
            <ImageDescription>
              펜더 짱구 eft
              <br />
              260,000원
            </ImageDescription>
          </ImageItem>

          <ImageItem data-product="product10" onClick={() => handleClick('images/image10.jpg', '10번째 상품')}>
            <ImageItemImage src="images/image10.jpg" alt="Image 10" />
            <ImageDescription>
              배낭 짱구 eft
              <br />
              30,000원
            </ImageDescription>
          </ImageItem>
        </Grid>
  );
}

function Home({match}) {
  return <h1>초기 홈페이지</h1>
  
}

function Photo({match}) {
  return <h2>여기서 사진2을 감상하세요.</h2>
}

export default App