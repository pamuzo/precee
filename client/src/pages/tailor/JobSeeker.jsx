import { BsEnvelopeAt, BsWhatsapp } from "react-icons/bs";
import BackBotton from "../../components/backBotton";
import {
  Box,
  Container,
  Heading,
  HStack,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const JobSeeker = () => {
  const colorTxt = useColorModeValue("#00425A", "white");
  return (
    <Container>
      <BackBotton />
      <Box justifyItems={"center"} paddingBottom={"84px"}>
        <Heading textAlign={"center"} color={colorTxt}>
          Job Seeker
        </Heading>
        <Text mb={10} textAlign={"center"}>
          I&apos;m available for employment
        </Text>
        <Image
          maxW={"300px"}
          my={10}
          justifySelf={"center"}
          src="/images/jobSeeker.webp"
        />
        <Text textAlign={"center"}>
          Find highly skilled and detail-oriented tailors who are seeking for
          jobs. They are specialized in custom fittings, alterations, and
          precision craftsmanship, with a passion for creating high-quality,
          well-fitted garments and ensuring client satisfaction.
        </Text>
        <Image
          maxW={"300px"}
          my={10}
          justifySelf={"center"}
          src="/images/soon.png"
        />
        <Text textAlign={"center"}>
          Will soon be open to tailors who are seeking for jobs in fashion to
          showcase themself to those who require their skills and services. keep
          in touch!!!!!!
        </Text>
        <Text color={"#D88C26"} mt={10} fontSize={"2xl"} fontWeight={"bold"}>
          more enquiries...
        </Text>
        <Text fontSize={"sm"} fontWeight={"light"}>
          {" "}
          Send a message on whatsapp or e-mail
        </Text>
        <HStack>
          <BsWhatsapp /> <Text> +44 7453596993</Text>
        </HStack>
        <HStack>
          <BsEnvelopeAt /> <Text>lawancy@lawancy.com</Text>
        </HStack>
      </Box>
    </Container>
  );
};

export default JobSeeker;
