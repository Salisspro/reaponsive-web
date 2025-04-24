
import React from 'react'
import IMG from '../assets/img/486058303_677802528236544_7156047215018533440_n.jpg'
import IMG2 from '../assets/img/485626934_677802484903215_1427447628130676582_n.jpg'
import IMG3 from '../assets/img/485892806_677802474903216_2052160140797191276_n.jpg'


export default function Cart() {
  return (
    <div className=''>

      <div className='flex flex-col mx-5 items-center justify-between gap-5 mt-10'>
        <div className=''>

          <img className='w-86 h-56 rounded ' src={IMG} alt="" />


        </div>

        <div className=''>
          <img className='w-86 h-56 rounded' src={IMG2} alt="" />
        </div>

        <div className=''>
          <img className='w-86 h-56 rounded' src={IMG3} alt="" />
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}
