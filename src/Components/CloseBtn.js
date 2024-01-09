import React from 'react'
import { AiOutlineClose } from "react-icons/ai";

function CloseBtn({close}) {
    return(
        <button 
            className=" absolute top-3 left-4 rounded-md px-3 py-2 hover:bg-blue-600 hover:text-white transition-all" 
            onClick={()=> close(false)}
        >
            <AiOutlineClose />
        </button>
    )
}

export default CloseBtn