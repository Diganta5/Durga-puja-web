import React from 'react'
import homeLogo from '../assets/durga6.jpg'
import CountdownTimer from './counter'
const Body = () => {
  return (
    <>
       <div className="relative">
      <img
        src={homeLogo}
        alt="Durga Puja"
        className="w-full h-screen object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
        <h2 className="text-white text-4xl md:text-6xl font-bold mb-4">
          WELCOME TO DURGA PUJA 2024
        </h2>
        <p className="text-white text-xl md:text-2xl mb-8 text-center">
          Join us in celebrating the festival of divine energy and good
          triumphing over evil.
        </p>
      <CountdownTimer/>
      </div>
    </div>
  
    </>
  )
}

export default Body
