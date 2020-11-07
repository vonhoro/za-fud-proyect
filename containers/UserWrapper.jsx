import React from 'react'

import { NavSideBar } from "../components/NavSideBar";
import { NavBar } from "../containers/NavBar";
import { Suscripcion } from "../components/Suscripcion";
import { Perfil } from "../components/Perfil";
import { Ubicacion } from "../components/Ubicacion";
import { Notifications } from "../components/Notifications"
import { Borrar_Cuenta } from "../components/Borrar_Cuenta"
import { Faq } from "../components/Faq"
import { Box, Flex, Center } from "@chakra-ui/core";



export const UserWrapper = () => {

  const [vista, setVista] = React.useState('Perfil')

  const Pagina = (vista) => {

    switch (vista) {
      case 'Suscripcion':
        return < Suscripcion />
        break

      case 'Perfil':
        return <Perfil />
        break

      case "Ubicacion":
        return < Ubicacion />
        break

      case "Notifications":
        return <Notifications />
        break

      case "Borrar_Cuenta":
        return <Borrar_Cuenta />
        break
    }



  }



  return (
    <>
      < NavBar />
      <Flex
        width="full"
        height="full"
        paddingTop="12%"
        minHeight="100vh"
        backgroundColor="rgba(255, 255, 233, 0.6)"
      >
        <Box
          marginTop="10px"
          marginLeft="10px"
          width="35%"
          height="50%">
          <NavSideBar changeToSuscripcion={e => setVista("Suscripcion")} changeToUbicacion={e => setVista('Ubicacion')} changeToPerfil={e => setVista('Perfil')} changeToNotifications={e => setVista("Notifications")} changeToBorrar_Cuenta={e => setVista("Borrar_Cuenta")} />
        </Box>

        <Box
          backgroundColor="orange.200"
          border="1px solid"
          borderRadius="10px"
          marginLeft="30px"
          marginTop="10px"
          marginRight="10px"
          marginBottom="10px"
          width="65%"
          height={[
            "100%", // base
            "50%", // 480px upwards
            "25%", // 768px upwards
            "15%", // 992px upwards
          ]}
        >
          {Pagina(vista)}
        </Box>
      </Flex >
      <Box
        marginTop="10%"
        width="100%"
        height="100%"
        border="1px solid"
        backgroundColor="rgba(0, 0, 0, 1)"
      >
        <Faq />
      </Box>
    </>
  );
};
