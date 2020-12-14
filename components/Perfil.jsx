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
        backgroundColor="orange.400"
        color="white"
        padding="px"
        borderRadius="10px 10px 0px 0px"
      >
        <h2>Perfil</h2>
      </Box>
      <Box textAlign="center" marginTop="20px">
        <Avatar
          size="2xl"
          name="Profile_image"
          src="https://pixabay.com/get/5fe7d6474c52b114f6d0877dc52c357c083ed8e55052704b772e7c.svg?attachment="
        />
      </Box>
      <Box margin="auto" width="75%" paddingBottom="5%">
        <FormControl isRequired>
          <FormLabel htmlFor="Fname">Nombre</FormLabel>
          <Input
            borderColor="gray.400"
            _hover={{ borderColor: "orange.400" }}
            id="Fname"
            placeholder="Primer Nombre"
          />
        </FormControl>

        <FormControl mt={5} isRequired>
          <FormLabel htmlFor="Lname">Apellido</FormLabel>
          <Input
            borderColor="gray.400"
            _hover={{ borderColor: "orange.400" }}
            id="Lname"
            placeholder="Segundo Nombre"
          />
        </FormControl>

        <FormControl mt={5} isRequired>
          <FormLabel htmlFor="Cpassword">Cambiar Contraseña</FormLabel>
          <Input
            borderColor="gray.400"
            _hover={{ borderColor: "orange.400" }}
            id="Cpassword"
            placeholder="Contraseña"
          />
        </FormControl>

        <FormControl mt={5} isRequired>
          <FormLabel htmlFor="Rpassword">Reescribir Contraseña</FormLabel>
          <Input
            borderColor="gray.400"
            _hover={{ borderColor: "orange.400" }}
            id="Rpassword"
            placeholder="Contraseña"
          />
        </FormControl>

        <Box marginTop="5%" textAlign="center">
          <Button
            marginRight="2%"
            border="none"
            backgroundColor="blue.500"
            color="white"
            _hover={{
              borderColor: "white",
              backgroundColor: "orange.400",
              color: "white",
              borderRadius: "15px",
            }}
          >
            Guardar
          </Button>

          <Button
            border="none"
            backgroundColor="blue.500"
            color="white"
            _hover={{
              borderColor: "white",
              backgroundColor: "orange.400",
              color: "white",
              borderRadius: "15px",
            }}
          >
            Cancelar
          </Button>
        </Box>
      </Box>
    </>
  );
};
