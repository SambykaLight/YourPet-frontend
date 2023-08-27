import React from 'react';
import { useModalContext } from '../Context/Context';
import {
  StyledButton,
  StyledButtonGroup,
  StyledCardWrapper,
  StyledImage,
  StyledParDescription,
  StyledParText,
  StyledTable,
  StyledTableItemDynamic,
  StyledTableItemStatic,
  StyledTitle,
  StyledWrapperImage,
} from './CardMore.styled';

function CardMore() {
  const context = useModalContext();

  const { toggle } = context;

  return (
    <StyledCardWrapper>
      <div>
        <StyledWrapperImage>
          <StyledImage
            src="https://img1.akspic.ru/previews/1/4/5/2/7/172541/172541-zemlya-luna-planeta-noch-atmosfera-500x.jpg"
            alt="Placeholder"
          />
          <StyledParDescription>In good hands</StyledParDescription>
        </StyledWrapperImage>

        <StyledTitle>Сute dog looking for a home</StyledTitle>
        <StyledTable>
          <tbody>
            <tr>
              <StyledTableItemStatic>Name:</StyledTableItemStatic>
              <StyledTableItemDynamic>Rich</StyledTableItemDynamic>
            </tr>
            <tr>
              <StyledTableItemStatic>Birthday:</StyledTableItemStatic>
              <StyledTableItemDynamic>21.09.2020</StyledTableItemDynamic>
            </tr>
            <tr>
              <StyledTableItemStatic>Type:</StyledTableItemStatic>
              <StyledTableItemDynamic> Pomeranian</StyledTableItemDynamic>
            </tr>
            <tr>
              <StyledTableItemStatic>The sex:</StyledTableItemStatic>
              <StyledTableItemDynamic>Lviv</StyledTableItemDynamic>
            </tr>
            <tr>
              <StyledTableItemStatic>Email:</StyledTableItemStatic>
              <StyledTableItemDynamic>user@mail.com</StyledTableItemDynamic>
            </tr>
            <tr>
              <StyledTableItemStatic>Phone:</StyledTableItemStatic>
              <StyledTableItemDynamic>+380971234567</StyledTableItemDynamic>
            </tr>
          </tbody>
        </StyledTable>
      </div>

      <StyledParText>
        Comments: Rich would be the perfect addition to an active family that
        loves to play and go on walks. I bet he would love having a doggy
        playmate too!
      </StyledParText>

      <StyledButtonGroup>
        <StyledButton onClick={() => toggle()}>Contact</StyledButton>
        <StyledButton onClick={() => toggle()}>Add to</StyledButton>
      </StyledButtonGroup>
    </StyledCardWrapper>
  );
}

export default CardMore;
