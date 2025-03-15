import { Button, Flex, useColorModeValue } from "@chakra-ui/react";
import { GrBlog } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import { IoHomeSharp, IoPerson } from "react-icons/io5";
import { Link } from "react-router-dom";

const Tab = () => {
  const color = useColorModeValue("white", "gray.800");
  const colorIcon = useColorModeValue("#00425A", "gray.200");

  return (
    <>
      <Flex
        bg={color}
        w={"100vw"}
        justifyContent={"space-around"}
        boxShadow="0px 0px 10px 3px rgba(0, 0, 0, 0.2)"
        py={3}
        px={2}
        borderTopRadius={20}
      >
        <Link to={"/"}>
          <Button p={1} color={colorIcon} variant={"ghost"}>
            <IoHomeSharp fontSize={20} />
          </Button>
        </Link>
        <Button p={1} color={colorIcon} variant={"ghost"}>
          <GrBlog fontSize={20} />
        </Button>
        <Button p={1} color={colorIcon} variant={"ghost"}>
          <IoPerson fontSize={20} />
        </Button>
        <Button p={1} color={colorIcon} variant={"ghost"}>
          <IoMdSettings fontSize={20} />
        </Button>
      </Flex>
    </>
  );
};

export default Tab;
