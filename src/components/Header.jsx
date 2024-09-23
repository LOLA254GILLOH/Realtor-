import { useLocation, useNavigate } from 'react-router-dom'

import React from 'react'

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    
    function pathMathRoute(route){
        if(route === location.pathname){
            return true
        }
    }
  return (
    <div className='bg-white border-b shadow-sm sticky top 0 z-50'>
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
            <div>
                <img src='https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg' alt='logo' className='h-5 cursor-pointer' onClick={()=>navigate("/")}></img>
            </div>

            <div>
                <ul className='flex space-x-10'>
                    <li className={`cursor-pointer py-3 text-sm font-semibold ${pathMathRoute("/") ? "text-black border-b-[3px] border-b-red-500" : "text-gray-400"}`} onClick={()=>navigate("/")}>Home</li>
                    <li className={`cursor-pointer py-3 text-sm font-semibold ${pathMathRoute("/offers") ? "text-black border-b-[3px] border-b-red-500" : "text-gray-400"}`} onClick={()=>navigate("/offers")}>Offers</li>
                    <li className={`cursor-pointer py-3 text-sm font-semibold ${pathMathRoute("/sign-in") ? "text-black border-b-[3px] border-b-red-500" : "text-gray-400"}`} onClick={()=>navigate("/sign-in")}>Sign In</li>
                </ul>
            </div>
        </header>
    </div>
  )
}
