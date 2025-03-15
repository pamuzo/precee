import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/measurement/Home";
import { Box, Container } from "@chakra-ui/react";
import Tab from "./components/Tab";
import { MeasurementForm } from "./pages/measurement/measurementForm";
import Nav from "./components/Nav";
import MeasurementPreview from "./pages/measurement/measurementPreview";
import Signup from "./pages/auth/Signup";
import { useUser } from "@clerk/clerk-react";
import SignIn from "./pages/auth/SignIn";
import Profile from "./pages/auth/Profile";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import Onboarding from "./pages/auth/Onboarding";
import News from "./pages/news/News";
import Tailor from "./pages/tailor/Tailor";
import JobSeeker from "./pages/tailor/JobSeeker";
import TailorSeeker from "./pages/tailor/TailorSeeker";
import CreativeStudio from "./pages/studio/CreativeStudio";

function App() {
  const { user } = useUser();

  return (
    <>
      <BrowserRouter>
        <Box display={!user && "none"}>
          <Nav />
        </Box>
        <Container p={0}>
          <Routes>
            <Route path="/" element={user ? <Home /> : <Onboarding />} />
            <Route path="/signup" element={user ? <Home /> : <Signup />} />
            <Route path="/signin" element={user ? <Home /> : <SignIn />} />
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/forgotpassword"
              element={user ? <Home /> : <ForgotPassword />}
            />
            <Route
              path="/resetpassword"
              element={user ? <Home /> : <ResetPassword />}
            />
            <Route path="/measurementform" element={<MeasurementForm />} />
            <Route path="/measurementform/:id" element={<MeasurementForm />} />
            <Route path="/:id" element={<MeasurementPreview />} />

            <Route path="/news" element={<News />} />
            <Route path="/tailor" element={<Tailor />} />
            <Route path="/jobSeeker" element={<JobSeeker />} />
            <Route path="/tailorSeeker" element={<TailorSeeker />} />
            <Route path="/studio" element={<CreativeStudio />} />
          </Routes>
        </Container>
        <Container position={"fixed"} p={0} bottom={0}>
          <Box display={!user && "none"}>
            <Tab />
          </Box>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
