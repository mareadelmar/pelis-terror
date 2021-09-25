import * as yup from "yup";

export const signupValidation = yup.object().shape({
    email: yup.string()
        .email("Ingrese un email válido")
        .required("El email es requerido"),
    password: yup.string()
        .min(8, "La contraseña debe tener al menos ocho caracteres")
        .required("La contraseña es requerida"),
    passConfirm: yup.string()
        .required("Debes confirmar tu contraseña")
        .oneOf([yup.ref('password'), null], 'Las contraseñas no coinciden')
}) 