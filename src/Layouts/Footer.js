import React from 'react'
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { getLang, logoWhite } from '../Components/variables'
import LanguageBox2 from './LanguageBox2'

function Footer({pages}) {
  let date = new Date()

  let lang = getLang()?.data.footer
  let langSub = getLang()?.subTitle


  return (
    <div className={`text-white py-10 bg-blue-700 ${langSub === "ar" ? ' text-right' : 'text-left'} mt-10`}>
        <div className='px-10 md:px-20 lg:px-32 space-y-10 md:space-y-0 py-14 flex flex-wrap justify-between'>
          <div className='w-full md:w-1/2 md:mb-10 lg:w-1/3'>
            <img src={logoWhite} className='w-40 mb-4' alt='logoImg' />
            <p className='w-full pr-10 opacity-60'> 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard.
            </p>
            <div className='flex flex-row space-x-6 mt-4'>
              <BsFacebook size={20}  className='opacity-60 hover:opacity-100' />
              <BsInstagram size={20}  className='opacity-60 hover:opacity-100' />
              <BsTwitter size={20}  className='opacity-60 hover:opacity-100' />
            </div>
          </div>
          
          <div className='w-full md:w-1/2 md:mb-10 lg:w-1/5'>
            <h1 className=' font-medium text-xl mb-3 opacity-90'> {lang?.pages} </h1>
            <ul className='flex flex-col space-y-2'>
              {pages?.map((item,key)=>(
                <Link key={key} to={item.link} className='opacity-60 hover:opacity-100'> {item.title} </Link>
              ))}
            </ul>
          </div>
          
          <div className='w-full md:w-1/2 md:mb-10 lg:w-1/5'>
            <h1 className=' font-medium text-xl mb-3 opacity-90'> {lang?.languages} </h1>
            <ul className='flex flex-col space-y-2'>
              <LanguageBox2 style={langSub === "ar" ? ' text-right' : 'text-left'} />
            </ul>
          </div>
        </div>
        
        <hr className='my-10 opacity-30'></hr>
        
        <div className='text-center opacity-60'>
            <h1> {lang?.copyright1} {date.getFullYear()} {lang?.copyright2} </h1>    
        </div>
    </div>
  )
}

export default Footer