import { Box, Flex, Text, Grid, Link, Divider } from "@chakra-ui/core";;
export const NavSideBar = () => {
    return (
        <Box>
            <p>Tipo de membresia</p>

            <p>Perfil</p>

            <p>Ubicacion</p>

            <p>Notificaciones</p>

            <p>Borrar cuenta</p>
            <Divider borderColor="orange.500" />
            <p>Cerrar sesión</p>

        </Box>
    );
};