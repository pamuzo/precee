import BackBotton from "../../components/backBotton";
import {
  Container,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

const CreativeStudio = () => {
  const colorTxt = useColorModeValue("#00425A", "white");
  return (
    <Container paddingBottom={24}>
      <BackBotton />
      <Heading fontSize={"4xl"} textAlign={"center"} color={colorTxt}>
        Creative Studio
      </Heading>
      <Text textAlign={"center"} fontWeight={"thin"} color={"gray"}>
        {" "}
        A tool for fashion design
      </Text>
      <Text textAlign={"center"}>
        Precision, Flexibility, and Quality Design
      </Text>
      <Image
        maxW={"300px"}
        my={10}
        justifySelf={"center"}
        src="/images/soon.png"
      />
      <List spacing={3}>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Sketching and Illustration
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Technical Flats
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Pattern Making
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Textile and Print Design
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Color and Fabric Experimentation
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Mood Boards and Presentations
        </ListItem>
      </List>
    </Container>
  );
};

export default CreativeStudio;
