import React from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";

function Header({title, create, btn, total, setCreateBtn, langSub, affect, setAffect}) {
  return (
    <div className={`flex justify-between items-center`}>
      <h1 className="text-3xl font-bold tracking-tight"> {title} {total !== 0 && `( ${total} )`} </h1>
      <div className='flex space-x-3'>
      {affect && 
        <button onClick={()=> setAffect(true)} className='bg-blue-600 px-12 py-3 border-2 border-transparent rounded-md text-white flex items-center space-x-2 hover:bg-blue-500 transition-all'> 
          <MdOutlineAssignmentTurnedIn size={20} />
          <span> Affecter Module </span> 
        </button>
      }
      {create && 
        <button onClick={()=> setCreateBtn(true)} className='bg-blue-600 px-12 py-3 border-2 border-transparent rounded-md text-white flex items-center space-x-2 hover:bg-blue-500 transition-all'> 
          <AiOutlinePlusCircle size={20} />
          <span> {btn} </span> 
        </button>
      }
      </div>
    </div>
  )
}

export default Header