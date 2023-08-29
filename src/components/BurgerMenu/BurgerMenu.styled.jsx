import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 999;
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
