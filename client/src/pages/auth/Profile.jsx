import { UserProfile } from "@clerk/clerk-react";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
import { Box, VStack } from "@chakra-ui/react";

const Profile = () => {
  // const { user, isLoaded } = useUser();
  // const { signOut } = useClerk();
  // const { register, handleSubmit, setValue } = useForm();
  // const [loading, setLoading] = useState(false);
  // const toast = useToast();

  // if (!isLoaded) return <p>Loading...</p>;

  // Pre-fill form with user data
  // setValue("fullName", user.fullName);
  // setValue("email", user.primaryEmailAddress?.emailAddress);

  // Handle Profile Update
  // const onSubmit = async (data) => {
  //   setLoading(true);
  //   try {
  //     await user.update({
  //       firstName: data.fullName.split(" ")[0],
  //       lastName: data.fullName.split(" ")[1] || "",
  //       emailAddress: data.email,
  //     });
  //     toast({ title: "Profile updated!", status: "success", duration: 3000 });
  //   } catch (err) {
  //     toast({
  //       title: "Update failed",
  //       description: err.errors[0]?.message,
  //       status: "error",
  //     });
  //   }
  //   setLoading(false);
  // };

  // Handle Password Update
  // const updatePassword = async (data) => {
  //   setLoading(true);
  //   try {
  //     await user.updatePassword({ newPassword: data.password });
  //     toast({ title: "Password updated!", status: "success", duration: 3000 });
  //   } catch (err) {
  //     toast({
  //       title: "Password update failed",
  //       description: err.errors[0]?.message,
  //       status: "error",
  //     });
  //   }
  //   setLoading(false);
  // };

  // Handle Profile Image Upload
  // const uploadProfileImage = async (event) => {
  //   const file = event.target.files[0];
  //   if (!file) return;
  //   try {
  //     await user.setProfileImage({ file });
  //     toast({
  //       title: "Profile image updated!",
  //       status: "success",
  //       duration: 3000,
  //     });
  //   } catch (err) {
  //     toast({
  //       title: "Upload failed",
  //       description: err.errors[0]?.message,
  //       status: "error",
  //     });
  //   }
  // };

  // Delete Account
  // const handleDelete = async () => {
  //   if (
  //     !window.confirm(
  //       "Are you sure you want to delete your account? This action is irreversible."
  //     )
  //   )
  //     return;
  //   try {
  //     await user.delete();
  //     signOut();
  //     window.location.href = "/";
  //   } catch (err) {
  //     toast({
  //       title: "Deletion failed",
  //       description: err.errors[0]?.message,
  //       status: "error",
  //     });
  //   }
  // };

  return (
    <VStack>
      <UserProfile />
      <Box mb={20}></Box>
      <div id="container-84cbaac29390979d3f33c9e2d9e9de53"></div>
    </VStack>

    //   <VStack spacing={4} align="stretch" maxW="500px" mx="auto" mt="5">
    //   <VStack spacing={4} align="stretch" maxW="500px" mx="auto" mt="5">
    //     <Text fontSize="2xl" fontWeight="bold">
    //       Profile
    //     </Text>

    //     {/* Profile Picture */}
    //     <Avatar size="xl" src={user.imageUrl} />
    //     <Input type="file" accept="image/*" onChange={uploadProfileImage} />

    //     {/* Update Profile Form */}
    //     <form onSubmit={handleSubmit(onSubmit)}>
    //       <FormControl>
    //         <FormLabel>Full Name</FormLabel>
    //         <Input {...register("fullName", { required: true })} />
    //       </FormControl>

    //       <FormControl mt={4}>
    //         <FormLabel>Email Address</FormLabel>
    //         <Input {...register("email", { required: true })} type="email" />
    //       </FormControl>

    //       <Button mt={4} colorScheme="blue" type="submit" isLoading={loading}>
    //         Update Profile
    //       </Button>
    //     </form>

    //     <Divider />

    //     {/* Update Password Form */}
    //     <form onSubmit={handleSubmit(updatePassword)}>
    //       <FormControl mt={4}>
    //         <FormLabel>New Password</FormLabel>
    //         <Input
    //           {...register("password", { required: true, minLength: 6 })}
    //           type="password"
    //         />
    //       </FormControl>

    //       <Button mt={4} colorScheme="blue" type="submit" isLoading={loading}>
    //         Update Password
    //       </Button>
    //     </form>

    //     <Divider />

    //     {/* Social Accounts (Google, Facebook, etc.) */}
    //     <Text fontSize="lg" fontWeight="bold">
    //       Connected Accounts
    //     </Text>
    //     {user.externalAccounts.length > 0 ? (
    //       user.externalAccounts.map((account) => (
    //         <Text key={account.id}>{account.provider} - Connected</Text>
    //       ))
    //     ) : (
    //       <Text>No external accounts linked.</Text>
    //     )}

    //     <Divider />

    //     {/* Two-Factor Authentication (2FA) */}
    //     <Text fontSize="lg" fontWeight="bold">
    //       Two-Factor Authentication (2FA)
    //     </Text>
    //     <Text>
    //       {user.twoFactorEnabled ? "2FA is enabled" : "2FA is not enabled"}
    //     </Text>

    //     <Divider />

    //     {/* Delete Account */}
    //     <Button mt={4} colorScheme="red" onClick={handleDelete}>
    //       Delete Account
    //     </Button>

    //     {/* Sign Out */}
    //     <Button
    //       mt={4}
    //       colorScheme="gray"
    //       onClick={() => signOut(() => (window.location.href = "/"))}
    //     >
    //       Sign Out
    //     </Button>
    //   </VStack>
  );
};

export default Profile;
