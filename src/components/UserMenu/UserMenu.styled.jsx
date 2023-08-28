import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoutButtonContainer = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 420px) {
    gap: 8px;
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
  gap: 12px;

  @media (max-width: 420px) {
    display: none;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  gap: 12px;
  align-items: center;
  font-family: 'Manrope', sans-serif;
  font-weight: medium;
  font-size: 16px;
  color: #ffc107;
  text-decoration: none;
  text-align: center;
`;

export const LogoutButton = styled.button`
  height: 40px;

  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #fef9f9;

  background-color: #54adff;
  border: none;
  border-radius: 40px;
  padding: 9px 41px;
  cursor: pointer;

  &:hover {
    background: rgb(65, 158, 241);
    background: linear-gradient(
      90deg,
      rgba(65, 158, 241, 1) 0%,
      rgba(155, 208, 255, 1) 100%
    );
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const UserIconButton = styled.button`
  display: none;
  @media (max-width: 420px) {
    width: 28px;
    height: 28px;

    display: block;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
  }
`;

export const BurgerMenuButton = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
  }
`;
