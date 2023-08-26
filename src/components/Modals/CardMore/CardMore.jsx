import React from 'react';
import { useModalContext } from '../Context/Context';
import { StyledButton, StyledButtonGroup, StyledCardWrapper, StyledImage, StyledParDescription, StyledParText, StyledTable, StyledTableItemDynamic, StyledTableItemStatic, StyledTitle } from './CardMore.styled';





function CardMore() {
  const context = useModalContext();

  const { toggle } = context;

  return (
    <StyledCardWrapper>
      <div>

        <div>
        <StyledImage src="https://img1.akspic.ru/previews/1/4/5/2/7/172541/172541-zemlya-luna-planeta-noch-atmosfera-500x.jpg" alt="Placeholder" />
        <StyledParDescription>In good hands</StyledParDescription>
        </div>
        
        
        <StyledTitle>фівфіфівфвфівфв</StyledTitle>
        <StyledTable>
          <tbody>
            <tr>
              <StyledTableItemStatic>Name:</StyledTableItemStatic>
              <StyledTableItemDynamic>Клітинка 2</StyledTableItemDynamic>
            </tr>
            <tr>
              <StyledTableItemStatic>Birthday:</StyledTableItemStatic>
              <StyledTableItemDynamic>Клітинка 2</StyledTableItemDynamic>
            </tr>
            <tr>
              <StyledTableItemStatic>Type:</StyledTableItemStatic>
              <StyledTableItemDynamic>Клітинка 2</StyledTableItemDynamic>
            </tr>
            <tr>
              <StyledTableItemStatic>The sex:</StyledTableItemStatic>
              <StyledTableItemDynamic>Клітинка 2</StyledTableItemDynamic>
            </tr>
            <tr>
              <StyledTableItemStatic>Email:</StyledTableItemStatic>
              <StyledTableItemDynamic>Клітинка 2</StyledTableItemDynamic>
            </tr>
            <tr>
              <StyledTableItemStatic>Phone:</StyledTableItemStatic>
              <StyledTableItemDynamic>Клітинка 2</StyledTableItemDynamic>
            </tr>
          </tbody>
        </StyledTable>
      </div>

      <StyledParText>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
        blanditiis repudiandae a labore, mollitia ipsam architecto et quis atque
        porro doloremque nemo laborum, alias harum quod molestias unde,
        aspernatur soluta.
      </StyledParText>

      <StyledButtonGroup>
        <StyledButton onClick={() => toggle()}>click1</StyledButton>
        <StyledButton onClick={() => toggle()}>click2</StyledButton>
      </StyledButtonGroup>
    </StyledCardWrapper>
  );
}

export default CardMore;
