import React, { useEffect } from "react";
import "./Login.css";
import { useLocation, Link } from "wouter";
import useUserData from "../../hooks/useUserData";
import Loader from "../../components/Loader/Loader";
//import ErrorVisual from "../../components/ErrorVisual/ErrorVisual";
import { Helmet } from "react-helmet";
import { makeStyles, Button } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginValidation } from "./loginValidation"

const useStyle = makeStyles({
    btnCustom: {
        marginTop: "1em",
    },
});

const Login = () => {
    const title = "Freaks | Login";
    const classes = useStyle();
    const [, pushLocation] = useLocation();
    const { logIn, userLogged, loading, errorMessage } = useUserData();

    const initialValues = {
        email: "",
        password: ""
    }

    useEffect(() => {
        if (userLogged) pushLocation("/");
    }, [userLogged, pushLocation]);

    //if (errorMessage) return <ErrorVisual />;
    if (loading) return <Loader />;
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={title} />
            </Helmet>

            <Formik
                initialValues={initialValues}
                onSubmit={ async (values)=>{
                    console.log(values);
                    const { email, password } = values;
                    logIn({ email, password })
                        .then(res => console.log(res))
                        .catch(err => {
                            console.log(errorMessage)
                            console.log(err.code, err.message);
                            console.error(err)
                            // faltan estos errores. capaz mejor hacer mi propia alerta
                        });
                }}
                validationSchema={loginValidation}
            >
                {
                    ({isSubmitting, errors, touched})=>(
                        <div className="flex login-container">
                            <Form className="flex login-form">
                                <h4>Ingresá a tu cuenta:</h4>
                                <label htmlFor="input-mail">Email:</label>
                                <Field
                                    id="input-mail"
                                    type="text"
                                    name="email"
                                    placeholder="Ingresa tu email"
                                    error={touched.email && Boolean(errors.email)}
                                />
                                <label htmlFor="input-pass">Contraseña:</label>
                                <Field
                                    id="input-pass"
                                    type="password"
                                    name="password"
                                    placeholder="Ingresa tu contraseña"
                                    error={touched.password && Boolean(errors.password)}
                                />
                                <Button
                                    type="submit"
                                    className={classes.btnCustom}
                                    color="primary"
                                    variant="contained"
                                    fullWidth
                                >
                                    Login
                                </Button>
                                <ErrorMessage
                                    className="form-alert"
                                    name="email"
                                    component="div"
                                />
                                <ErrorMessage
                                    className="form-alert"
                                    name="password"
                                    component="div"
                                />

                                <p>
                                    ¿No tenés cuenta? <Link to="/signup">Creá una acá</Link>
                                </p>
                            </Form>
                        </div>
                    )
                }
            </Formik>
        </>
    );
};

export default Login;

/*

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
