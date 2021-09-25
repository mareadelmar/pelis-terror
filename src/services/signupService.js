import { auth } from "../config/firebaseConfig";

export default function signupService({ email, password }) {
    return auth.createUserWithEmailAndPassword(email, password);
}
