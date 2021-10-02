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

export const getFavs = (userId) => {
    const favsRef = db
                .collection("favs")
                .doc(userId)
                .collection("userFavs");

    return favsRef.get().then((doc) => {
        if (doc) {
            let moviesArray = [];
            doc.forEach((item) => {
                moviesArray.push(item.data());
            });
            return moviesArray;
        } else {
            console.log("not found");
        }
    });
}