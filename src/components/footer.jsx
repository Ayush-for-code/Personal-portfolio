import React from 'react'
import logo from "/images/logo.png"

export default function Footer() {
  return (
   <>
    <div className='footer'>
      <img  src={logo} alt="logo" />
      <div className="details">
         <p>gmail- ayushbhardwaj@gmail.com </p>
       <p>mobile- 7983199035 </p>
      </div>
      <h4>© 2025 ayush</h4>
    </div>
   </>
  )
}
