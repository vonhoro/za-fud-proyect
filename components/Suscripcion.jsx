import { Box, Icon, Flex, Link, SimpleGrid } from "@chakra-ui/core";
export const Suscripcion = () => {
  return (
    <Box>
      <Box textAlign="center" backgroundColor="orange.200" paddingLeft="10PX">
        <h2>Membresia</h2>
      </Box>

      <Box
        border="1px solid white"
        backgroundColor="white"
        borderRadius="0px 0px 10px 10px"
      >
        <SimpleGrid columns={2}>
          <Box
            height="250px"
            borderTop="1px solid"
            borderRight="1px solid"
            textAlign="center"
          >
            <p>Suscripcion Gratuita</p>
            <Icon name="sun" size="80px" marginTop="35px"></Icon>
          </Box>
          <Box borderLeft="1px solid" borderTop="1px solid" textAlign="center">
            <p>Suscripcion para tiendas</p>
            <Icon name="moon" size="80px" marginTop="35px"></Icon>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};