import React from "react";
import { LoginForm } from "./LoginForm/LoginForm";
import { AuthLayout } from "../../../components/AuthLayout/AuthLayout";
import { CheckAuth } from "../CheckAuth/CheckAuth";

export const Login = () => {
  return (
    <CheckAuth>
      <AuthLayout>
        <LoginForm />
      </AuthLayout>
    </CheckAuth>
  );
};
