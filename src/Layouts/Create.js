import { useState } from "react"
import { getLang } from "../Components/variables"
import Button from "../Components/Button"
import CloseBtn from "../Components/CloseBtn"
import BackBtn from "../Components/BackBtn"
import { GetData, PostData, PostExcel } from "../Components/Functions"

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
            <div className=" rounded-md  bg-white shadow-2xl w-full md:1/2 lg:w-2/6 mx-10 md:mx-20  lg:mx-0 flex flex-col pb-6 overflow-hidden ">
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
                    <Button text={lang.create} link="/cours/create" fun={PostData} message={setMessage} data={cour} setCreateBtn={setCreateBtn} condition={lien === "" || libelle === "" || desc === "" || dateF === "" || dateL === "" || dateC === "" || moduleId === ""} />
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

export const StudentCreate = ({setCreateBtn}) => {
    let lang = getLang()?.data.groups
    let groupes = GetData(`/groupe/index`);
    
    const [cin, setCin] = useState("")
    const [email, setEmail] = useState("")
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [pass, setPass] = useState("")
    const [birth, setBirth] = useState("")
    const [phone, setphone] = useState("")
    const [groupe, setGroupe] = useState("")
    const [file, setFile] = useState("")
    
    
    const [message, setMessage] = useState(null)
    const [type, setType] = useState(0)
    
    let student
    type === 0 && (student = {CIN: cin, email, password: pass, nom: fname, prenom: lname, dateNaissance: birth, numTele: phone, groupe_id: groupe})
    type === 1 && (student = {fichier: file})


    return (
        <div className="fixed z-20 top-0 left-0 right-0 h-screen bg-gray-800 bg-opacity-40 w-full flex justify-center py-10">
            <div className=" rounded-md bg-white shadow-2xl w-full md:1/2 lg:w-2/6 mx-10 md:mx-20  lg:mx-0 flex flex-col pb-6 overflow-hidden ">
                <div className="relative text-center py-4 font-medium text-xl border-b-2 border-gray-500">
                    <h2> {lang?.createStudent} </h2>
                    <CloseBtn close={setCreateBtn} />
                </div>
                {message && <div className='text-red-600 w-full text-center font-medium mt-3 mb-3'> {message} </div>}
                <div className="flex-1 px-10 pb-2 mt-6 overflow-y-scroll">
                    <div className="flex justify-between space-x-2 mb-6">
                        <button onClick={()=> setType(0)} className={`${type === 0 ? ' bg-blue-600' : 'bg-blue-300'} transition-all text-white w-full rounded-md py-2 hover:bg-opacity-80`}> Manuel </button>
                        <button onClick={()=> setType(1)} className={`${type === 1 ? ' bg-blue-600' : 'bg-blue-300'} transition-all text-white w-full rounded-md py-2 hover:bg-opacity-80`}> Excel </button>
                    </div>

                    {type === 0 &&
                        <>
                            <div className="mb-6 flex flex-col">
                                <label className="mb-1"> Groupe </label>
                                <select onChange={(e)=> setGroupe(e.target.value)} className="flex-1 w-full border-2 rounded-md border-gray-300 outline-none px-3 py-1">
                                    <option value={0}>Groupe</option>
                                    {groupes?.map((item,key)=>(
                                        <option value={item.id} key={key}>
                                            {item.nom}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-6 flex flex-col">
                                <label className="mb-1"> CIN </label>
                                <input onChange={(e)=> setCin(e.target.value)} type="text" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                            </div>
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
                                <label className="mb-1"> {lang?.birth} </label>
                                <input onChange={(e)=> setBirth(e.target.value)} type="date" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                            </div>
                            <div className="mb-6 flex flex-col">
                                <label className="mb-1"> {lang?.phone} </label>
                                <input onChange={(e)=> setphone(e.target.value)} type="tel" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                            </div>
                            <div className="mb-6 flex flex-col">
                                <label className="mb-1"> {lang?.pass} </label>
                                <input onChange={(e)=> setPass(e.target.value)} type="password" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                            </div>
                        </>
                    }

                    {type === 1 &&
                        <div className="flex items-center justify-center w-full">
                            <label htmlFor="dropzone-file" className="flex hover:opacity-80 transition-all flex-col items-center justify-center w-full p-14 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer">
                                <div className="flex flex-col items-center justify-center">
                                    <svg className="w-8 h-8 mb-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-800"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-800">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input onChange={(e)=> setFile(e.target.files[0])} id="dropzone-file" type="file" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" className="hidden" />
                            </label>
                        </div> 
                    }
                </div>

                <div className="flex space-x-4 px-10">
                    <Button link={type === 0 ? "/etudiant/create" : "/simple-excel/importEtudiant"} data={student} message={setMessage} fun={type === 0 ? PostData : PostExcel} text={lang.create} condition={type === 0 ? (email === "" || fname === "" || lname === "" || pass === "") :  !file} />
                </div>
            </div>
        </div>
    )
}

export const FiliereCreate = ({setCreateBtn}) => {
    let lang = getLang()?.data.teachers
    
    const [nom, setNom] = useState("")
    
    let data = {nom}
    const [message, setMessage] = useState(null)


    return (
        <div className="fixed z-20 top-0 left-0 right-0 h-screen bg-gray-800 bg-opacity-40 w-full flex justify-center py-10">
            <div className=" rounded-md bg-white shadow-2xl w-full md:1/2 lg:w-2/6 mx-10 md:mx-20  lg:mx-0 flex flex-col pb-6 overflow-hidden ">
                <div className="relative text-center py-4 font-medium text-xl border-b-2 border-gray-500">
                    <h2> Creer une filiere </h2>
                    <CloseBtn close={setCreateBtn} />
                </div>
                {message && <div className='text-red-600 w-full text-center font-medium mt-3 mb-3'> {message} </div>}
                <div className="flex-1 px-10 pb-2 mt-6">
                    <div className="mb-6 flex flex-col">
                        <label className="mb-1"> Nom </label>
                        <input onChange={(e)=> setNom(e.target.value)} type="text" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                    </div>
                </div>

                <div className="flex space-x-4 px-10">
                    <Button link="/filiere/ajouterFiliere" data={data} message={setMessage} fun={PostData} text={lang.create} condition={nom === ""} />
                </div>
            </div>
        </div>
    )
}

export const CreateModule = ({setCreateBtn}) => {
    let lang = getLang()?.data.teachers
    let filieres = GetData('/filiere/getFilieres');
    

    const [nom, setNom] = useState("")
    const [filiere, setFiliere] = useState("")
    
    let data = {nom, filiere_id: filiere}
    const [message, setMessage] = useState(null)

    return (
        <div className="fixed z-20 top-0 left-0 right-0 h-screen bg-opacity-40 w-full flex justify-center py-10">
            <div className=" rounded-md bg-white shadow-2xl w-full md:1/2 lg:w-2/6 mx-10 md:mx-20  lg:mx-0 flex flex-col pb-6 overflow-hidden ">
                <div className="relative text-center py-4 font-medium text-xl border-b-2 border-gray-500">
                    <h2> Creer un module </h2>
                    <BackBtn back={setCreateBtn} />
                </div>
                {message && <div className='text-red-600 w-full text-center font-medium mt-3 mb-3'> {message} </div>}
                <div className="flex-1 px-10 pb-2 mt-6">
                    <div className="mb-6 flex flex-col">
                        <label className="mb-1"> Nom </label>
                        <input onChange={(e)=> setNom(e.target.value)} type="text" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                    </div>

                    <div className="mb-6 flex flex-col">
                        <label className="mb-1"> Filiere </label>
                        <select onChange={(e)=> setFiliere(e.target.value)} className="flex-1 w-full border-2 rounded-md border-gray-300 outline-none px-3 py-1">
                            <option value={0} > Filiere </option>
                            {filieres?.map((item,key)=>(
                                <option value={item.id} key={key}>
                                    {item.nom}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="flex space-x-4 px-10">
                    <Button link="/module/ajouterModule" data={data} message={setMessage} fun={PostData} text={lang.create} condition={nom === ""} />
                </div>
            </div>
        </div>
    )
}

export const CreateGroupe = ({setCreateBtn}) => {
    let lang = getLang()?.data.teachers
    let filieres = GetData('/filiere/getFilieres');
    

    const [nom, setNom] = useState("")
    const [filiere, setFiliere] = useState("")
    
    let data = {nom, filiere_id: filiere}
    const [message, setMessage] = useState(null)

    return (
        <div className="fixed z-20 top-0 left-0 right-0 h-screen bg-opacity-40 w-full flex justify-center py-10">
            <div className=" rounded-md bg-white shadow-2xl w-full md:1/2 lg:w-2/6 mx-10 md:mx-20  lg:mx-0 flex flex-col pb-6 overflow-hidden ">
                <div className="relative text-center py-4 font-medium text-xl border-b-2 border-gray-500">
                    <h2> Creer un groupe </h2>
                    <BackBtn back={setCreateBtn} />
                </div>
                {message && <div className='text-red-600 w-full text-center font-medium mt-3 mb-3'> {message} </div>}
                <div className="flex-1 px-10 pb-2 mt-6">
                    <div className="mb-6 flex flex-col">
                        <label className="mb-1"> Nom </label>
                        <input onChange={(e)=> setNom(e.target.value)} type="text" className="border-2 rounded-md border-gray-300 outline-none px-3 py-1" />
                    </div>

                    <div className="mb-6 flex flex-col">
                        <label className="mb-1"> Filiere </label>
                        <select onChange={(e)=> setFiliere(e.target.value)} className="flex-1 w-full border-2 rounded-md border-gray-300 outline-none px-3 py-1">
                            <option value={0} > Filiere </option>
                            {filieres?.map((item,key)=>(
                                <option value={item.id} key={key}>
                                    {item.nom}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="flex space-x-4 px-10">
                    <Button link="/groupe/create" data={data} message={setMessage} fun={PostData} text={lang.create} condition={nom === ""} />
                </div>
            </div>
        </div>
    )
}