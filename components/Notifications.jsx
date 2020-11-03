import { Box, FormLabel, Switch, Icon, Flex, Link, SimpleGrid } from "@chakra-ui/core";
export const Notifications = () => {
    return (
        <Box
            marginTop="15px"
            marginLeft="15px">
            <FormLabel htmlFor="notifications-alerts">Habilitar notificaciones</FormLabel>
            <Switch id="notifications-alerts" />
        </Box>
    );
};