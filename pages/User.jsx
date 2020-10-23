import React from "react";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { UserWrapper } from "../containers/UserWrapper";
function TestUser() {}
export default function User() {
  return (
    <>
      <UserWrapper />
    </>
  );
}
