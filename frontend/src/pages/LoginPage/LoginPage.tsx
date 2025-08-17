import { Field, Form, Formik } from "formik";
import type { LoginFormValues } from "@/types/auth";

const LoginPage = () => {
  const initialValues: LoginFormValues = { email: "", password: "" };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log({ values, actions });
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
    >
      <Form>
        <label htmlFor="email">First Name</label>
        <Field id="email" name="email" placeholder="First Name" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default LoginPage;
