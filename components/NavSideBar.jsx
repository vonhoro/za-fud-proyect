import { Box, Text, Link, Divider } from "@chakra-ui/core";
export const NavSideBar = ({
  changeToUbicacion,
  changeToPerfil,
  changeToSuscripcion,
  changeToNotifications,
  changeToBorrar_Cuenta,
}) => {
  return (
    <Box marginLeft="5%">
      <Text fontWeight="600" color="yellow.800" cursor="pointer" width="150px">
        <p onClick={changeToSuscripcion}>Tipo de membresia</p>
      </Text>

      <Text fontWeight="600" color="yellow.800" cursor="pointer" width="45px">
        <p onClick={changeToPerfil}>Perfil</p>
      </Text>

      <Text fontWeight="600" color="yellow.800" cursor="pointer" width="75px">
        <p onClick={changeToUbicacion}>Ubicacion</p>
      </Text>

      <Text fontWeight="600" color="yellow.800" cursor="pointer" width="100px">
        <p onClick={changeToNotifications}>Notificaciones</p>
      </Text>

      <Text fontWeight="600" color="yellow.800" cursor="pointer" width="110px">
        <p onClick={changeToBorrar_Cuenta}>Borrar cuenta</p>
      </Text>
      <Divider borderColor="orange.500" />
      <Text fontWeight="600" color="yellow.800" cursor="pointer" width="110px">
        <p>Cerrar sesión</p>
      </Text>
    </Box>
  );
};
