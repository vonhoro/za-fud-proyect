import { Box, Text, Heading, Link } from "@chakra-ui/core";
export const LoginHeader = () => {
  return (
    <Box textAlign="center">
      <Heading>Ingresar</Heading>
      <Text>
        O si desea registrarse pulse <Link color={`orange.500`}>aqui!</Link>
      </Text>
    </Box>
  );
};
