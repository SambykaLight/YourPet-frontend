import css from './PetsList.module.css';
import CategoryItem from '../PetsItem/PetsItem';
import cat from '../PetsData/cat.json';

const CategoryList = () => {
  return (
    <ul className={css.card_list}>
      {cat.map(card => (
        <CategoryItem {...card} key={card._id} />
      ))}
    </ul>
  );
};
export default CategoryList;
