import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import {
  Box,
  Flex,
  Grid,
  Heading,
  Icon,
  Image,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/core";

const GET_SHOP = gql`
  query Shop($shopName: String!) {
    shop(shopName: $shopName) {
      error {
        message
        item
      }
      name
      horario
      menuItems
      contactInfo {
        contactType
        contactDetails
      }
      foodInfo {
        type
        foodDescription {
          name
          priceTag
          price
          descripcion
          picture
        }
      }
    }
  }
`;

export default function Shops() {
  const router = useRouter();
  const { shopName } = router.query;
  const [shopSearch, setShopSearch] = React.useState(shopName);
  const [foodData, setFoodData] = React.useState(null);
  const [shopData, setShopData] = React.useState(null);
  const { loading, error, data, refetch } = useQuery(GET_SHOP, {
    variables: { shopName },
  });

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>Errro no manejable</h1>;

  if (!data) return <h1>Error</h1>;
  if (data.shop.error) return <h1>{data.shop.error.message}</h1>;
  if (data && !shopData) {
    const foodArray = data?.shop.foodInfo;
    let foodTypes = [...new Set(foodArray.map(({ type }) => type))];

    let foodItems = foodTypes.map((type) => {
      return { type, meals: [] };
    });

    for (const food of foodArray) {
      for (const item of foodItems) {
        if (item.type === food.type) {
          item.meals = [...item.meals, food.foodDescription];
        }
      }
    }
    setFoodData(foodItems);

    setShopData(data.shop);
  }
  if (shopData) {
    // console.log(shopData);
  }

  return (
    <Flex direction="column" bg="green.200">
      <Grid
        templateColumns="55% 35%"
        height="25vh"
        mx="5%"
        justifyContent="center"
      >
        <Grid templateColumns="20vw 20vw" textAlign="center">
          <Image width="20vw" height="100%" bg="red.900" />
          <Box>
            <Stack spacing={5}>
              <Text as="kbd" fontSize="28px" fontWeight="bold">
                {shopData?.name}
              </Text>
              <Text as="kbd" fontSize="18px" fontWeight="bold">
                Horario de Servicio
              </Text>
              <Text as="kbd" color="red.500" fontSize="18px" fontWeight="bold">
                {shopData?.horario}
              </Text>
            </Stack>
          </Box>
        </Grid>
        <Stack spacing={5}>
          <Text as="kbd" fontSize="22px" fontWeight="bold">
            Informacion de contacto{" "}
          </Text>

          <Stack spacing={2}>
            {shopData &&
              shopData.contactInfo.map(
                ({ contactType, contactDetails }, index) => (
                  <Stack isInline align="center" key={index.toString()}>
                    <Icon name="phone" size="22px" color="green.500" />
                    <Text as="kbd" fontSize="16px" fontWeight="bold">
                      {contactType}
                    </Text>
                    <Text as="kbd" fontSize="16px" color="gray.500">
                      {contactDetails}
                    </Text>
                  </Stack>
                )
              )}
          </Stack>
        </Stack>
      </Grid>
      <Box bg="blue.500" textAlign="center">
        {" "}
        <Text as="kbd" fontSize="28px" fontWeight="bold">
          Menu
        </Text>{" "}
      </Box>
      {foodData &&
        foodData.map(({ type, meals }, index) => (
          <>
            <Box bg="yellow.500" textAlign="center" key={index.toString()}>
              {" "}
              <Text as="kbd" fontSize="28px" fontWeight="bold">
                {type}
              </Text>{" "}
            </Box>
            <Flex>
              {meals.map((meal, index) => (
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
                    <Text mt="0vh">{meal.local}</Text>
                    <Text mt="-3vh">{meal.name}</Text>
                  </Box>
                  <Text mt="4vh" gridArea="price">
                    {meal.price}{" "}
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
          </>
        ))}
    </Flex>
  );
}
