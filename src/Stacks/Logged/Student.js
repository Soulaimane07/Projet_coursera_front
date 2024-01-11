import React from 'react'
import { getLang } from '../../Components/variables'
import Navbar from '../../Layouts/Navbar'
import { Route, Routes } from 'react-router-dom'
import Footer from '../../Layouts/Footer'
import Home from '../../Pages/Student.js/Home'
import Courses from '../../Pages/Student.js/Courses'

function Student() {
  let lang = getLang()?.data.dashboard

  const pages = [
    {
        "title": lang?.cours,
        "link":"/courses"
    }
  ]

  return (
    <>
      <div className='min-h-screen mt-32'>
        <Navbar pages={pages} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
        </Routes>
      </div>
      <Footer pages={pages} />
    </>
  )
}

export default Student