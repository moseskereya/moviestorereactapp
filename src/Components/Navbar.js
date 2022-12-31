import React from 'react'

function Navbar() {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute mt-4 '>
          <h2 className='text-red-600 text-2xl font-bold cursor-pointer'>Moviestore</h2>
          <div>
              <button className='text-white pr-4'>Sign In</button>
              <button className='bg-red-600 px-6 py-2 text-white'>Sign Out</button>
         </div>
    </div>
  )
}

export default Navbar