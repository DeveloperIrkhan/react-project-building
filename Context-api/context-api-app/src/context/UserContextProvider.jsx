// import { useState } from "react";
// import UserContext from "./UserContext";

// const UserContextProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     return (
//         <UserContext.Provider value={{ user, setUser }}>
//             {children}
//         </UserContext.Provider>
//     )
// }
// export default UserContextProvider
import { useState } from 'react';
import _userContext from './UserContext'; // Default import

const _UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <_userContext.Provider value={{ user, setUser }}>
            {children}
        </_userContext.Provider>
    );
};

export default _UserContextProvider;