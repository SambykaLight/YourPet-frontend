import { useDispatch } from 'react-redux';
import { deletePet } from 'redux/pets/operations';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import { Image, Description, Highlight, Button } from './PetsItem.styled';
import Box from '@mui/material/Box';

import { ReactComponent as Delete } from '../SvgIcons/delete.svg';
import { ReactComponent as PawIcon } from '../SvgIcons/paw.svg';

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

export default CategoryItem;
export const PetsItem = ({ pet }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <Image src={pet.imgURL} alt="pet description" />
      </div>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
        }}
      >
        <Description>
          <Highlight>Name:</Highlight> {pet.name}
        </Description>

        <Button type="button" onClick={() => dispatch(deletePet(pet._id))}>
          <DeleteOutlinedIcon size="42" />
        </Button>

        <Description>
          <Highlight>Date of birth:</Highlight> {pet.dateOfBirth}
        </Description>
        <Description>
          <Highlight>Breed:</Highlight> {pet.breed}
        </Description>
        <Description>
          <Highlight>Comments:</Highlight> {pet.comments}
        </Description>
      </Box>
    </>
  );
};

export default PetsItem;
