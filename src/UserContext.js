import React, {useContext} from "react";

const UserContext = React.createContext({});

export function useUserContext () {
    return useContext(UserContext);
}

export default UserContext;