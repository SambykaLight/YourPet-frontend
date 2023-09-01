import styled from '@emotion/styled';

const StyledButtonOpen = styled.button`
 font-family: 'Manrope';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;

    display: flex;
    align-items: center;
    letter-spacing: 0.04em;

    background-color: #ffffff;
    color: #54adff;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 28px;
    gap: 10px;
    width: 248px;
    height: 38px;
    border: 2px solid #54adff;
    border-radius: 40px;

    cursor: pointer;

    &:hover {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
    color: rgb(253, 247, 242);
    border: none;
    background-color: transparent;
    }
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
  /* background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)); */
  /* backdrop-filter: blur(10px); */
  z-index: 100;

  

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
 z-index: 100;

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
