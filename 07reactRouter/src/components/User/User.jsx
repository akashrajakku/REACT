import React from 'react'
// useparams help us to acess that dynamic value from url input byt user
import { useParams } from 'react-router-dom'

function User() {
    const {userId}= useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl flex justify-center p-4'>User: {userId}</div>
  )
}

export default User