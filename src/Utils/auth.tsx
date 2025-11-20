
export const signupUser = (email : string, password : string) : void => {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
};

export const loginUser = (email : string, password : string) : boolean => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if(email === storedEmail && password === storedPassword) {
        return true;
    }
    return false;
}

export const isUserLoggedIn = () : boolean => {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    return Boolean (email && password) ;
}