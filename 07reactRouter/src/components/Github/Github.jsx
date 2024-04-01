import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

/**
 * 
 * Concept of loaders in react :
 * Each route can define a "loader" function to provide data to the route element before it renders.
 * It means like we have written a fetch call to our github api and using usestate hook and useeffect hook, which upon being clicked fetches api from github,
 * now the same work can be done by loader and the api calls are written within loader itself or a callback is called under which api has been called... this is a optimised version of fetching data because if we use loader for fetching api data then even before clicking , i.e only when pointer is hovered over the button it starts fetching data from api and store it in cache , so it is a pretty optimised approach of data fetching
 */


function Github() {
    const data= useLoaderData()
    /*
     const [data, setData] = useState([])
   // useEffect(() => {
      fetch('https://api.github.com/users/akashrajakku')
      .then(response => response.json())
      .then(data => {
         setData(data)
      })
    }, [])
    */
    
  return (
    <div className='bg-gray-600 text-white text-3xl flex justify-center p-4 rounded-md'>Github Followers : {data.followers}
    <img className='flex w-80 h-80' src= {data.avatar_url} alt="Github Profile Pic" />
    </div>
  )
}

export default Github

export const githubInfoLoader= async ()=>{
    const response= await fetch('https://api.github.com/users/akashrajakku')
    return response.json()
}