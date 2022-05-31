import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import App from "./components/App";
import LoginScreen from "./components/pages/auth-screens/login-screen";
import SignUpScreen from "./components/pages/auth-screens/sign-up-screen";
import BookingScreen from "./components/pages/booking-screens";
import EventScreen from "./components/pages/events-screens";
import AuthContext from "./context/auth-context";

const AppRouter = () => {
  const [authState, setAuthState] = useState<{
    token?: string;
    userId?: string;
    expiresIn?: number;
  }>({ token: "", userId: "", expiresIn: 0 });

  const login = (token?: string, userId?: string, expiresIn?: number) => {
    setAuthState({ ...authState, token, userId, expiresIn });
  };

  const logout = () => {
    setAuthState({ ...authState, token: "", userId: "" });
  };
  return (
    <AuthContext.Provider
      value={{
        token: authState.token,
        userId: authState.userId,
        login,
        logout,
      }}
    >
      <Routes>
        {!authState.token && (
          <Route
            path="/bookings"
            element={<Navigate replace to="/auth/login" />}
          />
        )}

        {authState.token && (
          <Route
            path="/auth/login"
            element={<Navigate replace to="/events" />}
          />
        )}

        {!authState.token && (
          <Route path="/auth">
            <Route path="login" element={<LoginScreen />} />
            <Route path="signup" element={<SignUpScreen />} />
          </Route>
        )}
        {authState.token && (
          <Route path="/bookings" element={<BookingScreen />} />
        )}
        <Route path="/home" element={<App />} />
        <Route path="/events" element={<EventScreen />} />
        {!authState.token && (
          <Route path="/" element={<Navigate replace to="/auth/login" />} />
        )}
      </Routes>
    </AuthContext.Provider>
  );
};

export default AppRouter;
