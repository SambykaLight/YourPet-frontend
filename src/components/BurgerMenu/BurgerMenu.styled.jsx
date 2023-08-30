import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-right: auto;
    margin-left: 20px;
    margin-top: 22px;
    margin-bottom: 40px;

    z-index: 1000;
  }
`;

export const BurgerMenuButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    top: 20px;
    right: 20px;
    z-index: 1000;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
  }
`;

export const ExpandedMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fef9f9;
  z-index: 999;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const StyledLink = styled(Link)`
  font-family: 'Manrope', sans-serif;
  font-weight: medium;
  font-size: 32px;
  color: #111111;
  text-decoration: none;

  &:hover {
    color: #ffc107;
  }
`;

export const AuthButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 40px;
`;

export const AuthButton = styled.button`
  height: 40px;
  width: 165px;
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

export const UserIconButton = styled.button`
  width: 28px;
  height: 28px;

  display: block;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
`;

export const LogoutButton = styled.button`
  height: 40px;

  display: flex;
  align-items: center;
  gap: 8px;

  margin-top: 159px;
  margin-right: auto;
  margin-left: 20px;

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
`;
