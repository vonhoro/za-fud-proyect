import { Box, Text, Heading, Link } from "@chakra-ui/core";
export const LoginHeader = () => {
  return (
    <Box textAlign="center">
      <Heading>Ingresar</Heading>
      <Text>
        O si desea registrarse pulse <Link href="/register" color={`orange.500`} textDecor="none" _hover={{ color: "gray.400" }} >AQUI!</Link>
      </Text>
    </Box>
  );
};
