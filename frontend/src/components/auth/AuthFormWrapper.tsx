import { AbsoluteCenter, Box, Flex, Image, Heading } from "@chakra-ui/react";
import type React from "react";

interface AuthFormWrapperProps {
  img: string;
  title: string;
  children: React.ReactNode;
}

const AuthFormWrapper = ({ img, title, children }: AuthFormWrapperProps) => {
  return (
    <AbsoluteCenter>
      <Flex rounded="md" borderWidth="1px">
        <Box padding="2rem">
          <Heading mt="-10px" mb="2rem">
            {title}
          </Heading>
          {children}
        </Box>
        <Image src={img} maxH="35rem" overflow="hidden" rounded="md" alt="" />
      </Flex>
    </AbsoluteCenter>
  );
};

export default AuthFormWrapper;
