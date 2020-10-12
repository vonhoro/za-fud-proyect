import React from "react";

import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";

import {
  Text,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
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
export const RegisterForm = () => {
  /*const router = useRouter();
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
  }, [data]);*/
  return (
    <Box my={8} textAlign="left">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Usuario ", e.target[0].value);
          console.log("Password ", e.target[1].value);
          RegisterUser({
            variables: {
              username: e.target[0].value,
              password: e.target[1].value,
            },
          });
        }}
      >
        <FormControl mt="4" isRequired>
          <FormLabel>USUARIO</FormLabel>
          <Input type="text" placeholder="Nombre de usuario" borderColor="gray.400" _hover={{ borderColor: "orange.400" }} />
        </FormControl>

        <FormControl mt="4" isRequired>
          <FormLabel>CORREO</FormLabel>
          <Input type="text" placeholder="Ingrese su direccion de correo" borderColor="gray.400" _hover={{ borderColor: "orange.400" }} />
        </FormControl>

        <FormControl mt={4} isRequired>
          <FormLabel>CONTRASEÑA</FormLabel>
          <Input type="password" placeholder="Ingrese su contraseña" borderColor="gray.400" _hover={{ borderColor: "orange.400" }} />
        </FormControl>

        <FormControl mt={4} isRequired>
          <FormLabel>REINGRESAR SU CONTRASEÑA</FormLabel>
          <Input type="password" placeholder="Reescriba su contraseña" borderColor="gray.400" _hover={{ borderColor: "orange.400" }} />
        </FormControl>

        <Button type="submit" variantColor={"orange"} width="full" mt={6}>
          REGISTRARSE
        </Button>
      </form>

      <Box isInline>
        <Divider mt="4" borderColor="orange.500"></Divider>
        <Text textAlign="center" fontSize="13px" fontWeight="Bold" color="orange.400" mt="2">Tambien puedes registrarte con </Text>
        <Stack isInline justifyContent="Center" paddingTop="2px">
          <IconButton aria-label="Social-Media" icon={"moon"} />
          <IconButton aria-label="Social-Media" icon={"moon"} />
        </Stack>
      </Box>
    </Box>
  );
};