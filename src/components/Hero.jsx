import React from 'react'
import IMG from '../assets/img/485167425_676885728328224_2620577774290172906_n.jpg'
// import LOGO from '../assets/icons/Screenshot_2025-04-24_024407-removebg-preview.png'

export default function Hero() {
  return (
    <div className='text-slate-300 '>

      <h1 className="text-4xl font-bold text-center mt-10 font-mono uppercase">Welcome to abba mai shadda</h1>
      {/* <img className='w-66 ' src={LOGO} alt="" /> */}

      <div className="md:grid-cols-2 gap-4 mt-10  flex items-center justify-center flex-col md:flex-row-reverse">

        <div className='flex items-center justify-center flex-col'>
        
          <div className=' rounded border-teal-500 border mt-5 flex items-center justify-center flex-col'>
            <img className='w-86 h-86 rounded' src={IMG} alt="" />

            <div className='p-5'>
            <p>CEO <span className='text-slate-300 font-bold'>Abba mai shadda</span> <br />
              <span className='text-slate-300 font-bold'>We are happy to inform you that</span> <br />
              <span className='text-slate-300 font-bold'>we have new order for you</span>
            </p>
            </div>
          </div>
        </div>

        <div className='p-5'>
          <h1 className='text-slate-300 text-3xl'>New Order</h1>
          <p className='text-slate-300 text-xl  '>You can check your new order here</p>
          <p className='text-slate-300 text-xl  '>You can also contact us through our social media</p>
          <p className='text-slate-300 text-xl  '>You can also visit our shop for more information</p>

          <button className='border p-2 w-46 mt-5 rounded border-teal-700'>Check new Order</button>

        </div>
      </div>
    </div>
  )
}

// <p>
// You can contact us through our social media and you can also visit our shop for more information
// </p>