import React from "react";
import { Box, Flex, Grid, Stack, Text } from "@chakra-ui/core";
import { Meals } from "../components/Meals";
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
          <Meals
            Type={information.type}
            Content={information.content}
            Color={`yellow.${index + 1}00`}
            Timing={20}
            Movement={1}
          />
        </Stack>
      ))}
    </>
  );
};
