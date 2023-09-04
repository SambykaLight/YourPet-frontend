import { CategoryItem } from '../PetsItem/PetsItem';
import { List } from './PetsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import noticeSelectors from 'redux/notices/selectors';
import Context from 'components/Modals/Context/Context';
import { useParams } from 'react-router-dom';
import { useAuth } from 'hooks';

const CategoryList = () => {
  const {category} = useParams()
  const notices = useSelector(noticeSelectors.selectNotices);
const {favoritesNotices} = useAuth()


const filteredNotices = notices.filter(notice=> notice.category === category)
  return (
    <Context>
   { category === "favorite" ? (<List>
        {favoritesNotices.map(card => (
          <CategoryItem card ={card} key={card._id} />
        ))}
      </List>):
   ( filteredNotices.length > 0 ?
      (<List>
        {filteredNotices.map(card => (
          <CategoryItem card ={card} key={card._id} />
        ))}
      </List>): ( <div>
  <p>List is empty, please add pet</p>
    </div>))}
    </Context>
  );
};
export default CategoryList;
