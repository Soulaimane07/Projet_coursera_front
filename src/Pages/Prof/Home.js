import React from 'react'
import Header from '../../Layouts/Header'
import { getLang } from '../../Components/variables'
import { GetToTop, PageTitle } from '../../Components/Functions'
import { Card } from '../../Layouts/Boxs'

function Home() {
    let lang = getLang()?.data

    GetToTop()
    PageTitle(lang.dashboard.dashboard)
  
    const cards = [
      {
        "logo": "./assets/images/cours.png", 
        "title": lang?.dashboard.cours,
        "total": 0,
        "link":"/courses"
      },
      {
        "logo": "./assets/images/student.png", 
        "title": lang?.dashboard.student,
        "total": 0,
        "link":"/students"
      }
    ]
  
    return (
      <div className='mx-20 mt-10'>
          <Header title={lang.dashboard.dashboard} total={0} />
  
          <div className='flex flex-wrap mt-4 justify-center'>
            {cards.map((item,key)=>{
              return <Card key={key} title={item.title} logo={item.logo} total={item.total} link={item.link}   />
            })}
          </div>
      </div>
    )
}

export default Home