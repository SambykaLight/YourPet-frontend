import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AttentionModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  padding-top: 60px;
  padding-bottom: 60px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  @media screen and (min-width: 768px) {
    width: 608px;
    padding-left: 40px;
    padding-right: 40px;
    border-radius: 40px;
  }
`;

export const AttentionModalTitle = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    margin-bottom: 40px;
  }
`;

export const AttentionModalText = styled.p`
  text-align: center;
  font-family: var(--main-font);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 0.56px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const BtnsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }
`;

export const AuthButton = styled(Link)`
  text-decoration: none;
  box-sizing: border-box;
  text-align: center;

  width: 240px;
  height: 40px;
  cursor: pointer;
  padding: 8px 0px;

  color: var(--header-items-color);
  font-weight: 600;
  font-size: 16px;

  background: transparent;
  border-width: 2px;
  border-color: var(--header-items-color);
  border-style: solid;
  border-radius: 40px;
  font-size: 16px;

  &:hover {
    color: var(--btn-bg-color);
    border-color: var(--btn-bg-color);
    border-style: solid;
    border-radius: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 165px;
  }
`;
