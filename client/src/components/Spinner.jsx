import { Flex, Spinner, Text } from "@chakra-ui/react";

const Spin = () => {
  return (
    <Flex justifyContent={"center"} mt={"30vh"} alignItems={"center"} gap={4}>
      <Spinner
        size="xl"
        thickness="4px"
        emptyColor="gray.200"
        color="blue.500"
      />
      <Text>Loading...</Text>
    </Flex>
  );
};

export default Spin;
