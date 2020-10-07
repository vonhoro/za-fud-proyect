import React from "react";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import {
  ThemeProvider,
  theme,
  CSSReset,
  Box,
  Flex,
  Heading,
  Text,
  Link,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  Button,
} from "@chakra-ui/core";

const VARIANT_COLOR = "orange";

const LOGIN_USER = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      error {
        item
        message
      }
      userInfo {
        user
        userId
        welcome
      }
    }
  }
`;
function TestUser() {}
export default function Login() {
  return (
    <>
      <Flex
        minHeight="100vh"
        width="full"
        align="center"
        justifyContent="center"
      >
        <Box
          borderWidth={1}
          px={4}
          width="full"
          maxWidth="500px"
          borderRadius={10}
          textAlign="center"
          boxShadow="lg"
        >
          <LoginHeader />
          <LoginForm />
        </Box>
      </Flex>
    </>
  );
}

const LoginArea = () => {
  return (
    <Flex
      minHeight="100vh"
      width="full"
      bg="red"
      align="center"
      justifyContent="center"
    >
      <Box
        borderWidth={1}
        px={4}
        width="full"
        maxWidth="500px"
        borderRadius={10}
        textAlign="center"
        boxShadow="lg"
      >
        <LoginHeader />
        <LoginForm />
      </Box>
    </Flex>
  );
};

const LoginHeader = () => {
  return (
    <Box textAlign="center">
      <Heading>Ingresar</Heading>
      <Text>
        O si desea registrarse pulse{" "}
        <Link color={`${VARIANT_COLOR}.500`}>aqui!</Link>
      </Text>
    </Box>
  );
};

const LoginForm = () => {
  const router = useRouter();
  const [loginUser, { data }] = useMutation(LOGIN_USER);
  const [response, setResponse] = React.useState(null);
  // console.log(data);
  React.useEffect(() => {
    if (!data) return;
    console.log(data);
    const information = data.login;
    if (information.error) {
      setResponse(information.error[0].message);
      return;
    }
    if (information.userInfo) {
      setResponse(
        `${information.userInfo.welcome} ${information.userInfo.user}`
      );
      // setTimeout(() => router.push("/"), 1000);
      return;
    }
    setResponse("");
  }, [data]);
  return (
    <Box my={8} textAlign="left">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Usuario ", e.target[0].value);
          console.log("Password ", e.target[1].value);
          loginUser({
            variables: {
              username: e.target[0].value,
              password: e.target[1].value,
            },
          });
        }}
      >
        <FormControl>
          <FormLabel>Correo/Usuario</FormLabel>
          <Input type="text" placeholder="Ingrese su direccion de correo" />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Contraseña</FormLabel>
          <Input type="password" placeholder="Ingrese su contraseña" />
        </FormControl>

        <Stack isInline justifyContent="space-between" mt={4}>
          <Box>
            <Checkbox>Recuerdame</Checkbox>
          </Box>

          <Box>
            <Link color={`${VARIANT_COLOR}.500`}>
              ¿Olvidaste tu contraseña?
            </Link>
          </Box>
        </Stack>

        <Button type="submit" variantColor={VARIANT_COLOR} width="full" mt={4}>
          Iniciar Sesion
        </Button>
      </form>
    </Box>
  );
};
