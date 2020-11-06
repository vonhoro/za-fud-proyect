import React from 'react'

import { LoginHeader } from "../components/LoginHeader";
import { LoginForm } from "../components/LoginForm";
import { Faq } from "../components/Faq"

import { Box, Flex } from "@chakra-ui/core";

export const LoginWrapper = () => {
  return (
    <>
      <Flex
        backgroundImage="Url('https://images.pexels.com/photos/4004465/pexels-photo-4004465.jpeg?crop=entropy&cs=srgb&dl=pexels-cottonbro-4004465.jpg&fit=crop&fm=jpg&h=2879&w=1920')"
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
          height="525px"
          borderWidth={1}
          px={4}
          width="full"
          height="auto"
          maxWidth="500px"
          borderRadius={10}
          textAlign="center"
          boxShadow="lg"
        >
          <LoginHeader />
          <LoginForm />
        </Box>
      </Flex>
      <Box
        width="100%"
        height="100%"
        border="1px solid"
        backgroundColor="rgba(0, 0, 0, 1)"
      >
        <Faq />
      </Box>
    </>
  );
};
