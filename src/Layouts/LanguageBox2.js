import React from 'react'
import { setLang } from '../Components/variables'

function LanguageBox2({style}) {
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
        langs.map((item,key)=>(
            <button  className={`opacity-60 hover:opacity-100 ${style}`} key={key} onClick={()=> setLang(item?.sub)}> {item?.label} </button>
        ))
    )
}

export default LanguageBox2