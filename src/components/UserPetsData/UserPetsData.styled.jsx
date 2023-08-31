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
  padding: 8px 16px;
  border-radius: 40px;
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  align-items: center;
  letter-spacing: 0.04em;
  gap: 15px;
  cursor: pointer;
  border: none;
  box-sizing: border-box;
  color: #fef9f9;
  background: #54adff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  &:hover {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  }
`;
