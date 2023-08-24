import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 320px) {
    padding: 16px;
  }

  @media (min-width: 768px) {
    padding: 16px 20px;
  }

  @media (min-width: 1280px) {
    padding: 16px 20px;
  }
`;

export const LogoContainer = styled.div`
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledLink = styled(Link)`
  font-family: 'Manrope', sans-serif;
  font-weight: medium;
  font-size: 20px;
  color: #111111;
  text-decoration: none;
  margin-right: 20px;

  &:hover {
    color: #ffc107;
  }
`;

export const AuthButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const AuthButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #fef9f9;
  background-color: #ffc107;
  border: none;
  border-radius: 40px;
  padding: 9px 41px;
  cursor: pointer;

  &:hover {
    background-color: #fef9f9;
    border: 2px solid #ffc107;
    color: #ffc107;
    padding: 7px 39px;
  }
`;
