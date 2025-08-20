import * as yup from 'yup';
import loginSchema from './loginSchema';
import { REQUIRED } from '@/utils/constants/validationErrors';

const usernameSchema = yup.object().shape({
    username: yup.string().required(REQUIRED)
});

const registerSchema = loginSchema.concat(usernameSchema);

export default registerSchema;