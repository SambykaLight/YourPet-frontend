import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
// import { Typography } from '@mui/material';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 703px;
    margin: 0 0 40px 0;
  }

  @media screen and (min-width: 1280px) {
    display: inline-flex;

    width: 821px;
    margin: 35px 0 0 0;
  }
`;

export const Title = styled.p`
  color: black;
  color: black;
  font-weight: 500;
  line-height: 1.36;
  letter-spacing: 0.04em;
  font-size: 28px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 20px;
  }
`;

export const Button = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 40px;
  min-height: 35px;
  border: 2px solid #54adff;
  text-decoration: none;
  min-width: 129px;
  background: #54adff;
  color: #fff;

  @media screen and (max-width: 767px) {
    position: fixed;
    right: 0;
    top: 70%;
    z-index: 10;
    display: flex;
    justify-content: center;
    flex-direction: column-reverse;
    /* flex-direction: row; */
    border-radius: 40px;
    min-height: 80px;
    min-width: 80px;
    border: 2px solid #54adff;
    text-decoration: none;
  }
  :hover {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
    color: rgb(253, 247, 242);
    border: none;
    background-color: transparent;
  }
`;
export const AddText = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  text-decoration: none;

  @media screen and (max-width: 767px) {
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
  }
`;
