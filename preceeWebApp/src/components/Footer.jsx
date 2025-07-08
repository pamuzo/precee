import { Box, Divider, HStack, Image, Spacer, Text } from "@chakra-ui/react";

function Footer() {
  const date = new Date();
  return (
    <Box w={"100%"} bg={"#000"} color={"#fff"} px={10}>
      <Text>About us</Text>
      <Divider />
      <HStack pb={5} mt={7}>
        <Box width={"160px"}>
          <Image
            // boxSize="150px"
            //objectFit="cover"
            //  borderRadius={10}
            src="/images/appstore.png"
          />
        </Box>
        <Box width={"160px"}>
          <Image src="/images/googleplay.png" />
        </Box>
        <Spacer />
        <Text color={"#4e4e4e"}>
          &#169; {date.getFullYear()} Precee, MD Lawancy. All Rights Reserved
        </Text>
      </HStack>
    </Box>
  );
}

export default Footer;
