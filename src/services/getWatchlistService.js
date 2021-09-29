import { db } from "../config/firebaseConfig";

export default function getWathclist(userId){
    const WLRef = db.collection("watchlist").doc(userId).collection("userWatchlist");

    return WLRef.get().then((doc) => {
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