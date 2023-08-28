import { ReactComponent as Delete } from "../../SvgIcons/delete.svg"
import { ReactComponent as PawIcon } from '../../SvgIcons/paw.svg';

import {
  // Image, Description, Highlight, Button ,
  Btn,
  BtnList,
  CardItem,
  CardWrapper,
  DelBtn,
  FavoriteBtn,
  Img,
  ImgBtn,
  Text,
  Title,
} from './PetsItem.styled';
import { useState } from 'react';
import { AddToFavoriteIcon } from 'components/SvgIcons/AddToFavoriteIcon';
import { LocationIcon } from 'components/SvgIcons/LocationIcon';
import { IconTime } from 'components/SvgIcons/IconTime';
import { FemaleIcon } from 'components/SvgIcons/FemaleIcon';
import { MaleIcon } from 'components/SvgIcons/MaleIcon';

export const CategoryItem = ({
  _id,
  title,
  photoURL,
  price,
  place,
  sex,
  birthday,
  owner,
  category,
  name,
  breed,
  comments,
  ...restProps
}) => {
  // const [showModal, setShowModal] = useState(false);

  // const handleLearnClick = () => {
  //   setShowModal(true);
  // };

  const [favorite] = useState(false)

  function calcAge(birthDatein) {
    const birthDate = new Date(birthDatein);
    const currentDate = new Date();
    const diffInMilliseconds = Math.abs(currentDate - birthDate);
    const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;

    if (diffInMilliseconds < millisecondsPerYear) {
      const millisecondsPerMonth = millisecondsPerYear / 12;
      const ageInMonths = Math.floor(diffInMilliseconds / millisecondsPerMonth);
      return ageInMonths + ' mon';
    } else {
      const ageInYears = Math.floor(diffInMilliseconds / millisecondsPerYear);
      return ageInYears + ' year';
    }
  }

  return (
    <CardItem key={_id}>
      <CardWrapper>
        <Img src={photoURL} alt={title} />
        {/* <button
          className={
            favorite
              ? `${css.favorite_btn} ${css.favoriteActive}`
              : css.favorite_btn
          }
          type="button"
        > */}
        <FavoriteBtn>
          <AddToFavoriteIcon id="svg" fill={favorite ? '#54adff' : 'none'} />
        </FavoriteBtn>
        <DelBtn type="button">
          <Delete id="svg" />
        </DelBtn>
        <BtnList>
          <Text>{category}</Text>
          <li
          // className={css.list_item}
          >
            <ImgBtn>
              <span>
                <LocationIcon id="svg"
                //  className={css.locationIcon}

                 />
              </span>
              {place}
            </ImgBtn>
          </li>
          <li>
            <ImgBtn>
              <IconTime id="svg" />
              {calcAge(birthday)}
            </ImgBtn>
          </li>
          <li>
            <ImgBtn>
              {sex === 'female' ? (
                <FemaleIcon id="svg" />
              ) : (
                <MaleIcon id="svg" />
              )}

              {sex}
            </ImgBtn>
          </li>
        </BtnList>

        <Title>{title}</Title>
        <Btn>
          Learn more
          <PawIcon />
        </Btn>
      </CardWrapper>
    </CardItem>
  );
};

