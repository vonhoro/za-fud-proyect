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
  const [registerUser, { data }] = useMutation(REGISTER_USER);
  const [response, setResponse] = React.useState({ item: "", message: "" });
  // console.log(data);
  React.useEffect(() => {
    if (!data) return;
    console.log(data);
    const information = data.addUser;
    if (information.error) {
      setResponse({
        item: information.error[0].item,
        message: information.error[0].message,
      });
      return;
    }
    if (information.userInfo) {
      router.push("/");
      return;
    }
    setResponse({ item: "", message: "" });
  }, [data]);
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
            .email("Correo equivocado")
            .required("Campo Obligatorio"),
          password: Yup.string()
            .min(8, "Almenos debes tener 8 caracteres")
            .matches(/[a-z]/, "Necesitas almenos una letra minúscula")
            .matches(/[A-Z]/, "Necesitas almenos una letra mayúscula")
            .matches(/\d/, "Necesitas almenos una letra número")
            .matches(
              /\W/,
              "Necesitas almenos un carácter especial como ?!@#$%^&*()_+[] "
            )
            .required("Campo Obligatorio"),
          passwordCheck: Yup.string()
            .oneOf([Yup.ref("password"), null], "Contraseñas son diferentes")
            .required("Campo Obligatorio"),
        })}
        onSubmit={(values, { setSubmitting, setFieldError }) => {
          if (values.password !== values.passwordCheck) return;
          setTimeout(() => setSubmitting(false), 500);

          registerUser({
            variables: {
              username: values.username,
              email: values.email,
              password: values.password,
            },
          });

          console.log("poooooooooo");
        }}
      >
        {({ values, handleChange, isSubmitting, isValid }) => (
          <Form>
            <InputField
              backendError={response}
              name="username"
              placholder="Nombre de usuario"
              label="Usuario"
            />
            <InputField
              backendError={response}
              mt={4}
              type="email"
              name="email"
              placholder="Ingrese su direccion de correo"
              label="Correo"
            />
            <InputField
              backendError={response}
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
