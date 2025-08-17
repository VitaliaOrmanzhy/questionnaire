import { Field, Form, Formik } from "formik";
import registerSchema from "@/schemas/registerSchema";
import type { RegisterFormValues } from "@/types/auth";
import registerUser from "@/features/auth/authActions";
import { useAppDispatch } from "@/hooks/hooks";
import ErrorsContainer from "@/components/auth/ErrorsContainer/ErrorsContainer";

const RegisterPage = () => {
  const initialValues: RegisterFormValues = {
    username: "",
    email: "",
    password: "",
  };

  const dispatch = useAppDispatch();

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={async (values, actions) => {
          dispatch(registerUser(values));
          actions.setSubmitting(false);
        }}
      >
        {({ errors, touched }) => {
          console.log(errors, touched);
          return (
            <Form>
              <div>
                <div>
                  <label htmlFor="username">Username</label>
                  <Field id="username" name="username" placeholder="username" />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <Field id="email" name="email" placeholder="Email" />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>
              </div>

              <ErrorsContainer errors={errors} touched={touched} />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default RegisterPage;
