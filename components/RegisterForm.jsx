import React from "react";

import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { InputField } from "./InputField";
import {
  Text,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Stack,
  Button,
  IconButton,
  Divider,
} from "@chakra-ui/core";

const bodyImage = "";

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
  let pass;
  const [registerUser] = useMutation(REGISTER_USER);
  return (
    <Box my={8} textAlign="left">
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          passwordCheck: "",
        }}
        validationSchema={Yup.object({
          username: Yup.string()
            .min(3, "Debe tener 3 caracateres o mas")
            .required("Campo Obligatorio"),
          email: Yup.string()
            .email("Utilice un correo válido")
            .required("Campo Obligatorio"),
          password: Yup.string()
            .min(8, "Almenos debes tener 8 caracteres")
            .matches(/[a-z]/, "Necesitas almenos una letra minúscula")
            .matches(/[A-Z]/, "Necesitas almenos una letra mayúscula")
            .matches(/\d/, "Necesitas almenos una letra número")
            .matches(
              /[\[\]|\\{}!@#$%^&*()_\-\+:;,.<>/]+/,
              "Necesitas almenos un carácter especial como ?!@#$%^&*(] "
            )
            .required("Campo Obligatorio"),
          passwordCheck: Yup.string()
            .oneOf([Yup.ref("password"), null], "Contraseñas son diferentes")
            .required("Campo Obligatorio"),
        })}
        onSubmit={async (values, { setSubmitting, setFieldError }) => {
          if (values.password !== values.passwordCheck) return;
          if (values.username.includes(" ")) {
            setFieldError(
              "username",
              "El usuario no puede contener espacios en blanco"
            );
            setSubmitting(false);
            return;
          }
          if (values.password.includes(" ")) {
            setFieldError(
              "password",
              "La contraseña no puede contener espacios en blanco"
            );
            setSubmitting(false);
            return;
          }
          const { data } = await registerUser({
            variables: {
              username: values.username,
              email: values.email,
              password: values.password,
            },
          });
          setSubmitting(false);
          if (!data.addUser.error) {
            router.push("/");
          }
          const error = data.addUser.error[0];
          setFieldError(error.item, error.message);
        }}
      >
        {({ values, handleChange, isSubmitting, isValid }) => (
          <Form>
            <InputField
              name="username"
              placholder="Nombre de usuario"
              label="Usuario"
            />
            <InputField
              mt={4}
              type="email"
              name="email"
              placholder="Ingrese su direccion de correo"
              label="Correo"
            />
            <InputField
              mt={4}
              type="password"
              name="password"
              placeholder="Ingrese su contraseña"
              label="Contraseña"
            />
            <InputField
              mt={4}
              type="password"
              name="passwordCheck"
              placeholder="Reescriba  su contraseña"
              label="Reingresar su Contraseña"
            />

            <Button
              type="submit"
              isLoading={isSubmitting}
              isDisable={isValid}
              variantColor={isValid ? "orange" : "gray"}
              width="full"
              mt={6}
            >
              REGISTRARSE
            </Button>
          </Form>
        )}
      </Formik>
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
