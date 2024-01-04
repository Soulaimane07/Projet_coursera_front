import React from 'react'
import Respo from './Respo';
import Student from './Student';
import Teacher from './Teacher';

function Logged() {
    let role = "responsible"
    
    const Platform = () => {
        switch (role) {
          case "responsible":
            return <Respo />
          case "student":
            return <Student />
          case "teacher":
            return <Teacher />
          default:
            return <Respo />
        }
    }

  return Platform()
}

export default Logged