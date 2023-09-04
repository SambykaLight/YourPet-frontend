import styled from 'styled-components';
// import { CiLogout } from 'react-icons/ci';
import { Link } from 'react-router-dom';

export const SectionApprove = styled.div`
  width: 280px;
  @media (min-width: 768px) {
    width: 608px;
  }
`;

export const HeaderApprove = styled.p`
  ont-family: 'Manrope';
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  color: var(----dark-color);
  margin-top: 68px;
  margin-bottom: 50px;
  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 49px;
    margin-top: 60px;
  }
`;
export const BtnsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const BtnCancel = styled.button`
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
  margin-bottom: 60px;
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

export const BtnYes = styled(Link)`
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
  margin-bottom: 60px;
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
