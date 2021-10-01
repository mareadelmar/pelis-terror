import { db } from "../config/firebaseConfig";

const favsRef = db.collection("favs");

export const postFav = (uid, movie) => {
    return favsRef
            .doc(uid)
            .collection("userFavs")
            .doc(String(movie.id))
            .set(movie)
}

export const deleteFav = (uid, movieId) => {
    return favsRef
            .doc(uid)
            .collection("userFavs")
            .doc(String(movieId))
            .delete()
}