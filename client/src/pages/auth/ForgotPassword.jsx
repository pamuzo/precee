/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSignIn } from "@clerk/clerk-react";
import { useForm } from "react-hook-form";
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  VStack,
  Text,
  useToast,
  AbsoluteCenter,
  Box,
  Heading,
  Image,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ResetPassword from "./ResetPassword";

const ForgotPassword = ({ onCodeSent }) => {
  const { signIn } = useSignIn();
  const { register, handleSubmit } = useForm();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const toast = useToast();
  const [isDisabled, setIsDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const imageSrc = useColorModeValue(
    "/images/auth.png",
    "/images/authblue.png"
  );
  const colorInputFocus = useColorModeValue(
    "rgba(224, 222, 222, 0.5)",
    "rgba(247, 247, 247, 0.1)"
  );
  const colorbg = useColorModeValue("#00425A", "white");
  const colorTxtBg = useColorModeValue("white", "#00425A");
  const colorTxt = useColorModeValue("#00425A", "white");

  const onSubmit = async (data) => {
    try {
      await signIn.create({
        strategy: "reset_password_email_code",
        identifier: data.email,
      });
      setEmail(data.email);
      setSent(true);
      onCodeSent(data.email); // Move to the next step
      toast({
        title: "Reset Code Sent!",
        description: "Check your email for the 6-digit code.",
        status: "success",
        duration: 5000,
      });
    } catch (err) {
      toast({
        title: "Error",
        description: err.errors[0]?.message || "Something went wrong.",
        status: "error",
      });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        position: "absolute",
        width: "100vw",
        height: "100vh",
        left: 0,
        top: 0,
        background: "#00425a",
      }}
    >
      <Box
        display={{ base: "none", md: "block" }}
        w={"60%"}
        h={"100%"}
        overflow={"hidden"}
      ></Box>
      <Box
        maxW={{ base: "100%", md: "40%" }}
        // overflow={"hidden"}
        position={"relative"}
        // h={"100%"}
      >
        <Image src={imageSrc} boxSize={"100%"} objectFit={"cover"} />
        <AbsoluteCenter p={"25px"} w={"100%"} h={"100%"}>
          <Heading
            my={12}
            textAlign={"center"}
            // left={"50%"}
            // transform={"translateX(-50%)"}
            color={colorTxt}
          >
            precee
          </Heading>
          <Text fontSize="2xl" fontWeight="bold">
            Forgot Password
          </Text>
          {!sent ? (
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl>
                <FormLabel color={colorTxt} fonstWeight={"400"}>
                  Please enter your email to reset your password📩
                </FormLabel>
                <Input
                  focusBorderColor={colorInputFocus}
                  type="email"
                  id="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
              </FormControl>
              <Button
                isDisabled={isDisabled}
                type="submit"
                loadingText="Sending Code..."
                isLoading={loading}
                color={colorTxtBg}
                bg={colorbg}
                w={"full"}
                mt={4}
              >
                Send Reset Code
              </Button>
            </form>
          ) : (
            <>
              <Text color="green.500">
                Check your email for the reset code.👌
              </Text>
              <ResetPassword />
            </>
          )}
          <HStack
            gap={0}
            fontSize={"lg"}
            fontWeight={"bold"}
            justifyContent={"center"}
            color={colorTxt}
            mt={14}
          >
            <Link to={"/signin"}>
              <Text>Log in</Text>
            </Link>
            <Text>/</Text>
            <Link to={"/signup"}>
              <Text>Sign up</Text>
            </Link>
          </HStack>
        </AbsoluteCenter>
      </Box>
    </div>
  );
};

export default ForgotPassword;
