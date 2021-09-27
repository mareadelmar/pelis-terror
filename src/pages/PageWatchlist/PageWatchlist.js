import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import TitlePage from "../../components/TitlePage"
import useUserData from "../../hooks/useUserData";
import { db } from "../../config/firebaseConfig"
import Loader from "../../components/Loader/Loader"

const PageWatchlist = () => {
    const { userData, userLogged } = useUserData();
    const [ watchlis, setWatchlist ] = useState();
    const [ loading, setLoading ] = useState();

    const movies = "";

    const userId = userData.uid || null;

    useEffect(()=>{
        const WLRef = db.collection("watchlist")
            .doc(userId)
            .collection("userWatchlist");
        
        WLRef.get().then((doc) => {
            if (doc) {
                const res = doc.map(item => {
                    return item.data();
                })
                console.log(res);
            } else {
                console.log("not found");
            }
        })
    },[userId])

    if (loading) return <Loader />;
    return (
        <Container>
            <TitlePage title="Tus películas guardadas para ver"/>
            {movies}
        </Container>
    )
}

export default PageWatchlist;
