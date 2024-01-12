import React, { useState } from 'react'
import Header from '../../Layouts/Header'
import { getLang } from '../../Components/variables'
import { DeleteData, GetData, GetToTop, PageTitle } from '../../Components/Functions'
import {TeachersSkeleton} from '../../Components/Skeleton'
import { LuPenSquare } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import { BiDetail } from "react-icons/bi";
import { CreateGroupe, CreateModule, FiliereCreate } from '../../Layouts/Create'
import { FiliereDetails } from '../../Layouts/Details'
import { AffectModule } from '../../Layouts/Affect'

function Filiere() {
  let lang = getLang()?.data.teachers
  let langSub = getLang()?.subTitle

  GetToTop()
  PageTitle("Filieres")

  let filieres = GetData("/filiere/getFilieres")
  const [createBtn, setCreateBtn] = useState(false)
  const [details, setDetails] = useState(false)
  const [createModule, setCreateModule] = useState(false)
  const [createGroupe, setCreateGroupe] = useState(false)
  const [affect, setAffect] = useState(false)

  let spinner = () => {}

  return (
    <div className='mx-20 mt-10'>
        <Header title={"Filieres"} create={true} btn={"Créer une filière"} total={filieres?.length || 0} setCreateBtn={setCreateBtn} langSub={langSub} />
        
        <table className="w-full mt-10 text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-400 uppercase border-b-2 ">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Nom
                    </th>
                    <th scope="col" className="px-6 py-3">
                        {lang?.action}
                    </th>
                </tr>
            </thead>
            <tbody>
                {filieres 
                    ?   filieres?.map((item,key)=>(
                            <tr key={key} className='hover:bg-blue-100 transition-all border-b-1 border-blue-200 text-gray-700'>
                                <td className="px-6 py-4">
                                    {item?.nom}
                                </td>
                                <td className="">
                                    <button onClick={()=> setDetails(item)} className='px-2 opacity-70 hover:opacity-100 transition-all'>
                                        <BiDetail size={20} />
                                    </button>
                                    <button onClick={()=> DeleteData(spinner, null, null, null, `/filiere/${item?.id}/supprimerFiliere`)} className='px-2 opacity-70 hover:opacity-100 transition-all'>
                                        <FaRegTrashAlt size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))
                    :   <TeachersSkeleton />
                }
            </tbody>
        </table>

        {createBtn && <FiliereCreate setCreateBtn={setCreateBtn} />}
        {details && <FiliereDetails filiere={details} setDetails={setDetails} setCreateModule={setCreateModule} setCreateGroupe={setCreateGroupe} setAffect={setAffect} />}
        {createModule && <CreateModule setCreateBtn={setCreateModule} />}
        {createGroupe && <CreateGroupe setCreateBtn={setCreateGroupe} />}
        {affect && <AffectModule groupe={affect} setAffect={setAffect} />}
    </div>
  )
}

export default Filiere