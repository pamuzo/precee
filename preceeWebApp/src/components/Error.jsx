/* eslint-disable react/prop-types */
import { Container, Heading, Image, Stack, Text } from "@chakra-ui/react";

const Error = ({ error }) => {
  return (
    <Container m={"8px"} mb={20}>
      <Stack p={"10px"}>
        <Image src={"/images/errorimg.png"} />
        <Heading color="red" textDecoration={"underline"}>
          404 Error
        </Heading>
        <Text>{error}</Text>
        <Text>Check your internet connection</Text>
        <Text>Refresh your page🔃</Text>
      </Stack>
    </Container>
  );
};

export default Error;
