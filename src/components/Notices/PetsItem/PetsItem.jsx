import { ReactComponent as Delete } from "../../SvgIcons/delete.svg"
import { ReactComponent as PawIcon } from '../../SvgIcons/paw.svg';

import {
  Btn,
  // Image, Description, Highlight, Button ,
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
import Context, { useModalContext } from "components/Modals/Context/Context";
import Modal from "components/Modals/Modal";
import CardMore from "components/CardMore/CardMore";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/selectors";





export const CategoryItem = ({

  
  
  imageURL,
  _id,
  category,
  name,
  date,
  type,
  sex,
  title,
  location,
  price,
  comment,
  owner,
  ...restProps
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  
  const context = useModalContext();
  // console.log(context);

  const { toggleValue, toggle } = context;
  console.log(toggleValue);

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
        <Img src={imageURL} alt={title} />
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
{ isLoggedIn && (
        <DelBtn type="button">
          <Delete id="svg" />
        </DelBtn>)}
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
              {location}
            </ImgBtn>
          </li>
          <li>
            <ImgBtn>
              <IconTime id="svg" />
              {calcAge(date)}
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


 {/* universal modal */}

 {/* <button onClick={() => toggle(!toggleValue)}>12312313</button> */}
      






         <Btn onClick={() => toggle(!toggleValue)}>
          Learn more
          <PawIcon />
        </Btn>

        <Modal>
          <CardMore />
        </Modal>
      </CardWrapper>
    </CardItem>
  );
};

