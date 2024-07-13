import React, { useContext } from 'react'
import _userContext from '../context/UserContext'

const Profile = () => {
  const { user } = useContext(_userContext);
  if (!user) return (
    <h2>please Login</h2>
  )
  return (
    <div>
      <h2>Welcome Mr. {user.username} Your Password is {user.password}</h2>
    </div>
  )
}

export default Profile