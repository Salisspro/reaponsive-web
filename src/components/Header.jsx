
import React, { useState } from 'react'
import ICONS from '../assets/icons/0b1e7e7f4ae03c34f07576d465439452.png'
import MENU from '../assets/icons/icon-menu.svg'
import CLOSE from '../assets/icons/icon-menu-close.svg'

export default function Header() {
   const [modal, setModal] = useState(true)
   return (
      <div className='bg-slate-100 text-slate-300 p-5'>
         <div className='flex items-center justify-between'>
            <div onClick={() => setModal(!modal)}>
               {modal ?
                  <img className='' src={MENU} alt="" /> : <div>
                     <img className='' src={CLOSE} alt="" />

                  </div>}

            </div>
            <img className='w-20 ' src={ICONS} alt="" />
         </div>
      </div>
   )
}
