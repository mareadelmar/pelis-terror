import { auth } from "../config/firebaseConfig";

export default function logoutService() {
    return auth
        .signOut()
        .then(() => {
            console.log("sesión cerrada");
        })
        .catch((error) => {
            console.error(error);
        });
}
