import React, { useState } from 'react'
import { getLang, logo } from '../../Components/variables'
import LanguageBox from '../../Layouts/LanguageBox'
import Button from '../../Components/Button'
import { LoginFun, LoginFunEtud, LoginFunProf } from '../../Components/Functions'

function Login() {
    let language = getLang()?.data
    let languageSub = getLang()?.subTitle

    const [role, setRole] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState(null)

    let fun 
    role === "0" && (fun = LoginFun)
    role === "1" && (fun = LoginFunEtud)
    role === "2" && (fun = LoginFunProf)

  return (
    <div className={`flex  h-screen w-full overflow-hidden `}>
        <div className='w-full md:px-32 lg:w-2/3 py-28 lg:px-14 relative'>
            <div className='px-10'>
                <img src={logo} className='w-32' alt="Logo" />
                <h1 className=' text-blue-700 my-12 text-4xl mb-12 font-medium'> {language.login.login} </h1>

                {message && <div className='text-red-600 w-full text-center font-medium mb-6'> {message} </div>}

                <div className="w-full mb-6 flex flex-col">
                    <label className=' font-semibold mb-2'> {language.login.role} </label>
                    <select onChange={(e)=> setRole(e.target.value)} className='border-2 w-full rounded-md border-gray-200 hover:border-gray-300 transition-all focus:border-blue-600 outline-none px-4 py-2'>
                        <option></option>
                        <option value="0" className={languageSub === "ar" ? 'text-right' : 'text-left'}> {language.login.responsable} </option>
                        <option value="1" className={languageSub === "ar" ? 'text-right' : 'text-left'}> {language.login.student} </option>
                        <option value="2" className={languageSub === "ar" ? 'text-right' : 'text-left'}> {language.login.professeur} </option>
                    </select>
                </div>
                
                <div className="w-full mb-6 flex flex-col">
                    <label className=' font-semibold mb-2'> {language.login.email} </label>
                    <input className='border-2 w-full rounded-md border-gray-200 hover:border-gray-300 transition-all focus:border-blue-600 outline-none px-4 py-2' onChange={(e)=> setEmail(e.target.value)} type="email" name="floating_email" id="floating_email"  required />
                </div>
                <div className="w-full mb-6 flex flex-col">
                    <label className=' font-semibold mb-2'> {language.login.password} </label>
                    <input className='border-2 w-full rounded-md border-gray-200 hover:border-gray-300 transition-all focus:border-blue-600 outline-none px-4 py-2' onChange={(e)=> setPassword(e.target.value)} type="password" name="floating_password" id="floating_password"  required />
                </div>

                <Button text={language.login.login} data={{email, password}} fun={fun} message={setMessage} condition={email === "" || password === "" || role === ""} />
                <LanguageBox />
            </div>
        </div>

        <div className='w-full hidden lg:inline'>
            <img src="./assets/images/login.jpg" className='w-full h-full' alt="background" />
        </div>
    </div>
  )
}

export default Login