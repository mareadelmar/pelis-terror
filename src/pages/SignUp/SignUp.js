import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";
import useUserData from "../../hooks/useUserData";
import { Helmet } from "react-helmet";
import { makeStyles, Button } from "@material-ui/core";

const useStyle = makeStyles({
    btnCustom: {
        marginTop: "1em",
    },
});

const SignUp = () => {
    const title = "Freaks | Login";
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { userLogged, signUp } = useUserData();
    const [, pushLocation] = useLocation();
    const classes = useStyle();

    const handleSignUp = (e) => {
        e.preventDefault();
        signUp({ email, password });
    };

    useEffect(() => {
        if (userLogged) pushLocation("/");
    }, [userLogged, pushLocation]);

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={title} />
            </Helmet>
            <div className="flex login-container">
                <form className="flex login-form">
                    <h4>Crear una cuenta nueva:</h4>
                    <label htmlFor="input-mail">Email:</label>
                    <input
                        id="input-mail"
                        onChange={(e) => {
                            setEmail(e.target.value);
                            console.log(e.target.value);
                        }}
                        type="text"
                    />
                    <label htmlFor="input-pass">Contraseña:</label>
                    <input
                        id="input-pass"
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                    />
                    {/* <input
                        className="form-btn-login"
                        id="btn-signup"
                        onClick={handleSignUp}
                        type="submit"
                        value="Sign up"
                    /> */}
                    <Button
                        onClick={handleSignUp}
                        className={classes.btnCustom}
                        color="primary"
                        variant="contained"
                        fullWidth
                    >
                        Sign up
                    </Button>
                </form>
            </div>
        </>
    );
};

export default SignUp;
