import { Routes, Route, Navigate } from "react-router-dom";
import LoginScreen from "./components/pages/auth-screens/login-screen";
import SignUpScreen from "./components/pages/auth-screens/sign-up-screen";
import BookingScreen from "./components/pages/booking-screens";
import EventScreen from "./components/pages/events-screens";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth/login" replace />} />
      <Route path="/auth">
        <Route path="login" element={<LoginScreen />} />
        <Route path="signup" element={<SignUpScreen />} />
      </Route>
      <Route path="/events" element={<EventScreen />} />
      <Route path="/bookings" element={<BookingScreen />} />
    </Routes>
  );
};

export default AppRouter;
