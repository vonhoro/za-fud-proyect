import React from "react";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  MenuOptionGroup,
  MenuItemOption,
} from "@chakra-ui/core";
export const SearchBar = ({ Heigh, Width, MarginTop }) => {
  return (
    <InputGroup mt={MarginTop} w={Width}>
      <InputLeftAddon
        h={Heigh}
        children={
          <Menu>
            <MenuButton
              h={Heigh}
              as={"Text"}
              transition="all 0.2s"
              rounded="md"
              borderwidth="1px"
              bg="white"
              _hover={{ bg: "red" }}
              _expanded={{ bg: "gray.200" }}
              _focus={{ outline: 0, boxShadow: "outline" }}
            >
              Menu <Icon name="moon" />
            </MenuButton>
            <MenuList>
              <MenuItem>Frios</MenuItem>
              <MenuItem>Calientes</MenuItem>
              <MenuItem>Otras cosas</MenuItem>
              <MenuItem>Otras cosas</MenuItem>
              <MenuItem>Otras cosas</MenuItem>
              <MenuItem>Otras cosas</MenuItem>
              <MenuItem>Otras cosas</MenuItem>
              <MenuItem>Otras cosas</MenuItem>
            </MenuList>
          </Menu>
        }
      />
      <Input
        h={Heigh}
        type="text"
        id="email"
        aria-describedby="email-helper-text"
      />
      <InputRightAddon h={Heigh} children={<Icon bg="blue" name="search" />} />
    </InputGroup>
  );
};
