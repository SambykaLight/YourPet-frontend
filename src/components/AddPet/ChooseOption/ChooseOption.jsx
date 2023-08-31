import { WrapCategory, Label } from './ChooseOption.styled';
import { Field } from 'formik';

const ChooseOption = ({ values }) => {
  return (
    <WrapCategory role="group" aria-labelledby="category-group">
      <Label checked={values.category === 'my-pet'}>
        <Field
          type="radio"
          value="my-pet"
          name="category"
          checked={values.category === 'my-pet'}
        />
        your pet
      </Label>

      <Label checked={values.category === 'sell'}>
        <Field
          type="radio"
          value="sell"
          name="category"
          checked={values.category === 'sell'}
        />
        sell
      </Label>

      <Label checked={values.category === 'lost-found'}>
        <Field
          type="radio"
          value="lost-found"
          name="category"
          checked={values.category === 'lost-found'}
        />
        lost/found
      </Label>
      <Label checked={values.category === 'in-good-hands'}>
        <Field
          type="radio"
          value="in-good-hands"
          name="category"
          checked={values.category === 'in-good-hands'}
        />
        in good hands
      </Label>
    </WrapCategory>
  );
};

export default ChooseOption;
