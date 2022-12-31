import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { UserAuth } from './context/AuthContext'
function Navbar() {
    const { user, logOut } = UserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logOut();
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

  return (
      <div className='flex items-center justify-between p-4 z-[100] w-full absolute mt-4 '>
          <Link to="/"> 
          <h2 className='text-red-600 text-2xl font-bold cursor-pointer'>Moviestore</h2>
          </Link>
         {user?.email ? <div>
              <Link to="/Account">
                 <button className='text-white pr-4'>Account</button>
              </Link>
              <button onClick={handleLogout} className='bg-red-600 px-6 py-2 text-white'>Logout</button>
          </div> : 
            <div>
              <Link to="login">
                 <button className='text-white pr-4'>Sign In</button>
              </Link>
              <Link to="signup">
              <button className='bg-red-600 px-6 py-2 text-white'>Sign Up</button>
              </Link>
         </div>
         }
    </div>
  )
}

export default Navbar