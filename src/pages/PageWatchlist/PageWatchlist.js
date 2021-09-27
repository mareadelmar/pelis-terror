import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import TitlePage from "../../components/TitlePage"
import useUserData from "../../hooks/useUserData";
import { db } from "../../config/firebaseConfig"


const PageWatchlist = () => {
    const { userData, userLogged } = useUserData();
    const [ watchlis, setWatchlist ] = useState();
    const movies = "";

    const userId = userData.uid || null;

    useEffect(()=>{
        const WLRef = db.collection("watchlist")
            .doc(userId)
            .collection("userWatchlist");
        
        WLRef.get()
        
    },[userId])

    return (
        <Container>
            <TitlePage title="Tus películas guardadas para ver"/>
            {movies}
        </Container>
    )
}

export default PageWatchlist;
