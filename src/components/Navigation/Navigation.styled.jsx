import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  &.active{
    color:#ffc107;
  }
`;
