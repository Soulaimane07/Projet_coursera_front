import React from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai";

function Header({title, create, btn, total, setCreateBtn, langSub}) {
  return (
    <div className={`flex justify-between items-center`}>
      <h1 className="text-3xl font-bold tracking-tight"> {title} {total !== 0 && `( ${total} )`} </h1>
      {create && 
        <button onClick={()=> setCreateBtn(true)} className='bg-blue-600 px-12 py-3 border-2 border-transparent rounded-md text-white flex items-center space-x-2 hover:bg-blue-500 transition-all'> 
          <AiOutlinePlusCircle size={20} />
          <span> {btn} </span> 
        </button>
      }
    </div>
  )
}

export default Header