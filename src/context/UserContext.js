import React, { useState } from "react";

const UserContext = React.createContext({});

export function UserContextProvider({ children }) {
    const [userData, setUserData] = useState(null);

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;
