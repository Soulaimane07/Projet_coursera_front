import React from 'react'
import { getLang } from '../../Components/variables'
import { GetData, GetToTop, PageTitle } from '../../Components/Functions'
import Header from '../../Layouts/Header'
import { Card } from '../../Layouts/Boxs'

function Home() {
    let lang = getLang()?.data

    GetToTop()
    PageTitle(lang.dashboard.dashboard)
  
    let courses = GetData("/cours/index")
  
    const cards = [
      {
        "logo": "./assets/images/cours.png", 
        "title": lang?.dashboard.cours,
        "total": courses?.length || 0,
        "link":"/courses"
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