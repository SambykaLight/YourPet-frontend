import styled from 'styled-components';

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
