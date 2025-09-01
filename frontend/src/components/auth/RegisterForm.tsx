import { Field, Form, Formik } from "formik";
import registerSchema from "@/schemas/registerSchema";
import type { Errors, RegisterFormValues } from "@/types/auth";
import { registerUser } from "@/features/auth/authActions";
import { useAppDispatch } from "@/hooks/hooks";
import { useTranslation } from "react-i18next";
import { Input, Stack } from "@chakra-ui/react";
import { PasswordInput } from "@/components/ui/password-input";
import FormFieldContainer from "@/components/ui/forms/FormFieldWrapper";
import AuthFormWrapper from "@/components/auth/AuthFormWrapper";
import SubmitButtonWrapper from "@/components/ui/forms/SubmitButtonWrapper";
// import { getUserByEmail } from "@/utils/api/getUserByEmail";
import { USER_EXISTS } from "@/utils/constants/validationErrors";
import ErrorsWrapper from "@/components/auth/ErrorsWrapper";
import AuthLink from "@/components/auth/AuthLink";
import useAuth from "@/hooks/useAuth";

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation("auth");

  const initialValues: RegisterFormValues = {
    username: "",
    email: "",
    password: "",
  };

  const { userInfo } = useAuth();

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
        await dispatch(registerUser(values));

        if (userInfo) {
          console.log(userInfo);
        }
        actions.setSubmitting(false);
      }}
    >
      {({ errors, touched, validateForm }) => {
        return (
          <AuthFormWrapper img="/img/1.jpg" title={t("register-page-title")}>
            <Form>
              <Stack gap="8" css={{ "--field-label-width": "96px" }}>
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
              </Stack>
              <AuthLink
                label={t("already_have_an_account")}
                linkLabel={t("login-link")}
                href="/login"
              />
              <SubmitButtonWrapper
                label={t("submit-btn")}
                onClick={validateForm}
              />
            </Form>
            <ErrorsWrapper errors={errors} touched={touched} />
          </AuthFormWrapper>
        );
      }}
    </Formik>
  );
};

export default RegisterForm;
