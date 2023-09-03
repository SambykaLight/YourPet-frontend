import styled from '@emotion/styled';

export const UniversalWrap = styled.div`
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
  z-index: 9999;


  &.active {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
    border-radius: 0px;
    transition: opacity 0.3s, visibility 0.3s, transform 0.3s,
      border-radius 0.3s;
  }
`;

export const UniversalContent = styled.div`
  position: fixed;
  background-color: rgba(255, 255, 255, 1);

  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 280px;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  transform: scale(0, 3);
  visibility: hidden;


  transition: opacity 0.3s, visibility 0.3s, transform 0.3s, border-radius 0.3s;
  z-index: 9999;

  &.active {
    transform: scale(1);
    visibility: visible;

    transition: opacity 0.3s, visibility 0.3s, transform 0.3s,
      border-radius 0.3s;
  }

  @media (min-width: 768px) {
    max-width: 608px;
  }

  @media (min-width: 1024px) {
    max-width: 680px;
  }
`;
