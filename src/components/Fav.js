import React from "react";
import "./Fav.css";
import { useLocation } from "wouter";
import useUserData from "../hooks/useUserData";
import { db } from "../config/firebaseConfig";

const Fav = ({ movie }) => {
    const [, pushLocation] = useLocation();
    const { userLogged, userData } = useUserData();

    const handleFav = () => {
        if (!userLogged) return pushLocation("/login");
        console.log("agregar a favs", movie.id, userData.uid);
        /* 
        (camiar el icono: de corazon a otro para borrarlo)
        verificar si el fav ya está en favs con el id --> si está, se borra (toggle) 
        si no, agregar a favs: pasar el objeto con sus propiedades y subirlo a firestore
        */
        const favsRef = db.collection("favs");

        favsRef
            .doc(userData.uid)
            .collection("userFavs")
            .add(movie)
            .then((doc) => console.log("subido!!", doc));
    };

    return (
        <button className="btn-fav" onClick={handleFav}>
            <span aria-label="Fav movie" role="img">
                ♥️
            </span>
        </button>
    );
};

export default Fav;
