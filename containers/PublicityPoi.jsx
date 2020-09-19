import React from "react";
import { Box, IconButton, Grid } from "@chakra-ui/core";
import { Publicity } from "../components/Publicity";

export const PublicityPoi = () => {
  const [publicityItems, setPublicityItems] = React.useState([
    { id: "a", color: "red.200", area: "1 / 1" },
    { id: "b", color: "purple.200", area: "1 / 2" },
    { id: "c", color: "cyan.200", area: "1 / 3" },
    { id: "d", color: "purple.900", area: "1 / 4" },
    { id: "e", color: "pink.50", area: "1 / 5" },
  ]);
  const [reRender, setReRender] = React.useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      for (const publicity of publicityItems) {
        if (publicity.area.endsWith("1")) {
          publicity.area = "1 / 2";
        } else if (publicity.area.endsWith("2")) {
          publicity.area = "1 / 3";
        } else if (publicity.area.endsWith("3")) {
          publicity.area = "1 / 4";
        } else if (publicity.area.endsWith("4")) {
          publicity.area = "1 / 5";
        } else if (publicity.area.endsWith("5")) {
          publicity.area = "1 / 1";
        }
      }

      setPublicityItems(publicityItems);
      setReRender(!reRender);
    }, 4000);
    return () => clearInterval(interval);
  });

  const moveVisorRight = () => {
    for (const publicity of publicityItems) {
      if (publicity.area.endsWith("1")) {
        publicity.area = "1 / 5";
      } else if (publicity.area.endsWith("2")) {
        publicity.area = "1 / 1";
      } else if (publicity.area.endsWith("3")) {
        publicity.area = "1 / 2";
      } else if (publicity.area.endsWith("4")) {
        publicity.area = "1 / 3";
      } else if (publicity.area.endsWith("5")) {
        publicity.area = "1 / 4";
      }
    }

    setPublicityItems(publicityItems);
    setReRender(!reRender);
  };
  const moveVisorLeft = () => {
    for (const publicity of publicityItems) {
      if (publicity.area.endsWith("1")) {
        publicity.area = "1 / 2";
      } else if (publicity.area.endsWith("2")) {
        publicity.area = "1 / 3";
      } else if (publicity.area.endsWith("3")) {
        publicity.area = "1 / 4";
      } else if (publicity.area.endsWith("4")) {
        publicity.area = "1 / 5";
      } else if (publicity.area.endsWith("5")) {
        publicity.area = "1 / 1";
      }
    }

    setPublicityItems(publicityItems);
    setReRender(!reRender);
  };

  return (
    <Box bg="#000000" h="50vh" w="100vw">
      <Grid h="100%" templateColumns="15vw 15vw 40vw 15vw 15vw">
        {publicityItems.map(({ id, color, area }, index) => (
          <Publicity GridArea={area} key={id} Color={color} children={index} />
        ))}
      </Grid>
      <IconButton
        position="absolute"
        top="25%"
        right="30%"
        onClick={(e) => moveVisorRight()}
        aria-label="Rotate publicity Right"
        icon="arrow-right"
      />
      <IconButton
        position="absolute"
        top="25%"
        left="30%"
        onClick={(e) => moveVisorLeft()}
        aria-label="Rotate publicity Left"
        icon="arrow-left"
      />
    </Box>
  );
};
