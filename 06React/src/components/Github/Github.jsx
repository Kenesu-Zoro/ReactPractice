import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';


function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(() => {
    //  fetch("https://api.github.com/users/Kenesu-Zoro")
    //  .then(Response => Response.json())                    This also works, but to study  loader concept we have commented this                                                
    //  .then(data =>{
    //     console.log(data)
    //     setData(data)
    //  })

    // }, [])
    
  return (
    <div className="font-bold text-3xl bg-gray-400 p-10 flex flex-col items-center">
      No of Fucks I Give (GitHub Followers): {data.followers}
      <div className="flex flex-col items-center mt-4">
        <span className="text-3xl">Profile:</span>
        <img src={data.avatar_url} alt="Github Profile" className="rounded-full w-100 h-100 mt-2" />
      </div>
    </div>
  );
  
}

export default Github

export const githubInfoLoader = async () =>{
   const response = await fetch("https://api.github.com/users/Kenesu-Zoro")  //This is the mehtod which will set the loader
   return response.json()
}