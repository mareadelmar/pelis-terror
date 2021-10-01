import { useState, useContext, useEffect, useCallback } from "react";
import UserContext from "../context/UserContext";
import useUserData from "./useUserData";
import getFavs from "../services/getFavsService";
import setFav from "../services/setFavService";

export default function useFavs(){
    const { userFavs, setUserFavs } = useContext(UserContext);
    const { userLogged, userData } = useUserData();
    const [ loading, setLoading ] = useState(false);

    const userId = userData ? userData.uid : null;

    const addToFav = useCallback((movie) => {
        setFav(userId, movie)
            .then((doc) => console.log("subido!!", doc))
            .catch(err => console.log(err))
    }, [userId])

    useEffect(() => {
        setLoading(true);
        if (userLogged) {
            getFavs(userId).then(res => {
                setUserFavs(res);
                setLoading(false);
            });
        }
    }, [userLogged, userId, setUserFavs]);

    return {
        userFavs,
        loading,
        addToFav
    }
}