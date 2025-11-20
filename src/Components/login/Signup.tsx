import { useState } from "react";
import { signupUser } from "../../Utils/auth";

type SignupProps = {
    onSignupSuccess: () => void;
    switchToLogin: () => void;
}

export default function Signup({onSignupSuccess, switchToLogin} : SignupProps) {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = () => {
        signupUser(email, password);
        alert("Registration Successfull");
        onSignupSuccess();
    };

    return (
        <div>
            <input 
                type="email"
                name="email"
                value={email}
                onChange={(e:React. ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                placeholder="Enter Your email"
            />

            <input 
                type="password"
                name="password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                placeholder="Create a password"
            />

            <button type="submit" className="p-2 text-bold bg-red-500" onClick={handleSubmit}>
                Sign Up
            </button>

            <p>
                Already have an account?(" ")
                <span className="text-blue-400 cursor-pointer" onClick={switchToLogin}>
                   Login
                </span>
            </p>

        </div>
    )
}