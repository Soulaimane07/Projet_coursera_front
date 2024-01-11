import { useState } from "react";
import BackBtn from "../Components/BackBtn";
import Button from "../Components/Button";
import { AffectCourse } from "../Components/Courses";
import { GetData, PostData, PostExcel, getUserData } from "../Components/Functions";
import { getLang } from "../Components/variables";

export const AffectToProf = ({teacherId, setDetailsProf}) => {
    let cours = GetData('/cours/index')
    let lang = getLang()?.data.teachers
    
    const [courId, setCourId] = useState(false)
    const [message, setMessage] = useState(false)
    console.log(courId);
    
    return (
        <div className="fixed z-20 top-0 left-0 right-0 h-screen     bg-opacity-40 w-full flex justify-center py-10">
            <div className=" rounded-md bg-white shadow-2xl w-full md:1/2 lg:w-2/3 mx-10 md:mx-20  lg:mx-0 flex flex-col pb-6 overflow-hidden ">
                <div className="relative text-center py-4 font-medium text-xl border-b-2 border-gray-500">
                    <h2> Courses </h2>
                    <BackBtn back={setDetailsProf} />
                </div>
                {message && <div className='text-red-600 w-full text-center font-medium mb-6'> {message} </div>}
                <div className="flex-1 overflow-y-scroll px-10 pt-4">
                    {cours?.map((item,key)=>(
                        <AffectCourse item={item} select={setCourId} />
                    ))}
                </div>

                <div className="flex space-x-4 px-10 pt-4">
                    <Button text={lang?.affecterr} fun={PostData} data={{cours_ids: [courId]}} message={setMessage} link={`/prof/${teacherId}/assignCours`} condition={false} />
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