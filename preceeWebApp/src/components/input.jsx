// import { Input } from "@chakra-ui/react";

const Input = ({ ...props }) => {
  const input = {
    borderWidth: 1,
    //borderColor: "rgba(247, 247, 247, 0.15)",
    //paddingHorizontal: 15,
    padding: 7,
    // padding: 3,
    //fontSize: 18,
    borderRadius: 6,
    margin: 2,
    outline: "none",
  };
  return <input style={input} {...props} />;
};

export default Input;
