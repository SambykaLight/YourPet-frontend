import { useState } from 'react';

import { LocationIcon } from '../SvgIcons/LocationIcon';
import { IconTime } from '../SvgIcons/IconTime';
import { FemaleIcon } from '../SvgIcons/FemaleIcon';
import { MaleIcon } from '../SvgIcons/MaleIcon';
import { AddToFavoriteIcon } from '../SvgIcons/AddToFavoriteIcon';

import { ReactComponent as Delete } from '../SvgIcons/delete.svg';
import { ReactComponent as PawIcon } from '../SvgIcons/paw.svg';

import css from './PetsItem.module.css';

const CategoryItem = ({
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

  const [favorite, setFavorite] = useState(false);

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
    <li key={_id} className={css.card_item}>
      <div className={css.card_wrap}>
        <img src={photoURL} alt={title} className={css.image} />
        <button
          className={
            favorite
              ? `${css.favorite_btn} ${css.favoriteActive}`
              : css.favorite_btn
          }
          type="button"
        >
          <AddToFavoriteIcon id="svg" fill={favorite ? '#54adff' : 'none'} />
        </button>
        <button className={css.delete_btn} type="button">
          <Delete id="svg" />
        </button>
        <ul className={css.btn_list}>
          <p className={css.sell_btn}>{category}</p>
          <li className={css.list_item}>
            <button className={css.img_btn}>
              <span>
                <LocationIcon id="svg" className={css.locationIcon} />
              </span>
              {place}
            </button>
          </li>
          <li>
            <button className={css.img_btn}>
              <IconTime id="svg" />
              {calcAge(birthday)}
            </button>
          </li>
          <li>
            <button className={css.img_btn}>
              {sex === 'female' ? (
                <FemaleIcon id="svg" />
              ) : (
                <MaleIcon id="svg" />
              )}

              {sex}
            </button>
          </li>
        </ul>

        <h2 className={css.title}>{title}</h2>
        <button className={css.btn}>
          Learn more
          <PawIcon />
        </button>
      </div>
    </li>
  );
};

export default CategoryItem;
