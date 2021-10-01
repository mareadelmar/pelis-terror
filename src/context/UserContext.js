import React, { useState } from "react";

const UserContext = React.createContext({});

export function UserContextProvider({ children }) {
    const [ userData, setUserData ] = useState(null);
    const [ userFavs, setUserFavs ] = useState([]);
    const [ userWatchlist, setUserWatchlist ] = useState([]);

    return (
        <UserContext.Provider 
            value={{
                userData,
                userFavs,
                userWatchlist,
                setUserData,
                setUserFavs,
                setUserWatchlist
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;
