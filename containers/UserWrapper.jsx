import React from 'react'

import { NavSideBar } from "../components/NavSideBar";
import { InfoSetting } from "../components/InfoSetting";
import { Suscripcion } from "../components/Suscripcion";
import { Perfil } from "../components/Perfil";
import { Ubicacion } from "../components/Ubicacion";
import { Notifications } from "../components/Notifications"
import { Box, Flex } from "@chakra-ui/core";



export const UserWrapper = () => {
   
    const [vista,setVista] = React.useState('Perfil')
   
    const Pagina = (vista)=>{
       
       switch (vista) {
          case 'Ubicacion':
             
             return < Ubicacion />
        break
         case 'Perfil': 
         return <Perfil />
          
       }
       
       
       
    }
   
   
   
  return (
    <>
      <Flex width="full" height="full">
        <Box marginTop="10px" marginLeft="10px" width="35%" height="100%">
          <NavSideBar changeToUbicacion ={e=>setVista('Ubicacion')} changeToPerfil = {e=> setVista('Perfil')} />
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
        {Pagina(vista)}
        </Box>
      </Flex>
    </>
  );
};
