import React from "react";
import { Box, Flex, Grid, Stack, Text } from "@chakra-ui/core";
export const Meals = ({ Content, Type, Timing, Movement, Color }) => {
  const ref = React.useRef();
  React.useEffect(() => {
    let goBack = 0;

    setInterval(() => {
      if (ref.current.scrollLeft === ref.current.scrollLeftMax) {
        goBack = 16;
      }

      if (goBack > 0) {
        ref.current.scrollBy(
          (-1 * parseInt(ref.current.scrollLeftMax)) / 16,
          0
        );
        goBack -= 1;
      } else {
        ref.current.scrollBy(Movement, 0);
      }
    }, Timing);
  });

  return (
    <Flex bg={Color} w="100vw" overflow="hidden" direction="column" ref={ref}>
      <Text position="absolute" ml="1em" mt="0em" fontSize="1.5em">
        {Type}{" "}
      </Text>
      <Flex
        align="center"
        justify="flex-start"
        w={`${22.5 * Content.length}vw`}
        h="24vh"
      >
        {Content.map((data, index) => (
          <Grid
            mt="0vh"
            mb="0vh"
            key={index.toString()}
            bg="red.50"
            w="20vw"
            shadow="md"
            mx="1vw"
            h="14.5vh"
            textAlign="center"
            templateAreas={`  "img img  food food "  
                "img img price price "
                              
                               "img img  walking car  "
                            
               `}
            padding=".5em"
          >
            <Box w="10vw" h="12vh" gridArea="img" bg="green.200" />
            <Box h="3vh" mt="0vh" gridArea="food">
              <Text mt="0vh">{data.local}</Text>
              <Text mt="-3vh">{data.name}</Text>
            </Box>
            <Text mt="4vh" gridArea="price">
              {data.price}{" "}
            </Text>
            <Box mt="-2vh" gridArea="walking" w="2vw" h="2vh" bg="red.500" />
            <Box mt="-2vh" gridArea="car" w="2vw" h="2vh" bg="#000" />
          </Grid>
        ))}
      </Flex>
    </Flex>
  );
};
