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
        <div className="min-h-screen max-w-full bg-white flex items-center ">
            <div className="max-w-2xl bg-gray-200 mx-auto flex flex-col p-5 rounded-xl">
                <h2 className="mx-auto text-blue-700 font-bold text-5xl mb-5">Login</h2>
                
                <div className="flex flex-col gap-y-3 text-2xl">
                    <div className="">
                        <label htmlFor="email" className="">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            className="focus:outline-none bg-white"
                        />
                    </div>
                    <div className="">
                        <label
                            htmlFor="password"
                            className=""
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="focus:outline-none bg-white"
                        />
                    </div>
                    <button onClick={handleLogin}>
                        Login
                    </button>
                    <p className="">
                        Don't have an account?{" "}
                        <span
                            onClick={switchToSignup}
                            className=" text-white bg-blue-700 px-2 rounded-sm py-1 font-semibold cursor-pointer"
                        >
                            Sign Up
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}