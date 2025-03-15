/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
  useToast,
  Input,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useMeasurementStore } from "../../store/measurement";
import Card from "../../components/card";
import Male from "../../components/Male";
import Female from "../../components/Female";
import Spin from "../../components/Spinner";
import { DownloadIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { useUser } from "@clerk/clerk-react";
// import Alert from "../../components/Alert";

let edith;

export const MeasurementForm = () => {
  const { user } = useUser();
  const params = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { measurements, updateMeasurement, addMeasurement, error, loading } =
    useMeasurementStore();
  const [isDisabled, setIsDisabled] = useState(true);

  const colorbg = useColorModeValue("#00425A", "white");
  const colorInputFocus = useColorModeValue(
    "rgba(224, 222, 222, 0.5)",
    "rgba(247, 247, 247, 0.1)"
  );

  const navigate = useNavigate();
  const toast = useToast();

  if (params) {
    edith = measurements?.filter((item) => item._id === params?.id);
  }
  const [pairesCount, setPairesCount] = useState(
    edith.length ? edith[0].paires : 1
  );
  const [gender, setGender] = useState(edith.length ? edith[0].gender : "male");

  useEffect(() => {
    if (user) {
      onOpen();
    }
  }, [user, onOpen]);

  const handleClose = () => {
    onClose();
    navigate(-1); // Go back to the previous page
  };

  // -----------------------------------------------
  const schema = yup.object().shape({
    name: yup.string().required("You have not entered a name!😠"),
    phoneNumber: yup.number("You have not entered a Phon number!📞"),
  });

  const form = useForm({
    resolver: yupResolver(schema),

    defaultValues: {
      userId: user?.id,
      name: `${edith.length ? edith[0].name : ""}`,
      phoneNumber: `${edith.length ? edith[0].phoneNumber : ""}`,
      paires: pairesCount,

      topLenght: `${edith.length ? edith[0].topLenght : ""}`,
      showlder: `${edith.length ? edith[0].showlder : ""}`,
      chest: `${edith.length ? edith[0].chest : ""}`,
      sleeve: `${edith.length ? edith[0].sleeve : ""}`,
      roundSleeve: `${edith.length ? edith[0].roundSleeve : ""}`,
      tommy: `${edith.length ? edith[0].tommy : ""}`,
      wrist: `${edith.length ? edith[0].wrist : ""}`,
      neck: `${edith.length ? edith[0].neck : ""}`,
      biceps: `${edith.length ? edith[0].biceps : ""}`,
      upperArm: `${edith.length ? edith[0].upperArm : ""}`,
      armholeDepth: `${edith.length ? edith[0].armholeDepth : ""}`,
      neckToShoulder: `${edith.length ? edith[0].neckToShoulder : ""}`,
      bottomLenght: `${edith.length ? edith[0].bottomLenght : ""}`,
      waist: `${edith.length ? edith[0].waist : ""}`,
      thigh: `${edith.length ? edith[0].thigh : ""}`,
      knee: `${edith.length ? edith[0].knee : ""}`,
      seat: `${edith.length ? edith[0].seat : ""}`,
      flap: `${edith.length ? edith[0].flap : ""}`,
      waistToKnee: `${edith.length ? edith[0].waistToKnee : ""}`,
      ankleHem: `${edith.length ? edith[0].ankleHem : ""}`,
      frontRise: `${edith.length ? edith[0].frontRise : ""}`,
      backRise: `${edith.length ? edith[0].backRise : ""}`,
      shoulderToAnkle: `${edith.length ? edith[0].shoulderToAnkle : ""}`,
      shoulderToKnee: `${edith.length ? edith[0].shoulderToKnee : ""}`,
      // ................................female.................................

      fneck: `${edith.length ? edith[0].fneck : ""}`,
      fShoulder: `${edith.length ? edith[0].fShoulder : ""}`,
      frontChestWidth: `${edith.length ? edith[0].frontChestWidth : ""}`,
      backChestWidth: `${edith.length ? edith[0].backChestWidth : ""}`,
      bust: `${edith.length ? edith[0].bust : ""}`,
      underBust: `${edith.length ? edith[0].underBust : ""}`,
      upperBust: `${edith.length ? edith[0].upperBust : ""}`,
      fWaist: `${edith.length ? edith[0].fWaist : ""}`,
      armhole: `${edith.length ? edith[0].armhole : ""}`,
      hips: `${edith.length ? edith[0].hips : ""}`,
      fthigh: `${edith.length ? edith[0].fthigh : ""}`,
      fknee: `${edith.length ? edith[0].fknee : ""}`,
      ankle: `${edith.length ? edith[0].ankle : ""}`,
      armLenght: `${edith.length ? edith[0].armLenght : ""}`,
      shoulderToElbow: `${edith.length ? edith[0].shoulderToElbow : ""}`,
      fullLength: `${edith.length ? edith[0].fullLength : ""}`,
      shoulderToBust: `${edith.length ? edith[0].shoulderToBust : ""}`,
      shoulderToUBust: `${edith.length ? edith[0].shoulderToUBust : ""}`,
      shoulderToWristF: `${edith.length ? edith[0].shoulderToWristF : ""}`,
      shoulderToWristB: `${edith.length ? edith[0].shoulderToWristB : ""}`,
      shoulderToHips: `${edith.length ? edith[0].shoulderToHips : ""}`,
      shoulderToKneel: `${edith.length ? edith[0].shoulderToKneel : ""}`,
      blouseLength: `${edith.length ? edith[0].blouseLength : ""}`,
      trouserLenght: `${edith.length ? edith[0].trouserLenght : ""}`,
      crotchDepth: `${edith.length ? edith[0].crotchDepth : ""}`,
      sleeveLenght: `${edith.length ? edith[0].sleeveLenght : ""}`,
      froundSleeve: `${edith.length ? edith[0].froundSleeve : ""}`,
      cuff: `${edith.length ? edith[0].cuff : ""}`,
      nipple: `${edith.length ? edith[0].nipple : ""}`,
      waistToHips: `${edith.length ? edith[0].waistToHips : ""}`,
      waistToKneel: `${edith.length ? edith[0].waistToKneel : ""}`,
      waistToFloor: `${edith.length ? edith[0].waistToFloor : ""}`,
      capLenght: `${edith.length ? edith[0].capLenght : ""}`,
      capWidth: `${edith.length ? edith[0].capWidth : ""}`,
      addMessage: `${edith.length ? edith[0].addMessage : ""}`,

      collectionDate: `${
        edith.length
          ? new Date(edith[0].collectionDate).toISOString().split("T")[0]
          : new Date()
      }`,
    },
  });

  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
  } = form;

  const today = new Date().toISOString().split("T")[0];

  const increament = () => {
    setPairesCount(Number(pairesCount) + 1);
    setValue("paires", pairesCount);
  };
  const decreament = () => {
    setPairesCount(Number(pairesCount) - 1);
    setValue("paires", pairesCount);
  };

  if (loading) return <Spin />;
  if (error) return <p>Error: {error}</p>;

  // handle the Add new measurement and update measurement
  const onSubmit = async (data, mid) => {
    // to update the measurement

    if (edith.length) {
      mid = edith[0]._id;
      data.measurementStatus = "uncompleted";
      const { success, message } = await updateMeasurement(mid, data);
      handleClose();
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
    } else {
      // to add a new measurement
      const { success, message } = await addMeasurement(data);
      handleClose();
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
    <div>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalContent>
            <ModalHeader color={colorbg}>
              {edith.length
                ? `Update ${edith[0].name}`
                : "Add a new measurement"}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* -------------------Customer information-------------- */}
              <Text> Customer Information</Text>
              <Card>
                <Input
                  focusBorderColor={colorInputFocus}
                  type="text"
                  id="name"
                  {...register("name")}
                  placeholder="Customer name"
                />
                <p className="error">{errors.name?.message}</p>
                <Input
                  focusBorderColor={colorInputFocus}
                  type="number"
                  id="phonNumber"
                  {...register("phoneNumber")}
                  placeholder="Phone Number"
                />
                <p className="error">{errors.phoneNumber?.message}</p>

                {/* -------------------Customer Gender------------- */}
                <RadioGroup
                  defaultValue="male"
                  onChange={setGender}
                  id="gender"
                  value={gender}
                >
                  <Stack spacing={5} direction="row">
                    <Radio
                      isDisabled={
                        edith.length &&
                        edith[0].gender === "female" &&
                        isDisabled
                      }
                      color={"#00425A"}
                      value="male"
                      {...register("gender")}
                    >
                      Male
                    </Radio>
                    <Radio
                      isDisabled={
                        edith.length && edith[0].gender === "male" && isDisabled
                      }
                      color={"#00425A"}
                      value="female"
                      {...register("gender")}
                    >
                      Female
                    </Radio>
                  </Stack>
                </RadioGroup>
              </Card>
              <Card>
                <HStack>
                  <label>Pairs:</label>
                  <Button
                    bg={"#00425A"}
                    color={"white"}
                    onClick={decreament}
                    isDisabled={pairesCount === 1 && isDisabled}
                  >
                    -
                  </Button>
                  <Input
                    w={"40px"}
                    p={2}
                    focusBorderColor={colorInputFocus}
                    type="number"
                    isReadOnly
                    // value={pairesCount}
                    id="paires"
                    {...register("paires", { valueAsNumber: true })}
                  />
                  <Button bg={"#00425A"} color={"white"} onClick={increament}>
                    +
                  </Button>
                </HStack>
              </Card>
              <Text>Take mesurement </Text>
              {/* ------------------------------------------gender measurement----------------- */}
              {gender === "male" ? (
                <Male register={register} />
              ) : (
                <Female register={register} />
              )}
              <Text> Add Cap</Text>
              <Card>
                <HStack>
                  <Input
                    focusBorderColor={colorInputFocus}
                    type="number"
                    id="capLenght"
                    {...register("capLenght")}
                    placeholder="Length"
                  />
                  <Input
                    focusBorderColor={colorInputFocus}
                    type="number"
                    id="capWidth"
                    {...register("capWidth")}
                    placeholder="Width"
                  />
                </HStack>
              </Card>
              <Text>Collection Date</Text>
              <Card>
                <HStack>
                  <Text> Date:</Text>

                  <Input
                    type="date"
                    min={today}
                    placeholder="Select Date and Time"
                    id="collectionDate"
                    {...register("collectionDate", {
                      valueAsDate: true,
                      min: today,
                    })}
                  />
                </HStack>
              </Card>
              <Text>Extra information</Text>
              <Card>
                <Input
                  focusBorderColor={colorInputFocus}
                  type="text"
                  id="addMessage"
                  {...register("addMessage")}
                  placeholder="Add an extral information"
                />
              </Card>
            </ModalBody>

            <ModalFooter>
              <Button
                leftIcon={<DownloadIcon />}
                type="submit"
                w={"50%"}
                color={"white"}
                bg={"#00425A"}
                mr={3}
              >
                {edith.length ? "Update" : "Save"}
              </Button>
              <Button
                leftIcon={<SmallCloseIcon />}
                colorScheme="red"
                w={"50%"}
                onClick={handleClose}
              >
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
      {!measurements.length && <p>No document found.</p>}
    </div>
  );
};
