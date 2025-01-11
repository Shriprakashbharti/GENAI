import React from 'react'
import { assets } from '../assets/assets'
import logo from '../assets/logo.jpg';
const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>

      <div className="flex items-center gap-2">
         <img src={logo} alt="GENAI Logo" width={25} />
        <span className="text-lg font-bold">GENAI</span>
      </div>

        <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>
            Copyright @2024-25 | All right reserved.
        </p>
        
        <div className='flex gap-2.5'>
            <img src={assets.facebook_icon} alt="" width={35}/>
            <img src={assets.twitter_icon} alt="" width={35}/>
            <img src={assets.instagram_icon} alt="" width={35}/>
        </div>
        
    </div>
  )
}

export default Footer
