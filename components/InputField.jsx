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

export const InputField = ({ label, mt, ...props }) => {
  const [field, { error, initialTouched }] = useField(props);
  /* 
  console.log(props); */
  return (
    <>
      <FormControl mt={mt} isInvalid={error && field.value}>
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
          {error}
        </FormErrorMessage>
      </FormControl>
    </>
  );
};
