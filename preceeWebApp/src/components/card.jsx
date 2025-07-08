/* eslint-disable react/prop-types */
import { Box, Stack, useColorModeValue } from "@chakra-ui/react";

const Card = (props) => {
  const colorShadow = useColorModeValue(
    "0px 0px 10px 3px rgba(0, 0, 0, 0.12)",
    "0px 0px 10px 3px rgba(0, 0, 0, 0.3)"
  );
  return (
    <Box
      as="div"
      overflow={"hidden"}
      m={"8px"}
      mb={6}
      borderRadius="10px"
      boxShadow={colorShadow}
      p="2px"
      rounded="md"
    >
      <Stack overflow={"hidden"} p={"10px"}>
        {props.children}
      </Stack>
    </Box>
  );
};

export default Card;
