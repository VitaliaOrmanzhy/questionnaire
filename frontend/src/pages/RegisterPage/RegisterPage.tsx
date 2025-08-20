import { Field, Formik } from "formik";
import registerSchema from "@/schemas/registerSchema";
import type { Errors, RegisterFormValues } from "@/types/auth";
import { registerUser } from "@/features/auth/authActions";
import { useAppDispatch } from "@/hooks/hooks";
import { useTranslation } from "react-i18next";
import { Input } from "@chakra-ui/react";
import { PasswordInput } from "@/components/ui/password-input";
import FormFieldContainer from "@/components/ui/forms/FormFieldWrapper";
import AuthFormWrapper from "@/components/auth/AuthFormWrapper";
import { getUserByEmail } from "@/utils/api/getUserByEmail";
import { USER_EXISTS } from "@/utils/constants/validationErrors";

const RegisterPage = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation("auth");

  const initialValues: RegisterFormValues = {
    username: "",
    email: "",
    password: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
      validate={async (values) => {
        const errors: Errors = {};
        // const response = await getUserByEmail(values.email);
        const response = { userInfo: { email: "vormanzi812@gmail.com" } };
        if (response.userInfo.email === values.email) {
          errors.email = USER_EXISTS;
        }
        return errors;
      }}
      onSubmit={async (values, actions) => {
        dispatch(registerUser(values));
        actions.setSubmitting(false);
      }}
    >
      {({ errors, touched, validateForm }) => {
        return (
          <AuthFormWrapper
            img="/img/1.jpg"
            errors={errors}
            touched={touched}
            buttonLabel={t("submit-btn")}
            onClick={() => {
              console.log("here");
              validateForm();
            }}
          >
            <FormFieldContainer
              name="username"
              title={t("username.title")}
              error={!!errors.username && touched.username}
            >
              <Field
                as={Input}
                id="username"
                name="username"
                placeholder={t("username.placeholder")}
              />
            </FormFieldContainer>
            <FormFieldContainer
              name="email"
              title={t("email.title")}
              error={!!errors.email && touched.email}
            >
              <Field
                as={Input}
                id="email"
                name="email"
                placeholder={t("email.placeholder")}
              />
            </FormFieldContainer>
            <FormFieldContainer
              name="password"
              title={t("password.title")}
              error={!!errors.password && touched.password}
            >
              <Field
                as={PasswordInput}
                id="password"
                name="password"
                placeholder={t("password.placeholder")}
              />
            </FormFieldContainer>
          </AuthFormWrapper>
        );
      }}
    </Formik>
  );
};

export default RegisterPage;
