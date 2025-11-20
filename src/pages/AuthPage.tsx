import { useState } from "react";
import Login from "../Components/login/Login";
import Signup from "../Components/login/Signup";
import Welcome from "../Components/login/Welcome";

import { isUserLoggedIn } from "../Utils/auth";

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [loggedIn, setLoggedIn] = useState<boolean>(() => isUserLoggedIn());

  if (loggedIn) {
    return <Welcome onLogout={() => setLoggedIn(false)} />;
  }

  return (
    <div>
      {mode === "login" ? (
        <Login
          onLoginSuccess={() => setLoggedIn(true)}
          switchToSignup={() => setMode("signup")}
        />
      ) : (
        <Signup
          onSignupSuccess={() => setLoggedIn(true)}
          switchToLogin={() => setMode("login")}
        />
      )}
    </div>
  );
}
