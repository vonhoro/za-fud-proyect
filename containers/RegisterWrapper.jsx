import { RegisterHeader } from "../components/RegisterHeader";
import { RegisterForm } from "../components/RegisterForm";

import { Box, Flex } from "@chakra-ui/core";

export const RegisterWrapper = () => {
  return (
    <>
      <Flex
        backgroundImage="Url('https://images.pexels.com/photos/1025804/pexels-photo-1025804.jpeg?crop=entropy&cs=srgb&dl=pexels-oliver-sj%C3%B6str%C3%B6m-1025804.jpg&fit=crop&fm=jpg&h=5608&w=3739')"
        backgroundPosition="Center"
        backgroundRepeat="no-repeat"
        minHeight="100vh"
        width="full"
        height="full"
        align="center"
        justifyContent="center"
      >
        <Box
          backgroundColor="white"
          height="auto"
          borderWidth={1}
          px={4}
          width="full"
          maxWidth="500px"
          borderRadius={10}
          textAlign="center"
          boxShadow="lg"
        >
          <RegisterHeader />
          <RegisterForm />
        </Box>
      </Flex>
    </>
  );
};