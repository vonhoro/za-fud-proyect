import React from "react";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";

import { LoginWrapper } from "../containers/LoginWrapper";

const VARIANT_COLOR = "orange";

function TestUser() {}
export default function Login() {
  return (
    <>
      <LoginWrapper />
    </>
  );
}

// const LoginArea = () => {
// return (
// <Flex
// minHeight="100vh"
// width="full"
// bg="red"
// align="center"
// justifyContent="center"
// >
// <Box
// borderWidth={1}
// px={4}
// width="full"
// maxWidth="500px"
// borderRadius={10}
// textAlign="center"
// boxShadow="lg"
// >
// <LoginHeader />
// <LoginForm />
// </Box>
// </Flex>
// );
// };

// const LoginHeader = () => {
// return (
// <Box textAlign="center">
// <Heading>Ingresar</Heading>
// <Text>
// O si desea registrarse pulse{" "}
// <Link color={`${VARIANT_COLOR}.500`}>aqui!</Link>
// </Text>
// </Box>
// );
// };
