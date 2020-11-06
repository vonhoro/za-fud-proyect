import { Box, Flex, Text, Grid, Link, Divider } from "@chakra-ui/core";
export const NavSideBar = ({ changeToUbicacion, changeToPerfil, changeToSuscripcion, changeToNotifications, changeToBorrar_Cuenta }) => {
  return (
    <Box>
      <p onClick={changeToSuscripcion}>Tipo de membresia</p>

      <p onClick={changeToPerfil}>Perfil</p>

      <p onClick={changeToUbicacion}>Ubicacion</p>

      <p onClick={changeToNotifications}>Notificaciones</p>

      <p onClick={changeToBorrar_Cuenta}>Borrar cuenta</p>
      <Divider borderColor="orange.500" />
      <p>Cerrar sesión</p>
    </Box>
  );
};
