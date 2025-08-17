import * as yup from 'yup';

const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email('validEmail')
        .required('emailRequired'),
    password: yup
        .string()
        .min(8, 'shortPassword')
        .max(16, "bigPassword")
        .matches(/\w+/i, "wPassword")
        .matches(/0-9+/, "dPassword")
})

export default loginSchema;