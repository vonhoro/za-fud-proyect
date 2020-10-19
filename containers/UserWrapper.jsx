import { NavSideBar } from "../components/NavSideBar";
import { InfoSetting } from "../components/InfoSetting";
import { Box, Flex, } from "@chakra-ui/core";

export const UserWrapper = () => {
    return (
        <>
            <Flex
                width="full"
                height="full"

            >
                <Box
                    marginTop="10px"
                    marginLeft="10px"
                    width="35%"
                    height="100%"
                >
                    <NavSideBar />
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
                    <InfoSetting />
                </Box>
            </Flex>
        </>
    );
};