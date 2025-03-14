import React from 'react'
import { useParams } from 'react-router-dom' //use this to get access to useParams 

function User() {
    const {userid} = useParams()  //use this hook
  return ( 
    <div className='font-bold bg-orange-700 p-10 text-amber-50 text-5xl'>User:{userid} </div> //only when u use line no.5 , will u get access to {userid}
  )
}

export default User

// useParams is a React Router hook that allows you to access URL parameters from a dynamic route.