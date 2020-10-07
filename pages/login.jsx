import React from "react";
import {
  ThemeProvider,
  theme,
  CSSReset,
  Box,
  Flex,
  Heading,
  Text,
  Link,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  Button,
} from "@chakra-ui/core";

const VARIANT_COLOR = "orange";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <LoginArea />
    </ThemeProvider>
  );
};

const LoginArea = () => {
  return (
    <Flex minHeight="100vh" width="full" align="center" justifyContent="center">
      <Box
        borderWidth={1}
        px={4}
        width="full"
        maxWidth="500px"
        borderRadius={10}
        textAlign="center"
        boxShadow="lg"
      >
        <LoginHeader />
        <LoginForm />
      </Box>
    </Flex>
  );
};

const LoginHeader = () => {
  return (
    <Box textAlign="center">
      <Heading>Ingresar</Heading>
      <Text>
        O si desea registrarse pulse{" "}
        <Link color={`${VARIANT_COLOR}.500`}>aqui!</Link>
      </Text>
    </Box>
  );
};

const LoginForm = () => {
  return (
    <Box my={8} textAlign="left">
      <form>
        <FormControl>
          <FormLabel>Correo</FormLabel>
          <Input type="email" placeholder="Ingrese su direccion de correo" />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Contraseña</FormLabel>
          <Input type="password" placeholder="Ingrese su contraseña" />
        </FormControl>

        <Stack isInline justifyContent="space-between" mt={4}>
          <Box>
            <Checkbox>Recuerdame</Checkbox>
          </Box>

          <Box>
            <Link color={`${VARIANT_COLOR}.500`}>
              ¿Olvidaste tu contraseña?
            </Link>
          </Box>
        </Stack>

        <Button variantColor={VARIANT_COLOR} width="full" mt={4}>
          Iniciar Sesion
        </Button>
      </form>
    </Box>
  );
};
export default App;
