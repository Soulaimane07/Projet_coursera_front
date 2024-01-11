import React, { useState } from 'react'
import Header from '../../Layouts/Header'
import { getLang, uploadsURL } from '../../Components/variables'
import { GetData, GetToTop, PageTitle } from '../../Components/Functions'
import { TeachersSkeleton } from '../../Components/Skeleton'

import { LuPenSquare } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import { BiDetail } from "react-icons/bi";
import { StudentCreate } from '../../Layouts/Create'

function Students() {
    let lang = getLang()?.data.groups

    GetToTop()
    PageTitle(lang.students)

    let annees = GetData('/annee/getAnnees');
    let filieres = GetData('/filiere/getFilieres');
    
    const [filiere, setFiliere] = useState(0)
    let groupes = GetData(`/filiere/${filiere}/groupes`, filiere);

    
    const [groupe, setGroupe] = useState(0)
    let students = GetData(`/groupe/${groupe}/getEtudiants`, groupe)
    
    
    let modules = GetData(`/groupe/${groupe}/modules`, groupe)
    const [module, setModule] = useState(0)
    let cours = GetData(`/module/${module}/cours`, module)

    const [cour, setCour] = useState(0)
    let certificats = GetData(`/certificats/${cour}/${groupe}`, cour)


    // console.log("Etudiant: ",GetData(`/etudiant/show/${1}`)[0]?.nom);

    const [create, setCreateBtn] = useState(false)

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
                {groupes?.groupes?.map((item,key)=>(
                    <option value={item.id} key={key}>
                        {item.nom}
                    </option>
                ))}
            </select>
        </div>

        {groupe !== 0 &&
            <div className='flex space-x-4 justify-center items-center w-1/2'>
                <h1 className='font-medium'> Certificats </h1>
                
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
        }




        {module == 0 && module == '0' &&
            <div className='mt-14'>
                <Header title={lang.students} total={students?.length} create={true} btn={lang.createStudent} setCreateBtn={setCreateBtn}  />
                <table className="w-full mt-10 text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-400 uppercase border-b-2 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                {lang?.email}
                            </th>
                            <th scope="col" className="px-6 py-3">
                                {lang?.fname}
                            </th>
                            <th scope="col" className="px-6 py-3">
                                {lang?.lname}
                            </th>
                            <th scope="col" className="px-6 py-3">
                                CIN
                            </th>
                            <th scope="col" className="px-6 py-3">
                                {lang?.phone}
                            </th>
                            <th scope="col" className="px-6 py-3">
                                {lang?.action}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {students 
                            ?   students?.map((item,key)=>(
                                    <tr key={key} className='hover:bg-blue-100 transition-all border-b-1 border-blue-200 text-gray-700'>
                                        <td>
                                            <button scope="row" className="px-6 py-4 font-medium whitespace-nowrap hover:text-blue-600">
                                                {item?.email}
                                            </button>
                                        </td>
                                        <td className="px-6 py-4">
                                            {item?.prenom}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item?.nom}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item?.CIN}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item?.numTele}
                                        </td>
                                        <td className="">
                                            <button  className='px-2 opacity-70 hover:opacity-100 transition-all'>
                                                <BiDetail size={20} />
                                            </button>
                                            <button  className='px-2 opacity-70 hover:opacity-100 transition-all'>
                                                <LuPenSquare size={18} />
                                            </button>
                                            <button  className='px-2 opacity-70 hover:opacity-100 transition-all'>
                                                <FaRegTrashAlt size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            :   <TeachersSkeleton />
                        }
                    </tbody>
                </table>

                {create && <StudentCreate setCreateBtn={setCreateBtn} />}
            </div>
        }

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