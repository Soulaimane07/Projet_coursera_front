import React from 'react'
import { getLang } from '../../Components/variables'
import Navbar from '../../Layouts/Navbar'
import { Route, Routes } from 'react-router-dom'
import Footer from '../../Layouts/Footer'
import Home from '../../Pages/Prof/Home'
import Courses from '../../Pages/Prof/Courses'

function Teacher() {
  let lang = getLang()?.data.dashboard

  const pages = [
    {
        "title": lang?.cours,
        "link":"/courses"
    },
    {
      "title": lang?.student,
      "link":"/students"
    }
  ]

  return (
    <>
      <div className='min-h-screen mt-32'>
        <Navbar pages={pages} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          {/* <Route path='/teachers' element={<Teachers />} />
          <Route path='/students' element={<Students />} />
          <Route path='/filieres' element={<Filiere />} /> */}
        </Routes>
      </div>
      <Footer pages={pages} />
    </>
  )
}

export default Teacher