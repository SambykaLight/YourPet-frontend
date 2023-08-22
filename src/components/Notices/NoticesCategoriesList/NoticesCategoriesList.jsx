import css from './NoticesCategoriesList.module.css';
import CategoryItem from './NoticesCategoriesItem/NoticesCategoriesItem';
import cat from "../../../data/cat.json"
const CategoryList = () => {
  // const sortedCard = [...cat].sort(
  //   (a, b) => new Date(b.date) - new Date(a.date)
  // );

  return (
    <ul className={css.card_list}>
      {cat.map(card => (
        <CategoryItem
          {...card}
          key={card._id}
      
        />
      ))}
    </ul>
  );
};
export default CategoryList;