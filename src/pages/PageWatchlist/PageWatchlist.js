import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import { Helmet } from "react-helmet";
import TitlePage from "../../components/TitlePage/TitlePage"
//import useUserData from "../../hooks/useUserData";
import Loader from "../../components/Loader/Loader"
//import getWathclist from "../../services/getWatchlistService";
import ListOfCards from "../../components/ListOfCards/ListOfCards";
import useWatchlist from "../../hooks/useWatchlist";

const PageWatchlist = () => {
    //const { userData, userLogged } = useUserData();
    const { userWatchlist, loading } = useWatchlist();
    const [ watchlist, setWatchlist ] = useState([]);
    //const [ loading, setLoading ] = useState(false);
    //const userId = userData ? userData.uid : null;
    const title = "Watchlist";

    useEffect(()=>{
        if(userWatchlist) setWatchlist(userWatchlist);
        // {
        //     getWathclist(userId).then(res => {
        //         console.log(res);
        //         setWatchlist(res);
        //         setLoading(false);
        //     });
        // }
    },[userWatchlist])

    if (loading) return <Loader />;
    return (
        <>
            <Helmet>
                <title>{`Freaks | ${title}`}</title>
                <meta name="description" content={title} />
            </Helmet>
            <Container>
                <TitlePage title="Tus películas guardadas para ver"/>
                {
                    watchlist.length > 0 ?
                    <ListOfCards listOfMovies={watchlist}/>
                    : (
                        <div className="flex nofavs-container">
                            <p className="nofavs-message">
                                Aún no tienes películas favoritas
                            </p>
                        </div>
                    )
                }
            </Container>
        </>
    )
}

export default PageWatchlist;
