import React from "react";
import { Formik, Field, Form } from "formik";
import { InputField } from "../components/InputField";
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
export default function Test() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, handleChange, isSubmitting }) => (
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

          <Button
            type="submit"
            isLoading={isSubmitting}
            variantColor={"orange"}
            width="full"
            mt={6}
          >
            REGISTRARSE
          </Button>
        </Form>
      )}
    </Formik>
  );
}

/* 
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









 */
