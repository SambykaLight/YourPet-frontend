import * as Yup from 'yup';

const validationSchema = step => {
  let schema;

  if (step === 0) {
    schema = Yup.object().shape({
      category: Yup.string()
        .oneOf(['my pet', 'sell', 'lost-found', 'in-good-hands'])
        .required(),
    });
  }

  if (step === 1) {
    schema = Yup.object().shape({
      name: Yup.string()
        .required()
        .trim()
        .min(2, 'Too Short!')
        .max(16, 'Too Long!'),
      date:  Yup.string()
      .required('Date is required')
      .matches(
        /^(0[1-9]|1[0-9]|2[0-9]|3[01])\.(0[1-9]|1[012])\.\d{4}$/,
        'Invalid date format (dd.mm.yyyy)'
      )
      .test(
        'not-in-future',
        'Date should not exceed the current date',
        function (value) {
          const currentDate = new Date();
          const inputDate = new Date(
            value.substring(6),
            value.substring(3, 5) - 1,
            value.substring(0, 2)
          );
          return inputDate <= currentDate;
        }
      ),

      type: Yup.string()
        .required()
        .min(2, 'Too Short!')
        .max(16, 'Too Long!')
        .trim(),
    });
  }

  if (step === 2) {
    schema = Yup.object().shape({
      sex: Yup.string().when('category', {
        is: category =>
          ['sell', 'lost-found', 'in-good-hands'].includes(category),
        then: () =>
          Yup.string()
            .oneOf(['male', 'female'])
            .required('The sex is required'),
      }),
      location: Yup.string().when('category', {
        is: category =>
          ['sell', 'lost-found', 'in-good-hands'].includes(category),
        then: () => Yup.string().trim().required('Location is required'),
      }),
      price: Yup.number().when('category', {
        is: category => category === 'sell',
        then: () =>
          Yup.number()
            .required('Price is required')
            .positive('Price should be positive')
            .typeError('please enter a valid number'),
      }),
      comments: Yup.string()
        .min(4, 'Comments should be at least 4 characters')
        .max(120, 'Comments should not exceed 120 characters')
        .trim(),
      image: Yup.mixed()
        .required('Image is required')
        .test(
          'avatar',
          'Image size must be less then 3mb',
          value => value && value.size <= 3 * 1024 * 1024
        ),
    });
  }

  return schema;
};

export default validationSchema;
