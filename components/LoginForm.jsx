import React from "react";

import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";

import {
  Text,
  Box,
  Link,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  Button,
  IconButton,
  Divider,
} from "@chakra-ui/core";
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
export const LoginForm = () => {
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
        <FormControl isRequired>
          <FormLabel>CORREO/USUARIO</FormLabel>
          <Input type="text" borderColor="gray.400" _hover={{ borderColor: "orange.400" }} placeholder="Ingrese su direccion de correo" />
        </FormControl>

        <FormControl mt={4} isRequired>
          <FormLabel>CONTRASEÑA</FormLabel>
          <Input type="password" borderColor="gray.400" _hover={{ borderColor: "orange.400" }} placeholder="Ingrese su contraseña" />
        </FormControl>

        <Stack isInline justifyContent="space-between" mt={4}>
          <Box>
            <Checkbox border="grey">Recuerdame</Checkbox>
          </Box>

          <Box>
            <Link color={`orange.500`}>¿Olvidaste tu contraseña?</Link>
          </Box>
        </Stack>

        <Button type="submit" variantColor={"orange"} width="full" mt={4}>
          Iniciar Sesion
        </Button>
      </form>
      <Box>
        <Divider borderColor="orange.500" mt="4"></Divider>
        <Text textAlign="center" fontSize="12px" fontWeight="Bold" color="orange.400" mt="4">Tambien puede iniciar sesion con </Text>
        <Stack isInline justifyContent="Center" mt="2">
          <IconButton aria-label="Social-Media" icon={"moon"} />
          <IconButton aria-label="Social-Media" icon={"moon"} />
        </Stack>
      </Box>
    </Box>
  );
};
