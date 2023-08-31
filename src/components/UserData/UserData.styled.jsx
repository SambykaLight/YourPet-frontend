import styled from '@emotion/styled';
import { CiEdit, CiLogout } from 'react-icons/ci';
import { BsCamera } from 'react-icons/bs';
import { RxCross1 } from 'react-icons/rx';
import { AiOutlineCheck } from 'react-icons/ai';
import { Field } from 'formik';
// import { Typography } from '@mui/material';
import { Button } from '@mui/material';

export const ButtonSave = styled(Button)`
  && {
    background-color: #54adff;
    color: white;
    border-radius: 40px;
    width: 255px;
    cursor: pointer;
    padding: 6px 108px;
    position: absolute;
    bottom: -29px;
    right: -15px;

    
      @media screen and (min-width: 768px) {
        background-color: green;
        right: 262px;
      }

      @media screen and (min-width: 1280px) {
        background-color: green;
        right: -15px;
      }
    
`;

export const ButtonEdit = styled(Button)`
  position: absolute;
  right: 1px;
  top: 10px;

  @media screen and (min-width: 768px) {
    right: 1px;
    top: 10px;
  }
  @media screen and (min-width: 1280px) {
    right: 15px;
    top: 10px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 40px 0;

  @media screen and (min-width: 768px) {
    margin: 35px 0 40px 0;
  }

  @media screen and (min-width: 1280px) {
    display: inline-flex;

    margin: 35px 32px 0 0;
  }
`;

export const Title = styled.p`
  color: black;
  color: black;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.36;
  letter-spacing: 0.04em;
  font-size: 28px;
`;

export const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 517px;
  padding: 20px 8px 20px 8px;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 40px;
  background-color: #fff;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap-reverse;

    width: 704px;
    height: 278px;
    padding: 20px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
    height: 520px;

    padding: 20px 17px 0 17px;
  }
`;

export const PictureBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PictureWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

export const Picture = styled.img`
  display: block;
  width: 182px;
  height: 182px;
  border-radius: 40px;
  background-color: #ebebeb;
  object-fit: cover;
`;

export const EditPicture = styled.div`
  display: flex;

  justify-content: center;

  margin-bottom: 25px;
`;

export const EditBtnPicture = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 120px;
  height: 25px;

  border: none;
  background-color: #fff;
  padding: 0;

  cursor: pointer;
  font-size: 12px;
  letter-spacing: 0.04em;
`;

export const IconWrapperVerify = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
`;

export const IconWrapperRefuse = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 10px;

  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.04em;

  @media screen and (min-width: 768px) {
    width: 355px;

    font-weight: 600;
    font-size: 18px;
    letter-spacing: 0.04em;
  }
`;

export const Input = styled(Field)`
  width: 190px;
  height: 28px;

  padding: 0 40px 0 15px;
  border: 1px solid #54adff;
  border-radius: 20px;
  outline: none;
  background-color: #fff;

  font-size: 12px;
  letter-spacing: 0.04em;
  color: #000000;

  &.editing {
    border: 1px solid #20e820;
  }

  @media screen and (min-width: 768px) {
    width: 255px;
    height: 32px;

    font-size: 16px;
    letter-spacing: 0.04em;
  }
`;

export const LogOut = styled.div`
  margin-top: 25px;
  display: flex;
  gap: 10px;
  @media screen and (min-width: 768px) {
    margin-top: 15px;
  }
`;

export const BtnLogOut = styled.button`
  display: flex;
  align-items: center;

  border: none;
  background-color: #fff;
  padding: 0;

  cursor: pointer;
  color: #888888;
  font-size: 16px;
  letter-spacing: 0.04em;
`;

export const IconLogOut = styled(CiLogout)`
  margin-right: 10px;

  color: #54adff;
  font-size: 25px;
`;

export const Camera = styled(BsCamera)`
  margin-right: 10px;
  color: #54adff;
  font-size: 18px;
`;

export const IconEdit = styled(CiEdit)`
  position: absolute;
  left: 88%;

  font-size: 20px;
  cursor: pointer;
  color: #54adff;

  @media screen and (min-width: 768px) {
    left: 90%;
    font-size: 23px;
  }

  :hover {
    color: red;
  }
`;

export const BoxIconVerify = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  left: 89%;

  @media screen and (min-width: 768px) {
    left: 90.5%;
  }
`;

export const IconVerify = styled(AiOutlineCheck)`
  font-size: 18px;

  cursor: pointer;
  color: #20e820;

  @media screen and (min-width: 768px) {
    font-size: 21px;
  }
`;

export const IconRefuse = styled(RxCross1)`
  font-size: 18px;

  cursor: pointer;
  color: #e82d20;
`;
