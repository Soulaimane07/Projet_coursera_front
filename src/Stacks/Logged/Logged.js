import React from 'react'
import Respo from './Respo';
import Student from './Student';
import Teacher from './Teacher';
import { getUserData } from '../../Components/Functions';

function Logged() {
    let role = getUserData()?.role
    
    const Platform = () => {
        switch (role) {
          case "responsible":
            return <Respo />
          case "etudiant":
            return <Student />
          case "prof":
            return <Teacher />
          default:
            return <Respo />
        }
    }

  return Platform()
}

export default Logged