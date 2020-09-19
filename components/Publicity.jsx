import React from "react";
import { Box } from "@chakra-ui/core";
export const Publicity = ({ Color, GridArea, children }) => {
  console.log(children);
  return (
    <Box
      w="100%"
      h="100%"
      gridArea={GridArea}
      bg={Color}
      
      color="black"
    >
      <h1>{children}</h1>
    </Box>
  );
};
