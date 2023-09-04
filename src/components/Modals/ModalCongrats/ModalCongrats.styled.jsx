import styled from '@emotion/styled';

export const CongratsContainer = styled.div`
  width: 256px;
  height: 227px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 545px;
    height: 298px;
  }
`;

export const TextCongrats = styled.p`
  color: var(--dark-color);
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 60px;
  }
`;

export const TitleCongrats = styled.h2`
  color: var(--dark-color);
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    margin-bottom: 52px;
  }
`;

export const ButtonCongrat = styled.button`
  text-decoration: none;
  box-sizing: border-box;
  text-align: center;

  width: 248px;
  height: 40px;
  cursor: pointer;
  padding: 8px 0px;

  color: var(--fon-color);
  font-weight: 700;
  font-size: 16px;

  background: var(--blue-color);
  border: none;
  border-radius: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  }

  & svg {
    fill: var(--fon-color);
  }
`;
