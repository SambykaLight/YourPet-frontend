import { Label, Input, PersonalDetailsWrapper } from './PersonalDetails.styled';

const PersonalDetails = ({ category, touched, errors }) => {
  return (
    <PersonalDetailsWrapper category={category}>
      {category !== 'my pet' && (
        <Label>
          Title of add
          <Input
            type="text"
            name="title"
            placeholder="Type title"
            errors={touched.title && errors.title}
            // value={category}
          />
          {touched.title && errors.title && <div>{errors.title}</div>}
        </Label>
      )}
      <Label>
        Pet’s name
        <Input
          type="text"
          name="name"
          placeholder="Type name pet"
          errors={touched.name && errors.name}
        />
        {touched.name && errors.name && <div>{errors.name}</div>}
      </Label>
      <Label>
        Date of birth
        <Input
          type="text"
          name="date"
          placeholder="00.00.0000"
          errors={touched.date && errors.date}
        />
        {touched.date && errors.date && <div>{errors.date}</div>}
      </Label>
      <Label>
        Type
        <Input
          type="text"
          name="type"
          placeholder="Type of pet"
          errors={touched.type && errors.type}
        />
        {touched.type && errors.type && <div>{errors.type}</div>}
      </Label>
    </PersonalDetailsWrapper>
  );
};

export default PersonalDetails;
