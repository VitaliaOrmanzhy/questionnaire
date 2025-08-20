import { Field, Form, Formik } from "formik";
import type { LoginFormValues } from "@/types/auth";
import loginSchema from "@/schemas/loginSchema";
import { useAppDispatch } from "@/hooks/hooks";
import { useTranslation } from "react-i18next";
import { loginUser } from "@/features/auth/authActions";
import AuthFormWrapper from "@/components/auth/AuthFormWrapper";
import FormFieldWrapper from "@/components/ui/forms/FormFieldWrapper";
import { Input } from "@chakra-ui/react";
import { PasswordInput } from "@/components/ui/password-input";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation("auth");
  const initialValues: LoginFormValues = { email: "", password: "" };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={(values, actions) => {
        console.log({ values, actions });
        dispatch(loginUser(values));
        actions.setSubmitting(false);
      }}
    >
      {({ errors, touched, validateForm }) => {
        return (
          <AuthFormWrapper
            img="/img/2.jpg"
            errors={errors}
            touched={touched}
            buttonLabel={t("submit-btn")}
            onClick={() => {
              console.log("here");
              validateForm();
            }}
          >
            <Form>
              <FormFieldWrapper
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
              </FormFieldWrapper>
              <FormFieldWrapper
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
              </FormFieldWrapper>
            </Form>
          </AuthFormWrapper>
        );
      }}
    </Formik>
  );
};

export default LoginPage;
