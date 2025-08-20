import type { FormikTouched } from "formik";
import type { RegisterFormValues } from "@/types/auth";
import { useTranslation } from "react-i18next";
import { List } from "@chakra-ui/react";

interface ErrorsWrapperProps {
  errors: {
    [key: string]: string;
  };
  touched: FormikTouched<RegisterFormValues>;
}

const ErrorsWrapper = ({ errors, touched }: ErrorsWrapperProps) => {
  const isOpen = Object.keys(errors).length !== 0;
  const { t } = useTranslation("auth");

  if (!isOpen) return null;

  return (
    <List.Root mt={2} align="start">
      {errors &&
        touched &&
        Object.keys(errors).map((el) => {
          return touched[el as keyof RegisterFormValues] ? (
            <List.Item ml="1rem" key={el}>
              {t(`${el}.${errors[el]}`)}
            </List.Item>
          ) : null;
        })}
    </List.Root>
  );
};

export default ErrorsWrapper;
