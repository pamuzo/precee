import { useSignUp, useUser } from "@clerk/clerk-react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
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
import { useNavigate } from "react-router-dom";
import Spin from "../../components/Spinner";

const Signup = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
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

  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (window.Clerk && typeof window.Clerk.loadCaptcha === "function") {
      window.Clerk.loadCaptcha(); // Ensure CAPTCHA is loaded
    }
  }, []);

  if (user) return navigate("/");

  if (!isLoaded) return <Spin />;

  // form Submition
  // signup with email and password
  const onSubmit = async (data) => {
    setIsDisabled(true);
    setLoading(true);
    try {
      await signUp.create({
        emailAddress: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        username: data.username,
      });

      await signUp.prepareEmailAddressVerification();
      setPendingVerification(true);
      setIsDisabled(true);
      setLoading(true);
    } catch (err) {
      console.log(err);
      setErrorMessage(err.errors[0]?.message || "Signup failed");
      setIsDisabled(false);
      setLoading(false);
    }
  };

  // verify User Email code
  const verifyCode = async (data) => {
    setIsDisabled(true);
    setLoading(true);

    try {
      const completeSignup = await signUp.attemptEmailAddressVerification({
        code: data.code,
      });
      setIsDisabled(false);
      setLoading(false);
      if (completeSignup.status !== "complete") {
        console.log(JSON.stringify(completeSignup, null, 2));
      }
      if (completeSignup.status === "complete") {
        await setActive({ session: completeSignup.createdSessionId });
        window.location.href = "/";
      }
    } catch (err) {
      setErrorMessage(err.errors[0]?.message || "Verification failed");
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
      >
        <Image
          src="/images/tag.png"
          h={"100%"}
          objectFit={"cover"}
          alt="rm clothin"
        />
      </Box>
      <Box maxW={{ base: "100%", sm: "60%", md: "55%" }} position={"relative"}>
        <Image src={imageSrc} boxSize={"100%"} objectFit={"cover"} />
        <AbsoluteCenter p={"25px"} w={"100%"} h={"100%"}>
          <Heading my={12} textAlign={"center"} color={colorTxt}>
            precee
          </Heading>
          <Heading color={colorTxt}>Create Account</Heading>

          <Text mb={5} fontSize={"sm"}>
            Sign up to join the fashion hub🎉
          </Text>
          {errorMessage && <p>{errorMessage}</p>}

          {!pendingVerification && (
            <>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                  focusBorderColor={colorInputFocus}
                  type="email"
                  id="email"
                  placeholder="Email"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && <p>{errors.email.message}</p>}

                <Input
                  focusBorderColor={colorInputFocus}
                  type="text"
                  id="username"
                  placeholder="Username"
                  {...register("username", {
                    required: "Username is required",
                  })}
                />
                {errors.username && <p>{errors.username.message}</p>}

                <Input
                  focusBorderColor={colorInputFocus}
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  {...register("firstName", {
                    required: "firstname is required",
                  })}
                />
                {errors.firstName && <p>{errors.firstName.message}</p>}

                <Input
                  focusBorderColor={colorInputFocus}
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  {...register("lastName", {
                    required: "Lastname is required",
                  })}
                />
                {errors.lastName && <p>{errors.lastName.message}</p>}

                <Input
                  focusBorderColor={colorInputFocus}
                  id="password"
                  placeholder="Password"
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: 6,
                  })}
                />

                {/* Clerk CAPTCHA */}

                <div id="clerk-captcha" className="mt-4"></div>

                <Button
                  isDisabled={isDisabled}
                  type="submit"
                  loadingText="Submitting"
                  isLoading={loading}
                  color={colorTxtBg}
                  bg={colorbg}
                  w={"full"}
                  mt={4}
                >
                  Create new account
                </Button>
              </form>

              <Text
                textAlign={"center"}
                mt={10}
                mb={20}
                fontWeight={"light"}
                color={colorTxt}
              >
                Already registered
                <Button
                  variant={"ghost"}
                  p={"2"}
                  fontWeight={"bold"}
                  fontSize={"lg"}
                  isDisabled={isDisabled}
                  onClick={() => navigate("/signin")}
                >
                  <Text as={"span"}>Log in</Text>
                </Button>
              </Text>
            </>
          )}

          {pendingVerification && (
            <form onSubmit={handleSubmit(verifyCode)}>
              <label className="block">Enter Verification Code:</label>
              <Input
                focusBorderColor={colorInputFocus}
                id="code"
                placeholder="- - - - - -"
                {...register("code", { required: "Code is required" })}
              />
              {errors.code && <p>{errors.code.message}</p>}

              <Button
                // isDisabled={isDisabled}
                type="submit"
                mt={2}
                w={"full"}
                bg={colorbg}
                color={colorTxtBg}
              >
                Verify
              </Button>
              <Text color={colorTxt} fontSize={"sm"}>
                Check your email inbox/spam box for a verification code.
              </Text>
            </form>
          )}
        </AbsoluteCenter>
      </Box>
    </div>
  );
};

export default Signup;
