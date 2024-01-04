import React, { useState } from 'react'
import { PrimaryColor } from './variables'
import Spinner from './Spinner'

function Button({text, fun, background, color, condition, border, message}) {
    const [spinner, setSpinner] = useState(false)

  return (
    <button 
      disabled={condition}
      onClick={()=> fun(setSpinner, message)}
      style={{background: background ? background : PrimaryColor, color: color ? color : "white"}} 
      className={`w-full py-3 rounded-md flex justify-center ${condition ? 'opacity-50' : 'opacity-100 hover:opacity-80'} ${border && 'border-2'}  transition-all outline-none`}
    >
        {spinner ? <Spinner /> : text}
    </button>
  )
}

export default Button