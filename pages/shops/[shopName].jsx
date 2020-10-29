import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import {
  Box,
  Divider,
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

      <Flex direction="column" bg="orange.100" width="100%" align="center">
        <Grid
          width="100%"
          templateColumns="55% 45%"
          height="35vh"
          ml="5%"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            templateColumns="40% 60%"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Image width="100%" height="30vh" borderRadius="20%" bg="red.900" />
            <Box>
              <Stack spacing={5}>
                <Text
                  as="kbd"
                  fontSize="32px"
                  color="orange.900"
                  fontWeight="bold"
                >
                  {shopData?.name}
                </Text>
                <Stack spacing={-1}>
                  <Text
                    as="kbd"
                    fontSize="22px"
                    color="orange.700"
                    fontWeight="bold"
                  >
                    Horario de Servicio
                  </Text>
                  <Text
                    as="kbd"
                    color="red.500"
                    fontSize="22px"
                    fontWeight="bold"
                  >
                    {shopData?.horario}
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </Grid>
          <Flex
            bg="blue.300"
            height="100%"
            w="100%"
            direction="column"
            align="center"
            justify="center"
            borderRadius="50px / 50px 0 0 50px"
          >
            <Stack spacing={2}>
              {shopData &&
                shopData.contactInfo.map(
                  ({ contactType, contactDetails }, index) => (
                    <Stack isInline align="center" key={index.toString()}>
                      <Text
                        as="kbd"
                        fontSize="24px"
                        color="white"
                        fontWeight="bold"
                      >
                        {contactType}
                      </Text>
                      <Text
                        as="kbd"
                        fontSize="24px"
                        bg="white"
                        p={2}
                        borderRadius="30px"
                      >
                        {contactDetails}
                      </Text>
                    </Stack>
                  )
                )}
            </Stack>
          </Flex>
        </Grid>
        <Flex direction="column" bg="orange.100" width="full">
          <Box bg="orange.800" textAlign="center">
            {" "}
            <Text as="kbd" color="orange.200" fontSize="28px" fontWeight="bold">
              Menu
            </Text>{" "}
          </Box>
          {foodData &&
            foodData.map(({ type, meals }, index) => (
              <Flex
                key={index.toString()}
                direction="column"
                align="flex-start"
              >
                <Box
                  color="orange.400"
                  bg="orange.200"
                  textAlign="center"
                  width="10vw"
                  borderBottomRightRadius="30%"
                  p={1}
                  border="none"
                >
                  {" "}
                  <Text as="kbd" fontSize="24px" fontWeight="bold">
                    {type}
                  </Text>{" "}
                </Box>
                <Flex wrap="wrap">
                  {meals.map((meal, index) => (
                    <MealBox {...meal} my={4} />
                  ))}
                </Flex>
                <Divider w="full" mb="0" borderColor="orange.300" />
              </Flex>
            ))}
        </Flex>
      </Flex>
    </>
  );
}
