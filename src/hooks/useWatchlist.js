import { useState, useContext, useEffect, useCallback } from "react";
import UserContext from "../context/UserContext";
import useUserData from "./useUserData";
import { postWatchlist, getWatchlist, deleteWatchlist } from "../services/watchlistService";

export default function useWatchlist(){
    const { userWatchlist, setUserWatchlist } = useContext(UserContext);
    const { userLogged, userData } = useUserData();
    const [ loading, setLoading ] = useState(false);
    const [ errorMsn, setErrorMsn ] = useState("")

    const userId = userData ? userData.uid : null;

    const addToWatchlist = useCallback((movie) => {
        postWatchlist(userId, movie)
            .then(() => {
                console.log("subido!!")
                setLoading(false);
            })
            .catch(err => {
                console.error(err)
                setErrorMsn(err.message);
                setLoading(false);
            })
    }, [userId])

    const removeFromWatchlist = useCallback((id) => {
        setLoading(true);
        deleteWatchlist(userId, id)
            .then(()=> {
                console.log("eliminado")
                setLoading(false);
                const newList = userWatchlist.filter(item => item.id !== id);
                setUserWatchlist(newList);
            })
            .catch(err => {
                console.error(err)
                setErrorMsn(err.message);
                setLoading(false);
            })
    },[userId, setUserWatchlist, userWatchlist])

    useEffect(() => {
        setLoading(true);
        if (userLogged) {
            getWatchlist(userId).then(res => {
                console.log("user watchlist --> ", res);
                setUserWatchlist(res);
                setLoading(false);
            });
        }
    }, [userLogged, userId, setUserWatchlist]);

    return {
        userWatchlist,
        loading,
        errorMsn,
        addToWatchlist,
        removeFromWatchlist
    }
}