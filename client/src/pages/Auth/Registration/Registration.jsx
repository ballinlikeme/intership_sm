import React from "react";
import { AuthLayout } from "components/AuthLayout/AuthLayout";
import { RegistrationForm } from "./RegistrationForm/RegistrationForm";
import { CheckAuth } from "../CheckAuth/CheckAuth";

export const Registration = () => {
  return (
    <CheckAuth>
      <AuthLayout>
        <RegistrationForm />
      </AuthLayout>
    </CheckAuth>
  );
};
