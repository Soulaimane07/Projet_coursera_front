import React, { useState } from 'react'
import Header from '../../Layouts/Header'
import { getLang } from '../../Components/variables'
import { GetData, SearchFun } from '../../Components/Functions'
import { AdminCourse } from '../../Components/Courses'
import { CoursesSkeleton } from '../../Components/Skeleton'
import SearchBox from '../../Layouts/SearchBox'
import { GetToTop, PageTitle } from '../../Components/Functions'

import {CourCreate} from "../../Layouts/Create"
import { CourDetails } from '../../Layouts/Details'
import { CourUpdate } from '../../Layouts/Update'


function Courses() {
  let lang = getLang()?.data
  let langSub = getLang()?.subTitle

  GetToTop()
  PageTitle(lang.dashboard.cours)

  let courses = GetData("/cours/index")

  const [searchTerm, setSearchTerm] = useState('')

  const [createBtn, setCreateBtn] = useState(false)
  const [detailsCour, setDetailsCour] = useState(null)
  const [updateCour, setUpdateCour] = useState(null)

  return (
    <div className='mx-20 mt-10'>
      <Header title={lang.dashboard.cours} create={true} btn={lang.courses.createcour} total={courses?.length || 0} setCreateBtn={setCreateBtn} langSub={langSub} />
      
      <div className='mt-10'>
        <SearchBox placeholder={lang.courses.search} setSearchTerm={setSearchTerm} />
      </div>

      <div className='mt-6'>
        {courses.length !== 0 
          ? SearchFun(courses, 'libelle', searchTerm)?.map((item,key)=>( <AdminCourse item={item} key={key} setDetailsCour={setDetailsCour} />))
          : <CoursesSkeleton />
        }
      </div>

      {createBtn && <CourCreate setCreateBtn={setCreateBtn} />}
      {detailsCour && <CourDetails course={detailsCour} close={setDetailsCour} setUpdate={setUpdateCour} />}
      {updateCour && <CourUpdate course={updateCour} close={setUpdateCour} />}
    </div>
  )
}

export default Courses