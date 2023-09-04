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

function formatDate(date) {
  const dateObj = new Date(date);
  const day = String(dateObj.getDate()).padStart(2, '0');
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const year = dateObj.getFullYear();

  return `${day}.${month}.${year}`;
}

function CardMore({ id, card , handleFavorite}) {

  const context = useModalContext();
  const { user } = useAuth();
  const { toggle } = context;



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
          <StyledTitle>{card.title}</StyledTitle>
          <StyledTable>
            <div>
              <tr>
                <StyledTableItemStatic>Name:</StyledTableItemStatic>
                <StyledTableItemDynamic>{card.name}</StyledTableItemDynamic>
              </tr>
              <tr>
                <StyledTableItemStatic>Birthday:</StyledTableItemStatic>
                <StyledTableItemDynamic> {formatDate(card.date)}</StyledTableItemDynamic>
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
                <ContactsLink href={`tel:${user.phone}`}>
                <StyledTableItemDynamicContact>
                  {user.phone === true ? user.phone : '+38 000 000 00 00'}
                </StyledTableItemDynamicContact>
                </ContactsLink>


              </tr>
            </div>
          </StyledTable>
        </StyledCardWrapperH2Tab>
      </StyledCardWrapperImgTab>

      <StyledParText>Comments: {card.comments}</StyledParText>

      <StyledButtonGroup>
        <StyledButton1 onClick={() => toggle()}>Contact</StyledButton1>
        <StyledButton2 onClick={ handleFavorite}>
          <PetText>Add to</PetText>
          <AddToFavoriteIcon id="svg" />
        </StyledButton2>
      </StyledButtonGroup>
    </StyledCardWrapper>
  );
}

export default CardMore;
