import { Box, Flex, Text, Grid, Link, Divider } from "@chakra-ui/core";
export const NavSideBar = ({changeToUbicacion, changeToPerfil}) => {
  return (
    <Box>
      <p>Tipo de membresia</p>

      <p onClick={changeToPerfil}>Perfil</p>

      <p onClick={changeToUbicacion}>Ubicacion</p>

      <p>Notificaciones</p>

      <p>Borrar cuenta</p>
      <Divider borderColor="orange.500" />
      <p>Cerrar sesión</p>
    </Box>
  );
};
