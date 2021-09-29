import React, { useState, useEffect } from "react";
import useUserData from "../../hooks/useUserData";
import Loader from "../../components/Loader/Loader";
import ListOfCards from "../../components/ListOfCards/ListOfCards";
import TitlePage from "../../components/TitlePage/TitlePage";
import { Container } from "@material-ui/core";
import "./PageFavs.css";
import getFavs from "../../services/getFavsService";

const PageFavs = () => {
    const { userLogged, userData } = useUserData();
    const [ favsMovies, setFavMovies ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    const userId = userData ? userData.uid : null;

    useEffect(() => {
        setLoading(true);
        if (userLogged) {
            getFavs(userId).then(res => {
                setFavMovies(res);
                setLoading(false);
            });
        }
    }, [userLogged, userId]);

    if (loading) return <Loader />;
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
