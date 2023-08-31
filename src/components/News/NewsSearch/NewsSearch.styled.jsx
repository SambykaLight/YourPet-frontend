import styled from 'styled-components';
import { ReactComponent as IconClose } from '../../../images/icon/error_red.svg';

export const Form = styled.form`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
`;

export const FormContainer = styled.div`
  position: relative;
`;

export const InputContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const ClearIcon = styled(IconClose)`
  position: absolute;
  top: 50%;
  right: 50px;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const Input = styled.input`
  width: 100%;
  height: 44px;
  padding-left: 20px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  color: #888888;
  background: #ffffff;
  outline: none;
  border-radius: 20px;
  border: transparent;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  width: 280px;
  margin-left: 25px;

  @media screen and (min-width: 768px) {
    width: 608px;
    font-size: 20px;
    line-height: 24px;
    margin-left: 55px;
  }
  :not(:placeholder-shown) {
    opacity: 1;
    right: 40px;
  }
`;
export const BtnSearch = styled.button`
  width: 24px;
  height: 24px;

  position: absolute;
  bottom: 10px;
  color: #54adff;
  z-index: 2;

  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;

  background-color: transparent;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    right 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 480px) {
    right: 12px;
  }

  @media screen and (min-width: 768px) {
    right: 20px;
  }

  @media screen and (min-width: 1280px) {
    right: 20px;
  }
  :hover,
  :focus {
    color: #145ea3;
  }
  ,
  :not(:placeholder-shown) {
    opacity: 1;
  }
`;

export const Title = styled.h2`
  font-family: 'Manrope';
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: center;

  padding-top: 40px;
  padding-bottom: 24px;

  color: #111111;

  @media (min-width: 768px) {
    font-size: 48px;
    line-height: 66px;
    padding-top: 82px;
    padding-bottom: 40px;
  }
`;
