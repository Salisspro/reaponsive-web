
import React from 'react'

export default function Cart() {
  return (
    <div className='mt-10 lg:p-20'>

      <div className='flex mx-5 items-center justify-between space-x-2'>
        <div className='w-46 md:w-66 h-46 md:h-66 rounded border-teal-500 border '>
          <h1 className='text-slate-700 text-3xl font-bold'>1</h1>
        </div>

        <div className='w-46 md:w-66 md:h-66 h-46 rounded border-teal-500 border '>
          <h1 className='text-slate-700 text-3xl font-bold'>2</h1>
        </div>

        <div className='w-46 h-46 md:w-66 md:h-66 rounded border-teal-500 border '> 
          <h1 className='text-slate-700 text-3xl font-bold'>3</h1>
        </div>

      </div>
    </div>
  )
}
