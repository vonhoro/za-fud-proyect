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
const REGISTER_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
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
  const router = useRouter();
  const [registerUser, { data }] = useMutation(REGISTER_USER);
  const [response, setResponse] = React.useState(null);
  // console.log(data);
  React.useEffect(() => {
    if (!data) return;
    console.log(data);
    const information = data.addUser;
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

          if (e.target[2].value !== e.target[3].value) {
            console.log("Password do not match");
            return;
          }

          registerUser({
            variables: {
              username: e.target[0].value,
              email: e.target[1].value,
              password: e.target[2].value,
            },
          });
        }}
      >
        <FormControl mt="4" isRequired>
          <FormLabel>USUARIO</FormLabel>
          <Input
            type="text"
            placeholder="Nombre de usuario"
            borderColor="gray.400"
            _hover={{ borderColor: "orange.400" }}
          />
        </FormControl>

        <FormControl mt="4" isRequired>
          <FormLabel>CORREO</FormLabel>
          <Input
            type="text"
            placeholder="Ingrese su direccion de correo"
            borderColor="gray.400"
            _hover={{ borderColor: "orange.400" }}
          />
        </FormControl>

        <FormControl mt={4} isRequired>
          <FormLabel>CONTRASEÑA</FormLabel>
          <Input
            type="password"
            placeholder="Ingrese su contraseña"
            borderColor="gray.400"
            _hover={{ borderColor: "orange.400" }}
          />
        </FormControl>

        <FormControl mt={4} isRequired>
          <FormLabel>REINGRESAR SU CONTRASEÑA</FormLabel>
          <Input
            type="password"
            placeholder="Reescriba su contraseña"
            borderColor="gray.400"
            _hover={{ borderColor: "orange.400" }}
          />
        </FormControl>

        <Button type="submit" variantColor={"orange"} width="full" mt={6}>
          REGISTRARSE
        </Button>
      </form>

      <Box isInline>
        <Divider mt="4" borderColor="orange.500"></Divider>
        <Text
          textAlign="center"
          fontSize="13px"
          fontWeight="Bold"
          color="orange.400"
          mt="2"
        >
          Tambien puedes registrarte con{" "}
        </Text>
        <Stack isInline justifyContent="Center" paddingTop="2px">
          <IconButton aria-label="Social-Media" icon={"moon"} />
          <IconButton aria-label="Social-Media" icon={"moon"} />
        </Stack>
      </Box>
    </Box>
  );
};
