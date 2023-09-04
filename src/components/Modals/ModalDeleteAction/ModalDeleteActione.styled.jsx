import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import { FiTrash2 } from 'react-icons/fi';

const ModalDeleteBox = styled(Box)`
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

const SectionDeleteBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
  }
`;

const DeleteBoxHeader = styled.p`
  width: 200px;
  text-align: center;
  color: var(--primary-text-color);
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 100%;
    font-size: 28px;
    margin-bottom: 40px;
  }
`;

const DeleteNoticeText = styled.p`
  color: var(--primary-text-color);
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 44px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 48px;
    width: 393px;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 17px;
  }
`;

const BtnCancel = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 28px;
  margin-right: 167 px;
  margin-left: 7px;
  width: 129px;
  height: 40px;
  color: #54adff;
  outline: none;
  background-color: transparent;
  border: 2px solid #54adff;
  border-radius: 40px;
  font-family: 'Manrope';
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;

  cursor: pointer;
  &:hover {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
    color: #fef9f9;
  }
  &:focus {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
    color: #fef9f9;
  }
`;

const BtnYes = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 28px;
  margin-right: 167 px;
  margin-left: 7px;
  width: 129px;
  height: 40px;
  color: #54adff;
  outline: none;
  background-color: transparent;
  border: 2px solid #54adff;
  border-radius: 40px;
  font-family: 'Manrope';
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;

  cursor: pointer;
  &:hover {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
    color: #fef9f9;
  }
  &:focus {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
    color: #fef9f9;
  }
`;

const TrashIcon = styled(FiTrash2)`
  width: 24px;
  height: 24px;
`;

export {
  SectionDeleteBox,
  DeleteBoxHeader,
  TrashIcon,
  BtnWrapper,
  ModalDeleteBox,
  BtnCancel,
  BtnYes,
  DeleteNoticeText,
};
