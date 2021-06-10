//import { useLocation } from "wouter";
import { auth } from "../config/firebaseConfig";

export default function signupService({ email, password }) {
    //const [, pushLocation] = useLocation();

    return auth
        .createUserWithEmailAndPassword(email, password)
        .then((userData) => {
            console.log(userData, "usuarix logueado");
            //pushLocation("/");
        })
        .catch((error) => {
            // An error happened.
            console.error(error);
        });
}
