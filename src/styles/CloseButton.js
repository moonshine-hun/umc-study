import styled from 'styled-components';

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 5.5rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    color: #e60073;
  }
`;

export default CloseButton;
