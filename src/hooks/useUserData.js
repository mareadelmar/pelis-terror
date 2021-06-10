import { useState, useContext, useEffect, useCallback } from "react";
import { auth } from "../config/firebaseConfig";
import UserContext from "../context/UserContext";
import loginService from "../services/loginService";
import logoutService from "../services/logoutService";
import signupService from "../services/signupService";

export default function useUserData() {
    const { userData, setUserData } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [userLogged, setUserLogged] = useState(false);

    const logIn = useCallback(({ email, password }) => {
        setLoading(true);
        loginService({ email, password })
            .then((res) => {
                // setUserData(res.user);
                //window.sessionStorage.setItem('jwt', jwt)
                setLoading(false);
                setErrorMessage(null);
                console.log(res.user, "logueado");
            })
            .catch((err) => {
                //window.sessionStorage.removeItem('jwt')
                console.error(err);
                setLoading(false);
                setErrorMessage(err);
            });
    }, []);

    const logOut = useCallback(() => {
        setUserData(null);
        setLoading(true);
        logoutService()
            .then((res) => {
                console.log(res);
                setUserLogged(false);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setErrorMessage(err);
                setLoading(false);
            });
    }, [setUserData]);

    const signUp = useCallback(({ email, password }) => {
        signupService({ email, password }).then((user) => console.log(user));
    }, []);

    useEffect(() => {
        auth.onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                console.log(user, "está logueado");
                setUserLogged(true);
                setUserData(user);
            } else {
                // No user is signed in.
                console.log("no hay nadie logueado");
                setUserLogged(false);
                setUserData(null);
            }
        });
    }, [setUserData]);

    return {
        userData,
        logIn,
        logOut,
        userLogged,
        loading,
        errorMessage,
        signUp,
    };
}
