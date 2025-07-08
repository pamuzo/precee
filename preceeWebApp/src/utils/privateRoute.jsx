/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Spin from "../components/Spinner";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <Spin />;

  return user ? children : <Navigate to="/signin" />;
};

export default PrivateRoutes;
