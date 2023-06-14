import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({
    isLoggedIn: false,
    onLogOut: () => {},
    onLogin: (email, password) => {}
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        setIsLoggedIn(false);   
    };
    useEffect(() => {
        const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn');

        if (storedUserLoggedInInfo === '1') {
            setIsLoggedIn(true);
        }
    }, [])
    return(
        <AuthContext.Provider value ={{
            isLoggedIn: isLoggedIn, onLogOut: logoutHandler, onLogin: loginHandler
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;





