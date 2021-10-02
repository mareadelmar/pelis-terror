import { useState, useContext, useEffect, useCallback } from "react";
import UserContext from "../context/UserContext";
import useUserData from "./useUserData";
import { postFav, deleteFav, getFavs } from "../services/favService";

export default function useFavs(){
    const { userFavs, setUserFavs } = useContext(UserContext);
    const { userLogged, userData } = useUserData();
    const [ loading, setLoading ] = useState(false);
    const [ errorMsn, setErrorMsn ] = useState("")

    const userId = userData ? userData.uid : null;

    const addToFav = useCallback((movie) => {
        setLoading(true);
        postFav(userId, movie)
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

    const removeFromFav = useCallback((id) => {
        console.log("useFav -- removeFromFav");
        setLoading(true);
        deleteFav(userId, id)
            .then(()=> {
                console.log("eliminado")
                setLoading(false);
                const newList = userFavs.filter(item => item.id !== id);
                setUserFavs(newList);
            })
            .catch(err => {
                console.error(err)
                setErrorMsn(err.message);
                setLoading(false);
            })

        // --> PARA LA UI:
        // const newList = userFavs.filter(item => item.id !== id);
        // setUserFavs(newList);
    },[userId, setUserFavs, userFavs])

    useEffect(() => {
        setLoading(true);
        if (userLogged) {
            getFavs(userId)
                .then(res => {
                    setUserFavs(res);
                    setLoading(false);
                })
                .catch(err => {
                    console.error(err);
                    setErrorMsn(err.message);
                    setLoading(false);
                })
        }
    }, [userLogged, userId, setUserFavs]);

    return {
        userFavs,
        loading,
        errorMsn,
        addToFav,
        removeFromFav
    }
}