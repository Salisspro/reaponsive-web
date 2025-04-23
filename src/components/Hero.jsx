import React from 'react'

export default function Hero() {
  return (
    <div className='text-slate-300'>
      <h1 className="text-4xl font-bold text-center mt-10 font-mono uppercase">Welcome to abba mai shadda</h1>
      <p className='text-center mt-2 font-mono'>Your Home of Quality Textile</p>


      <div className="md:flex items-center justify-center space-x-10 p-10 mt-5 grid">
        <div>
          <h1 className='text-3xl my-2 capitalize'>we are pleased to met of our customer</h1>
          <p>Please check our new order and you will get discount as long as possible
          </p>
            <button className='border p-2 w-46 mt-5 rounded border-teal-700'>Check new Order</button>
        </div>

        <div className='w-2/5 text-2xl flex space-x-3 '>
          
        </div>
      </div>
    </div>
  )
}
