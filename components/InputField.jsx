import React from "react";
import { useField } from "formik";
import {
  Text,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Stack,
  Button,
  IconButton,
  Divider,
} from "@chakra-ui/core";

export const InputField = ({ label, mt, backendError, ...props }) => {
  const [field, { error, initialTouched }] = useField(props);
  console.log(backendError);
  console.log(error);
  console.log(field.name);

  /* 
  console.log(props); */
  return (
    <>
      <FormControl
        mt={mt}
        isInvalid={(error || backendError?.item === field.name) && field.value}
      >
        <FormLabel htmlFor={field.name}>{label}</FormLabel>
        <Input
          {...field}
          {...props}
          id={field.name}
          placeholder={props.placeholdr}
          borderColor="gray.400"
          _hover={{ borderColor: "orange.400" }}
        />
        <FormErrorMessage mt={-2} mb={-4}>
          {error || backendError?.message}
        </FormErrorMessage>
      </FormControl>
    </>
  );
};
