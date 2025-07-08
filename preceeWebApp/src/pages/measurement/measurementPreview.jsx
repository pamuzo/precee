import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import moment from "moment";
import Card from "../../components/card";
import Spin from "../../components/Spinner";
import Alert from "../../components/Alert";
import BackBotton from "../../components/backBotton";
import { useAuth } from "../../contexts/AuthContext";
import { useMeasurements } from "../../contexts/measurementContext";

const MeasurementPreview = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const { id } = useParams();
  const toast = useToast();
  const { user } = useAuth();
  const [measurement, setMeasurement] = useState(null);

  const color = useColorModeValue("#787878", "#B4B4B3");
  const colorTxt = useColorModeValue("#00425A", "white");

  const { fetchMeasurement, loading, deleteMeasurement } = useMeasurements();

  useEffect(() => {
    fetchMeasurement(id).then(setMeasurement).catch(console.error);
  }, [id]);

  if (loading) return <Spin />;
  //if (error) return <Error error={error} />;
  if (!measurement)
    return <p style={{ padding: "100px" }}>No document found.</p>;

  // handling the delete
  const handleDeleteMeasurement = async (mid) => {
    if (!mid) return;
    if (!user) return;

    await deleteMeasurement(mid);
    toast({
      title: "Delete Measurement",
      description: "Deleted Successfully 🎉 ",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    onClose();
    navigate(-1);
  };

  return (
    <Box pt={"80px"}>
      <Card>
        <HStack>
          <BackBotton />
          <Spacer />
          <Text color={"#D88C26"} fontSize={"sm"}>
            {measurement.jobState === "complete"
              ? `Created Date: ${moment(measurement?.createAt?.toDate()).format(
                  "ll"
                )}`
              : `Booked Date: ${moment(
                  measurement?.bookedDate?.toDate()
                ).format("ll")}`}
          </Text>
        </HStack>
        <Heading
          textTransform={"capitalize"}
          ize={"lg"}
          color={colorTxt}
          textAlign={"center"}
          mb={4}
        >
          {measurement.name} Detailes
        </Heading>
        <HStack color={colorTxt}>
          <Text fontWeight={"bold"} fontSize={"xl"}>
            {measurement.phoneNumber}
          </Text>
          <Spacer />
          <Button
            variant="outline"
            color={colorTxt}
            borderRadius={"100px"}
            mr=""
            p={2}
          >
            <PhoneIcon fontSize={16} />
          </Button>
          <Button
            variant="outline"
            color={colorTxt}
            borderRadius={"100px"}
            mr="2"
            p={2}
          >
            <EmailIcon fontSize={16} />
          </Button>
        </HStack>
        <Divider />
        <HStack>
          <Text color={colorTxt}> Pairs </Text>
          <Spacer />
          <Text mr="2" color={colorTxt}>
            {measurement.paires}
          </Text>
        </HStack>
        <Divider />

        {/* ............Male............................................ */}
        {measurement.gender === "male" && (
          <HStack w={"100%"} mt={6} spacing={3} color={colorTxt}>
            <Box w={"50%"}>
              <Text fontWeight={"bold"} mb={2}>
                Top
              </Text>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Lenght</Text>
                <Text>{measurement.topLenght} </Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Showlder</Text>
                <Text>{measurement.showlder} </Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Chest</Text>
                <Text>{measurement.chest} </Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Sleeve</Text>
                <Text>{measurement.sleeve} </Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Round Sleeve</Text>
                <Text>{measurement.roundSleeve} </Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Fit/Tommy</Text>
                <Text>{measurement.tommy} </Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Waist</Text>
                <Text>{measurement.waist} </Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Neck</Text>
                <Text>{measurement.neck} </Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Biceps</Text>
                <Text>{measurement.biceps} </Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Upper Arm</Text>
                <Text>{measurement.upperArm} </Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Armhole Depth</Text>
                <Text>{measurement.armholeDepth} </Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Neck to Shldr</Text>
                <Text>{measurement.neckToShoulder}</Text>
              </Flex>
            </Box>

            <Spacer borderLeftWidth={1} />
            <Box w={"50%"}>
              <Text fontWeight={"bold"} mb={2}>
                Trouser/Botton
              </Text>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Lenght</Text>
                <Text>{measurement.bottomLenght} </Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Waist</Text>
                <Text>{measurement.waist} </Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Thigh</Text>
                <Text>{measurement.thigh} </Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Knee</Text>
                <Text>{measurement.knee} </Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Seat/Hip</Text>
                <Text>{measurement.seat} </Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Flap</Text>
                <Text>{measurement.flap} </Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Waist to Knee</Text>
                <Text>{measurement.waistToKnee} </Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Ankle/Hem</Text>
                <Text>{measurement.ankleHem} </Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Front Rise </Text>
                <Text>{measurement.frontRise} </Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Back Rise</Text>
                <Text>{measurement.backRise} </Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Shldr to Ankle</Text>
                <Text>{measurement.shoulderToAnkle}</Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Shldr to Knee</Text>
                <Text>{measurement.shoulderToKnee}</Text>
              </Flex>
            </Box>
          </HStack>
        )}
        {/* .............................female >............................. */}

        {measurement.gender === "female" && (
          <HStack w={"100%"} mt={6} spacing={3} color={colorTxt}>
            <Box w={"50%"}>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Neck</Text>
                <Text>{measurement.fneck} </Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Shoulder(Shldr)</Text>
                <Text>{measurement.fShoulder} </Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>F Chest Width</Text>
                <Text>{measurement.frontChestWidth}</Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>B Chest Width</Text>
                <Text>{measurement.backChestWidth}</Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Bust</Text>
                <Text>{measurement.bust} </Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Under Bust</Text>
                <Text>{measurement.underBust} </Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Upper Bust</Text>
                <Text>{measurement.upperBust} </Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Waist</Text>
                <Text>{measurement.fWaist} </Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Armhole</Text>
                <Text>{measurement.armhole} </Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Hips</Text>
                <Text>{measurement.hips} </Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Thigh</Text>
                <Text>{measurement.fthigh} </Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Knee</Text>
                <Text>{measurement.fknee} </Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Ankle</Text>
                <Text>{measurement.ankle} </Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Arm Lenght</Text>
                <Text>{measurement.armLenght} </Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Shldr To Elbow</Text>
                <Text>{measurement.shoulderToElbow}</Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Full Length</Text>
                <Text>{measurement.fullLength} </Text>
              </Flex>
            </Box>
            <Spacer borderLeftWidth={1} />
            {/* female down */}
            <Box w={"50%"}>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Shdr to Bust</Text>
                <Text>{measurement.shoulderToBust}</Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Shldr to U/bust</Text>
                <Text>{measurement.shoulderToUBust}</Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Shldr to Wrist Fr</Text>
                <Text>{measurement.shoulderToWristF}</Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Shldr to Wrist Bk</Text>
                <Text>{measurement.shoulderToWristB}</Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Shldr to Hips</Text>
                <Text>{measurement.shoulderToHips}</Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Shldr to Kneel</Text>
                <Text>{measurement.shoulderToKneel}</Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Blouse Length</Text>
                <Text>{measurement.blouseLength} </Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Trouser/Skirt L</Text>
                <Text>{measurement.trouserLenght} </Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Crotch Depth</Text>
                <Text>{measurement.crotchDepth} </Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Sleeve Lenght</Text>
                <Text>{measurement.sleeveLenght} </Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Round Sleeve</Text>
                <Text>{measurement.froundSleeve} </Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Cuff/Wrist</Text>
                <Text>{measurement.cuff} </Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Nipple to Nipple</Text>
                <Text>{measurement.nipple} </Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Waist to Hips</Text>
                <Text>{measurement.waistToHips} </Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Waist to Kneel</Text>
                <Text>{measurement.waistToKneel} </Text>
              </Flex>
              <Flex justifyContent={"space-between"} mb={2}>
                <Text color={color}>Waist to Floor</Text>
                <Text>{measurement.waistToFloor} </Text>
              </Flex>
            </Box>
          </HStack>
        )}
        {/* ......................Cap................................ */}
        <Text fontWeight={"bold"}> Cap </Text>
        <HStack w={"100%"} mt={6} spacing={3}>
          <Box w={"50%"}>
            <Flex justifyContent={"space-between"} mb={2}>
              <Text color={color}>Cap Lenght:</Text>
              <Text>{measurement.capLenght} </Text>
            </Flex>
          </Box>
          <Spacer />
          <Box w={"50%"}>
            <Flex justifyContent={"space-between"} mb={2}>
              <Text color={color}>Cap Width:</Text>
              <Text>{measurement.capWidth} </Text>
            </Flex>
          </Box>
        </HStack>

        <Divider />
        <Text fontWeight={"bold"}>Extra Information: </Text>
        <Divider />
        <div>
          <Text color={color}>{measurement.addMessage} </Text>
        </div>
        <HStack
          justifyContent={"center"}
          spacing={{ base: "1", sm: "4" }}
          mt={6}
        >
          <Link to={`/measurementform/${measurement.$id}`}>
            <Button leftIcon={<EditIcon />} colorScheme="blue">
              Update
            </Button>
          </Link>
          <Link to={`/measurementform/${measurement._id}`}>
            <Button
              display={
                measurement.measurementStatus === "completed" ? "block" : "none"
              }
              leftIcon={<EditIcon />}
              colorScheme="green"
            >
              Rebook
            </Button>
          </Link>
          <Button leftIcon={<DeleteIcon />} onClick={onOpen} colorScheme="red">
            Delete
          </Button>
        </HStack>
      </Card>
      <Alert
        isOpen={isOpen}
        onClose={onClose}
        onConfirm={() => handleDeleteMeasurement(measurement.$id)}
        itemName={`Delete ${measurement.name} details`}
        alertBody={`Are You Sure?, This will delete ${measurement.name} details permanently😡`}
      />
      <div id="container-84cbaac29390979d3f33c9e2d9e9de53"></div>

      <Box mb={20}></Box>
    </Box>
  );
};

export default MeasurementPreview;
