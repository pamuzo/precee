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
} from "@chakra-ui/react";

const ResetPassword = ({ email }) => {
  const { signIn } = useSignIn();
  const { register, handleSubmit } = useForm();
  const toast = useToast();
  const [resetSuccess, setResetSuccess] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await signIn.attemptFirstFactor({
        strategy: "reset_password_email_code",
        identifier: email,
        code: data.code,
        password: data.password,
      });

      if (response.status === "complete") {
        setResetSuccess(true);
        toast({
          title: "Password Reset Successfully!",
          description: "You can now log in with your new password.",
          status: "success",
          duration: 5000,
        });
      }
    } catch (err) {
      toast({
        title: "Reset Failed",
        description: err.errors[0]?.message || "Invalid reset code.",
        status: "error",
      });
    }
  };

  return (
    <VStack spacing={4} maxW="400px" mx="auto" mt="5">
      <Text fontSize="2xl" fontWeight="bold">
        Reset Password
      </Text>
      {!resetSuccess ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <FormLabel>email</FormLabel>
            <Input {...register("email", { required: true })} type="email" />
          </FormControl>
          <FormControl>
            <FormLabel>Reset Code</FormLabel>
            <Input {...register("code", { required: true })} type="text" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>New Password</FormLabel>
            <Input
              {...register("password", { required: true })}
              type="password"
            />
          </FormControl>

          <Button mt={4} colorScheme="blue" type="submit">
            Reset Password
          </Button>
        </form>
      ) : (
        <Text color="green.500">
          Your password has been reset! You can now log in.
        </Text>
      )}
    </VStack>
  );
};

export default ResetPassword;
