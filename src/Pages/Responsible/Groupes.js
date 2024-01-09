import React, { useState } from 'react'
import Header from '../../Layouts/Header'
import { getLang } from '../../Components/variables'
import { GetData, GetToTop, PageTitle } from '../../Components/Functions'

function Groupes() {
    let lang = getLang()?.data.teachers

    GetToTop()
    PageTitle(lang.teachers)

    const [anne, setAnne] = useState(null)
    const [filiere, setFiliere] = useState(null)
    const [groupe, setGroupe] = useState(null)

    let annee = GetData('/annee/getAnnees')
    let filieres = GetData('/filiere/getFilieres')
    
    let groupes = []
    {filiere && (groupes = GetData(`/filiere/${String(filiere)}/groupes`))}
    
    console.log(groupes);


  return (
    <div className='mx-20 mt-10'>
        <Header title={"Groupes"} total={0} />

        <div className='flex justify-center space-x-4'>
            <select className="border-2 rounded-md border-gray-300 outline-none px-3 py-1">
                <option>Annee</option>
                {annee?.map((item,key)=>(
                    <option value={item.id} key={key}>
                        {item.nom}
                    </option>
                ))}
            </select>
            
            <select onChange={(e)=> setFiliere(e.target.value)} className="border-2 rounded-md border-gray-300 outline-none px-3 py-1">
                <option>Filiere</option>
                {filieres?.map((item,key)=>(
                    <option value={item.id} key={key}>
                        {item.nom}
                    </option>
                ))}
            </select>

            <select className="border-2 rounded-md border-gray-300 outline-none px-3 py-1">
                <option>Groupe</option>
                {groupes?.groupes?.map((item,key)=>(
                    <option value={item.id} key={key}>
                        {item.nom}
                    </option>
                ))}
            </select>
        </div>




    </div>
  )
}

export default Groupes