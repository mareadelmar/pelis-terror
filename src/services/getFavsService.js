import { db } from "../config/firebaseConfig";

export default function getFavs(userId){
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