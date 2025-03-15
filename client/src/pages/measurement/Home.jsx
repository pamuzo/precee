import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useMeasurementStore } from "../../store/measurement";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/card";
import Spin from "../../components/Spinner";
import moment from "moment";
import { AddIcon, CheckIcon, EditIcon, SearchIcon } from "@chakra-ui/icons";
import { useUser } from "@clerk/clerk-react";
import Error from "../../components/Error";
import VerticalAds from "../../components/Ads/verticalAds";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { measurements, updateMeasurement, fetchMeasurements, loading, error } =
    useMeasurementStore();
  const toast = useToast();
  const navigate = useNavigate();
  const colortxt = useColorModeValue("white", "#00425A");
  const colorbg = useColorModeValue("#00425A", "white");
  const colorInputFocus = useColorModeValue(
    "rgba(224, 222, 222, 0.5)",
    "rgba(247, 247, 247, 0.1)"
  );

  const { user } = useUser();
  useEffect(() => {
    if (user) {
      fetchMeasurements();
    }
  }, [user, fetchMeasurements]);

  if (loading) return <Spin />;
  if (error) return <Error error={error} />;

  const updatedmeasyrements = measurements.flatMap((measure, index) => {
    return index === 2
      ? [measure, <VerticalAds key={`${measure.length + 1}`} />]
      : // : index === 5
        // ? [measure, <Error key={`${measure.length + 2}`} />]
        measure;
  });
  // to get the number of days left
  const daysLeft = (measurement) => {
    return Math.floor(
      (new Date(measurement.collectionDate) - new Date()) /
        (1000 * 60 * 60 * 24)
    );
  };

  const handleStatus = async (mid, data) => {
    const measurement = measurements.filter((measurement) => {
      return measurement._id === mid;
    });

    if (measurement[0].measurementStatus === "completed") {
      navigate(`/measurementform/${mid}`);
    }
    if (measurement[0].measurementStatus === "uncompleted") {
      const { success, message } = await updateMeasurement(
        measurement[0]._id,
        data
      );
      navigate(`/${mid}`);
      if (!success) {
        toast({
          title: "Error",
          description: message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Success",
          description: message,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <Container>
      <Link to={"/MeasurementForm"}>
        <Button
          position={"fixed"}
          bottom={"80px"}
          right={5}
          color={colortxt}
          bg={colorbg}
          h={"50px"}
          w={"50px"}
          zIndex={16}
          borderRadius={"50px"}
          boxShadow={"0px 0px 10px 5px rgba(0, 0, 0, 0.2)"}
        >
          <AddIcon fontSize={"24px"} />
        </Button>
      </Link>
      {/* <CustomSignup /> */}
      {/* ......................................Search Bar...................... */}
      <HStack justifyContent={"space-between"} px={3}>
        <InputGroup width={"70%"}>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search"
            focusBorderColor={colorInputFocus}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </InputGroup>
        <Text>Total: {measurements.length}</Text>
      </HStack>

      {updatedmeasyrements
        .filter((item) => {
          if (searchTerm === "") return item;
          else if (
            item.phoneNumber.toString().includes(searchTerm.toLowerCase()) ||
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return item;
          }
        })

        .map((measurement, index) =>
          React.isValidElement(measurement) ? (
            measurement
          ) : (
            <Box key={measurement._id} position={"relative"}>
              {/* {index === 2 ? [measurement, 99] : measurement} */}
              <Link to={`/${measurement._id}`}>
                <Card position={"relative"}>
                  <HStack>
                    <Image
                      src={
                        measurement.gender === "male"
                          ? "/images/male2.png"
                          : "/images/female2.png"
                      }
                      maxW={"60px"}
                      h={"60px"}
                      alt={
                        measurement.gender === "male"
                          ? "Male Averta"
                          : "Female Averta"
                      }
                      mr={3}
                    />

                    <Stack w={"100%"}>
                      <Heading
                        size="lg"
                        pt={3}
                        lineHeight={0}
                        textTransform={"capitalize"}
                      >
                        {measurement.name}
                      </Heading>

                      <Text py="2">{measurement.phoneNumber}</Text>
                    </Stack>
                  </HStack>

                  <Divider />
                  <HStack justifyContent={"flex-end"}>
                    <VStack alignItems={"flex-start"}>
                      <Text>
                        {moment(measurement.collectionDate).format("LL")}
                      </Text>
                      <Text
                        fontWeight={"bold"}
                        color={daysLeft(measurement) <= 1 && "red"}
                      >
                        {daysLeft(measurement) <= 0 ? 0 : daysLeft(measurement)}{" "}
                        days left
                      </Text>
                    </VStack>

                    <Spacer />
                  </HStack>
                </Card>
              </Link>
              <Button
                onClick={() =>
                  handleStatus(
                    measurement._id,
                    // measurement.measurementStatus
                    {
                      measurementStatus: "completed",
                    }
                  )
                }
                leftIcon={
                  measurement.measurementStatus === "completed" ? (
                    <EditIcon />
                  ) : (
                    <CheckIcon />
                  )
                }
                position={"absolute"}
                bottom={1}
                right={3}
                variant="solid"
                colorScheme={
                  measurement.measurementStatus === "completed"
                    ? "green"
                    : "blue"
                }
              >
                {measurement.measurementStatus === "completed"
                  ? "Re-book"
                  : "Not completed"}
              </Button>
            </Box>
          )
        )}

      <Box mb={20}></Box>

      {!measurements.length && <p>No Measurements found.</p>}
    </Container>
  );
};

export default Home;
