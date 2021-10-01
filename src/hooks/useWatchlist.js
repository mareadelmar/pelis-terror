import { useState, useContext, useEffect, useCallback } from "react";
import UserContext from "../context/UserContext";
import useUserData from "./useUserData";
import getWatchlist from "../services/getWatchlistService";
import setWatchlist from "../services/setWatchlistService";

export default function useWatchlist(){
    const { userWatchlist, setUserWatchlist } = useContext(UserContext);
    const { userLogged, userData } = useUserData();
    const [ loading, setLoading ] = useState(false);

    const userId = userData ? userData.uid : null;

    const addToWatchlist = useCallback((movie) => {
        setWatchlist(userId, movie)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }, [userId])

    useEffect(() => {
        setLoading(true);
        if (userLogged) {
            getWatchlist(userId).then(res => {
                setUserWatchlist(res);
                setLoading(false);
            });
        }
    }, [userLogged, userId, setUserWatchlist]);

    return {
        userWatchlist,
        loading,
        addToWatchlist
    }
}