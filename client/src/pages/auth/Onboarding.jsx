import {
  AbsoluteCenter,
  Box,
  Button,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Onboarding = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        position: "absolute",
        width: "100vw",
        height: "100vh",
        left: 0,
        top: 0,
        background: "#eee",
      }}
    >
      <Box h={"100vh"} display={{ base: "none", lg: "block" }}>
        <Image
          src="/images/rm clothin.png"
          h={"100%"}
          objectFit={"cover"}
          alt="rm clothin"
        />
      </Box>

      <Box
        w={{ base: "90%", sm: "80%", md: "75%", lg: "30%" }}
        overflow={"hidden"}
        position={"relative"}
        h={"100vh"}
      >
        <Box mb={2} w={"100%"} position={"absolute"} top={18}>
          <Heading textAlign={"center"} color={"#00425A"}>
            precee
          </Heading>
          <Text
            color={"#00425a"}
            fontSize={"md"}
            mb={4}
            textAlign={"center"}
            fontWeight={"thin"}
          >
            Keep your Fashion Business in one Place
          </Text>
        </Box>

        <Image src="/images/splash.png" boxSize={"100%"} objectFit={"cover"} />
        <AbsoluteCenter
          axis="horizontal"
          borderTopRadius={20}
          // bg={"white"}
          w={"100%"}
          h={"170px"}
          bottom={0}
          p={"2px"}

          // boxShadow={"0px 0px 10px 3px rgba(0, 0, 0, 0.12)"}
        >
          <Link to={"/signin"}>
            <Button
              //mt={20}
              mb={6}
              color={"white"}
              fontSize={"xl"}
              py={6}
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
              fontSize={"xl"}
              py={6}
              bg={"#D88C26"}
              _hover={{ opacity: 0.8 }}
            >
              Get Started
            </Button>
          </Link>
        </AbsoluteCenter>
      </Box>
      {/* </Box> */}
    </div>
  );
};

export default Onboarding;
