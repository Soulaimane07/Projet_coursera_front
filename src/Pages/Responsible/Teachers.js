import React, { useState } from 'react'
import Header from '../../Layouts/Header'
import { getLang } from '../../Components/variables'
import { DeleteData, GetData, GetToTop, PageTitle } from '../../Components/Functions'
import { TeachersSkeleton } from '../../Components/Skeleton'

import { LuPenSquare } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import { BiDetail } from "react-icons/bi";
import { TeacherCreate } from '../../Layouts/Create'
import { TeacherDetails } from '../../Layouts/Details'
import { TeacherUpdate } from '../../Layouts/Update'
import { AffectToProf } from '../../Layouts/Affect'


function Teachers() {
  let lang = getLang()?.data.teachers
  let langSub = getLang()?.subTitle

  GetToTop()
  PageTitle(lang.teachers)

  let teachers = GetData("/prof/showAll")

  const [createBtn, setCreateBtn] = useState(false)
  const [detailsProf, setDetailsProf] = useState(false)
  const [updateProf, setUpdateProf] = useState(false)
  const [affect, setAffect] = useState(false)

  let spinner = () => {}

  return (
    <div className='mx-20 mt-10'>
        <Header title={lang.teachers} create={true} btn={lang.createteacher} total={teachers?.length || 0} setCreateBtn={setCreateBtn} langSub={langSub} />
        
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
                        {lang?.action}
                    </th>
                </tr>
            </thead>
            <tbody>
                {teachers 
                    ?   teachers?.map((item,key)=>(
                            <tr key={key} className='hover:bg-blue-100 transition-all border-b-1 border-blue-200 text-gray-700'>
                                <td>
                                    <button onClick={()=> setDetailsProf(item)} scope="row" className="px-6 py-4 font-medium whitespace-nowrap hover:text-blue-600">
                                        {item?.email}
                                    </button>
                                </td>
                                <td className="px-6 py-4">
                                    {item?.prenom}
                                </td>
                                <td className="px-6 py-4">
                                    {item?.nom}
                                </td>
                                <td className="">
                                    <button onClick={()=> setDetailsProf(item)} className='px-2 opacity-70 hover:opacity-100 transition-all'>
                                        <BiDetail size={20} />
                                    </button>
                                    <button onClick={()=> setUpdateProf(item)} className='px-2 opacity-70 hover:opacity-100 transition-all'>
                                        <LuPenSquare size={18} />
                                    </button>
                                    <button onClick={()=> DeleteData(spinner, null, null, null, `/prof/destroy/${item?.id}`)} className='px-2 opacity-70 hover:opacity-100 transition-all'>
                                        <FaRegTrashAlt size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))
                    :   <TeachersSkeleton />
                }
            </tbody>
        </table>

        {createBtn && <TeacherCreate setCreateBtn={setCreateBtn} />}
        {detailsProf && <TeacherDetails teacher={detailsProf} setDetailsProf={setDetailsProf} setAffect={setAffect} />}
        {updateProf && <TeacherUpdate teacher={updateProf} setUpdateProf={setUpdateProf} />}
        {affect && <AffectToProf teacherId={affect} setDetailsProf={setAffect} />}
    </div>
  )
}

export default Teachers