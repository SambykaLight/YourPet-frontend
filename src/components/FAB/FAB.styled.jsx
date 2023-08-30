import styled from '@emotion/styled';

export const Container = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  list-style: none;
  margin: 0;
  padding: 0;

  position: fixed;
  left: 2em;
  bottom: 2em;

  max-height: 52px;
  &.open {
    max-height: max-content;
  }
  li {
    border-radius: 50%;
    box-shadow: 0 3px 6px lightgrey;
    display: grid;
    place-items: center;
    margin: 8px 0;
    font-size: 28px;
    padding: 12px;
    cursor: pointer;
    position: relative;
  }
`;
export const Button = styled.li`
  background-color: #00a8ff;

  svg {
    fill: white;
  }
`;
export const Action = styled.li`
  transform: translateY(50px) scale(0);
  opacity: 0;
  transition: transform 500ms, opacity 500ms;
  background-color: #00a8ff;
  &.open {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  svg {
    fill: #ffc107;
  }
`;
export const Toolip = styled.span`
  padding: 4px 6px;
  font-size: 12px;
  position: absolute;
  left: -12px;
  transform: translateX(-75%);
  background-color: #353b48;
  border-radius: 4px;
  color: black;
  fill: blue;
  opacity: 0;
  transition: transform 500ms, opacity 500ms;
  user-select: none;
`;
