import { NavSideBar } from "../components/NavSideBar";
import { InfoSetting } from "../components/InfoSetting";
import { Suscripcion } from "../components/Suscripcion";
import { Perfil } from "../components/Perfil";
import { Ubicacion } from "../components/Ubicacion";
import { Notifications } from "../components/Notifications"
import { Box, Flex } from "@chakra-ui/core";
export const UserWrapper = () => {
  return (
    <>
      <Flex width="full" height="full">
        <Box marginTop="10px" marginLeft="10px" width="35%" height="100%">
          <NavSideBar />
        </Box>

        <Box
          backgroundColor="orange.200"
          border="1px solid"
          borderRadius="10px"
          marginLeft="30px"
          marginTop="10px"
          marginRight="10px"
          width="65%"
          height="auto"
        >
          <Ubicacion />
        </Box>
      </Flex>
    </>
  );
};
