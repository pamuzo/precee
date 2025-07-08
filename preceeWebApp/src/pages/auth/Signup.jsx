/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
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
import { useNavigate } from "react-router-dom";
import Spin from "../../components/Spinner";
import { useAuth } from "../../contexts/AuthContext";

const Signup = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
  });

  const { createUser, loading } = useAuth();

  const navigate = useNavigate();
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

  if (loading) return <Spin />;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    setIsDisabled(true);
    e.preventDefault();
    setError("");

    try {
      const res = await createUser(form); // calling context register()
      console.log(res);
      if (res.success) {
        toast({
          title: "Account created successfully💃.",
          description: "You're now logged in!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setIsDisabled(false);
        navigate("/measurements"); // redirect to dashboard after signup
      } else {
        setIsDisabled(false);
        if (res.code === 409) {
          setError("Email is already registered.");
        } else {
          setError(res.error || "Signup failed");
        }
        return toast({
          title: "Signup failed.",
          description: error,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (err) {
      setIsDisabled(false);
      setError(err.message);
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
          {error && <p className="error">{error}</p>}

          <form onSubmit={handleSubmit}>
            <VStack spacing="4">
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                />
                {/* {error && <p className="error">{error}</p>} */}
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  placeholder="********"
                  value={form.password}
                  onChange={handleChange}
                />
              </FormControl>

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
            </VStack>
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
              <Text as={"span"} color={colorTxt}>
                Log in
              </Text>
            </Button>
          </Text>
        </AbsoluteCenter>
      </Box>
    </div>
  );
};

export default Signup;
