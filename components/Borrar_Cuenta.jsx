import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Box,
    Input,
    Button,
    Text,

} from "@chakra-ui/core";
import { Formik } from "formik";
import { InputField } from "./InputField";

export const Borrar_Cuenta = () => {
    return (

        <>
            <Box
                borderTop="1px"
                borderBottom="1px"
                borderRadius="10px 10px 0px 0px"
                textAlign="center"
                marginTop="-1px"
                marginLeft="auto"
                marginRight="auto"
                marginBottom="10px"
                backgroundColor="white"
                padding="-20px"
            >
                <h2>Borrar Cuenta</h2>
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
                    <Button marginRight="2%" w="100px" h="40px">Borrar</Button>
                    <Button w="100px" h="40px">Cancelar</Button>
                </Box>
            </Box>
        </>
    );
};
