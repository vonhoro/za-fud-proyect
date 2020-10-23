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
import { NavBar } from "../../containers/NavBar";
import { MealBox } from "../../components/MealBox";

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

  return (
    <>
      <NavBar isStatic />

      <Flex
        direction="column"
        bg="orange.100"
        p={5}
        width="100%"
        align="center"
      >
        <Grid
          width="100%"
          templateColumns="55% 35%"
          height="25vh"
          mx="5%"
          justifyContent="center"
        >
          <Grid
            templateColumns="40% 60%"
            alignContent="left"
            textAlign="center"
          >
            <Image width="100%" height="90%" bg="red.900" />
            <Box>
              <Stack spacing={5}>
                <Text as="kbd" fontSize="28px" fontWeight="bold">
                  {shopData?.name}
                </Text>
                <Text as="kbd" fontSize="18px" fontWeight="bold">
                  Horario de Servicio
                </Text>
                <Text
                  as="kbd"
                  color="red.500"
                  fontSize="18px"
                  fontWeight="bold"
                >
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
        <Flex direction="column" bg="orange.200" width="full">
          <Box bg="orange.400" textAlign="center">
            {" "}
            <Text as="kbd" fontSize="28px" fontWeight="bold">
              Menu
            </Text>{" "}
          </Box>
          {foodData &&
            foodData.map(({ type, meals }, index) => (
              <>
                <Box bg="yellow.400" textAlign="center" key={index.toString()}>
                  {" "}
                  <Text as="kbd" fontSize="28px" fontWeight="bold">
                    {type}
                  </Text>{" "}
                </Box>
                <Flex wrap="wrap">
                  {meals.map((meal, index) => (
                    <MealBox {...meal} my={4} />
                  ))}
                </Flex>
              </>
            ))}
        </Flex>
      </Flex>
    </>
  );
}
