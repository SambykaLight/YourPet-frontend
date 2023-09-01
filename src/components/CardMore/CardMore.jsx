import React from 'react';
import { useModalContext } from '../Modals/Context/Context';
import {
  StyledButton1,
  StyledButton2,
  StyledButtonGroup,
  StyledCardWrapper,
  StyledCardWrapperH2Tab,
  StyledCardWrapperImgTab,
  StyledImage,
  StyledParDescription,
  StyledParText,
  StyledTable,
  StyledTableItemDynamic,
  StyledTableItemDynamicContact,
  StyledTableItemStatic,
  StyledTitle,
  StyledWrapperImage,
} from './CardMore.styled';

function CardMore() {
  const context = useModalContext();

  const { toggle } = context;

  return (
    <StyledCardWrapper>
      <StyledCardWrapperImgTab>
        <StyledWrapperImage>
          <StyledImage
            src="https://img1.akspic.ru/previews/1/4/5/2/7/172541/172541-zemlya-luna-planeta-noch-atmosfera-500x.jpg"
            alt="Placeholder"
          />
          <StyledParDescription>In good hands</StyledParDescription>
        </StyledWrapperImage>

        <StyledCardWrapperH2Tab>
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
                <StyledTableItemDynamic>Pomeranian</StyledTableItemDynamic>
              </tr>
              <tr>
                <StyledTableItemStatic>The sex:</StyledTableItemStatic>
                <StyledTableItemDynamic>Lviv</StyledTableItemDynamic>
              </tr>
              <tr>
                <StyledTableItemStatic>Email:</StyledTableItemStatic>
                <StyledTableItemDynamicContact>
                  user@mail.com
                </StyledTableItemDynamicContact>
              </tr>
              <tr>
                <StyledTableItemStatic>Phone:</StyledTableItemStatic>
                <StyledTableItemDynamicContact>
                  +380971234567
                </StyledTableItemDynamicContact>
              </tr>
            </tbody>
          </StyledTable>
        </StyledCardWrapperH2Tab>
      </StyledCardWrapperImgTab>

      <StyledParText>
        Comments: Rich would be the perfect addition to an active family that
        loves to play and go on walks. I bet he would love having a doggy
        playmate too!
      </StyledParText>

      <StyledButtonGroup>
        <StyledButton1 onClick={() => toggle()}>Contact</StyledButton1>
        <StyledButton2 onClick={() => toggle()}>Add to</StyledButton2>
      </StyledButtonGroup>
    </StyledCardWrapper>
  );
}

export default CardMore;
