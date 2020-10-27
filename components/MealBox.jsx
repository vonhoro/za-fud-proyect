import React from "react";
import {
  Box,
  Flex,
  Grid,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Stack,
  Text,
} from "@chakra-ui/core";
export const MealBox = ({
  shopName,
  price,
  descripcion,
  name,
  priceTag,
  image,
  my,
}) => {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Grid
          my={my}
          bg="orange.50"
          w="20vw"
          shadow="md"
          mx="1vw"
          h="15vh"
          textAlign="center"
          templateColumns="50% 50%"
        >
          <Image
            alignSelf="center"
            justifySelf="center"
            w="90%"
            h="80%"
            src={image}
            bg="green.200"
          />
          <Flex direction="column" h="15vh" justify="center">
            {shopName && <Text my="2px">{shopName}</Text>}
            <Text my="2px">{name}</Text>
            <Text my="2px">
              {priceTag === "USD" ? "$" : "Bs. "}
              {price}{" "}
            </Text>{" "}
            <Flex justify="space-evenly" width="100%">
              <Box w="2vw" h="2vh" bg="red.500" />
              <Box w="2vw" h="2vh" bg="#000" />
            </Flex>
          </Flex>
        </Grid>
      </PopoverTrigger>
      <PopoverContent zIndex={4}>
        <PopoverArrow bg="yellow.200" />
        <PopoverHeader bg="yellow.300" textAlign="center">
          Detalles
        </PopoverHeader>
        <PopoverBody
          bg="yellow.300"
          style={{ textIndent: "1rem" }}
          textAlign="justify"
          textJustify="inter-word"
        >
          {descripcion}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
