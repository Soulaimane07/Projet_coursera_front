import React from 'react'
import Navbar from '../../Layouts/Navbar'
import Courses from '../../Pages/Responsible/Courses'
import { Route, Routes } from 'react-router-dom'
import { getLang } from '../../Components/variables'
import Home from '../../Pages/Responsible/Home'
import Footer from '../../Layouts/Footer'
import Teachers from '../../Pages/Responsible/Teachers'
import Groupes from '../../Pages/Responsible/Groupes'

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
    <>
      <div className='min-h-screen mt-32'>
        <Navbar pages={pages} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/teachers' element={<Teachers />} />
          <Route path='/groupes' element={<Groupes />} />
          {/*<Route path='/profile' element={<Profile pageTitle={"Admin - Profile"} />} />
          <Route path='/*' element={<Something />} /> */}
        </Routes>
      </div>
      <Footer pages={pages} />
    </>

  )
}

export default Respo