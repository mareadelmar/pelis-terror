import React, { useState, useEffect } from "react";
import "./Login.css";
import { useLocation, Link } from "wouter";
import useUserData from "../hooks/useUserData";
import Loader from "../components/Loader";
import ErrorVisual from "../components/ErrorVisual";
import { Helmet } from "react-helmet";
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";

const useStyle = makeStyles({
    btnCustom: {
        marginTop: "1em",
    },
});

const Login = () => {
    const title = "Freaks | Login";
    const classes = useStyle();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [, pushLocation] = useLocation();
    const { logIn, userLogged, loading, errorMessage } = useUserData();

    const handleLogin = () => {
        logIn({ email, password });
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

                    <Button
                        onClick={handleLogin}
                        className={classes.btnCustom}
                        color="primary"
                        variant="contained"
                        fullWidth
                    >
                        Login
                    </Button>
                    <p>
                        ¿No tenés cuenta? <Link to="/signup">Creá una acá</Link>
                    </p>
                </form>
            </div>
        </>
    );
};

export default Login;

/*
<Button 
    color= ""
    variant= "contained"
    fullWidth

>
    Login
</Button>



const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);


============================
container --> fondo pintado
outlined --> solo bordes
size (en vez de fullWidth) --> por default medium


*/
