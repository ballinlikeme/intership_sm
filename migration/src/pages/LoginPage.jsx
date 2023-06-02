import React from "react";
import { AuthForm } from "../components/Auth/AuthForm";
import { AuthLayout } from "../components/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout>
      <AuthForm />
    </AuthLayout>
  );
};
