import styled from '@emotion/styled';

const StyledButtonOpen = styled.button`
  margin-bottom: 8px;
  background: #fff;
  color: #54adff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 40px;
  min-height: 35px;
  border: 2px solid #54adff;
  text-decoration: none;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transform: scale(0.3);
  border-radius: 200px;
  transition: opacity 0.3s, visibility 0.3s, transform 0.3s, border-radius 0.3s;

  &.active {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
    border-radius: 0px;
    transition: opacity 0.3s, visibility 0.3s, transform 0.3s,
      border-radius 0.3s;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }
`;

const ModalContent = styled.div`
  position: fixed;
  background-color: rgba(255, 255, 255, 1);

  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 280px;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    max-width: 608px;
  }

  @media (min-width: 1024px) {
    max-width: 680px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: color 500ms linear;
  padding: 0;

  svg {
    color: rgba(217, 217, 217, 1);
    width: 24px;
    height: 24px;
    transition: color 300ms ease-in-out;
  }

  &:hover {
    svg {
      color: #54adff;
    }
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }
`;

export { StyledButtonOpen, ModalOverlay, ModalContent, CloseButton };
