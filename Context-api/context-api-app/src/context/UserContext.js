// const UserContext = createContext();

// export default UserContext;
import { createContext } from "react";
const _userContext = createContext();
export default _userContext;
// // Step no 1
// // Create context variable
// // step no 2
// // you have to provide this variable to other components
// //<myContext>
// //    <App/>
// //    <Dashboard>
// //        <Admin/>
// //        <User/>
// //    </Dashboard>
// //</myContext>
// // myContext is now used by all the components
