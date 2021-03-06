import React, { useEffect } from "react";
import { useLocation } from "wouter";
import useUserData from "../../hooks/useUserData";
import { Helmet } from "react-helmet";
import { makeStyles, Button } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signupValidation } from "./signupValidation";


const useStyle = makeStyles({
    btnCustom: {
        marginTop: "1em",
    },
});

const SignUp = () => {
    const title = "Login";
    const { userLogged, signUp, errorMessage } = useUserData();
    const [, pushLocation] = useLocation();
    const classes = useStyle();

    console.log(errorMessage)
    const initialValues = {
        email: "",
        password: "",
        passConfirm: ""
    }

    useEffect(() => {
        if (userLogged) pushLocation("/");
    }, [userLogged, pushLocation]);

    return (
        <>
            <Helmet>
                <title>{`Freaks | ${title}`}</title>
                <meta name="description" content={title} />
            </Helmet>
            <Formik
                initialValues={initialValues}
                onSubmit={ async (values)=>{
                    console.log(values);
                    const { email, password } = values;
                    signUp({ email, password })
                        .then(res => console.log(res))
                }}
                validationSchema={signupValidation}
            >
                {
                    ({isSubmitting, errors, touched})=>(
                        <div className="flex login-container">
                            <Form className="flex login-form">
                                <h4>Crear una cuenta nueva:</h4>
                                <label htmlFor="input-mail">Email:</label>
                                <Field
                                    id="input-mail"
                                    type="text"
                                    name="email"
                                    placeholder="Ingresa tu email"
                                    error={touched.email && Boolean(errors.email)}
                                />
                                <label htmlFor="input-pass">Contrase??a:</label>
                                <Field
                                    id="input-pass"
                                    type="password"
                                    name="password"
                                    placeholder="Ingresa tu contrase??a"
                                    error={touched.password && Boolean(errors.password)}
                                />
                                <label htmlFor="input-passConfirm">Confirmar contrase??a:</label>
                                <Field
                                    id="input-pass"
                                    type="password"
                                    name="passConfirm"
                                    placeholder="Repite la contrase??a"
                                    error={touched.passConfirm && Boolean(errors.passConfirm)}
                                />

                                <Button
                                    type="submit"
                                    className={classes.btnCustom}
                                    color="primary"
                                    variant="contained"
                                    fullWidth
                                >
                                    Sign up
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
                                <ErrorMessage
                                    className="form-alert"
                                    name="passConfirm"
                                    component="div"
                                />
                                {
                                    errorMessage && <Alert severity="error">{errorMessage}</Alert>
                                }
                            </Form>
                        </div>
                    )
                }
            </Formik>
        </>
    );
};

export default SignUp;
