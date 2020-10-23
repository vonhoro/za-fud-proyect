import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
  Input,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/core";
import { Formik } from "formik";
import { InputField } from "./InputField";

export const Perfil = () => {
  return (
    <Box>
      <Box
        textAlign="center"
        marginTop="20px"
        marginLeft="auto"
        marginRight="auto"
        width="20%"
      >
        <p>Foto de perfil</p>
        <Avatar
          size="2xl"
          name="Profile_image"
          src="https://pixabay.com/get/5fe7d6474c52b114f6d0877dc52c357c083ed8e55052704b772e7c.svg?attachment="
        />
      </Box>
      <Box margin="10px 10px 10px 10px" h="auto">
        <FormControl isRequired>
          <FormLabel htmlFor="Fname">Nombre</FormLabel>
          <Input id="Fname" placeholder="First Nombre" />
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

        {/*<Button>Aqui modificame</Button>*/}
      </Box>
    </Box>
  );
};
