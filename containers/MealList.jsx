import React from "react";
import { Box, Flex, Grid, Stack, Text } from "@chakra-ui/core";
const mealTypes = [
  {
    type: "comida vege",
    id: "a",
    color: "yellow.100",
    content: [
      {
        name: "pizza",
        local: "pizzeria",
        price: "5$",
        img: "something",
      },
      {
        name: "pizza",
        local: "pizzeria",
        price: "5$",
        img: "something",
      },
      {
        name: "pizza",
        local: "pizzeria",
        price: "5$",
        img: "something",
      },
      {
        name: "pizza",
        local: "pizzeria",
        price: "5$",
        img: "something",
      },
      {
        name: "pizza",
        local: "pizzeria",
        price: "5$",
        img: "something",
      },
      {
        name: "pizza",
        local: "pizzeria",
        price: "5$",
        img: "something",
      },
    ],
  },
  {
    type: "comida wena",
    id: "b",
    color: "yellow.200",
    content: [
      {
        name: "pizza",
        local: "pizzeria",
        price: "5$",
        img: "something",
      },
      {
        name: "pizza",
        local: "pizzeria",
        price: "5$",
        img: "something",
      },
      {
        name: "pizza",
        local: "pizzeria",
        price: "5$",
        img: "something",
      },
      {
        name: "pizza",
        local: "pizzeria",
        price: "5$",
        img: "something",
      },
      {
        name: "pizza",
        local: "pizzeria",
        price: "5$",
        img: "something",
      },
      {
        name: "pizza",
        local: "pizzeria",
        price: "5$",
        img: "something",
      },
    ],
  },
  {
    type: "comida fina",
    id: "c",
    color: "yellow.300",
    content: [
      {
        name: "pizza",
        local: "pizzeria",
        price: "5$",
        img: "something",
      },
      {
        name: "pizza",
        local: "pizzeria",
        price: "5$",
        img: "something",
      },
      {
        name: "pizza",
        local: "pizzeria",
        price: "5$",
        img: "something",
      },
      {
        name: "pizza",
        local: "pizzeria",
        price: "5$",
        img: "something",
      },
      {
        name: "pizza",
        local: "pizzeria",
        price: "5$",
        img: "something",
      },
      {
        name: "pizza",
        local: "pizzeria",
        price: "5$",
        img: "something",
      },
    ],
  },
  {
    type: "comida mala",
    id: "d",
    color: "yellow.400",
    content: [
      {
        name: "pizza",
        local: "pizzeria",
        price: "5$",
        img: "something",
      },
      {
        name: "pizza",
        local: "pizzeria",
        price: "5$",
        img: "something",
      },
      {
        name: "pizza",
        local: "pizzeria",
        price: "5$",
        img: "something",
      },
      {
        name: "pizza",
        local: "pizzeria",
        price: "5$",
        img: "something",
      },
      {
        name: "pizza",
        local: "pizzeria",
        price: "5$",
        img: "something",
      },
      {
        name: "pizza",
        local: "pizzeria",
        price: "5$",
        img: "something",
      },
    ],
  },
  {
    type: "comida niche",
    id: "e",
    color: "yellow.500",
    content: [
      {
        name: "pizza",
        local: "pizzeria",
        price: "5$",
        img: "something",
      },
      {
        name: "pizza",
        local: "pizzeria",
        price: "5$",
        img: "something",
      },
      {
        name: "pizza",
        local: "pizzeria",
        price: "5$",
        img: "something",
      },
      {
        name: "pizza",
        local: "pizzeria",
        price: "5$",
        img: "something",
      },
      {
        name: "pizza",
        local: "pizzeria",
        price: "5$",
        img: "something",
      },
      {
        name: "pizza",
        local: "pizzeria",
        price: "5$",
        img: "something",
      },
    ],
  },
];

export const MealList = () => {
  const arr = [...new Array(mealTypes.length)].map((_, index) => index);
  const listingRef = React.useRef(arr);
  const listingRefUse = (index) => (element) => {
    listingRef.current[index] = element;
  };

  React.useEffect(() => {
    let goBack = 0;

    setInterval(() => {
      if (
        listingRef.current[0].scrollLeft === listingRef.current[0].scrollLeftMax
      ) {
        goBack = 4;
      }

      if (goBack > 0) {
        listingRef.current[0].scrollBy(
          (-1 * parseInt(listingRef.current[0].scrollLeftMax)) / 4,
          0
        );
        goBack -= 1;
      } else {
        listingRef.current[0].scrollBy(5, 0);
      }
    }, 75);
  }, []);
  React.useEffect(() => {
    let goBack = 0;

    setInterval(() => {
      if (
        listingRef.current[1].scrollLeft === listingRef.current[1].scrollLeftMax
      ) {
        goBack = 4;
      }

      if (goBack > 0) {
        listingRef.current[1].scrollBy(
          (-1 * parseInt(listingRef.current[1].scrollLeftMax)) / 4,
          0
        );
        goBack -= 1;
      } else {
        listingRef.current[1].scrollBy(5, 0);
      }
    }, 75);
  }, []);
  React.useEffect(() => {
    let goBack = 0;
    setInterval(() => {
      if (
        listingRef.current[2].scrollLeft === listingRef.current[2].scrollLeftMax
      ) {
        goBack = 4;
      }

      if (goBack > 0) {
        listingRef.current[2].scrollBy(
          (-1 * parseInt(listingRef.current[2].scrollLeftMax)) / 4,
          0
        );
        goBack -= 1;
      } else {
        listingRef.current[2].scrollBy(5, 0);
      }
    }, 75);
  }, []);
  React.useEffect(() => {
    let goBack = 0;
    setInterval(() => {
      if (
        listingRef.current[3].scrollLeft === listingRef.current[3].scrollLeftMax
      ) {
        goBack = 4;
      }

      if (goBack > 0) {
        listingRef.current[3].scrollBy(
          (-1 * parseInt(listingRef.current[3].scrollLeftMax)) / 4,
          0
        );
        goBack -= 1;
      } else {
        listingRef.current[3].scrollBy(5, 0);
      }
    }, 75);
  }, []);
  React.useEffect(() => {
    let goBack = 0;
    setInterval(() => {
      if (
        listingRef.current[4].scrollLeft === listingRef.current[4].scrollLeftMax
      ) {
        goBack = 4;
      }

      if (goBack > 0) {
        listingRef.current[4].scrollBy(
          (-1 * parseInt(listingRef.current[4].scrollLeftMax)) / 4,
          0
        );
        goBack -= 1;
      } else {
        listingRef.current[4].scrollBy(5, 0);
      }
    }, 75);
  }, []);

  const scrollHandler = (index) => {
    if (
      listingRef.current[index].scrollLeft ===
      listingRef.current[index].scrollLeftMax
    ) {
      listingRef.current[index].scrollBy(
        -1 * parseInt(listingRef.current[index].scrollLeftMax),
        0
      );
      return;
    }
    let goBack = 0;

    setInterval(
      () => {
        if (
          listingRef.current[index].scrollLeft ===
          listingRef.current[index].scrollLeftMax
        ) {
          goBack = 4;
        }
        console.log(goBack);
        if (goBack > 0) {
          listingRef.current[index].scrollBy(
            (-1 * parseInt(listingRef.current[index].scrollLeftMax)) / 4,
            0
          );
          goBack -= 1;
        } else {
          listingRef.current[index].scrollBy(5, 0);
        }
      },

      75
    );
  };
  // onClick={(e) => scrollHandler(index)}
  return (
    <>
      {mealTypes.map((information, index) => (
        <Stack key={information.id} spacing={2}>
          <Flex
            ref={listingRefUse(index)}
            bg={`yellow.${index + 1}00`}
            w="100vw"
            overflow="hidden"
            direction="column"
          >
            <Text position="absolute" ml="1em" mt="0em" fontSize="1.5em">
              {information.type}{" "}
            </Text>
            <Flex
              align="center"
              justify="flex-start"
              w={`${22.5 * information.content.length}vw`}
              h="24vh"
            >
              {information.content.map((data, index) => (
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
                  <Box
                    mt="-2vh"
                    gridArea="walking"
                    w="2vw"
                    h="2vh"
                    bg="red.500"
                  />
                  <Box mt="-2vh" gridArea="car" w="2vw" h="2vh" bg="#000" />
                </Grid>
              ))}
            </Flex>
          </Flex>
        </Stack>
      ))}
    </>
  );
};
