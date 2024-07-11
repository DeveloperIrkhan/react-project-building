import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const {Id} = useParams();
  return (
    <div className='text-center bg-slate-400 text-3xl p-3'>
      User : {Id}
    </div>
  )
}

export default User
