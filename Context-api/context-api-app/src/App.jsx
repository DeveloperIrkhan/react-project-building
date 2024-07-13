import Login from "./Component/Login"
import Profile from "./Component/Profile"
import _UserContextProvider from "./context/UserContextProvider"

function App() {

  return (
    <_UserContextProvider>
    <h3>Hi! how are you</h3>
    <Login/>
    <Profile/>
    </_UserContextProvider>
  )
}

export default App
