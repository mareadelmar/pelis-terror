import React, { useState, useEffect } from "react";
import "./Login.css";
import { useLocation, Link } from "wouter";
import useUserData from "../hooks/useUserData";
import Loader from "../components/Loader";
import ErrorVisual from "../components/ErrorVisual";
import { Helmet } from "react-helmet";

const Login = () => {
    const title = "Freaks || Login";
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [, pushLocation] = useLocation();
    const { userData, logIn, logOut, userLogged, loading, errorMessage } =
        useUserData();

    const handleLogin = () => {
        console.log("login");
        logIn({ email, password });
        console.log(userData);
    };

    const handleLogOut = () => {
        console.log("cerrando sesión");
        logOut();
    };

    useEffect(() => {
        if (userLogged) pushLocation("/");
    }, [userLogged, pushLocation]);

    if (errorMessage) return <ErrorVisual />;
    if (loading) return <Loader />;
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={title} />
            </Helmet>
            <div className="flex login-container">
                <form className="flex login-form">
                    <h4>Ingresá a tu cuenta:</h4>
                    <label htmlFor="input-mail">Email:</label>
                    <input
                        id="input-mail"
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                    />
                    <label htmlFor="input-pass">Contraseña:</label>
                    <input
                        id="input-pass"
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                    />
                    <button className="form-btn-login" onClick={handleLogin}>
                        Login
                    </button>
                    {userLogged ? (
                        <button onClick={handleLogOut}>Log out</button>
                    ) : null}
                    <p>
                        ¿No tenés cuenta? <Link to="/signup">Creá una acá</Link>
                    </p>
                </form>
            </div>
        </>
    );
};

export default Login;
