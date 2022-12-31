import React from 'react'

const Footer = () => {
    const currentyear = new Date()
  return (
    <div className='flex items-center justify-between p-4 w-full absolute mt-4 '>
          <p>Moviestore</p>
          <p>Developed by <a href='https://github.com/moseskereya' className=''>Moses Lazaro</a></p> 
    </div>
  )
}

export default Footer   