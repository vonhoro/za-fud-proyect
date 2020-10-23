import React from "react";
import { Formik, Field, Form } from "formik";
import { InputField } from "../components/InputField";
import { NavBar } from "../containers/NavBar";
import { ImageUploader } from "../components/ImageUploader";
import { MealBox } from "../components/MealBox";
import {
  Box,
  Button,
  Divider,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Grid,
  Icon,
  IconButton,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/core";

// let newSprites = sprites;
// setUploading(true);
// for (const sprite of spritesFileList) {
// const formData = new FormData();

// formData.append("image", sprite, sprite.name);
// const answer = await axios.post(
// "https://api.imgbb.com/1/upload?expiration=86400&key=0f6654c0cbf82ce0c4e080de1c4e7d00",
// formData)
export default function Test() {
  const [foodData, setFoodData] = React.useState(null);
  const [shopData, setShopData] = React.useState(null);
  const [shopImage, setShopImage] = React.useState("");
  const [contactInfoCounter, setContactInfoCounter] = React.useState([1]);
  const [menuItemCounter, setMenuItemCounter] = React.useState([
    { type: 1, meals: [1] },
  ]);
  const [reRender, setReRender] = React.useState(true);
  // const [contactInfoCounter, setContactInfoCounter] = React.useState([1]);

  return (
    <>
      <NavBar isStatic />
      <Flex
        direction="column"
        align="center"
        bg="orange.100"
        p={5}
        textAlign="center"
        minHeight="85vh"
      >
        <Text fontSize="32px" mt="-10px">
          Creador de tiendas{" "}
        </Text>

        <Grid
          width="100%"
          templateColumns="55% 35%"
          minHeight="25vh"
          mx="5%"
          justifyContent="center"
          mb="20px"
        >
          <Grid
            templateColumns="40% 60%"
            alignContent="left"
            textAlign="center"
          >
            <Flex height="100%" direction="column">
              <Image
                width="100%"
                height="90%"
                maxHeight="20vh"
                bg="red.900"
                src={shopImage}
                mb="5px"
              />
              <ImageUploader
                onChange={(e) => {
                  e.preventDefault();

                  const picture = URL.createObjectURL(e.target.files[0]);
                  setShopImage(picture);
                }}
              />
            </Flex>

            <Box>
              <Stack spacing={5}>
                <Editable defaultValue="Nombre de Tu tienda">
                  <EditablePreview fontSize="28px" fontWeight="bold" as="kbd" />
                  <EditableInput width="80%" />
                </Editable>

                <Text as="kbd" fontSize="18px" fontWeight="bold">
                  Horario de Servicio
                </Text>
                <Editable defaultValue="TEj: 8am - 6pm">
                  <EditablePreview as="kbd" fontSize="18px" fontWeight="bold" />
                  <EditableInput width="80%" />
                </Editable>
              </Stack>
            </Box>
          </Grid>
          <Stack spacing={5} textAlign="left">
            <Text as="kbd" fontSize="22px" fontWeight="bold">
              Informacion de contacto{" "}
            </Text>

            <Stack spacing={2} align="left">
              {contactInfoCounter.map((_, index) => (
                <Stack isInline align="center" key={index.toString()}>
                  <Icon
                    name="minus"
                    color="red.500"
                    onClick={(e) => {
                      setContactInfoCounter(
                        contactInfoCounter.filter((_, ind) => index !== ind)
                      );
                    }}
                  />
                  <Editable defaultValue="WhatsApp/email ...">
                    <EditablePreview
                      fontSize="16px"
                      fontWeight="bold"
                      as="kbd"
                    />
                    <EditableInput width="80%" />
                  </Editable>
                  <Editable defaultValue="detalles.">
                    <EditablePreview
                      fontSize="16px"
                      fontWeight="bold"
                      as="kbd"
                      color="gray.500"
                    />
                    <EditableInput width="80%" />
                  </Editable>
                </Stack>
              ))}
            </Stack>

            <IconButton
              icon="add"
              width="40%"
              variantColor="orange"
              color="white"
              aria-label="Agregar informacion de contacto"
              onClick={(e) => setContactInfoCounter([...contactInfoCounter, 1])}
            />
          </Stack>
        </Grid>
        <Flex direction="column" bg="orange.200" width="full">
          <Box bg="orange.400" textAlign="center">
            {" "}
            <Text as="kbd" fontSize="28px" fontWeight="bold">
              Menu
            </Text>{" "}
          </Box>
          {menuItemCounter.map(({ type, meals }, index) => (
            <>
              <Box bg="yellow.400" textAlign="center" key={index.toString()}>
                {" "}
                <Editable defaultValue="Carnes , Pescados ...">
                  <EditablePreview fontSize="28px" fontWeight="bold" as="kbd" />
                  <EditableInput width="80%" />
                </Editable>
              </Box>
              <Flex wrap="wrap" justify="center">
                {meals.map((meal, index) => (
                  <MealBox {...meal} my={4} />
                ))}

                <IconButton
                  m={4}
                  alignSelf="center"
                  justifySelf="center"
                  icon="add"
                  width="10%"
                  variantColor="orange"
                  color="white"
                  aria-label="Agregar elementos de comida"
                  onClick={(e) => {
                    let mealsOnMenu = menuItemCounter;
                    mealsOnMenu[index].meals.push(1);
                    setMenuItemCounter(mealsOnMenu);
                    setReRender(!reRender);
                  }}
                />
              </Flex>
            </>
          ))}
        </Flex>
        <IconButton
          m={4}
          alignSelf="center"
          justifySelf="center"
          icon="add"
          width="10%"
          variantColor="orange"
          color="white"
          aria-label="Agregar elementos de Menu"
          onClick={(e) => {
            setMenuItemCounter([...menuItemCounter, { type: 1, meals: [1] }]);
          }}
        />
      </Flex>
    </>
  );
}
