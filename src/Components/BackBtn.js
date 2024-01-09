import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";

const BackBtn = ({back}) => {
    return(
        <button 
            className=" absolute top-3 left-4 rounded-md px-3 py-2 hover:bg-blue-600 hover:text-white transition-all" 
            onClick={()=> back(false)}
        >
            <FaArrowLeftLong />
        </button>
    )
}

export default BackBtn