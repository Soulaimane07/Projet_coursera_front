import React from 'react'
import { setLang } from '../Components/variables'

function LanguageBox() {
    const langs =[
        {
            "label":"English",
            "sub":"en"
        },
        {
            "label":"Francais",
            "sub":"fr"
        },
        {
            "label":"اللغة العربية",
            "sub":"ar"
        }
    ]
    
    return (
        <div className=" absolute bottom-10 left-0 mx-auto w-full flex flex-row space-x-4 justify-center">
            {langs.map((item,key)=>(
                <button key={key} onClick={()=> setLang(item?.sub)}> {item?.label} </button>
            ))}
        </div>
    )
}

export default LanguageBox