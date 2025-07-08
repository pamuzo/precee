import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  List,
  ListIcon,
  ListItem,
  Spacer,
  useDisclosure,
  IconButton,
  Text,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsBank } from "react-icons/bs";
import { FaChartPie, FaPenNib } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";
import { IoIosMail, IoIosPeople, IoMdSettings } from "react-icons/io";
import { RiFunctionAddFill } from "react-icons/ri";
import { IoPersonAdd } from "react-icons/io5";
import { PiTelevisionFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const color = useColorModeValue("white", "gray.800");
  const colorTxt = useColorModeValue("#00425A", "white");

  const { user, logout } = useAuth();

  return (
    <Flex
      position={isOpen && "fixed"}
      onClick={isOpen ? onClose : onOpen}
      zIndex={15}
      bg={isOpen && "rgba(0, 0, 0, 0.2)"}
      direction={"column"}
      h={isOpen && "100vh"}
      width={isOpen && "100vw"}
      boxShadow={isOpen && "0px 0px 10px 3px rgba(0, 0, 0, 0.2)"}
    >
      <Box bg={isOpen && color} width={isOpen && "250px"} pl={5}>
        <Box>
          <HStack
            pr={3}
            pt={3}
            alignItems={"center"}
            justifyContent={isOpen && "space-between"}
            flexDir={isOpen && "row-reverse"}
          >
            <IconButton
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon fontSize="28px" />}
              onClick={isOpen ? onClose : onOpen}
              variant="ghost"
              aria-label="Toggle navigation"
              borderRadius={"50px"}
              color={colorTxt}
              boxShadow={isOpen && "0px 0px 8px 2px rgba(0, 0, 0, 0.12)"}
            />
            <Text
              color={colorTxt}
              textTransform={"capital"}
              fontSize={"28px"}
              fontWeight={"bold"}
            >
              <Link to={"/"}>precee</Link>
            </Text>
          </HStack>
        </Box>
        <Box>
          <Flex
            as="nav"
            h={isOpen && "100vh"}
            onClick={isOpen ? onClose : onOpen}
          >
            <Flex
              direction={"column"}
              display={isOpen ? "flex" : "none"}
              pt={6}
              pb={"90px"}
              fontSize={"md"}
              h={"100%"}
              color={colorTxt}
            >
              <Box>
                <List spacing={2}>
                  {/* <ListItem>
                    <Link to={"/"}>
                      <ListIcon as={MdDashboard} mr={6} />
                      {user
                        ? `${
                            !user?.username ? user?.firstName : user?.username
                          }`
                        : "No User"}
                    </Link>
                  </ListItem> */}
                  <ListItem>
                    <Link to={"/measurements"}>
                      <ListIcon fontSize={"xl"} as={FaChartPie} mr={6} />
                      Measurements
                    </Link>
                  </ListItem>

                  <ListItem>
                    <Link to={"/measurementform"}>
                      <ListIcon fontSize={"xl"} as={RiFunctionAddFill} mr={6} />
                      Add measurement
                    </Link>
                  </ListItem>

                  <ListItem>
                    <Link to={"/"}>
                      <ListIcon fontSize={"xl"} as={BsBank} mr={6} />
                      Blog
                    </Link>
                  </ListItem>

                  <ListItem>
                    <Link to={"/news"}>
                      <ListIcon fontSize={"xl"} as={PiTelevisionFill} mr={6} />
                      News
                    </Link>
                  </ListItem>

                  <ListItem>
                    <Link to={"/tailor"}>
                      <ListIcon fontSize={"xl"} as={IoIosPeople} mr={6} />
                      Tailors
                    </Link>
                  </ListItem>

                  <ListItem>
                    <Link to={"/studio"}>
                      <ListIcon fontSize={"xl"} as={FaPenNib} mr={6} />
                      Patten Studio
                    </Link>
                  </ListItem>

                  <ListItem>
                    <Link to={"/profile"}>
                      <ListIcon fontSize={"xl"} as={IoPersonAdd} mr={6} />
                      Profile
                    </Link>
                  </ListItem>

                  <ListItem>
                    <Link to={"/"}>
                      <ListIcon fontSize={"xl"} as={IoIosMail} mr={6} />
                      Messages
                    </Link>
                  </ListItem>
                </List>
              </Box>
              <Spacer />

              <Box>
                <List>
                  <ListItem>
                    <Link to={"/"}>
                      <ListIcon fontSize={"xl"} as={IoMdSettings} mr={6} />
                      Settings
                    </Link>
                  </ListItem>

                  <ListItem display={"flex"} marginBottom={"20px"}>
                    {/* <Link to={"/signin"}> */}
                    <ListIcon fontSize={"xl"} as={GrLogout} mr={6} />
                    {user ? (
                      <Box _hover={{ cursor: "pointer" }} onClick={logout}>
                        Sign out
                      </Box>
                    ) : (
                      <Link to={"/signin"}>Login</Link>
                    )}
                    {/* </Link> */}
                  </ListItem>
                </List>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default Sidebar;
