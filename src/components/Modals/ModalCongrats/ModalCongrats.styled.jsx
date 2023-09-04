
import styled from '@emotion/styled';
import { RxCross2 } from 'react-icons/rx';
export const CongratsContainer = styled.div`

  width: 256px;
  height: 227px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 545px;
    height: 298px;
  }
`;

export const TextCongrats = styled.p`
  width: 233px;
  color: var(--dark-color);
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 40px;


  @media screen and (min-width: 768px) {
    width:355px;
    font-size: 24px;
    margin-bottom: 60px;
  }
`;

export const TitleCongrats = styled.h2`
color: var(--dark-color);
font-weight: 500;
font-size: 24px;
margin-bottom: 24px;

@media screen and (min-width: 768px) {
  font-size: 36px;
  margin-bottom: 52px;
}
`;


export const ButtonCongrat = styled.button`

text-decoration: none;
box-sizing: border-box;
text-align: center;

width: 248px;
height: 40px;
cursor: pointer;
padding: 8px 0px;

color: var(--fon-color);
font-weight: 700;
font-size: 16px;

background: var(--blue-color);
border: none;
border-radius: 40px;

display: flex;
justify-content: center;
align-items: center;
gap: 12px;

transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover,
&:focus {
  background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
}

& svg {
  fill: var(--fon-color);
}
`;

export const ButtonClose = styled.button`
position: absolute;
top: 12px;
right: 12px;
border: none;
background-color: #fff;
flex-shrink: 0;

@media screen and (min-width: 768px) {
top: 24px;
right: 24px;
};
`;

export const StyledRxCross2 = styled(RxCross2)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  fill: #54adff;
  stroke-width: 1.5px;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  border-radius: 50%;
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);


  &:hover {
    color: #fdf7f2;
  }
`;

 
export const CloseButton = styled.button`
position: absolute;
top: 16px;
right: 16px;
align-self: end;
background-color: transparent;
border: none;
cursor: pointer;
padding: 5px;
&:hover {
  color:var(--blue-color);
}

 
`;