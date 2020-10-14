import React from "react";

import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";

import * as Yup from "yup";
import { Formik, Form } from "formik";
import { InputField } from "./InputField";

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
  const [loginUser] = useMutation(LOGIN_USER);
  const [valid, setValid] = React.useState(true);

  return (
    <Box my={8} textAlign="left">
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={async (values, { setSubmitting, setFieldError }) => {
          const { data } = await loginUser({
            variables: {
              username: values.username,
              password: values.password,
            },
          });
          setSubmitting(false);
          if (!data.login.error) {
            console.log("jaaa");
            router.push("/");
          }
          const error = data.login.error[0];

          setFieldError(error.item, error.message);
        }}
      >
        {({ values, handleChange, isSubmitting, isValid }) => (
          <Form>
            <InputField
              name="username"
              placholder="Ingrese su usuario o direccion de correo"
              label="Correo/Usuario"
            />
            <InputField
              mt={4}
              type="password"
              name="password"
              placeholder="Ingrese su contraseña"
              label="Contraseña"
            />
            <Stack isInline justifyContent="space-between" mt={4}>
              <Box>
                <Checkbox border="grey">Recuerdame</Checkbox>
              </Box>

              <Box>
                <Link color={`orange.500`}>¿Olvidaste tu contraseña?</Link>
              </Box>
            </Stack>
            <Button
              type="submit"
              isLoading={isSubmitting}
              variantColor="orange"
              width="full"
              mt={4}
            >
              Iniciar Sesion
            </Button>
          </Form>
        )}
      </Formik>
      <Box>
        <Divider borderColor="orange.500" mt="4"></Divider>
        <Text
          textAlign="center"
          fontSize="12px"
          fontWeight="Bold"
          color="orange.400"
          mt="4"
        >
          Tambien puede iniciar sesion con{" "}
        </Text>
        <Stack isInline justifyContent="Center" mt="2">
          <IconButton aria-label="Social-Media" icon={"moon"} />
          <IconButton aria-label="Social-Media" icon={"moon"} />
        </Stack>
      </Box>
    </Box>
  );
};
