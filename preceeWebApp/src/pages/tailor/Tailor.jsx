import {
  Button,
  Container,
  HStack,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsEnvelopeAt, BsWhatsapp } from "react-icons/bs";
import { GiSewingMachine, GiSewingNeedle } from "react-icons/gi";
import { Link } from "react-router-dom";

const Tailor = () => {
  const btnOrangeBg = useColorModeValue("#00425A", "#D88C26");
  const btnBlueBg = useColorModeValue("#D88C26", "#00425A");
  const colorTxtBg = useColorModeValue("white", "#000");
  return (
    <Container justifyItems={"center"} paddingBottom={"24"}>
      <Link to={"/jobSeeker"}>
        <Button
          color={colorTxtBg}
          bg={btnOrangeBg}
          leftIcon={<GiSewingMachine />}
          mr={3}
        >
          Job Seeker
        </Button>
      </Link>
      <Link to={"/tailorSeeker"}>
        <Button bg={btnBlueBg} leftIcon={<GiSewingNeedle />}>
          Tailor Seeker
        </Button>
      </Link>
      <Text mt={6}>
        Are you a tailor looking to work with bigger tailor to get paid and
        inprove on your still.👌
      </Text>
      <Text fontSize={"3xl"} textAlign={"center"} my={4}>
        OR
      </Text>
      <Text mb={6}>
        A tailor that need other tailor to employ and put their still and
        service into use.👊
      </Text>

      <Text>
        We bring you a platform where tailors meet, discus, share, learn, teach,
        to make the fashion a better industry.💃💃💃
      </Text>
      <Image
        maxW={"300px"}
        my={10}
        justifySelf={"center"}
        src="/images/soon.png"
      />
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
      {/* ads */}
      <div id="container-84cbaac29390979d3f33c9e2d9e9de53"></div>
    </Container>
  );
};

export default Tailor;
