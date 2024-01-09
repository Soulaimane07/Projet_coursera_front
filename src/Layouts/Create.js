import { useState } from "react"
import { getLang } from "../Components/variables"
import Button from "../Components/Button"
import CloseBtn from "../Components/CloseBtn"
import { GetData, PostData } from "../Components/Functions"

export const CourCreate = ({setCreateBtn}) => {
    let lang = getLang()?.data.courses

    const [libelle, setlibelle] = useState("")
    const [lien, setLien] = useState("")
    const [desc, setdesc] = useState("")
    const [dateL, setdateL] = useState("")
    const [dateF, setdateF] = useState("")
    const [dateC, setdateC] = useState("")
    const [moduleId, setModuleId] = useState("")

    let cour = {
        titre: libelle, lien, desc, dateDebut: dateL, dateFin: dateF, deadline_control: dateC, module_id: moduleId
    }


  const [message, setMessage] = useState(null)

  let modules = GetData('/module/getModules')

    return (
        <div className="fixed z-20 top-0 left-0 right-0 h-screen bg-gray-800 bg-opacity-40 w-full flex justify-center py-10">
            <div className=" rounded-md bg-white shadow-2xl w-full md:1/2 lg:w-2/6 mx-10 md:mx-20  lg:mx-0 flex flex-col pb-6 overflow-hidden ">
                <div className="relative text-center py-4 font-medium text-xl border-b-2 border-gray-500">
                    <h2> {lang?.createcour} </h2>
                    <CloseBtn close={setCreateBtn} />
                </div>
                {message && <div className='text-red-600 w-full text-center font-medium mt-3 mb-3'> {message} </div>}
                <div className="flex-1 overflow-y-scroll">
                    <div className="px-10 pb-2 mt-6">
                        <div className="mb-6 flex flex-col">
                            <label className="mb-1"> {lang?.title} </label>
                            <input onChange={(e)=> setlibelle(e.target.value)} type="text" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                        </div>
                        <div className="mb-6 flex flex-col">
                            <label className="mb-1"> {lang?.link} </label>
                            <input onChange={(e)=> setLien(e.target.value)} type="text" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                        </div>
                        <div className="mb-6 flex flex-col">
                            <label className="mb-1"> {lang?.desc} </label>
                            <textarea onChange={(e)=> setdesc(e.target.value)} rows="3" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" placeholder="Write your thoughts here..."></textarea>
                        </div>
                        <div className="mb-6 flex flex-col">
                            <label className="mb-1"> {lang?.startDate} </label>
                            <input onChange={(e)=> setdateF(e.target.value)} type="date" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                        </div>
                        <div className="mb-6 flex flex-col">
                            <label className="mb-1"> {lang?.endDate} </label>
                            <input onChange={(e)=> setdateL(e.target.value)} type="date" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                        </div>
                        <div className="mb-6 flex flex-col">
                            <label className="mb-1"> {lang?.cDate} </label>
                            <input onChange={(e)=> setdateC(e.target.value)} type="date" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                        </div>
                        <div className="mb-6 flex flex-col">
                            <label className="mb-1"> {lang?.module} </label>
                            <select onChange={(e)=> setModuleId(e.target.value)} className="border-2 rounded-md border-gray-300 outline-none px-3 py-1">
                                <option value=""></option>
                                {modules?.map((item,key)=>(
                                    <option value={item.id} key={key}> {item.nom} </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="flex space-x-4 px-10">
                    <Button text={lang.create} link="/cours/create" fun={PostData} message={setMessage} data={cour} condition={lien === "" || libelle === "" || desc === "" || dateF === "" || dateL === "" || dateC === "" || moduleId === ""} />
                </div>
            </div>
        </div>
    )
}

export const TeacherCreate = ({setCreateBtn}) => {
    let lang = getLang()?.data.teachers
    
    const [email, setEmail] = useState("")
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [pass, setPass] = useState("")
    
    let teacher = {email, nom: lname, prenom: fname, password: pass}
    const [message, setMessage] = useState(null)


    return (
        <div className="fixed z-20 top-0 left-0 right-0 h-screen bg-gray-800 bg-opacity-40 w-full flex justify-center py-10">
            <div className=" rounded-md bg-white shadow-2xl w-full md:1/2 lg:w-2/6 mx-10 md:mx-20  lg:mx-0 flex flex-col pb-6 overflow-hidden ">
                <div className="relative text-center py-4 font-medium text-xl border-b-2 border-gray-500">
                    <h2> {lang?.createteacher} </h2>
                    <CloseBtn close={setCreateBtn} />
                </div>
                {message && <div className='text-red-600 w-full text-center font-medium mt-3 mb-3'> {message} </div>}
                <div className="flex-1 px-10 pb-2 mt-6">
                    <div className="mb-6 flex flex-col">
                        <label className="mb-1"> {lang?.email} </label>
                        <input onChange={(e)=> setEmail(e.target.value)} type="email" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                    </div>
                    <div className="mb-6 flex flex-col">
                        <label className="mb-1"> {lang?.fname} </label>
                        <input onChange={(e)=> setFname(e.target.value)} type="text" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                    </div>
                    <div className="mb-6 flex flex-col">
                        <label className="mb-1"> {lang?.lname} </label>
                        <input onChange={(e)=> setLname(e.target.value)} type="text" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                    </div>
                    <div className="mb-6 flex flex-col">
                        <label className="mb-1"> {lang?.pass} </label>
                        <input onChange={(e)=> setPass(e.target.value)} type="password" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                    </div>
                </div>

                <div className="flex space-x-4 px-10">
                    <Button link="/prof/create" data={teacher} message={setMessage} fun={PostData} text={lang.create} condition={email === "" || fname === "" || lname === "" || pass === ""} />
                </div>
            </div>
        </div>
    )
}