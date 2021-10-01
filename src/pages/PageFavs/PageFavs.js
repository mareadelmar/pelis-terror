import React, { useState, useEffect } from "react";
import useUserData from "../../hooks/useUserData";
import { Helmet } from "react-helmet";
import Loader from "../../components/Loader/Loader";
import ListOfCards from "../../components/ListOfCards/ListOfCards";
import TitlePage from "../../components/TitlePage/TitlePage";
import { Container } from "@material-ui/core";
import "./PageFavs.css";
import getFavs from "../../services/getFavsService";
import useFavs from "../../hooks/useFavs";

const PageFavs = () => {
    const { userLogged, userData } = useUserData();
    const { userFavs, loading } = useFavs();
    const [ favsMovies, setFavMovies ] = useState([]);
    //const [ loading, setLoading ] = useState(false);
    const title = "Favoritas";

    //const userId = userData ? userData.uid : null;

    useEffect(() => {
        console.log(userFavs)
        if(userFavs) setFavMovies(userFavs)

        //setLoading(true);
        // if (userLogged) {
        //     getFavs(userId).then(res => {
        //         setFavMovies(res);
        //         setLoading(false);
        //     });
        // }
    }, [userFavs]);

    if (loading) return <Loader />;
    return (
        <>
            <Helmet>
                <title>{`Freaks | ${title}`}</title>
                <meta name="description" content={title} />
            </Helmet>
            <Container>
                <TitlePage title="Tus favoritas" />
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
        </>
    );
};

export default PageFavs;
