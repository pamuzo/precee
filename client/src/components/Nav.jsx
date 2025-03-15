import { Button, Flex, HStack, Spacer, useColorMode } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import { UserButton } from "@clerk/clerk-react";

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  // const { user } = useUser();

  return (
    <>
      <Flex pr={5} mb={5} boxShadow={"0px 0px 8px 2px rgba(0, 0, 0, 0.12)"}>
        <Sidebar />

        <Spacer />
        <HStack py={3}>
          {/* <Link to={"/MeasurementForm"}>
            <Button p={1} variant={"ghost"}>
              <PlusSquareIcon fontSize={18} />
            </Button>
          </Link> */}
          {/* <Auth /> */}
          <UserButton />

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
