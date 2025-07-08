import { Link } from "react-router-dom";
import { Flex, Stack, Text, useColorModeValue } from "@chakra-ui/react";

const NavHorizotal = () => {
  const colorTxt = useColorModeValue("#00425A", "white");

  return (
    <Flex py={"4px"} px={10} alignItems={"center"} zIndex={10}>
      <Text color={colorTxt} fontSize={"28px"} fontWeight={"bold"}>
        <Link to={"/"}>precee</Link>
      </Text>

      <Stack
        spacing={"4"}
        direction={"row"}
        align="center"
        justifyContent={"flex-start"}
        px={"2em"}
        h={"60px"}
        fontFamily={"Poppins"}
      >
        <Link to={"/tailor"}>Find Tailor</Link>
        <Link to="#">Find Client</Link>
        <Link to="#">FInd Talent</Link>
        <Link to={"/measurements"}>Measurments</Link>
        <Link to="#">Why Precee</Link>
      </Stack>
    </Flex>
  );
};

export default NavHorizotal;
