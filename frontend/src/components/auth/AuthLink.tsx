import { Flex, Link, Text } from "@chakra-ui/react";

interface AuthLinkProps {
  label: string;
  linkLabel: string;
  href: string;
}

const AuthLink = ({ label, linkLabel, href }: AuthLinkProps) => {
  return (
    <Flex justifyContent="center" mt="2rem" pb="10px" fontSize="14px">
      <Text>
        {label}
        <Link variant="plain" ml="5px" href={href}>
          {linkLabel}
        </Link>
      </Text>
    </Flex>
  );
};

export default AuthLink;
