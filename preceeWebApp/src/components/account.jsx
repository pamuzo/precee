// components/AccountMenu.jsx
import {
  Avatar,
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useToast,
} from "@chakra-ui/react";
import {
  FiUser,
  FiSettings,
  FiBell,
  FiLogOut,
  FiChevronDown,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Account = () => {
  const { user, logout } = useAuth(); // assumes you store user here
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogout = async () => {
    try {
      logout();
      toast({
        title: "Logged out",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: "Logout failed",
        description: err.message,
        status: "error",
      });
    }
  };

  if (!user) return null;

  return (
    <Flex align="center" justify="flex-end">
      <Menu>
        <MenuButton
          as={Button}
          variant="ghost"
          rightIcon={<FiChevronDown />}
          _hover={{ bg: "gray.100" }}
          px={3}
          py={2}
        >
          <Flex align="center" gap={3}>
            <Avatar size="sm" name={user.name} />
            <Box textAlign="left" display={{ base: "none", md: "block" }}>
              <Text fontSize="sm" fontWeight="medium">
                {user.name}
              </Text>
              <Text fontSize="xs" color="gray.500">
                {user.email}
              </Text>
            </Box>
          </Flex>
        </MenuButton>

        <MenuList>
          <MenuItem icon={<FiUser />} onClick={() => navigate("/profile")}>
            Profile
          </MenuItem>
          <MenuItem icon={<FiSettings />} onClick={() => navigate("/settings")}>
            Settings
          </MenuItem>
          <MenuItem
            icon={<FiBell />}
            onClick={() => navigate("/notifications")}
          >
            Notifications
          </MenuItem>
          <MenuDivider />
          <MenuItem icon={<FiLogOut />} onClick={handleLogout}>
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Account;
