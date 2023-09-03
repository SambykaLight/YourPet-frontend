import styled from '@emotion/styled';
import { RxCross1 } from 'react-icons/rx';

const StyledCardWrapper = styled.div`
  padding: 44px 20px 16px 20px;

  @media (min-width: 768px) {
    padding: 32px 32px 32px 24px;
  }

  @media (min-width: 1024px) {
  }
`;

const StyledCardWrapperImgTab = styled.div`
  height: auto;
 

  @media (min-width: 768px) {
    display: flex;
  }

  @media (min-width: 1024px) {
  }
`;

const StyledCardWrapperH2Tab = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    display: flex;
  }

  @media (min-width: 1024px) {
  }
`;

const StyledWrapperImage = styled.div`
  position: relative;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    margin-right: 24px;
    /* width: 298px;
    height: 262px; */
  }

  @media (min-width: 1024px) {
  }
`;

const StyledImage = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 0 0 40px 40px;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 262px;
    height: 298px;
  }

  @media (min-width: 1024px) {
  }
`;

const StyledParDescription = styled.p`
  position: absolute;
  top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;

  border-bottom-right-radius: 16px;
  border-top-right-radius: 16px;
  width: 126px;
  height: 32px;
  background-color: rgba(204, 228, 251, 1);
`;

const StyledTitle = styled.h2`
  font-size: 24px;

  margin-bottom: 20px;
  text-align: left;

  @media (min-width: 768px) {
    font-size: 28px;
  }

  @media (min-width: 1024px) {
  }
`;

const StyledTable = styled.table`
  text-align: left;
  margin-bottom: 12px;
  line-height: 1.8;
`;

const StyledTableItemStatic = styled.td`
  width: 70px;
  margin-right: 50px;
  margin-bottom: 8px;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1024px) {
  }
`;

const StyledTableItemDynamic = styled.td`
  font-size: 12px;

  @media (min-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 1024px) {
  }
`;

const StyledTableItemDynamicContact = styled.td`
  font-size: 12px;
  color: rgba(255, 193, 7, 1);
  text-decoration: underline;
`;

const StyledParText = styled.p`
  font-size: 14px;
  margin-bottom: 12px;
  text-align: start;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1024px) {
  }
`;

const StyledButtonGroup = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    align-items: end;
    flex-direction: row-reverse;
  }

  @media (min-width: 1024px) {
  }
`;

const StyledButton1 = styled.button`
  width: 100%;
  margin-bottom: 8px;

  background: #fff;
  color: #54adff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 40px;
  min-height: 35px;
  border: 2px solid #54adff;
  text-decoration: none;

  @media (min-width: 768px) {
    max-width: 129px;
    margin-bottom: 0;
  }

  @media (min-width: 1024px) {
  }
`;

const StyledButton2 = styled.button`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 40px;
  min-height: 35px;
  border: 2px solid #54adff;
  text-decoration: none;
  min-width: 134px;
  background: #54adff;
  color: #fff;

  @media (min-width: 768px) {
    max-width: 129px;
    margin-right: 17px;
  }

  @media (min-width: 1024px) {
  }
`;
export const PetText = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  text-decoration: none;
  margin-right: 5px;

  @media screen and (max-width: 767px) {
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
  }
`;
export const IconRefuse = styled(RxCross1)`
  font-size: 18px;

  cursor: pointer;
  color: #e82d20;
`;
export const ButClose = styled.button`
  position: absolute;
  right: 1px;
  top: 10px;
  border: none;
  color: #54adff;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    right: 1px;
    top: 10px;
  }
  @media screen and (min-width: 1280px) {
    right: 15px;
    top: 10px;
  }
`;

export {
  StyledCardWrapperH2Tab,
  StyledCardWrapperImgTab,
  StyledTableItemDynamicContact,
  StyledWrapperImage,
  StyledTitle,
  StyledParDescription,
  StyledCardWrapper,
  StyledImage,
  StyledTable,
  StyledTableItemStatic,
  StyledTableItemDynamic,
  StyledParText,
  StyledButtonGroup,
  StyledButton1,
  StyledButton2,
};
