// import React, { useContext, useState } from 'react'
// import UserContext from '../context/UserContext';
// const Login = () => {

//     const { setUser } = useContext(UserContext);
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     //setuse is coming from UserContextProvider
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setUser({ username: username, password: password })
//     }
//     return (
//         <div>
//             <div>
//                 <input
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     type='text' placeholder='UserName' />
//                 <input
//                     type='text'
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder='Password' />
//                 <button onClick={handleSubmit}>Submit</button>
//             </div>
//         </div>
//     )
// }

// export default Login


import React, { useContext, useState } from 'react'
import _userContext from '../context/UserContext'
const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { setUser } = useContext(_userContext)
    const handleClickbutton = (e) => {
        e.preventDefault();
        setUser({ username, password })
    }
    return (
        <div className='flex justify-content-center align-items-center'>
            <div className=''>
                <input
                className='input-control'
                    type="text"
                    value={username}
                    placeholder='Enter Username'
                    onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <input
                    type="text"
                    value={password}
                    placeholder='Enter Password'
                    onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <button className='btn btn-primary m-3 p-3' onClick={handleClickbutton}>Submit</button>
            </div>
        </div>
    )
}
export default Login

