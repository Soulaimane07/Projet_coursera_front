import { getLang } from "./variables"
import { SiCoursera } from "react-icons/si";
import { FiLink } from "react-icons/fi";

export const AdminCourse = ({item, setDetailsCour}) => {
    let lang = getLang()?.data.courses

    return( 
        <button onClick={()=> setDetailsCour(item)} className=' bg-blue-100 text-left w-full rounded-md px-6 py-5 mb-4 hover:shadow-xl transition-all flex flex-col md:flex-row items-center'>
            <div className='w-full md:w-52 bg-blue-500 h-24 rounded-md mb-4 md:mb-0 flex justify-center items-center'>
                <SiCoursera size={40} color="white" />
            </div>
            
            <div className='ml-6 w-full flex flex-col md:flex-row md:items-center'>
                <div className="flex-1 mr-4">
                    <h1 className='text-xl font-medium mb-2'> {item.titre} </h1>
                    <a target="blank" href={item.lien} className='font-medium mb-2 text-blue-500 flex space-x-1 items-center'> 
                        <FiLink />
                        <span className="underline"> {item?.lien?.length > 50 ? item?.lien?.substring(0,50)+'...' : item?.lien} </span>
                    </a>
                    <p> {item?.desc?.length > 200 ? item?.desc?.substring(0,200)+'...' : item?.desc} </p>
                </div>
                <div className=' text-sm mt-2 flex space-x-6'>
                    <div className="flex flex-col space-y-1">
                        <p> {lang.startDate} </p>
                        <p> {lang.endDate}</p>
                        <p className="text-red-500"> {lang.cDate} </p>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <p> {item.dateDebut} </p>
                        <p> {item.dateFin} </p>
                        <p className="text-red-500"> {item.deadline_control} </p>
                    </div>
                </div>
            </div>
        </button>
    )
}

export const ProfCourse = ({item}) => {
    let lang = getLang()?.data.courses

    return (
        <div className=' bg-blue-100 text-left w-full rounded-md px-6 py-5 mb-4 hover:shadow-xl transition-all flex flex-col md:flex-row items-center'>
            
            <div className=' ml-6 w-full md:items-center'>
                <div className="flex-1 mr-4">
                    <h1 className='text-xl font-medium mb-2'> {item.titre} </h1>
                    <a target="blank" href={item.lien} className='font-medium mb-2 text-blue-500 flex space-x-1 items-center'> 
                        <FiLink />
                        <span className="underline"> {item?.lien?.length > 50 ? item?.lien?.substring(0,50)+'...' : item?.lien} </span>
                    </a>
                </div>
                <div className=' text-sm mt-2 flex space-x-6'>
                    <div className="flex flex-col space-y-1">
                        <p> {lang.startDate} </p>
                        <p> {lang.endDate}</p>
                        <p className="text-red-500"> {lang.cDate} </p>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <p> {item.dateDebut} </p>
                        <p> {item.dateFin} </p>
                        <p className="text-red-500"> {item.deadline_control} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const AffectCourse = ({item, select}) => {
    let lang = getLang()?.data.courses

    return(
        <button onClick={()=> select(item?.id)} className=' bg-blue-100 text-left w-full rounded-md px-6 py-5 mb-4 hover:shadow-xl transition-all flex flex-col md:flex-row items-center'>
            <div className='w-full md:w-52 bg-blue-500 h-24 rounded-md mb-4 md:mb-0 flex justify-center items-center'>
                <SiCoursera size={40} color="white" />
            </div>
            
            <div className='ml-6 w-full flex flex-col md:flex-row md:items-center'>
                <div className="flex-1 mr-4">
                    <h1 className='text-xl font-medium mb-2'> {item.titre} </h1>
                    <a target="blank" href={item.lien} className='font-medium mb-2 text-blue-500 flex space-x-1 items-center'> 
                        <FiLink />
                        <span className="underline"> {item?.lien?.length > 50 ? item?.lien?.substring(0,50)+'...' : item?.lien} </span>
                    </a>
                </div>
                <div className=' text-sm mt-2 flex space-x-6'>
                    <div className="flex flex-col space-y-1">
                        <p> {lang.startDate} </p>
                        <p> {lang.endDate}</p>
                        <p className="text-red-500"> {lang.cDate} </p>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <p> {item.dateDebut} </p>
                        <p> {item.dateFin} </p>
                        <p className="text-red-500"> {item.deadline_control} </p>
                    </div>
                </div>
            </div>
        </button>
    )
}