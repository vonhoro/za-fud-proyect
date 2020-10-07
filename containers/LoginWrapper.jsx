import { LoginHeader } from "../components/LoginHeader";
import { LoginForm } from "../components/LoginForm";

import { Box, Flex } from "@chakra-ui/core";

export const LoginWrapper = () => {
  return (
    <>
      <Flex
        minHeight="100vh"
        width="full"
        align="center"
        justifyContent="center"
      >
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
    </>
  );
};
