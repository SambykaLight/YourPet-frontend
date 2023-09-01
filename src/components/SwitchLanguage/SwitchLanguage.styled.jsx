import styled from '@emotion/styled';

// import { themes } from '../../../styles/variables/themes';

export const FlagBtn = styled.button` 
 border: none;
  transform: scale(1);
  transition-property: transform;
  background-color: white;

  &:hover,
  &:focus {
    transform: scale(1.1);
 
`;

export const Span = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #f0f0f0;
  overflow: hidden;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;
