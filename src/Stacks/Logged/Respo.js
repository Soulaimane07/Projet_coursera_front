import React from 'react'
import Navbar from '../../Layouts/Navbar'
import Courses from '../../Pages/Responsible/Courses'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { getLang } from '../../Components/variables'
function Respo() {
  let lang = getLang()?.data.dashboard

  const pages = [
    {
        "title": lang?.cours,
        "link":"/courses"
    },
    {
        "title": lang?.profs,
        "link":"/teachers"
    },
    {
      "title": lang?.groups,
      "link":"/groupes"
    }
  ]

  return (
      <div className='min-h-screen'>
        <Navbar pages={pages} />
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/courses' element={<Courses />} />
          {/* <Route path='/teachers' element={<Teachers />} />
          <Route path='/groupes' element={<Group />} />
          <Route path='/profile' element={<Profile pageTitle={"Admin - Profile"} />} />
          <Route path='/*' element={<Something />} /> */}
        </Routes>
        {/* <Footer pages={pages} /> */}
      </div>

  )
}

export default Respo