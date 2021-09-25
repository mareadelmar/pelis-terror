import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";
import useUserData from "../../hooks/useUserData";
import { Helmet } from "react-helmet";
import { makeStyles, Button } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const useStyle = makeStyles({
    btnCustom: {
        marginTop: "1em",
    },
});

const formValidation = yup.object().shape({
    email: yup.string().email("Ingrese un email válido").required("El email es requerido"),
    password: yup.string().min(8, "La contraseña debe tener al menos ocho caracteres").required("La contraseña es requerida")
})

const SignUp = () => {
    const title = "Freaks | Login";
    const { userLogged, signUp } = useUserData();
    const [, pushLocation] = useLocation();
    const classes = useStyle();

    const initialValues = {
        email: "",
        password: ""
    }

    useEffect(() => {
        if (userLogged) pushLocation("/");
    }, [userLogged, pushLocation]);

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
                    signUp({ email, password })
                        .then(res => console.log(res))
                        .catch(err => console.log(err));
                }}
                validationSchema={formValidation}
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
                                />
                                <label htmlFor="input-pass">Contraseña:</label>
                                <Field
                                    id="input-pass"
                                    type="password"
                                    name="password"
                                    placeholder="Ingresa tu contraseña"
                                    error={touched.name && Boolean(errors.name)}
                                />
                                {/* <input
                                    className="form-btn-login"
                                    id="btn-signup"
                                    onClick={handleSignUp}
                                    type="submit"
                                    value="Sign up"
                                /> */}
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
                                </Form>
                        </div>
                    )
                }
            </Formik>
        </>
    );
};

export default SignUp;
