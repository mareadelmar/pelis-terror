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
            })
            .catch((err) => {
                //window.sessionStorage.removeItem('jwt')
                console.error(err, err.code, err.message);
                setLoading(false);
                setErrorMessage(err);
            });
    }, []);

    const logOut = useCallback(() => {
        setUserData(null);
        setLoading(true);
        logoutService()
            .then((res) => {
                setUserData(null);
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
        signupService({ email, password })
            .then((user) => user)
            .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
        setLoading(true);
        auth.onAuthStateChanged(function (user) {
            if (user) {
                setUserLogged(true);
                setUserData(user);
                setLoading(false);
            } else {
                setUserLogged(false);
                setUserData(null);
                setLoading(false);
            }
        });
    }, [setUserData]);

    return {
        setUserData,
        userData,
        logIn,
        logOut,
        userLogged,
        loading,
        errorMessage,
        signUp,
    };
}
