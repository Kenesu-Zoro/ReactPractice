import { useDispatch } from "react-redux"
import { useState, useEffect } from 'react'
import './App.css'
import authService from "./appwrite/auth" 
import {login , logout} from "./store/authSlice"
import {Header, Footer} from "./components"



function App() {
const [loading, setLoading] = useState(true)
const dispatch = useDispatch() 
  
useEffect(() => {
  authService.getCurrentUser()
  .then((userData) => {
    if (userData) {
      dispatch(login({userData}))
    }else{
      dispatch(logout())
    }
  })
  .finally(() => setLoading(false))
}, [])


return !loading ? (
  <div className="min-h-screen flex justify-center bg-emerald-200">
    <div className="w-full max-w-3xl mt-3 mx-auto text-center">
      <Header />
      <main className="my-8">
         TODO:{/* <Outlet /> */}
      </main>
      <Footer />
    </div>
  </div>
) : null;



}

export default App
