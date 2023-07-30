import * as yup from 'yup';

export const downloadValidationSchema = yup.object().shape({
  user_id: yup.string().nullable(),
  resource_id: yup.string().nullable(),
});
