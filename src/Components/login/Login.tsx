import { useState } from "react";
import { loginUser } from "../../Utils/auth";

type LoginProps = {
    onLoginSuccess : () => void;
    switchToSignup: () => void;
}

export default function Login({ onLoginSuccess, switchToSignup} : LoginProps) {
    const [email, setemail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleLogin = () => {
        const success = loginUser(email, password);
        if(success) onLoginSuccess();
        else {
            alert("Wrong credentials, please sign up");
            switchToSignup();
        }
    };

    return (
        <div>
            <h2>Login</h2>

            <input 
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
            />

            <input 
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleLogin}>
                Login
            </button>

            <p>
                Don't have an account?{" "}
                <span
                    style={{color: "blue", cursor: "pointer"}}
                    onClick={switchToSignup}
                >
                    Sign Up
                </span>
            </p>
        </div>
    )
}