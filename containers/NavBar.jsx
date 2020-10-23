import { SearchBar } from "../components/SearchBar";
import { Box, Button, Flex, Text, Stack, Icon } from "@chakra-ui/core";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
const CHECK_USER = gql`
  query Me {
    me {
      user
      userId
      welcome
    }
  }
`;

export const NavBar = ({ isStatic }) => {
  const { loading, error, data } = useQuery(CHECK_USER);
  let check = null;
  console.log(data?.me);
  const router = useRouter();

  return (
    <Flex
      w="100%"
      h="15vh"
      pb="4vh"
      bg="orange.200"
      borderBottom="black solid 5px"
      justify="Center"
      align="top"
      pos={isStatic ? "" : "Fixed"}
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

          {data?.me ? (
            <>
              {" "}
              <Stack isInline spacing={2} align="center" ml={6}>
                <Text> {data?.me.user}</Text>
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
