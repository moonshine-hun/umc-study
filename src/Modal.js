import React from 'react';
import ImageModal from './styles/ImageModal';
import ImageWrapper from './styles/ImageWrapper';
import CloseButton from './styles/CloseButton';

function Modal({ isOpen, setIsOpen, children }) {
  const imageSrc = "images/image.jpeg"; //모달창의 띄울 이미지 변수(이미지 경로)

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  
  return (
    <>
      {isOpen && (
        <ImageModal>
          <ImageWrapper>
            <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
            <img src={imageSrc} alt="Modal Image" />
            {children}
          </ImageWrapper>
        </ImageModal>
      )}
    </>
  );
}

export default Modal;
