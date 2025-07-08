import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./contexts/AuthContext";
import { MeasurementsProvider } from "./contexts/measurementContext";

const theme = extendTheme({
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Roboto', sans-serif",
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <MeasurementsProvider>
          <App />
        </MeasurementsProvider>
      </AuthProvider>
    </ChakraProvider>
  </StrictMode>
);
