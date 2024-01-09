import { useState } from "react"
import CloseBtn from "../Components/CloseBtn"
import { getLang } from "../Components/variables"
import { FiLink } from "react-icons/fi";
import { DeleteData, GetData, getUserData } from "../Components/Functions";
import Button from "../Components/Button";

export const CourDetails = ({course, close, setUpdate}) => {
    let lang = getLang()?.data.courses
    let userRole = getUserData()?.role

    const Buttons = () => {
        let result

        if(userRole === "student"){
            result = (<>44</>
            // <SubmitButton text={"Submit"} fun={()=> setSubmitCour(course)} link={null} bgColor={PrimaryColor} color={"white"} />
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
        if(userRole === "teacher"){
            result = (
                <>55
                    {/* <SubmitButton text={lang?.changeDateFin} fun={()=> setUpdate(course)} bgColor={PrimaryColor} color={"white"} /> */}
                </>
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
                                    <h1> {GetData(`/module/getModule/${ course?.module_id}`)?.nom} </h1>
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


export const TeacherDetails = ({teacher, setDetailsProf}) => {
    let lang = getLang()?.data.teachers
    const [type, setType] = useState(1)

    console.log(GetData(`/prof/${teacher?.id}/modules`));

    return (
        <div className="fixed z-20 top-0 left-0 right-0 h-screen bg-gray-800 bg-opacity-40 w-full flex justify-center py-10">
            <div className=" rounded-md bg-white shadow-2xl w-full md:1/2 lg:w-2/5 mx-10 md:mx-20  lg:mx-0 flex flex-col pb-6">
                <div className="flex flex-col justify-between pb-6 h-full ">
                    <div className="overflow-y-scroll">
                        <div className="relative text-center py-4 font-medium text-xl border-b-2 border-gray-500">
                            <h2>
                                {teacher?.email}
                            </h2>
                            <CloseBtn close={setDetailsProf} />
                        </div>
                        
                        <div className="px-10 mt-6 flex-1">
                            <div className="flex space-x-2">
                                <button onClick={()=> setType(1)} className={`${type === 1 ? " bg-blue-500 text-white " : "bg-blue-100 hover:bg-blue-100 hover:text-blue-600 text-gray-600"} w-full rounded-md py-3`}>
                                    {lang?.cours} ( {teacher?.cours?.length} )
                                </button>
                                <button onClick={()=> setType(0)} className={`${type === 0 ? " bg-blue-500 text-white " : "bg-blue-100 hover:bg-blue-100 hover:text-blue-600 text-gray-600"} w-full rounded-md py-3`}>
                                    {lang?.groups} ( {teacher?.groupes?.length} )
                                </button>
                            </div>

                            <div className="mb-6">
                                {/* {type === 0 && <GroupesList data={teacher?.groupes} lang={lang} setDeleteBtn={setDeleteGroup} />}
                                {type === 1 && <CoursList data={teacher?.cours} lang={lang} setDeleteBtn={setDeleteCour} />} */}
                            </div>
                        </div>
                    </div>

                    {/* {deleteCour && <Alert noFun={()=> setDeleteCour(false)} yesFun={()=> PostData({'cour_id': deleteCour}, spinner, null, null, `/prof/${teacher?.id}/removeCours`)} />}
                    {deleteGroup && <Alert noFun={()=> setDeleteGroup(false)} yesFun={()=> DeleteData(null, spinner, null, null, `/group/${deleteGroup}/${teacher?.id}/removeprof`)} />} */}


                    <div className="flex space-x-4 px-10">
                        <Button text={lang?.affecterr}  link={`/prof/destroy/${teacher?.id}`} />
                    </div>
                </div>
            </div>
        </div>
    )
}