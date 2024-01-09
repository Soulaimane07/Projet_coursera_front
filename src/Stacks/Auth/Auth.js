import React from 'react'
import Login from './Login'
import { Route, Routes } from 'react-router-dom'

function Auth() {
  return (
    <Routes>
      <Route path="/*" element={<Login />} />
    </Routes>
  )
}

export default Auth