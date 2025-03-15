import { ArrowBackIcon, useColorModeValue } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const BackBotton = () => {
  const colorTxt = useColorModeValue("#00425A", "white");
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)}>
      <ArrowBackIcon color={colorTxt} />
    </button>
  );
};

export default BackBotton;
