import { AT_LEAST_1_D, AT_LEAST_1_W, REQUIRED, INVALID, MAX_20_SYMBOLS, MIN_8_SYMBOLS } from '@/utils/constants/validationErrors';
import * as yup from 'yup';

const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email(INVALID)
        .required(REQUIRED),
    password: yup
        .string()
        .min(8, MIN_8_SYMBOLS)
        .max(20, MAX_20_SYMBOLS)
        .matches(/\w+/i, AT_LEAST_1_W)
        .matches(/\d+/, AT_LEAST_1_D)
        .required(REQUIRED)
})

export default loginSchema;