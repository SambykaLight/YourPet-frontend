import {
  MoreWrapper,
  AddLabel,
  PhotoWrap,
  CommentsLabel,
  Label,
  Input,
  SexWrapper,
  TextArea,
  FormFields,
  SexLabel,
  PhotoText,
  SexTitle,
} from './MoreInfo.styled';
import { Field } from 'formik';
import { Message } from './MoreInfo.styled';
import { Add, Male, Female } from '@mui/icons-material';

const MoreInfo = ({
  setFieldValue,
  category,
  step,
  values,
  errors,
  touched,
}) => {
  const handleFileChange = e => {
    const file = e.target.files[0];

    if (!file) {
      setFieldValue('file', '');
      return;
    }
    setFieldValue('file', file);
  };

  return (
    <MoreWrapper step={step} category={category}>
      <div>
        {category !== 'my-pet' && (
          <SexWrapper>
            <SexTitle>The sex</SexTitle>
            <div>
              <SexLabel checked={values.sex === 'female'}>
                <Female
                  sx={{
                    width: 24,
                    height: 24,
                    color: values.sex === 'male' ? '#F43F5E' : '#FFFFFF',
                  }}
                />
                Female
                <Field
                  type="radio"
                  name="sex"
                  value="female"
                  checked={values.sex === 'female'}
                />
              </SexLabel>
              <SexLabel checked={values.sex === 'male'}>
                <Male
                  sx={{
                    width: 24,
                    height: 24,
                    color: values.sex === 'female' ? '#54ADFF' : '#FFFFFF',
                    transform: 'rotate(-45deg)',
                  }}
                />
                Male
                <Field
                  type="radio"
                  name="sex"
                  value="male"
                  checked={values.sex === 'male'}
                />
              </SexLabel>
            </div>
            <Message name="sex" component="div" />
          </SexWrapper>
        )}

        <PhotoWrap step={step} category={category}>
          <PhotoText step={step} category={category}>
            {values.file ? 'Add photo' : 'Load the pet’s image: '}
          </PhotoText>
          <AddLabel>
            {values.file ? (
              <img src={URL.createObjectURL(values.file)} alt="pet" />
            ) : (
              <Add sx={{ fontSize: 50, color: '#54ADFF' }} />
            )}
            <input
              type="file"
              name="file"
              accept=".png, .jpg"
              multiple={false}
              onChange={handleFileChange}
              hidden
            />

            <Message name="file" component="div" />
          </AddLabel>
        </PhotoWrap>
      </div>

      <FormFields>
        {category !== 'my-pet' && (
          <Label>
            Location
            <Input
              type="text"
              name="location"
              placeholder="Type of location"
              errors={touched.location && errors.location}
            />
            <Message name="location" component="div" />
          </Label>
        )}

        {category === 'sell' && (
          <Label>
            Price
            <Input
              type="text"
              name="price"
              placeholder="Type of price"
              errors={touched.price && errors.price}
            />
            <Message name="price" component="div" />
          </Label>
        )}

        <CommentsLabel>
          Comments
          <TextArea
            as="textarea"
            name="comments"
            placeholder="Type of pet"
            category={category}
            step={step}
            errors={touched.comments && errors.comments}
          />
          <Message name="comments" component="div" />
        </CommentsLabel>
      </FormFields>
    </MoreWrapper>
  );
};

export default MoreInfo;
