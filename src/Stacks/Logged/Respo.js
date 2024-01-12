import React from 'react'
import Navbar from '../../Layouts/Navbar'
import Courses from '../../Pages/Responsible/Courses'
import { Route, Routes } from 'react-router-dom'
import { getLang } from '../../Components/variables'
import Home from '../../Pages/Responsible/Home'
import Footer from '../../Layouts/Footer'
import Teachers from '../../Pages/Responsible/Teachers'
import Students from '../../Pages/Responsible/Students'
import Filiere from '../../Pages/Responsible/Filiere'

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
      "title": lang?.student,
      "link":"/students"
    },
    {
      "title": "Filieres",
      "link":"/filieres"
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
          <Route path='/students' element={<Students />} />
          <Route path='/filieres' element={<Filiere />} />
        </Routes>
      </div>
      <Footer pages={pages} />
    </>
  )
}

export default Respo