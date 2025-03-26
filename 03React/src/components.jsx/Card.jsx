import React from 'react'

function Card({username="NoUser", Btntxt="NoText"}) {
 
  
  
  return (
    <div className="flex items-center justify-center ">
        <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100 mt-3">
          <img
            src="https://images.pexels.com/photos/1532775/pexels-photo-1532775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">{username}</h2>
              <p className="text-gray-400">I hope one day I will get her back 🥲</p>
            </div>
            <button
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
            >
              {Btntxt}
            </button>
          </div>
        </div>
      </div>
  )
}

export default Card