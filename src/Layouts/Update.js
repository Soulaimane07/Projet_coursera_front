import { useState } from "react"
import BackBtn from "../Components/BackBtn"
import { getLang } from "../Components/variables"
import Button from "../Components/Button"
import { GetData, UpdateData } from "../Components/Functions"
import CloseBtn from "../Components/CloseBtn"

export const CourUpdate = ({course, close}) => {
    let lang = getLang()?.data.courses

    const [libelle, setlibelle] = useState(course?.titre)
    const [lien, setLien] = useState(course?.lien)
    const [desc, setdesc] = useState(course?.desc)
    const [dateL, setdateL] = useState(course?.dateDebut)
    const [dateF, setdateF] = useState(course?.dateFin)
    const [dateC, setdateC] = useState(course?.deadline_control)
    const [moduleId, setmoduleId] = useState(course?.module_id)

    let cour = {titre: libelle, lien, desc, dateDebut: dateL, dateFin: dateF, deadline_control: dateC, module_id: moduleId}


    let modules = GetData('/module/getModules')
    const [message, setMessage] = useState(null)


    return(
        <div className="fixed z-20 top-0 left-0 right-0 h-screen  bg-opacity-40 w-full flex justify-center py-10">
            <div className=" rounded-md bg-white shadow-2xl w-full md:1/2 lg:w-2/6 mx-10 md:mx-20  lg:mx-0 flex flex-col pb-6">
                <div className="relative text-center py-4 font-medium text-xl border-b-2 border-gray-500">
                    <h2> {lang?.update} </h2>
                    <BackBtn back={close} />
                </div>
                {message && <div className='text-red-600 w-full text-center font-medium mt-3 mb-3'> {message} </div>}
                <div className="flex-1 overflow-y-scroll">
                    <div className="px-10 pb-2 mt-6">
                        <div className="mb-6 flex flex-col">
                            <label className="mb-1"> {lang?.title} </label>
                            <input value={libelle} onChange={(e)=> setlibelle(e.target.value)} type="text" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                        </div>
                        <div className="mb-6 flex flex-col">
                            <label className="mb-1"> {lang.link} </label>
                            <input value={lien} onChange={(e)=> setLien(e.target.value)} type="text" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                        </div>
                        <div className="mb-6 flex flex-col">
                            <label className="mb-1"> {lang?.desc} </label>
                            <textarea value={desc} onChange={(e)=> setdesc(e.target.value)} rows="3" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" placeholder="Write your thoughts here..."></textarea>
                        </div>
                        <div className="mb-6 flex flex-col">
                            <label className="mb-1"> {lang?.startDate} </label>
                            <input value={dateL} onChange={(e)=> setdateF(e.target.value)} type="date" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                        </div>
                        <div className="mb-6 flex flex-col">
                            <label className="mb-1"> {lang?.endDate} </label>
                            <input value={dateF} onChange={(e)=> setdateL(e.target.value)} type="date" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                        </div>
                        <div className="mb-6 flex flex-col">
                            <label className="mb-1"> {lang.cDate} </label>
                            <input value={dateC} onChange={(e)=> setdateC(e.target.value)} type="date" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                        </div>
                        <div className="mb-6 flex flex-col">
                            <label className="mb-1"> {lang?.module} </label>
                            <select value={moduleId} onChange={(e)=> setmoduleId(e.target.value)} className="border-2 rounded-md border-gray-300 outline-none px-3 py-1">
                                <option value={""}></option>
                                {modules?.map((item,key)=>(
                                    <option key={key} value={item.id}> {item.nom} </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="flex space-x-4 px-10">
                    <Button text={lang.update} link={`/cours/update/${course?.id}`} fun={UpdateData} message={setMessage} data={cour} condition={libelle === cour?.titre && desc === cour?.desc && dateF === cour?.dateDebut && dateL === cour?.dateFin && dateC === cour?.deadline_control && moduleId === cour?.module_id} />
                </div>
            </div>
        </div>
    )
}

export const TeacherUpdate = ({teacher, setUpdateProf}) => {
    let lang = getLang()?.data.teachers

    const [email, setEmail] = useState(teacher?.email)
    const [fname, setFname] = useState(teacher?.prenom)
    const [lname, setLname] = useState(teacher?.nom)
    const [pass, setPass] = useState(null)

    let data = {email, nom: lname, prenom: fname, password: pass}
    const [message, setMessage] = useState(null)

    return (
        <div className="fixed z-20 top-0 left-0 right-0 h-screen bg-gray-800 bg-opacity-40 w-full flex justify-center py-10">
            <div className=" rounded-md bg-white shadow-2xl w-full md:1/2 lg:w-2/5 mx-10 md:mx-20  lg:mx-0 flex flex-col pb-6">
                <div className="flex-1">
                    <div className=" relative text-center py-4 font-medium text-xl border-b-2 border-gray-500">
                        <h2>{lang.update}</h2>
                        <CloseBtn close={setUpdateProf} />
                    </div>
                    {message && <div className='text-red-600 w-full text-center font-medium mt-3 mb-3'> {message} </div>}
                    <div className="px-10 pb-2 mt-6">
                        <div className="mb-6 flex flex-col">
                            <label className="mb-1"> {lang?.email} </label>
                            <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                        </div>
                        <div className="mb-6 flex flex-col">
                            <label className="mb-1"> {lang?.fname} </label>
                            <input value={fname} onChange={(e)=> setFname(e.target.value)} type="text" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                        </div>
                        <div className="mb-6 flex flex-col">
                            <label className="mb-1"> {lang?.lname} </label>
                            <input value={lname} onChange={(e)=> setLname(e.target.value)} type="text" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                        </div>
                        <div className="mb-6 flex flex-col">
                            <label className="mb-1"> {lang?.pass} </label>
                            <input onChange={(e)=> setPass(e.target.value)} type="password" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                        </div>
                    </div>
                </div>
                
                <div className="flex space-x-4 px-10">
                    <Button link={`/prof/update/${teacher?.id}`} message={setMessage} data={data} fun={UpdateData} text={lang?.update} condition={email === "" || fname === "" || lname === "" || pass === ""} />
                </div> 
            </div>
        </div>
    )
}