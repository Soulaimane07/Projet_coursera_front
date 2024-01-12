import React, { useState } from 'react'
import { CoursesSkeleton } from '../../Components/Skeleton'
import { GetData, GetToTop, PageTitle, SearchFun, getUserData } from '../../Components/Functions'
import { getLang } from '../../Components/variables'
import Header from '../../Layouts/Header'
import SearchBox from '../../Layouts/SearchBox'
import { AdminCourse } from '../../Components/Courses'
import { AffectCertif } from '../../Layouts/Affect'
import { CourDetails } from '../../Layouts/Details'
import { DateFinUpdate } from '../../Layouts/Update'

function Courses() {
    let lang = getLang()?.data
  
    GetToTop()
    PageTitle(lang.dashboard.cours)
  
    let profId = getUserData()?.id
    let modules = GetData(`/prof/${profId}/modules`)

    const [module, setModule] = useState(0)
    let courses = GetData(`/module/${module}/cours`, module)
  
    const [searchTerm, setSearchTerm] = useState('')
  
    const [update, setUpdate] = useState(null)
    const [details, setDetails] = useState(null)

  
    return (
      <div className='mx-20 mt-10'>
        <Header title={lang.dashboard.cours} create={false} total={courses?.length || 0}  />
        
        <div className='mt-10 flex justify-between space-x-4'>
          <SearchBox placeholder={lang.courses.search} setSearchTerm={setSearchTerm} />
            <select onChange={(e)=> setModule(e.target.value)} className="w-1/4 border-2 rounded-md border-gray-300 outline-none px-3 py-1">
                <option value={0} >Module</option>
                {modules?.map((item,key)=>(
                    <option value={item.id} key={key}>
                        {item.nom}
                    </option>
                ))}
            </select>
        </div>
  
        <div className='mt-6'>
          {courses?.length !== 0 
            ? SearchFun(courses, 'libelle', searchTerm)?.map((item,key)=>( <AdminCourse item={item} key={key} setDetailsCour={setDetails} />))
            : <CoursesSkeleton />
          }
        </div>
  
        {details && <CourDetails course={details} close={setDetails} setSubmit={setUpdate} />}
        {update && <DateFinUpdate cours={update} setUpdate={setUpdate} />}
      </div>
    )
}

export default Courses