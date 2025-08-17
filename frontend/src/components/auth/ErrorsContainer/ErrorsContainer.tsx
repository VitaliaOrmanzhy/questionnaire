import clsx from "clsx";
import type { FormikTouched } from "formik";
import type { RegisterFormValues } from "@/types/auth";
// import style from "ErrorsContainer.module.css";

interface ErrorsContainerProps {
  errors: {
    [key: string]: string;
  };
  touched: FormikTouched<RegisterFormValues>;
}

const ErrorsContainer = ({ errors, touched }: ErrorsContainerProps) => {
  const isOpen = Object.keys(errors).length !== 0;

  return (
    <div className={clsx({ "accordion-open": isOpen }, "accordion")}>
      {errors &&
        touched &&
        Object.keys(errors).map((el) =>
          touched[el as keyof RegisterFormValues] ? (
            <p key={el}>{errors[el]}</p>
          ) : null
        )}
    </div>
  );
};

export default ErrorsContainer;
