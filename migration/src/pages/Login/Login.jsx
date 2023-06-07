import React from "react";
import { LoginForm } from "./LoginForm/LoginForm";
import { AuthLayout } from "../../components/AuthLayout/AuthLayout";
export const Login = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};
