import React from "react";
import { Box, Flex, Grid, Stack, Text } from "@chakra-ui/core";
import { MealBox } from "./MealBox";
export const Meals = ({ Content, Type, Timing, Movement, Color }) => {
  const ref = React.useRef();
  React.useEffect(() => {
    let goBack = 0;

    setInterval(() => {
      if (!ref.current) return;
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
          <MealBox
            key={index.toString()}
            shopName={data.local}
            name={data.name}
            price={data.price}
          />
        ))}
      </Flex>
    </Flex>
  );
};
