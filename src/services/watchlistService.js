import { db } from "../config/firebaseConfig";

export function postWatchlist(userId, movie){
    const WLRef = db.collection("watchlist");
    movie.date = new Date().toISOString();
    return WLRef
            .doc(userId)
            .collection("userWatchlist")
            .doc(String(movie.id))
            .set(movie);
}

export const deleteWatchlist = (uid, movieId) => {
    const WLRef = db.collection("watchlist");
    return WLRef
            .doc(uid)
            .collection("userWatchlist")
            .doc(String(movieId))
            .delete()
}

export function getWatchlist(userId){
    const WLRef = db.collection("watchlist").doc(userId).collection("userWatchlist");

    return WLRef
        .orderBy("date", "desc")
        .get().then((doc) => {
            console.log("siii")
            if (doc) {
                let watchArray = [];
                doc.forEach((item) => {
                    watchArray.push(item.data());
                });
                return watchArray;
            } else {
                console.log("not found");
            }
        })
}