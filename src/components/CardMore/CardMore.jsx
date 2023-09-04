import React from 'react';
import { useModalContext } from '../Modals/Context/Context';
import { AddToFavoriteIcon } from 'components/SvgIcons/AddToFavoriteIcon2';
import { RxCross1 } from 'react-icons/rx';
import {
  ButClose,
  PetText,
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
import { useAuth } from 'hooks';
import { ContactsLink } from 'components/OurFriendsList/FriendsList.styled';

function CardMore({ id, card }) {
  const context = useModalContext();
  const { user } = useAuth();
  const { toggle } = context;

  function formatPhone(number) {
    if (number === 'email only') {
      return 0;
    }
    return number.split(' ').join('');
  }

  return (
    <StyledCardWrapper>
      <ButClose>
        <RxCross1 />
      </ButClose>
      <StyledCardWrapperImgTab>
        <StyledWrapperImage>
          <StyledImage src={card.imageURL} alt="Placeholder" />
          <StyledParDescription>{card.category}</StyledParDescription>
        </StyledWrapperImage>

        <StyledCardWrapperH2Tab>
          <StyledTitle>{card.category}Сute dog looking for a home</StyledTitle>
          <StyledTable>
            <tbody>
              <tr>
                <StyledTableItemStatic>Name:</StyledTableItemStatic>
                <StyledTableItemDynamic>{card.name}</StyledTableItemDynamic>
              </tr>
              <tr>
                <StyledTableItemStatic>Birthday:</StyledTableItemStatic>
                <StyledTableItemDynamic>2{card.date}</StyledTableItemDynamic>
              </tr>
              <tr>
                <StyledTableItemStatic>Type:</StyledTableItemStatic>
                <StyledTableItemDynamic>{card.type}</StyledTableItemDynamic>
              </tr>
              <tr>
                <StyledTableItemStatic>The sex:</StyledTableItemStatic>
                <StyledTableItemDynamic>{card.sex}</StyledTableItemDynamic>
              </tr>
              <tr>
                <StyledTableItemStatic >Email:</StyledTableItemStatic>
                <ContactsLink href={`mailto:${user.email}`}>
                <StyledTableItemDynamicContact>
                  {user.email}
                </StyledTableItemDynamicContact>
                </ContactsLink>
               
              </tr>
              <tr>
                <StyledTableItemStatic>Phone:</StyledTableItemStatic>
                <ContactsLink href={`tel:${formatPhone(user.phone)}`}>
                <StyledTableItemDynamicContact>
                  {user.phone === true ? user.phone : '+38 000 000 00 00'}
                </StyledTableItemDynamicContact>
                </ContactsLink>

                
              </tr>
            </tbody>
          </StyledTable>
        </StyledCardWrapperH2Tab>
      </StyledCardWrapperImgTab>

      <StyledParText>Comments: {card.comment}</StyledParText>

      <StyledButtonGroup>
        <StyledButton1 onClick={() => toggle()}>Contact</StyledButton1>
        <StyledButton2 onClick={() => toggle()}>
          <PetText>Add to</PetText>
          <AddToFavoriteIcon id="svg" />
        </StyledButton2>
      </StyledButtonGroup>
    </StyledCardWrapper>
  );
}

export default CardMore;
