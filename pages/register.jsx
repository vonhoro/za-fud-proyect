import React from "react";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { RegisterWrapper } from "../containers/RegisterWrapper";
function TestUser() { }
export default function Register() {
  return (
    <>
      <RegisterWrapper />
    </>
  );
}
