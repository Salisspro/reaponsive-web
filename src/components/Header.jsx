
import React, { useState } from 'react'
import ICONS from '../assets/icons/needle-sewing-needle-thread-logo-icon-design-template_652638-188.avif'
import MENU from '../assets/icons/icon-menu.svg'
import CLOSE from '../assets/icons/icon-menu-close.svg'

export default function Header() {
   const [modal, setModal] = useState(true)
   return (
      <div className='bg-slate-100 text-slate-300'>
         <div className='flex items-center justify-between'>
            <div onClick={()=>setModal(!modal)}>
               {modal ?
               <img  className='ml-5' src={MENU} alt="" /> : <div>
                  <img  className='ml-5' src={CLOSE} alt="" />
                  </div>}
               
            </div>
            <img className='w-20' src={ICONS} alt="" />
         </div>
      </div>
   )
}
