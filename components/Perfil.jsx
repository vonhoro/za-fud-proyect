import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
  Input,
  Avatar,
  Button,
  Text,
} from "@chakra-ui/core";
import { Formik } from "formik";
import { InputField } from "./InputField";

export const Perfil = () => {
  return (

    <>
      <Box
        textAlign="center"
        marginTop="20px"
        marginLeft="auto"
        marginRight="auto"
        width="20%"
      >
        <Text
          fontSize="24px"
          fontWeight="Bold"
        >
          <p>Foto de perfil</p>
        </Text>
        <Avatar
          size="2xl"
          name="Profile_image"
          src="https://pixabay.com/get/5fe7d6474c52b114f6d0877dc52c357c083ed8e55052704b772e7c.svg?attachment="
        />
      </Box>
      <Box margin="auto" width="75%" paddingBottom="5%" >
        <FormControl isRequired>
          <FormLabel htmlFor="Fname">Nombre</FormLabel>
          <Input id="Fname" placeholder="Primer Nombre" />
        </FormControl>

        <FormControl mt={5} isRequired>
          <FormLabel htmlFor="Lname">Apellido</FormLabel>
          <Input id="Lname" placeholder="Segundo Nombre" />
        </FormControl>

        <FormControl mt={5} isRequired>
          <FormLabel htmlFor="Cpassword">Cambiar Contraseña</FormLabel>
          <Input id="Cpassword" placeholder="Contraseña" />
        </FormControl>

        <FormControl mt={5} isRequired>
          <FormLabel htmlFor="Rpassword">Reescribir Contraseña</FormLabel>
          <Input id="Rpassword" placeholder="Contraseña" />
        </FormControl>

        <Box marginTop="5%" textAlign="center"
        >
          <Button marginRight="2%">Guardar</Button>
          <Button>Cancelar</Button>
        </Box>
      </Box>
    </>
  );
};
