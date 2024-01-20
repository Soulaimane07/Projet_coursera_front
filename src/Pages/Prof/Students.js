import React, { useState } from 'react'
import Header from '../../Layouts/Header'
import { getLang, serverURL, uploadsURL } from '../../Components/variables'
import { GetData, GetToTop, PageTitle, getUserData } from '../../Components/Functions'
import { TeachersSkeleton } from '../../Components/Skeleton'

import { LuPenSquare } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import { BiDetail } from "react-icons/bi";
import { StudentCreate } from '../../Layouts/Create'
import axios from 'axios'

function Students() {
    let lang = getLang()?.data.groups
    let profId = getUserData()?.id

    GetToTop()
    PageTitle(lang.students)

    let annees = GetData('/annee/getAnnees');
    let filieres = GetData('/filiere/getFilieres');
    
    const [filiere, setFiliere] = useState(0)
    let groupes = GetData(`/groupe/${profId}/${filiere}/getGroupesEnseignesPourFiliere`, filiere);
    
    const [groupe, setGroupe] = useState(0)
    let modules = GetData(`/groupe/${groupe}/modules`, groupe)
    const [module, setModule] = useState(0)
    let cours = GetData(`/module/${module}/cours`, module)

    const [cour, setCour] = useState(0)
    let certificats = GetData(`/certificats/${cour}/${groupe}`, cour)

    
    
    const ReplaceEtudNom = (certificats) => {
        certificats.map((item,key)=>(
            axios.get(`${serverURL}/etudiant/show/${item?.etudiant_id}`)
                .then(res=>
                    item['etudiant_id'] = res.data.data[0].nom
                    )
                    .catch(err=>
                        console.log(err)    
                    )
        ))
                
                return certificats
    }

    ReplaceEtudNom(certificats)
    

  return (
    <div className='mx-20 mt-10'>

        <div className='flex justify-center space-x-4 mt-4 mb-4'>
            <select className="flex-1 w-full border-2 rounded-md border-gray-300 outline-none px-3 py-1">
                <option value={0}>Annee</option>
                {annees?.map((item,key)=>(
                    <option value={item.id} key={key}>
                        {item.nom}
                    </option>
                ))}
            </select>
            
            <select onChange={(e)=> setFiliere(e.target.value)} className="flex-1 w-full border-2 rounded-md border-gray-300 outline-none px-3 py-1">
                <option value={0}>Filiere</option>
                {filieres?.map((item,key)=>(
                    <option value={item.id} key={key}>
                        {item.nom}
                    </option>
                ))}
            </select>

            <select onChange={(e)=> setGroupe(e.target.value)} className="flex-1 w-full border-2 rounded-md border-gray-300 outline-none px-3 py-1">
                <option value={0}>Groupe</option>
                {groupes?.map((item,key)=>(
                    <option value={item.id} key={key}>
                        {item.nom}
                    </option>
                ))}
            </select>

            <select onChange={(e)=> setModule(e.target.value)} className="flex-1 w-full border-2 rounded-md border-gray-300 outline-none px-3 py-1">
                    <option value={0} >Module</option>
                    {modules?.map((item,key)=>(
                        <option value={item.id} key={key}>
                            {item.nom}
                        </option>
                    ))}
                </select>

                <select onChange={(e)=> setCour(e.target.value)} className="flex-1 w-full border-2 rounded-md border-gray-300 outline-none px-3 py-1">
                    <option value={0}> Cour </option>
                    {cours?.map((item,key)=>(
                        <option value={item.id} key={key}>
                            {item.titre}
                        </option>
                    ))}
                </select>
        </div>

        {module !== 0 && module !== '0' &&
            <div className='mt-14'>
                <Header title={"Certificats"} total={certificats?.length} />
                <table className="w-full mt-10 text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-400 uppercase border-b-2 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Etudiant
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date d'obtention
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Note
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Certificat
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {certificats 
                            ?   certificats?.map((item,key)=>{
                                return(
                                    <tr key={key} className='hover:bg-blue-100 transition-all border-b-1 border-blue-200 text-gray-700'>
                                        <td className="px-6 py-4">
                                            {item?.etudiant_id}
                                            {/* {
                                                axios.get(`${serverURL}/etudiant/show/${item?.etudiant_id}`)
                                                    .then(res=>
                                                        console.log(res.data.data[0].nom)
                                                    )
                                                    .catch(err=>
                                                        console.log(err)    
                                                    )

                                                // console.log(`${serverURL}/etudiant/show/${item?.etudiant_id}`)
                                            } */}

                                            {/* {
                                                item.etudiantName ? item.etudiantName : 'Loading...'
                                            } */}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item?.date_obtention}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item?.note}
                                        </td>
                                        <td className="px-6 py-4 text-blue-500 underline">
                                            <a target='_blank' href={`${uploadsURL}${item.pdf}`}> Lien </a>
                                        </td>
                                    </tr>
                            )})
                            :   <TeachersSkeleton />
                        }
                    </tbody>
                </table>
            </div>
        }
    </div>
  )
}

export default Students