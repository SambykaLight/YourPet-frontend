import { CategoryItem } from '../PetsItem/PetsItem';
import cat from '../../UserPetsData/cat.json';
import { List } from './PetsList.styled';
import { useSelector } from 'react-redux';
import noticeSelectors from 'redux/notices/selectors';
import Context from 'components/Modals/Context/Context';

const CategoryList = () => {
  const notices = useSelector(noticeSelectors.selectNotices);

  return (
    <Context>
      <List>
        {notices.map(card => (
          <CategoryItem {...card} key={card._id} />
        ))}
      </List>
    </Context>
  );
};
export default CategoryList;
