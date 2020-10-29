import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { InputField } from "./InputField";
import { ImageUploader } from "./ImageUploader";
import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/core";
export const MealBoxForm = ({
  image,
  name,
  price,
  priceTag,
  descripcion,
  closeModal,
  onSubmit,
}) => {
  console.log(priceTag);
  const tag = priceTag ? priceTag : "Bs";
  console.log(tag);
  const [mealImage, setMealImage] = React.useState(image);
  return (
    <Box
      textAlign="left"
      pos="fixed"
      bg="white"
      zIndex="101"
      top="2vh"
      left="35vw"
      w="30vw"
      h="auto"
      p={8}
    >
      <Icon
        pos="fixed"
        top="3vh"
        left="63vw"
        name="close"
        color="red.300"
        cursor="pointer"
        onClick={closeModal}
      />
      <Formik
        initialValues={{
          image,
          name,
          price,
          priceTag: tag,
          descripcion,
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, "Debe tener 3 caracateres o mas")
            .matches(/[a-z]/, "Necesita almenos una letra minúscula.")
            .matches(/[A-Z]/, "Necesita almenos una letra mayúscula.")
            .required("Campo Obligatorio"),
          price: Yup.string()
            .matches(
              /(^[0-9]+\.\d{1,2}$)|(^\d+$)/,
              'Utilice hasta 2 decimales después de un punto "."'
            )
            .required("Campo Obligatorio"),
          descripcion: Yup.string().max(
            100,
            "No puede usar mas de 100 caracteres"
          ),
        })}
        onSubmit={onSubmit}
      >
        {({ values, handleChange, isSubmitting, isValid }) => (
          <Form>
            <Flex height="100%" align="center" justify="space-evenly">
              <Image
                width="40%"
                height="20vh"
                bg="red.900"
                src={mealImage}
                mb="5px"
              />

              <ImageUploader
                onChange={(e) => {
                  e.preventDefault();

                  const picture = URL.createObjectURL(e.target.files[0]);
                  values.image = picture;
                  setMealImage(picture);
                }}
              />
            </Flex>
            <InputField name="name" placholder="" label="Nombre" />
            <InputField
              mt={4}
              name="price"
              placholder="Ingese el costo"
              label="Precio"
            />
            <RadioGroup
              onChange={handleChange}
              mt={4}
              spacing={5}
              name="priceTag"
              isInline
              defaultValue={tag}
            >
              <Radio
                name="priceTag"
                borderColor="orange.500"
                variantColor="green"
                value="Bs"
              >
                Bolivares
              </Radio>
              <Radio borderColor="orange.500" variantColor="green" value="USD">
                Dolares
              </Radio>
            </RadioGroup>

            <InputField
              textArea
              mt={4}
              name="descripcion"
              placholder="Describa la comida"
              label="Descripcion"
            />

            <Button
              type="submit"
              isLoading={isSubmitting}
              isDisable={isValid}
              variantColor={isValid ? "orange" : "gray"}
              width="full"
              mt={6}
            >
              Guardar
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
