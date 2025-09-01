import { Container } from "@chakra-ui/react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <header>
      <Container maxWidth="md">
        <span>Logo</span>
        <NavLink to={"/"}></NavLink>
      </Container>
    </header>
  );
};

export default Header;
