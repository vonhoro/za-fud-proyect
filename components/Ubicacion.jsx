import { Box, FormLabel, Switch, Icon, Flex, Link, SimpleGrid } from "@chakra-ui/core";
export const Ubicacion = () => {
  return (

    <Box>
      <Box
        borderTop="1px"
        borderBottom="1px"
        borderRadius="10px 10px 0px 0px"
        textAlign="center"
        marginTop="-1px"
        marginLeft="auto"
        marginRight="auto"
        marginBottom="10px"
        backgroundColor="white"
        padding="-20px"
      >
        <h2>Opciones de ubicacion</h2>
      </Box>

      <Box
        marginTop="15px"
        marginLeft="15px"
        marginBottom="10px"
        h="400px"
      >
        <FormLabel htmlFor="ubicacion-alerts">Habilitar ubicacion</FormLabel>
        <Switch id="ubicacion-alerts" />
      </Box>
    </Box>
  );
};
