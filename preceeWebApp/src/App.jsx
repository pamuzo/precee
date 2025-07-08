import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/measurement/Home";

import { MeasurementForm } from "./pages/measurement/measurementForm";
import Nav from "./components/Nav";
import MeasurementPreview from "./pages/measurement/measurementPreview";
import Signup from "./pages/auth/Signup";

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
import Footer from "./components/Footer";
import PrivateRoutes from "./utils/privateRoute";
import { useAuth } from "./contexts/AuthContext";
import PublicRoute from "./utils/publicRoute";
import Spin from "./components/Spinner";

function App() {
  const { loading } = useAuth();

  if (loading) return <Spin />;
  return (
    <>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <Signup />
              </PublicRoute>
            }
          />
          <Route
            path="/signin"
            element={
              <PublicRoute>
                <SignIn />
              </PublicRoute>
            }
          />

          {/* ======private secssion======= */}
          <Route
            path="/profile"
            element={
              <PrivateRoutes>
                <Profile />
              </PrivateRoutes>
            }
          />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />

          {/* <Route element={<PrivateRoutes />}> */}
          <Route
            path="/measurementform"
            element={
              <PrivateRoutes>
                <MeasurementForm />
              </PrivateRoutes>
            }
          />
          <Route
            path="/measurements"
            element={
              <PrivateRoutes>
                <Home />
              </PrivateRoutes>
            }
          />
          <Route
            path="/measurementform/:id"
            element={
              <PrivateRoutes>
                <MeasurementForm />
              </PrivateRoutes>
            }
          />
          <Route
            path="/:id"
            element={
              <PrivateRoutes>
                <MeasurementPreview />
              </PrivateRoutes>
            }
          />
          {/* </Route> */}

          <Route path="/news" element={<News />} />
          <Route path="/tailor" element={<Tailor />} />
          <Route path="/jobSeeker" element={<JobSeeker />} />
          <Route path="/tailorSeeker" element={<TailorSeeker />} />
          <Route path="/studio" element={<CreativeStudio />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
