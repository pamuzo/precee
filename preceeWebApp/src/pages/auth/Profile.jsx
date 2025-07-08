import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import {
  Avatar,
  Badge,
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { account } from "../../lib/appwrite";
import { DeleteIcon } from "@chakra-ui/icons";
import Alert from "../../components/Alert";

const Profile = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    phone: "",
    location: "",
  });

  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, getUser, loading, deleteAccount } = useAuth();

  // Populate form fields from Appwrite user
  useEffect(() => {
    if (user) {
      setForm({
        name: user.name || "",
        email: user.email || "",
        username: user.prefs?.username || "",
        phone: user.phone || "",
        location: user.prefs?.location || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdate = async () => {
    try {
      // Update name and phone
      if (form.name !== user.name) {
        await account.updateName(form.name);
      }
      if (form.phone !== user.phone) {
        await account.updatePhone(form.phone, true); // send verification
      }

      // Save custom fields in prefs
      await account.updatePrefs({
        username: form.username,
        location: form.location,
      });

      toast({
        title: "Profile updated!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      getUser(); // refresh user context
    } catch (err) {
      toast({
        title: "Update failed",
        description: err.message,
        status: "error",
      });
    }
  };

  const handleSendVerification = async () => {
    try {
      await account.createVerification("http://localhost:5173/verify"); // adjust URL
      toast({
        title: "Verification email sent",
        status: "info",
        duration: 5000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: "Could not send verification",
        description: err.message,
        status: "error",
      });
    }
  };

  // Delete user and user-related documents from a collection
  const handleDeleteAccount = async () => {
    const res = await deleteAccount();

    if (res.success) {
      toast({
        title: "Account deleted",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      //   navigate('/');
    } else {
      toast({
        title: "Error deleting account",
        description: res.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  if (!user) return <Text>Loading...</Text>;

  return (
    <Box maxW="lg" mx="auto" mt={10} p={6} borderWidth="1px" borderRadius="lg">
      <Stack spacing={4} align="center" mb={6}>
        <Avatar name={form.name} size="xl" />

        <Heading size="md">{form.name}</Heading>
        <Heading size="md">{user.$id}</Heading>
        <Text color="gray.500">{form.email}</Text>

        {!user.emailVerification && (
          <Badge colorScheme="yellow">Email not verified</Badge>
        )}
        {user.emailVerification ? (
          <Badge colorScheme="green">Email verified</Badge>
        ) : (
          <Button onClick={handleSendVerification} size="sm">
            Verify Email
          </Button>
        )}
      </Stack>

      <VStack spacing={4} as="form">
        <FormControl>
          <FormLabel>Display Name</FormLabel>
          <Input name="name" value={form.name} onChange={handleChange} />
        </FormControl>

        <FormControl isDisabled>
          <FormLabel>Email</FormLabel>
          <Input name="email" value={form.email} isReadOnly />
        </FormControl>

        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            name="username"
            value={form.username}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Phone Number</FormLabel>
          <Input name="phone" value={form.phone} onChange={handleChange} />
        </FormControl>

        <FormControl>
          <FormLabel>Location</FormLabel>
          <Input
            name="location"
            value={form.location}
            onChange={handleChange}
          />
        </FormControl>

        <Button
          colorScheme="teal"
          onClick={handleUpdate}
          isLoading={loading}
          width="full"
        >
          Update Profile
        </Button>

        <Button leftIcon={<DeleteIcon />} onClick={onOpen} colorScheme="red">
          Delete
        </Button>
        <Alert
          isOpen={isOpen}
          onClose={onClose}
          onConfirm={handleDeleteAccount}
          itemName={`Delete ${user.name} Account`}
          alertBody={`Are You Sure?, you want to delete your account  account permanently😡
             "This will delete your account and all document associated whit you account"`}
        />
      </VStack>
    </Box>
  );
};

export default Profile;
