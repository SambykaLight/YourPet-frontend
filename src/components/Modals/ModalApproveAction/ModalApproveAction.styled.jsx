import styled from 'styled-components';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';


export const SectionApprove = styled.div`
width: 280px;
@media (min-width: 768px) {
width: 608px;
}
`;

export const HeaderApprove = styled.p`

    ont-family: 'Manrope';
font-weight: 500;
font-size: 24px;
line-height: 33px;
text-align: center; 
color:var(----dark-color);
margin-top: 68px;
margin-bottom: 50px;
    @media (min-width: 768px) {
        font-size: 36px;
        line-height: 49px;
        margin-top: 60px;
}
`;
export const BtnsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    font-size: 36px;
    line-height: 49px;
    margin-top: 60px;
  }
`;

export const BtnCancel = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
//  align-items: center;
  padding: 8px 28px;
  margin-right: 0;
  margin-left: 0;
  width: 256px;

  color: #54adff;
  outline: none;
  background-color: transparent;
  border: 2px solid #54adff;
  border-radius: 40px;
  font-family: 'Manrope';
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  margin-right: 167 px;
  margin-left: 7px;
  width: 129px;
  height: 40px;
  
  margin-bottom: 60px;
  cursor: pointer;  
    &:hover {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
    color: #fef9f9;
}  
&:focus {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
    color: #fef9f9;
}
`;

export const BtnYes = styled(Link)`
  display: flex;

  width: 256px;
  justify-content: center;
  align-items: center;
  padding: 8px 28px;
  margin-right: 0 px;
  margin-left: 0px;
  margin-top: 7px;
  color: #54adff;
  outline: none;
  background-color: transparent;
  border: 2px solid #54adff;
  border-radius: 40px;
  font-family: 'Manrope';
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 60px;
  background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  color: #fef9f9;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    margin-top: 0px;
  margin-right: 167 px;
  margin-left: 7px;
  width: 129px;
  height: 40px;

  cursor: pointer;
  

  &:hover {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
    color: #fef9f9;
    }
    &:focus {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
    color: #fef9f9;
    }
`;


export const StyledRxCross2 = styled(RxCross2)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  stroke: currentColor; 
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
