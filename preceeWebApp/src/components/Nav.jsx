import {
  Box,
  Button,
  Flex,
  HStack,
  Spacer,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Sidebar from "./Sidebar";

import NavHorizotal from "./navHorizotal";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Account from "./account";

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const colorbg = useColorModeValue("white", "#00425A");
  // const colorTxt = useColorModeValue("#00425A", "white");

  const { user } = useAuth();

  return (
    <>
      <Flex
        pr={5}
        position={"fixed"}
        width={"100vw"}
        backgroundColor={colorbg}
        boxShadow={"0px 0px 8px 2px rgba(0, 0, 0, 0.4)"}
        zIndex={"100"}
      >
        <Box display={{ base: "flex", lg: "none" }}>
          <Sidebar />
        </Box>
        <Box display={{ base: "none", lg: "flex" }}>
          <NavHorizotal />
        </Box>

        <Spacer />
        <HStack py={3}>
          {user ? (
            <Account />
          ) : (
            <>
              <Link Link to={"/signin"}>
                <Button
                  color={"white"}
                  fontSize={"l"}
                  py={4}
                  bg={"#00425A"}
                  w={"full"}
                  _hover={{ opacity: 0.8 }}
                >
                  Log in
                </Button>
              </Link>
              <Link to={"/signup"}>
                <Button
                  w={"full"}
                  color={"white"}
                  fontSize={"l"}
                  py={4}
                  bg={"#D88C26"}
                  _hover={{ opacity: 0.8 }}
                >
                  Get Started
                </Button>
              </Link>

              {/* <UserButton /> */}
            </>
          )}
          <Button
            p={1}
            variant={"ghost"}
            onClick={toggleColorMode}
            fontSize={24}
          >
            {colorMode === "light" ? "🌙" : "🌞"}
          </Button>
        </HStack>
      </Flex>
    </>
  );
};

export default Nav;
