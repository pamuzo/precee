import { ArrowForwardIcon, Search2Icon, StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { PiShareNetworkBold, PiWarehouseBold } from "react-icons/pi";
import { RiMoneyDollarCircleLine, RiYoutubeLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Onboarding = () => {
  const backgroundStyle = {
    backgroundImage: "url('/images/hero.png')",
    backgroundSize: "cover", // Ensures the image covers the entire area
    backgroundPosition: "top", // Centers the image
    height: "100vh", // Full viewport height
    width: "100vw", // Full viewport width
  };
  return (
    <>
      <div style={backgroundStyle}>
        <Flex
          justifyContent={"space-between"}
          alignItems={"flex-start"}
          width={{ base: "100%", lg: "60%" }}
          flexDirection={"column"}
          p={{ base: 4, md: 10 }}
        >
          <Heading
            fontSize={"6xl"}
            font-family={"Gloock"}
            color={"#fff"}
            lineHeight={1}
            mt={"40%"}
            mb={"20px"}
            letterSpacing={"1px"}
          >
            Connecting Fashion Designer...
          </Heading>
          <Stack
            backgroundColor={"#D88C26"}
            width={{ base: "100%", md: "60%" }}
            borderRadius={"10px"}
            mt={5}
            p={30}
            justifyContent={"center"}
          >
            <Text fontSize={"xl"}>Find a fashion Designer</Text>
            <InputGroup>
              <Input placeholder="Search for talent" />
              <InputRightElement>
                <Search2Icon color="#00425a" />
              </InputRightElement>
            </InputGroup>
          </Stack>
        </Flex>
      </div>
      {/* ===========================How it work section======================== */}
      <Box width={"100vw"} px={{ base: "20px", lg: "40px" }} py={"110px"}>
        <Text fontSize={"32px"}>How it works</Text>
        <HStack
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          mt={5}
          fontWeight={"bold"}
          letterSpacing={1}
          gap={6}
        >
          <VStack alignItems={"flex-start"}>
            <Image
              maxW={"350px"}
              borderRadius={10}
              my={2}
              src="/images/jobSeeker.webp"
            />
            <Text>Posting Your Skill is free</Text>
          </VStack>
          <VStack alignItems={"flex-start"}>
            <Image
              maxW={"350px"}
              borderRadius={10}
              my={2}
              src="/images/rmclothin.png"
            />
            <Text>Find Client who are ready to hire</Text>
          </VStack>
          <VStack alignItems={"flex-start"}>
            <Image
              maxW={"350px"}
              borderRadius={10}
              my={4}
              src="/images/tailorSeeker.webp"
            />
            <Text>Get Paid for your skill</Text>
          </VStack>
        </HStack>
      </Box>

      {/* ================================Browse talent by catesgory================= */}
      <Box
        width={"100vw"}
        bg={"#eee"}
        color={"#00425a"}
        px={"40px"}
        py={{ base: "70px", md: "130px" }}
      >
        <Text textAlign={"center"} pb={2} fontSize={"32px"}>
          Browse talent by catesgory
        </Text>
        <Text textAlign={"center"}>
          Looking for Work:
          <span
            style={{
              padding: "6px",
              backgroundColor: "#00425A",
              color: "#fff",
              borderRadius: "3px",
            }}
          >
            Fashion Designer
          </span>
        </Text>

        <Flex
          gap={10}
          width={"100%"}
          mt={12}
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          <Stack
            justify={"space-between"}
            boxShadow={"lg"}
            bg={"#fff"}
            p={3}
            borderRadius={4}
            h={"120px"}
            width={"300px"}
          >
            <Text fontSize={"20px"} letterSpacing={1}>
              Fashion Designer
            </Text>
            <HStack fontSize={24}>
              <StarIcon color={"green"} />
              <Text> 5.0</Text>
              <Spacer />
              <Text>4.5M</Text>
            </HStack>
          </Stack>
          <Stack
            justify={"space-between"}
            boxShadow={"lg"}
            bg={"#fff"}
            p={3}
            borderRadius={4}
            h={"120px"}
            width={"300px"}
          >
            <Text fontSize={"20px"} letterSpacing={1}>
              Pattern Maker
            </Text>
            <HStack fontSize={24}>
              <StarIcon color={"green"} />
              <Text> 4.5</Text>
              <Spacer />
              <Text>1.1K</Text>
            </HStack>
          </Stack>
          <Stack
            justify={"space-between"}
            boxShadow={"lg"}
            bg={"#fff"}
            p={3}
            borderRadius={4}
            h={"120px"}
            width={"300px"}
          >
            <Text fontSize={"20px"} letterSpacing={1}>
              Sewers
            </Text>
            <HStack fontSize={24}>
              <StarIcon color={"green"} />
              <Text> 4.0</Text>
              <Spacer />
              <Text>22.5K</Text>
            </HStack>
          </Stack>
          <Stack
            justify={"space-between"}
            boxShadow={"lg"}
            bg={"#fff"}
            p={3}
            borderRadius={4}
            h={"120px"}
            width={"300px"}
          >
            <Text fontSize={"20px"} letterSpacing={1}>
              Garment Technologist
            </Text>
            <HStack fontSize={24}>
              <StarIcon color={"green"} />
              <Text> 4.0</Text>
              <Spacer />
              <Text>0.5K</Text>
            </HStack>
          </Stack>
          <Stack
            justify={"space-between"}
            boxShadow={"lg"}
            bg={"#fff"}
            p={3}
            borderRadius={4}
            h={"120px"}
            width={"300px"}
          >
            <Text fontSize={"20px"} letterSpacing={1}>
              Seamstresses
            </Text>
            <HStack fontSize={24}>
              <StarIcon color={"green"} />
              <Text> 4.0</Text>
              <Spacer />
              <Text>11.0K</Text>
            </HStack>
          </Stack>
          <Stack
            justify={"space-between"}
            boxShadow={"lg"}
            bg={"#fff"}
            p={3}
            borderRadius={4}
            h={"120px"}
            width={"300px"}
          >
            <Text fontSize={"20px"} letterSpacing={1}>
              Textile Designer
            </Text>
            <HStack fontSize={24}>
              <StarIcon color={"green"} />
              <Text> 4.0</Text>
              <Spacer />
              <Text>4.5K</Text>
            </HStack>
          </Stack>
          <Stack
            justify={"space-between"}
            boxShadow={"lg"}
            bg={"#fff"}
            p={3}
            borderRadius={4}
            h={"120px"}
            width={"300px"}
          >
            <Text fontSize={"20px"} letterSpacing={1}>
              Fabric Supplier
            </Text>
            <HStack fontSize={24}>
              <StarIcon color={"green"} />
              <Text> 4.5</Text>
              <Spacer />
              <Text>0.5K</Text>
            </HStack>
          </Stack>
          <Stack
            justify={"space-between"}
            boxShadow={"lg"}
            bg={"#fff"}
            p={3}
            borderRadius={4}
            h={"120px"}
            width={"300px"}
          >
            <Text fontSize={"20px"} letterSpacing={1}>
              Sample Maker/Tailor
            </Text>
            <HStack fontSize={24}>
              <StarIcon color={"green"} />
              <Text> 4.7</Text>
              <Spacer />
              <Text>17.5K</Text>
            </HStack>
          </Stack>
          <Stack
            justify={"space-between"}
            boxShadow={"lg"}
            bg={"#fff"}
            p={3}
            borderRadius={4}
            h={"120px"}
            width={"300px"}
          >
            <Text fontSize={"20px"} letterSpacing={1}>
              Cloth Designer
            </Text>
            <HStack fontSize={24}>
              <StarIcon color={"green"} />
              <Text> 4.5</Text>
              <Spacer />
              <Text>10.5K</Text>
            </HStack>
          </Stack>
          <Stack
            justify={"space-between"}
            boxShadow={"lg"}
            bg={"#fff"}
            p={3}
            borderRadius={4}
            h={"120px"}
            width={"300px"}
          >
            <Text fontSize={"20px"} letterSpacing={1}>
              Fashion Shop
            </Text>
            <HStack fontSize={24}>
              <StarIcon color={"green"} />
              <Text> 5.0</Text>
              <Spacer />
              <Text>445.8K</Text>
            </HStack>
          </Stack>
        </Flex>
      </Box>

      {/* ====================== for client ================= */}
      <div
        style={{
          ...backgroundStyle,
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1683122013962-8139ef39837c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          height: "100%",
        }}
      >
        <Flex
          flexDir={"column"}
          width={"100vw"}
          h={"100%"}
          bg="rgba(0, 0, 0, 0.7)"
          px={{ base: "20px", lg: "40px" }}
          py={"20px"}
          color={"#fff"}
        >
          <Text>For Clients</Text>
          <Heading
            fontSize={"72px"}
            lineHeight={1}
            mt={{ base: "80px", md: "140px" }}
          >
            Find Talent
          </Heading>
          <Text width={"360px"} fontSize={"24px"}>
            Work with independent fashion talent who are ready to relocate and
            get the job done...
          </Text>

          <Flex
            gap={{ base: 6, lg: 10 }}
            width={"100%"}
            mt={8}
            flexWrap={"wrap"}
            justifyContent={"center"}
          >
            <Stack
              justify={"space-between"}
              boxShadow={"dark-lg"}
              bg={"#254D70"}
              p={3}
              flexGrow={1}
              borderRadius={10}
            >
              <Text fontSize={"36px"} lineHeight={"40px"}>
                Post a job Vacancy <br /> and hire a pro
              </Text>
              <HStack>
                <Text>Fashion talent marketplace </Text>
                <ArrowForwardIcon />
              </HStack>
            </Stack>
            <Stack
              justify={"space-between"}
              boxShadow={"dark-lg"}
              bg={"#102E50"}
              p={3}
              borderRadius={10}
              flexGrow={1}
            >
              <Text fontSize={"36px"} lineHeight={"40px"}>
                Browse and <br /> Buy projects
              </Text>
              <HStack>
                <Text>Fashion Shop </Text>
                <ArrowForwardIcon />
              </HStack>
            </Stack>
            <Stack
              justify={"space-between"}
              boxShadow={"dark-lg"}
              bg={"#00809D"}
              p={3}
              borderRadius={4}
              flexGrow={1}
            >
              <Text fontSize={"36px"} lineHeight={"40px"}>
                Be informed <br /> Jion the Hub
              </Text>
              <HStack>
                <Text>fashion community </Text>
                <ArrowForwardIcon />
              </HStack>
            </Stack>
          </Flex>
        </Flex>
      </div>
      {/* ==================================== Fashion Shop  ======================*/}
      <Flex
        my={{ base: "70px", md: "120px" }}
        alignItems={"center"}
        //justifyContent={"center"}
        textAlign={"center"}
        flexWrap={"wrap"}
      >
        <Box flexGrow={1} py={10}>
          <Heading>Fashion Home</Heading>
          <Button>shop Now!</Button>
        </Box>
        <Stack width={{ base: "100%", md: "50%" }}>
          <div
            style={{
              ...backgroundStyle,
              backgroundImage:
                "url('https://images.unsplash.com/photo-1570857502809-08184874388e?q=80&w=2078&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              width: "100%",
              //flexGrow: 1,
              height: "510px",
              backgroundPosition: "center",
            }}
          >
            <Box _hover={{ bg: "rgba(0, 0, 0, 0.5)" }} h={"100%"}></Box>
          </div>
        </Stack>
      </Flex>
      <Box
        textAlign={"center"}
        width={"100vw"}
        mb={"110px"}
        py={"30px"}
        bgGradient="linear(to-r, #973131, #D88C26, red)"
      >
        <Heading>We love Fashion</Heading>
        <Text> We are social</Text>
        <HStack justifyContent={"center"}>
          <FaInstagram />
          <FaFacebookF />
          <RiYoutubeLine />
          <FaTiktok />
        </HStack>
      </Box>

      {/* ================================ for Talent =============================== */}
      <div
        style={{
          ...backgroundStyle,
          backgroundImage: "url('/images/sewingmachine.jpg')",
          height: "100%",
          backgroundPosition: "center", // Centers the image
        }}
      >
        <Flex
          flexDir={"column"}
          width={"100vw"}
          h={"100%"}
          bg="rgba(0, 0, 0, 0.7)"
          px={{ base: "20px", lg: "40px" }}
          py={"20px"}
          color={"#fff"}
        >
          <Text>For Talent</Text>
          <Heading
            fontSize={"72px"}
            lineHeight={1}
            mt={{ base: "80px", md: "140px" }}
          >
            Find a great working Place
          </Heading>
          <Text width={"360px"} fontSize={"24px"}>
            Work with clients who are ready to accommodate and work...
          </Text>
          <Divider mt={8} />

          <Flex gap={{ base: 6, lg: 10 }} width={"100%"} flexWrap={"wrap"}>
            <HStack flexGrow={1}>
              <PiShareNetworkBold fontSize={"36px"} />
              <Text width={{ base: "100%", md: "350px" }} fontSize={"20px"}>
                Find opportunity every where to push your career to greater
                hight
              </Text>
            </HStack>

            <HStack flexGrow={1}>
              <PiWarehouseBold fontSize={"36px"} />
              <Text width={{ base: "100%", md: "350px" }} fontSize={"20px"}>
                Control where and how you should work
              </Text>
            </HStack>
            <HStack flexGrow={1}>
              <RiMoneyDollarCircleLine fontSize={"36px"} />
              <Text width={{ base: "100%", md: "350px" }} fontSize={"20px"}>
                Make more, work more, there different way to earn
              </Text>
            </HStack>
          </Flex>
          <Button width={"xs"} mt={8}>
            Find Opportunity
          </Button>
        </Flex>
      </div>
    </>
  );
};

export default Onboarding;
