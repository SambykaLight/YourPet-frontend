import { ReactComponent as Delete } from '../../SvgIcons/delete.svg';
import { ReactComponent as PawIcon } from '../../SvgIcons/paw.svg';
import {
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
import { useEffect, useState } from 'react';
import { AddToFavoriteIcon } from 'components/SvgIcons/AddToFavoriteIcon';
import { LocationIcon } from 'components/SvgIcons/LocationIcon';
import { IconTime } from 'components/SvgIcons/IconTime';
import { FemaleIcon } from 'components/SvgIcons/FemaleIcon';
import { MaleIcon } from 'components/SvgIcons/MaleIcon';
import CardMore from 'components/CardMore/CardMore';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import UniversalModal from 'components/Modals/UniversalModal';
import ModalUnauthorized from 'components/Modals/ModalUnauthorized/ModalUnauthorized';
import ModalDeleteAction from 'components/Modals/ModalDeleteAction/ModalDeleteAction';
import { deleteNotice, fetchNoticesFavorite, makeNoticeFavorite } from 'redux/notices/operations';

export const CategoryItem = ({ card, ...restProps }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [modalActive, setModalActive] = useState(false);
  const [favotiteModalActive, setFavoriteModalActive] = useState(false);
  const [deleteModalActive, setDeleteModalActive] = useState(false);
  const [isFavorite, setFavorite] = useState(false);
  const dispatch = useDispatch();


  useEffect(() => {
    const { activeFavorite } = restProps;
    if (activeFavorite) {
      setFavorite(activeFavorite);
    }

  }, [restProps]);

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

const handleFavorite =(id)=>{
  if (!isLoggedIn) {
    setFavoriteModalActive(true);
  }

  if(isFavorite){
    dispatch(makeNoticeFavorite(id)).then(action => {
      setFavorite(false);
      dispatch(fetchNoticesFavorite())
    });
  }else{
    dispatch(makeNoticeFavorite(id)).then(action => {
      setFavorite(true);
    });
  }
}

  return (
    <CardItem >
      <CardWrapper>
        <Img src={card.imageURL} alt={card.title} />
        <FavoriteBtn type="button" onClick={() => handleFavorite(card._id)}>
          <AddToFavoriteIcon id="svg" fill={isFavorite ? '#54adff' : 'none'} />
        </FavoriteBtn>
        {isLoggedIn && (
          <DelBtn type="button" onClick={() => setDeleteModalActive(true)}>
            <Delete id="svg" />
          </DelBtn>
        )}
        <BtnList>
          <Text>{card.category}</Text>
          <li>
            <ImgBtn>
              <span>
                <LocationIcon id="svg" />
              </span>
              {card.location.length > 5
                ? card.location.slice(0, 5) + '...'
                : card.location}
            </ImgBtn>
          </li>
          <li>
            <ImgBtn>
              <IconTime id="svg" />
              {calcAge(card.date)}
            </ImgBtn>
          </li>
          <li>
            <ImgBtn>
              {card.sex === 'female' ? (
                <FemaleIcon id="svg" />
              ) : (
                <MaleIcon id="svg" />
              )}

              {card.sex}
            </ImgBtn>
          </li>
        </BtnList>

        <Title>{card.title}</Title>

        <Btn type="button" onClick={() => setModalActive(true)}>
          Learn more
          <PawIcon />
        </Btn>
        <UniversalModal active={modalActive} setActive={setModalActive}>
          <CardMore

            modalClose={() => {
              setModalActive(false);
            }}
            handleFavorite
            id={card._id}
            card={card}
          />
        </UniversalModal>
        <UniversalModal
          active={favotiteModalActive}
          setActive={setFavoriteModalActive}
        >
          <ModalUnauthorized
            modalClose={() => {
              favotiteModalActive(false);
            }}
          />
        </UniversalModal>
        <UniversalModal
          active={deleteModalActive}
          setActive={setDeleteModalActive}
        >
          <ModalDeleteAction
            modalClose={() => {
              setDeleteModalActive(false);
            }}
            handleRemoveOwnNotice={()=>{
              dispatch(deleteNotice(card._id)).then(()=>{
              setDeleteModalActive(false);
              })

            }
              }
          />
        </UniversalModal>
      </CardWrapper>
    </CardItem>
  );
};
