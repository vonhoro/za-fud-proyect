import { Box, FormLabel, Switch, Icon, Flex, Link, SimpleGrid } from "@chakra-ui/core";
export const Ubicacion = () => {
  return (
    <Box
      marginTop="15px"
      marginLeft="15px">
      <FormLabel htmlFor="ubicacion-alerts">Habilitar ubicacion</FormLabel>
      <Switch id="ubicacion-alerts" />
    </Box>
  );
};
