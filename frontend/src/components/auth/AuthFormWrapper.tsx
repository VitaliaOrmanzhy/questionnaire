import type { Errors, Touched } from "@/types/auth";
import { AbsoluteCenter, Box, Flex, Image, Stack } from "@chakra-ui/react";
import type React from "react";
import ErrorsWrapper from "./ErrorsWrapper";
import SubmitButtonWrapper from "@/components/ui/forms/SumbitButtonWrapper";
import { Form } from "formik";

interface AuthFormWrapperProps {
  img: string;
  errors: Errors;
  touched: Touched;
  buttonLabel: string;
  onClick: () => void;
  children: React.ReactNode;
}

const AuthFormWrapper = ({
  img,
  errors,
  touched,
  buttonLabel,
  onClick,
  children,
}: AuthFormWrapperProps) => {
  return (
    <AbsoluteCenter>
      <Flex rounded="md" borderWidth="1px">
        <Box padding="2rem">
          <Form>
            <Stack gap="8" css={{ "--field-label-width": "96px" }}>
              {children}
            </Stack>
            <SubmitButtonWrapper label={buttonLabel} onClick={onClick} />
          </Form>
          <ErrorsWrapper errors={errors} touched={touched} />
        </Box>
        <Image src={img} maxH="30rem" overflow="hidden" rounded="md" alt="" />
      </Flex>
    </AbsoluteCenter>
  );
};

export default AuthFormWrapper;
