import React, { useState } from 'react'

import { BiSolidUser } from "react-icons/bi";
import { logoWhite } from '../Components/variables';
import { Link, NavLink } from 'react-router-dom';
import { Logout, getUserData } from '../Components/Functions';
import Button from '../Components/Button';

function Navbar({pages}) {
    let userData = getUserData()

    const [nav, setNav] = useState(false)
    const [navBox, setNavBox] = useState(true)

  return (
    <nav 
    // style={{backgroundColor: PrimaryColor}} 
        className='fixed z-10 top-0 left-0 w-full bg-blue-600'>
            <div className=" flex flex-wrap items-center justify-between mx-auto py-5 p-4 px-20">
                <Link to={'/'}>
                    <img src={logoWhite} className="h-5" alt="Logo" />
                </Link>

                <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button onClick={()=> setNav(!nav)} type="button" className="flex text-sm bg-blue-100 hover:bg-white rounded-full md:me-0 focus:ring-4 focus:bg-white focus:ring-gray-300" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                        <span className="sr-only">Open user menu</span>
                        <div className='text-blue-600 p-3 opacity-90'>
                            <BiSolidUser size={25} />
                        </div>
                    </button>

                    {nav &&
                        <>
                            <div className="z-50 fixed top-16 right-10 my-4 text-base overflow-hidden list-none bg-white divide-y divide-gray-100 rounded-lg shadow" id="user-dropdown">
                                <div className="px-4 py-3">
                                    <span className="block text-md text-gray-900"> {userData?.prenom} {userData?.nom} </span>
                                    <span className="block text-sm  text-gray-600 truncate"> {userData?.email} </span>
                                </div>
                                <ul className="" aria-labelledby="user-menu-button">
                                    <li className='text-sm font-medium opacity-80 hover:bg-blue-600'>
                                        <Button text="Log out" fun={Logout} background={"none"} color={"black"} />
                                    </li>
                                </ul>
                            </div>
                        </>
                    }

                    <button onClick={()=> setNavBox(!navBox)} data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                
                <div className={`${navBox ? 'inline' : 'hidden'} items-center justify-between  w-full md:flex md:w-auto md:order-1`} id="navbar-user">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        {pages?.map((item,key)=>(
                            <NavLink 
                              key={key} 
                              to={item.link} 
                              className={({ isActive }) =>
                                 `text-gray-300 hover:text-white hover:bg-blue-500 rounded-md px-3 py-2 text-md font-medium ${isActive && " bg-blue-500 text-white opacity-100"}`
                              }
                           >
                              {item.title}
                           </NavLink>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
  )
}

export default Navbar