import * as yup from 'yup';
import loginSchema from './loginSchema';

const usernameSchema = yup.object().shape({
    username: yup.string().required("usernameRequired")
});

const registerSchema = loginSchema.concat(usernameSchema);

export default registerSchema;