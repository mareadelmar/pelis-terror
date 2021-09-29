import { db } from "../config/firebaseConfig";

export default function setWatchlist(userId, movie){
    const WLRef = db.collection("watchlist");

    return WLRef
            .doc(userId)
            .collection("userWatchlist")
            .add(movie);
}