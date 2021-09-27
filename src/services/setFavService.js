import { db } from "../config/firebaseConfig";

export default function setFav(uid, movie){
    const favsRef = db.collection("favs");
    return favsRef
            .doc(uid)
            .collection("userFavs")
            .add(movie)
}