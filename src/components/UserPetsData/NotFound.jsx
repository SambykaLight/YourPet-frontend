import { Notification, Text } from './NotFound.styled';
import FunnyDog from 'images/Avatar/dog.jpg';

const NotFound = () => {
  const imageStyles = {
    width: '240px',
    height: '200px',
    borderRadius: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    marginTop: 20,
  };

  return (
    <>
      <Notification>
        <Text>You have not added any pets </Text>
        <img src={FunnyDog} alt="Tacos With Lime" style={imageStyles} />
      </Notification>
    </>
  );
};

export default NotFound;
