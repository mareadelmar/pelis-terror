import { auth } from "../config/firebaseConfig";

export default function loginService({ email, password }) {
    return auth.signInWithEmailAndPassword(email, password);
}
