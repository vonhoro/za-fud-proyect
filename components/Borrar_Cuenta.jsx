import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Box,
    Input,
    Button,
    Text,
    Stack,

} from "@chakra-ui/core";
import { Formik } from "formik";
import { InputField } from "./InputField";

export const Borrar_Cuenta = () => {
    return (

        <>
            <Box
                textAlign="center"
                marginTop="20px"
                marginLeft="auto"
                marginRight="auto"
                width="30%"
            >
                <Text
                    fontSize="24px"
                    fontWeight="bold"
                >
                    <p>Borrar cuenta</p>
                </Text>
            </Box>
            <Box margin="auto" width="75%" paddingBottom="5%" >
                <FormControl isRequired>
                    <FormLabel htmlFor="Fpassword">Contraseña</FormLabel>
                    <Input id="Fpassword" placeholder="Introduzca su contraseña" />
                </FormControl>

                <FormControl mt={5} isRequired fontWeight="500">
                    <span>Introduzca lo siguente frase: </span>
                    <FormLabel htmlFor="Ltrick" color="red.500">Soy tu padre!</FormLabel>
                    <Input id="Ltrick" placeholder=" Frase secreta " />
                </FormControl>

                <Box marginTop="5%" textAlign="center"
                >
                    <Box
                        textAlign="center"
                        marginTop="20px"
                        marginLeft="auto"
                        marginRight="auto"
                        width="60%"
                    >
                        <Text
                            fontSize="18px"
                            color="red.500"
                            fontWeight="bold"
                        >
                            <p>¿Seguro que quiere borrar su cuenta?</p>
                        </Text>
                    </Box>
                    <Button marginRight="2%">Borrar</Button>
                    <Button>Cancelar</Button>
                </Box>
            </Box>
        </>
    );
};
