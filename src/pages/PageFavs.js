import React, { useState, useEffect } from "react";
import { db } from "../config/firebaseConfig";
import useUserData from "../hooks/useUserData";
import Loader from "../components/Loader";
import ListOfCards from "../components/ListOfCards";

const PageFavs = () => {
    const { userLogged, userData, loading } = useUserData();
    const [favsMovies, setFavMovies] = useState([]);
    console.log(userLogged, userData, loading);

    useEffect(() => {
        if (userLogged) {
            const favsRef = db
                .collection("favs")
                .doc(userData.uid)
                .collection("userFavs");
            //const favsRef = favsDB.collection("userFavs");

            favsRef.get().then((doc) => {
                if (doc) {
                    let moviesArray = [];
                    doc.forEach((item) => {
                        moviesArray.push(item.data());
                    });
                    setFavMovies(moviesArray);
                    console.log(doc, "acaaaaaa");
                } else {
                    console.log("not found");
                }
            });
        }
    }, [userLogged]);

    if (loading) return <Loader />;
    return (
        <div>
            <h2 className="page-title">Tus favoritos</h2>
            <ListOfCards listOfMovies={favsMovies} />
        </div>
    );
};

export default PageFavs;
