import { SearchBar } from "../components/SearchBar";
import { Box, Button, Flex, Text, Stack, Icon } from "@chakra-ui/core";
import { useRouter } from "next/router";

export const NavBar = ({ UserData }) => {
  const router = useRouter();

  return (
    <Flex
      w="100vw"
      h="15vh"
      pb="4vh"
      bg="#F6DFC4"
      justify="Center"
      align="top"
      pos="Fixed"
      zIndex={100}
    >
      <Stack isInline spacing={12} align="center">
        <Text>Za Fud Proyect</Text>
        <Stack spacing={1}>
          <SearchBar Heigh="4vh" Width="40vw" MarginTop="10%" />
          <Stack isInline spacing={8} align="center" ml={6}>
            <Text>Za Fud</Text>
            <Text>Za Fud</Text>
            <Text>Za Fud</Text>
            <Text>Za Fud</Text>
            <Text>Za Fud</Text>
            <Text>Za Fud</Text>
            <Text>Za Fud</Text>
          </Stack>
        </Stack>
        <Stack isInline align="center" spacing={2}>
          <Icon name="moon" />
          <Text> Cerca de ti </Text>
        </Stack>
        <Stack isInline align="center" spacing={2}>
          <Icon name="moon" />

          {UserData ? (
            <>
              {" "}
              <Stack isInline spacing={2} align="center" ml={6}>
                <Text> {UserData.user}</Text>
                <Text>LogOut</Text>{" "}
              </Stack>
            </>
          ) : (
            <Text
              onClick={(e) => {
                router.push("/login");
              }}
            >
              Login
            </Text>
          )}
        </Stack>
      </Stack>
    </Flex>
  );
};
