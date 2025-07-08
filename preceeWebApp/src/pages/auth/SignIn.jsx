import { useState } from "react";
import {
  AbsoluteCenter,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import Spin from "../../components/Spinner";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const SignIn = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const { signin, loading } = useAuth();
  const toast = useToast();

  const imageSrc = useColorModeValue(
    "/images/auth.png",
    "/images/authblue.png"
  );
  const colorInputFocus = useColorModeValue(
    "rgba(224, 222, 222, 0.5)",
    "rgba(247, 247, 247, 0.1)"
  );
  const colorbg = useColorModeValue("#00425A", "#D88C26");
  const colorTxtBg = useColorModeValue("white", "#00425A");
  const colorTxt = useColorModeValue("#00425A", "white");
  const navigate = useNavigate();

  if (loading) return <Spin />;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (!form.email || !form.password) {
        setError({
          email: !form.email ? "Email is required" : "",
          password: !form.password ? "Password is required" : "",
        });

        return;
      }
      const res = await signin(form); // this uses the login function from context
      if (res.success) {
        toast({
          title: `  login successful👌`,
          description: "Welcome back!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        if (res.code === 401) {
          setError("Invalid credentials. Please check the email and password.");
        } else if (res.code === 429) {
          setError("Too many requests, Please try again after sometime");
        } else {
          setError(res.error || "Something went wrong");
        }
        return toast({
          title: ` Can't Login😠`,
          description: error,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      setError(error);
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
        mt={30}
      >
        <div id="container-84cbaac29390979d3f33c9e2d9e9de53"></div>
      </Box>
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

          <form onSubmit={handleSubmit}>
            {error && <p className="error">{error}</p>}
            <VStack spacing="4">
              <FormControl isRequired isInvalid={!!error.email}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                />
                <FormErrorMessage>{error.email}</FormErrorMessage>
              </FormControl>

              <FormControl isRequired isInvalid={!!error.password}>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  placeholder="********"
                  value={form.password}
                  onChange={handleChange}
                />
                <FormErrorMessage>{error.password}</FormErrorMessage>
              </FormControl>
              {/* <Link to={"/forgotpassword"}>Forgot Password!😡</Link> */}
              <Button
                isDisabled={isDisabled}
                type="submit"
                loadingText="Submitting"
                w={"full"}
                mt={4}
                bg={colorbg}
                color={colorTxtBg}
                //colorScheme="teal"
              >
                Login
              </Button>
            </VStack>
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
