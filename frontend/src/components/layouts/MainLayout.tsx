import Header from "@/components/Header";
import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Container maxW="md">
        <Outlet />
      </Container>
    </div>
  );
};

export default MainLayout;
