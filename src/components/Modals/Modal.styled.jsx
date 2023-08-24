import styled from '@emotion/styled';

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
    /* background-color: rgba(0, 0, 0, 0.7); */
}

 
  @media (min-width: 1024px) {
    /* background-color: rgba(0, 0, 0, 0.8);  */
}
`;

const ModalContent = styled.div`
  position: relative;
  background-color: #e5d1d1;
  /* padding: 44px 20px 16px 20px; */
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 280px;
  width: 80%;

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
    color: #8c99ec;
    width: 24px;
    height: 24px;
    transition: color 300ms ease-in-out; /* Змінюємо тут transition на color */
  }

  &:hover {
    svg {
      color: #0f0fa5;
    }
  }

  @media (min-width: 768px) {
    /* background-color: rgba(0, 0, 0, 0.7); */
}

 
  @media (min-width: 1024px) {
    /* background-color: rgba(0, 0, 0, 0.8);  */
}
`;

export {
  ModalOverlay,
  ModalContent,
  CloseButton,
};
