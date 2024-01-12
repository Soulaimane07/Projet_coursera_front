import { useState } from "react";
import BackBtn from "../Components/BackBtn";
import Button from "../Components/Button";
import { AffectCourse } from "../Components/Courses";
import { GetData, PostData, PostExcel, getUserData } from "../Components/Functions";
import { getLang } from "../Components/variables";
import CloseBtn from "../Components/CloseBtn";

export const AffectToProf = ({teacherId, setDetailsProf}) => {
    let cours = GetData('/cours/index')
    let lang = getLang()?.data.teachers
    
    const [courId, setCourId] = useState(false)
    const [message, setMessage] = useState(false)

    const [type, setType] = useState(0)
    
    let filieres = GetData('/filiere/getFilieres');
    const [filiere, setFiliere] = useState(0)
    let groupes = GetData(`/filiere/${filiere}/groupes`, filiere)

    const [groupe, setGroupe] = useState(null)
    
    return (
        <div className="fixed z-20 top-0 left-0 right-0 h-screen     bg-opacity-40 w-full flex justify-center py-10">
            <div className=" rounded-md bg-white shadow-2xl w-full md:1/2 lg:w-2/3 mx-10 md:mx-20  lg:mx-0 flex flex-col pb-6 overflow-hidden ">
                <div className="relative text-center py-4 font-medium text-xl border-b-2 border-gray-500">
                    <h2> Affecter </h2>
                    <BackBtn back={setDetailsProf} />
                </div>
                {message && <div className='text-red-600 w-full text-center font-medium mb-6'> {message} </div>}
                <div className="flex-1 overflow-y-scroll px-10 pt-4">
                    <div className="flex justify-between space-x-2 mb-6 ">
                        <button onClick={()=> setType(0)} className={`${type === 0 ? ' bg-blue-600' : 'bg-blue-300'} transition-all text-white w-full rounded-md py-2 hover:bg-opacity-80`}> Cours  </button>
                        <button onClick={()=> setType(1)} className={`${type === 1 ? ' bg-blue-600' : 'bg-blue-300'} transition-all text-white w-full rounded-md py-2 hover:bg-opacity-80`}> Groupes  </button>
                    </div>
                    {type === 0 &&
                        <div>
                            {cours?.map((item,key)=>(
                                <AffectCourse key={key} item={item} select={setCourId} courId={courId} />
                            ))}
                        </div>
                    }

                    {type === 1 &&
                        <div>
                            <select onChange={(e)=> setFiliere(e.target.value)} className="mb-6 bg-blue-100 rounded-md p-2 w-full">
                                <option value={0}>Filieres</option>
                                {filieres?.map((item,key)=>(
                                    <option value={item.id} key={key}> {item.nom} </option>
                                ))}
                            </select>

                            {groupes?.map((item,key)=>(
                                <button onClick={()=> setGroupe(item?.id)} className={`${item?.id === groupe ? "bg-blue-600 text-white" : "bg-blue-100"} px-10 py-6 rounded-md w-full text-left transition-all hover:shadow-md`} key={key}>
                                    {item.nom}
                                </button>
                            ))}
                        </div>
                    }
                </div>

                <div className="flex space-x-4 px-10 pt-4">
                    <Button text={lang?.affecterr} fun={PostData} data={{cours_ids: [courId]}} message={setMessage} link={type === 0 ? `/prof/${teacherId}/assignCours` : `/groupe/${groupe}/${teacherId}/assignerprofesseurs`} condition={type === 0 ? false : groupe === 0} />
                </div>
            </div>
        </div>
    )
}

export const AffectCertif = ({course, setDetailsProf}) => {
    let lang = getLang()?.data.courses

    const [message, setMessage] = useState(false)
    
    const [pdf, setPdf] = useState('')

    let etudiantId = getUserData()?.id
     
    let data = {pdf, titre: course?.titre, etudiant_id: etudiantId, cour_id: course?.id}

    return (
        <div className="fixed z-20 top-0 left-0 right-0 h-screen bg-opacity-40 w-full flex justify-center py-10">
            <div className="rounded-md bg-white shadow-2xl w-full md:1/2 lg:w-2/6 mx-10 md:mx-20  lg:mx-0 flex flex-col pb-6 overflow-hidden">
                <div className="relative text-center py-4 font-medium text-xl border-b-2 border-gray-500">
                    <h2> {course?.titre} </h2>
                    <BackBtn back={setDetailsProf} />
                </div>
                {message && <div className='text-red-600 w-full text-center font-medium mb-6'> {message} </div>}
                <div className="flex-1 overflow-y-scroll px-10 pt-4">
                    <div className="flex items-center justify-center w-full">
                        <label htmlFor="dropzone-file" className="flex hover:opacity-80 transition-all flex-col items-center justify-center w-full p-14 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer">
                            <div className="flex flex-col items-center justify-center">
                                <svg className="w-8 h-8 mb-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p className="mb-2 text-sm text-gray-800"><span className="font-semibold">
                                {lang?.image1}</span>
                                </p>
                            </div>
                            <input onChange={(e)=> setPdf(e.target.files[0])} id="dropzone-file" type="file" accept=".pdf" className="hidden" />
                        </label>
                    </div> 
                </div>

                <div className="flex space-x-4 px-10 pt-4">
                    <Button text={'Submit'} fun={PostExcel} data={data}  message={setMessage} link={`/extractdate`} condition={pdf === ''} />
                </div>
            </div>
        </div> 
    )
}

export const AffectModule = ({groupe, setAffect}) => {
    let lang = getLang()?.data.courses

    const [message, setMessage] = useState(false)
    const [module, setModule] = useState(0)
    
    let modules = GetData(`/module/getModules`, groupe)
    
    let data = {}
    
    

    return (
        <div className="fixed z-20 top-0 left-0 right-0 h-screen bg-opacity-40 w-full flex justify-center py-10">
            <div className="rounded-md bg-white shadow-2xl w-full md:1/2 lg:w-2/6 mx-10 md:mx-20  lg:mx-0 flex flex-col pb-6 overflow-hidden">
                <div className="relative text-center py-4 font-medium text-xl border-b-2 border-gray-500">
                    <h2> Affecter Groupe </h2>
                    <BackBtn back={setAffect} />
                </div>
                {message && <div className='text-red-600 w-full text-center font-medium mb-6'> {message} </div>}
                <div className="flex-1 overflow-y-scroll px-10 pt-4">
                    <div className="mb-6 flex flex-col">
                        <label className="mb-1"> Groupe </label>
                        <input value={groupe?.nom} disabled type="text" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                    </div>

                    <select onChange={(e)=> setModule(e.target.value)} className="flex-1 w-full border-2 rounded-md border-gray-300 outline-none px-3 py-1">
                        <option value={0} >Module</option>
                        {modules?.map((item,key)=>(
                            <option value={item.id} key={key}>
                                {item.nom}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex space-x-4 px-10 pt-4">
                    <Button text={lang.affecter} fun={PostExcel} data={data}  message={setMessage} link={`/groupe/${groupe?.id}/associemoduleGrp/${module}`} condition={false} />
                </div>
            </div>
        </div> 
    )
}
