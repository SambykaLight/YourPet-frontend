import styled from '@emotion/styled';

const StyledCardWrapper = styled.div`
padding: 44px 20px 16px 20px;
`;



const StyledWrapperImage = styled.div`
position: relative;
margin-bottom: 12px;

`;

const StyledImage = styled.img`
width: 240px;
height: 240px;
border-radius: 0 0 40px 40px;

`;

const StyledParDescription = styled.p`
  position: absolute;
  top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;


border-bottom-right-radius: 16px;
border-top-right-radius: 16px;
width: 126px;
height: 32px;
background-color: rgba(204, 228, 251, 1);
`;

const StyledTitle = styled.h2`
margin-bottom: 20px;
text-align: left;
`;

const StyledTable = styled.table`
text-align: left;
`;

const StyledTableItemStatic = styled.td`
margin-bottom: 8px;

`;

const StyledTableItemDynamic = styled.td`

`;

const StyledParText = styled.p`

`;


const StyledButtonGroup = styled.div`

`;

const StyledButton = styled.button`

`;

export {
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
  StyledButton,
};
