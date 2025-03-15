import { useSignIn } from "@clerk/clerk-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  AbsoluteCenter,
  Box,
  Button,
  Heading,
  Image,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Spin from "../../components/Spinner";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const { isLoaded, signIn } = useSignIn();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [errorMessage, setErrorMessage] = useState("");
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
  const navigate = useNavigate();

  if (!isLoaded) return <Spin />;

  const onSubmit = async (data) => {
    setIsDisabled(true);
    setLoading(true);

    try {
      const result = await signIn.create({
        identifier: data.email, // Email or username
        password: data.password,
      });
      if (result.status === "complete") {
        window.location.href = "/"; // Redirect after successful login
      }
    } catch (err) {
      console.error(err.errors[0]);
      // setErrorMessage(err.errors[0]?.message || "Sign-in failed");
      setErrorMessage("Incorrect Credentials");
      setIsDisabled(false);
      setLoading(false);
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
        background: "#eee",
      }}
    >
      <Box
        display={{ base: "none", md: "block" }}
        w={"60%"}
        h={"100%"}
        overflow={"hidden"}
      ></Box>
      <Box
        maxW={{ base: "100%", sm: "60%", md: "55%" }}
        overflow={"hidden"}
        position={"relative"}
        h={"100vh"}
      >
        <Image src={imageSrc} boxSize={"100%"} objectFit={"cover"} />
        <AbsoluteCenter p={"25px"} w={"100%"} h={"100%"}>
          <Heading my={12} textAlign={"center"} color={colorTxt}>
            precee
          </Heading>
          <Heading color={colorTxt}>login....</Heading>

          <Text mb={5} color={colorTxt} fontSize={"sm"}>
            Please sign in to continue
          </Text>
          {errorMessage && <p>{errorMessage}</p>}

          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              as={"input"}
              focusBorderColor={colorInputFocus}
              type="email"
              id="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p>{errors.email.message}</p>}

            <Input
              focusBorderColor={colorInputFocus}
              id="password"
              placeholder="password"
              type="password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <p>{errors.password.message}</p>}

            <Link to={"/forgotpassword"}>Forgot Password!😡</Link>
            <Button
              isDisabled={isDisabled}
              isLoading={loading}
              color={colorTxtBg}
              bg={colorbg}
              width="full"
              mt={4}
              type="submit"
            >
              Log In
            </Button>
          </form>
          <Text
            textAlign={"center"}
            mt={10}
            mb={20}
            fontWeight={"light"}
            color={colorTxt}
          >
            Don&apos;t have an account?
            <Button
              variant={"ghost"}
              p={"2"}
              fontWeight={"bold"}
              fontSize={"lg"}
              isDisabled={isDisabled}
              onClick={() => navigate("/signup")}
            >
              <Text as={"span"}>Sign up</Text>
            </Button>
          </Text>
        </AbsoluteCenter>
      </Box>
    </div>
  );
};

export default SignIn;
