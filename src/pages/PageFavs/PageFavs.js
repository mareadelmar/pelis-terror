import React, { useState, useEffect } from "react";
import { db } from "../../config/firebaseConfig";
import useUserData from "../../hooks/useUserData";
import Loader from "../../components/Loader/Loader";
import ListOfCards from "../../components/ListOfCards/ListOfCards";
import TitlePage from "../../components/TitlePage/TitlePage";
import { Container } from "@material-ui/core";
import "./PageFavs.css";

const PageFavs = () => {
    const { userLogged, userData, loading } = useUserData();
    const [favsMovies, setFavMovies] = useState([]);

    const userUid = userData ? userData.uid : null;

    // mover a servicio
    useEffect(() => {
        if (userLogged) {
            const favsRef = db
                .collection("favs")
                .doc(userUid)
                .collection("userFavs");
            //const favsRef = favsDB.collection("userFavs");

            favsRef.get().then((doc) => {
                if (doc) {
                    let moviesArray = [];
                    doc.forEach((item) => {
                        moviesArray.push(item.data());
                    });
                    setFavMovies(moviesArray);
                } else {
                    console.log("not found");
                }
            });
        }
    }, [userLogged, userUid]);

    if (loading) return <Loader />;
    //if (!loading && !userLogged) return <p className=""></p>
    return (
        <Container>
            <TitlePage title="Tus favoritos" />
            {favsMovies.length >= 1 ? (
                <ListOfCards listOfMovies={favsMovies} />
            ) : (
                <div className="flex nofavs-container">
                    <p className="nofavs-message">
                        Aún no tienes películas favoritas
                    </p>
                </div>
            )}
        </Container>
    );
};

export default PageFavs;
