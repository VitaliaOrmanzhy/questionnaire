import useAuth from "@/hooks/useAuth";
import React from "react";
import { redirect } from "react-router-dom";

type withAuthProps = React.ComponentType;

const withAuth = (Component: withAuthProps) => {
  const AuthorizatedComponent = (props: any) => {
    const { userInfo } = useAuth();
    if (!userInfo) {
      redirect("/login");
      return;
    }
    return <Component {...props} />;
  };

  return AuthorizatedComponent;
};

export default withAuth;
