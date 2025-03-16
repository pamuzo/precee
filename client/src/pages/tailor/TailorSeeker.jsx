import BackBotton from "../../components/backBotton";
import {
  Box,
  Heading,
  Text,
  Image,
  HStack,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsEnvelopeAt, BsWhatsapp } from "react-icons/bs";

const TailorSeeker = () => {
  const colorTxt = useColorModeValue("#00425A", "white");
  return (
    <Container>
      <BackBotton />
      <Box justifyItems={"center"} paddingBottom={"84px"}>
        <Heading textAlign={"center"} color={colorTxt}>
          Tailor Seeker{" "}
        </Heading>
        <Text mb={10} textAlign={"center"}>
          I need a skilled Tailor for emploment...
        </Text>
        <Image
          boxSize={"300px"}
          my={10}
          justifySelf={"center"}
          src="/images/tailorSeeker.webp"
        />
        <Text textAlign={"center"}>
          Looking for a highly skilled and detail-oriented tailors. Person
          should be specialized in custom fittings, alterations, and precision
          craftsmanship, with a passion for creating high-quality, well-fitted
          garments.
        </Text>
        <Image
          maxW={"300px"}
          my={10}
          justifySelf={"center"}
          src="/images/soon.png"
        />
        <Text textAlign={"center"}>
          Will soon be open to tailors who need to employ other tailor, to
          showcase themself for offers, location, requirements. keep in
          touch!!!!!!
        </Text>
        <Text color={"#D88C26"} mt={10} fontSize={"2xl"} fontWeight={"bold"}>
          more enquiries...
        </Text>
        <Text fontSize={"sm"} fontWeight={"light"}>
          Send a message on whatsapp or e-mail
        </Text>
        <HStack>
          <BsWhatsapp /> <Text> +44 7453596993</Text>
        </HStack>
        <HStack>
          <BsEnvelopeAt /> <Text>lawancy@lawancy.com</Text>
        </HStack>
      </Box>
      {/* ads */}
      <div id="container-84cbaac29390979d3f33c9e2d9e9de53"></div>
    </Container>
  );
};

export default TailorSeeker;
