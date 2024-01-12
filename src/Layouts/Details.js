import { useState } from "react"
import CloseBtn from "../Components/CloseBtn"
import { getLang } from "../Components/variables"
import { FiLink } from "react-icons/fi";
import { DeleteData, GetData, getUserData } from "../Components/Functions";
import Button from "../Components/Button";
import { ProfCourse } from "../Components/Courses";


export const CourDetails = ({course, close, setUpdate, setSubmit}) => {
    let lang = getLang()?.data.courses
    let userRole = getUserData()?.role

    const Buttons = () => {
        let result

        if(userRole === "etudiant"){
            result = (
                <Button text={'Submit'} fun={()=> setSubmit(course)} />
            )
        }
        if(userRole === "responsible"){
            result = (
                <>
                    <Button text={lang?.delete} fun={DeleteData} link={`/cours/destroy/${course?.id}`} />
                    <Button text={lang?.update} fun={()=> setUpdate(course)} />
                </>
            )
        }
        if(userRole === "prof"){
            result = (
                <Button text={lang.changeDateFin} fun={()=> setSubmit(course)} />
            )
        }
        
        return result
    }


    return (
        <div className="fixed z-20 top-0 left-0 right-0 h-screen bg-gray-800 bg-opacity-40 w-full flex justify-center py-10">
            <div className=" rounded-md bg-white shadow-2xl w-full md:1/2 lg:w-2/6 mx-10 md:mx-20  lg:mx-0 flex flex-col pb-6">
                <div className="flex-1">
                    <div className=" relative text-center py-4 font-medium text-xl border-b-2 border-gray-500">
                        <h2>
                        {course?.titre}
                        </h2>
                        <CloseBtn close={close} />
                    </div>
                    <div className="flex flex-col justify-between pb-6 flex-1 ">
                        <div className="">
                            {/* <img src={`${uploadsURL}/${course?.image}`} className="w-full h-60" alt="" /> */}
                            <div className="px-10 mt-6">
                                <div className="mb-6">
                                    <label className="text-lg font-medium"> {lang.title} </label>
                                    <h1> {course?.titre} </h1>
                                </div> 
                                <div className="mb-6">
                                    <label className="text-lg font-medium"> {lang?.link} </label>
                                    <a target="blank" href={course.lien} className='font-medium mb-2 text-blue-500 flex space-x-1 items-center'> 
                                        <FiLink />
                                        <span className=" underline"> 
                                            {course?.lien?.length > 50 ? course?.lien?.substring(0,50)+'...' : course?.lien}
                                        </span>
                                    </a>
                                </div> 
                                <div className="mb-6">
                                    <label className="text-lg font-medium"> {lang.module} </label>
                                    <h1> {GetData(`/module/getModule/${course?.module_id}`)?.nom} </h1>
                                </div> 
                                <div className="mb-6">
                                    <label className="text-lg font-medium"> {lang.desc} </label>
                                    <h1> {course?.desc} </h1>
                                </div> 
                                <div className="mb-6 flex justify-between items-center">
                                    <label className="text-lg font-medium"> {lang.startDate} </label>
                                    <h1> {course?.dateDebut} </h1>
                                </div> 
                                <div className="mb-6 flex justify-between items-center">
                                    <label className="text-lg font-medium"> {lang.endDate} </label>
                                    <h1> {course?.dateFin} </h1>
                                </div> 
                                <div className="mb-6 flex justify-between items-center">
                                    <label className="text-lg font-medium"> {lang.cDate} </label>
                                    <h1 className="text-red-600"> {course?.deadline_control} </h1>
                                </div> 

                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex space-x-4 px-10">
                    {Buttons()}
                </div>
            </div>
        </div>
    
    )
}


export const TeacherDetails = ({teacher, setDetailsProf, setAffect}) => {
    let lang = getLang()?.data.teachers
    
    let annees = GetData('/annee/getAnnees');
    let filieres = GetData('/filiere/getFilieres');
    
    const [filiere, setFiliere] = useState(0)
    let groupes = GetData(`/groupe/${teacher?.id}/${filiere}/getGroupesEnseignesPourFiliere`, filiere);

    const [groupe, setGroupe] = useState(0)
    let cours = GetData(`/cours/${teacher?.id}/${groupe}/getCoursEnseignesPourGroupe`, groupe)
    console.log(cours);


    const [type, setType] = useState(0)
    let groupess =  GetData(`/filiere/${filiere}/groupes`, filiere)

    return (
        <div className="fixed z-20 top-0 left-0 right-0 h-screen bg-gray-800 bg-opacity-40 w-full flex justify-center py-10">
            <div className=" rounded-md bg-white shadow-2xl w-full md:1/2 lg:w-2/3 mx-10 md:mx-20  lg:mx-0 flex flex-col pb-6 overflow-hidden ">
                <div className="relative text-center py-4 font-medium text-xl border-b-2 border-gray-500">
                    <h2> {teacher?.email} </h2>
                    <CloseBtn close={setDetailsProf} />
                </div>
                <div className="flex-1 overflow-y-scroll px-10 pb-2 pt-6">
                    <div className="flex justify-between space-x-2 mb-6 ">
                        <button onClick={()=> setType(0)} className={`${type === 0 ? ' bg-blue-600' : 'bg-blue-300'} transition-all text-white w-full rounded-md py-2 hover:bg-opacity-80`}> Cours  </button>
                        <button onClick={()=> setType(1)} className={`${type === 1 ? ' bg-blue-600' : 'bg-blue-300'} transition-all text-white w-full rounded-md py-2 hover:bg-opacity-80`}> Groupes  </button>
                    </div>

                    {type === 0 &&
                        <div className="">
                        <div className="flex  space-x-4">
                            <select className="bg-blue-100 rounded-md p-2 w-full">
                                <option>Annees</option>
                                {annees?.map((item,key)=>(
                                    <option value={item.id} key={key}> {item.nom} </option>
                                ))}
                            </select>

                            <select onChange={(e)=> setFiliere(e.target.value)} className="bg-blue-100 rounded-md p-2 w-full">
                                <option value={0}>Filieres</option>
                                {filieres?.map((item,key)=>(
                                    <option value={item.id} key={key}> {item.nom} </option>
                                ))}
                            </select>

                            <select onChange={(e)=> setGroupe(e.target.value)} className="bg-blue-100 rounded-md p-2 w-full">
                                <option value={0}>Groupes</option>
                                {groupes?.map((item,key)=>(
                                    <option value={item.id} key={key}> {item.nom} </option>
                                ))}
                            </select>
                        </div>

                        <div className="mt-6 mb-6">
                            <h1 className="font-medium mb-2"> Cours ( {cours?.length} ) </h1>
                            {cours?.map((item,key)=>(
                                <ProfCourse item={item} key={key} />
                            ))}
                        </div>
                        </div>
                    }

                    {type === 1 &&
                        <div>
                            <select onChange={(e)=> setFiliere(e.target.value)} className="bg-blue-100 rounded-md p-2 w-full">
                                <option value={0}>Filieres</option>
                                {filieres?.map((item,key)=>(
                                    <option value={item.id} key={key}> {item.nom} </option>
                                ))}
                            </select>

                            <div className="mt-4">
                                {groupess?.map((item,key)=>(
                                    <div className={`${item?.id === groupe ? "bg-blue-600 text-white" : "bg-blue-100"} px-10 py-6 rounded-md w-full text-left transition-all hover:shadow-md`} key={key}>
                                        {item.nom}
                                    </div>
                                ))}
                            </div>
                        </div>
                    }
                </div>

                <div className="flex space-x-4 px-10 pt-4">
                    <Button text={lang?.affecterr} fun={()=> setAffect(teacher.id)}  link={`/prof/destroy/${teacher?.id}`} condition={filiere === "" || groupe === ""} />
                </div>
            </div>
        </div>
    )
}


export const FiliereDetails = ({filiere, setDetails, setAffect, setCreateModule, setCreateGroupe}) => {
    let lang = getLang()?.data.teachers
    let modules = GetData(`/module/${filiere?.id}/getmodulesParFiliere`);
    let groupes = GetData(`/filiere/${filiere?.id}/groupes`)

    const [type, setType] = useState(0)

    return (
        <div className="fixed z-20 top-0 left-0 right-0 h-screen bg-gray-800 bg-opacity-40 w-full flex justify-center py-10">
            <div className=" rounded-md bg-white shadow-2xl w-full md:1/2 lg:w-2/6 mx-10 md:mx-20  lg:mx-0 flex flex-col pb-6 overflow-hidden ">
                <div className="relative text-center py-4 font-medium text-xl border-b-2 border-gray-500">
                    <h2> {filiere?.nom} </h2>
                    <CloseBtn close={setDetails} />
                </div>
                <div className="flex-1 overflow-y-scroll px-8 pt-6">
                    <div className="flex justify-between space-x-2 mb-6">
                        <button onClick={()=> setType(0)} className={`${type === 0 ? ' bg-blue-600' : 'bg-blue-300'} transition-all text-white w-full rounded-md py-2 hover:bg-opacity-80`}> Modules ( {modules?.length || 0} ) </button>
                        <button onClick={()=> setType(1)} className={`${type === 1 ? ' bg-blue-600' : 'bg-blue-300'} transition-all text-white w-full rounded-md py-2 hover:bg-opacity-80`}> Groupes ( {groupes?.length || 0} ) </button>
                    </div>
                    {type === 0 &&
                        <div>
                            {modules?.map((item,key)=>(
                                <div key={key} className="bg-blue-100 px-6 rounded-md py-6 mb-2">
                                    {item.nom}
                                </div>
                            ))}
                        </div>
                    }
                    {type === 1 &&
                        <div>
                            {groupes?.map((item,key)=>(
                                <button onClick={()=> setAffect(item)} key={key} className="w-full text-left hover:bg-blue-600 hover:text-white transition-all bg-blue-100 px-6 rounded-md py-6 mb-2">
                                    {item.nom}
                                </button>
                            ))}
                        </div>
                    }
                </div>

                <div className="flex space-x-4 px-10 pt-4">
                    <Button text={type === 0 ? "Creer module" : "Creer Groupe"} fun={()=> type === 0 ? setCreateModule(filiere) : setCreateGroupe(filiere)} />
                </div>
            </div>
        </div>
    )
}