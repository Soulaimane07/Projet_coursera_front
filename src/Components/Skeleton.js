export const CoursesSkeleton = () => {
    let keys = [0,1,2,3]
  return (
    keys?.map((item,key)=>(
        <div key={key} role="status" className="bg-blue-100 text-left w-full rounded-md px-6 py-5 mb-4 md:mx-2 hover:shadow-xl transition-all flex flex-col md:flex-row animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
            <div className="flex items-center justify-center w-72 h-32 bg-gray-300 rounded ">
                <svg className="w-8 h-8 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                </svg>
            </div>
            <div className="w-full">
                <div className="h-2.5 bg-gray-300 rounded-full  w-48 mb-4"></div>
                <div className="h-2 bg-gray-300 rounded-full  max-w-[480px] mb-2.5"></div>
                <div className="h-2 bg-gray-300 rounded-full  max-w-[440px] mb-2.5"></div>
                <div className="h-2 bg-gray-300 rounded-full  max-w-[460px] mb-2.5"></div>
                <div className="h-2 bg-gray-300 rounded-full  max-w-[360px]"></div>
            </div>
        </div>
    ))

  )
}

export const TeachersSkeleton = () => {
    let keys = [0,1,2,3,4,5,6,7,8,9]

    return (
        keys?.map((item,key)=>(
            <tr key={key} className=' animate-pulse border-b-1 border-blue-200 text-gray-700'>
                <td className='px-6 py-4 font-medium whitespace-nowrap'>
                    <div className="h-2.5 bg-gray-300 rounded-full w-24"></div>
                </td>
                <td className="px-6 py-4">
                    <div className="w-32 h-2 bg-gray-300 rounded-full"></div>
                </td>
                <td className="px-6 py-4">
                    <div className="w-32 h-2 bg-gray-300 rounded-full"></div>
                </td>
                <td className="px-6 py-4">
                    <div className="w-32 h-2 bg-gray-300 rounded-full"></div>
                </td>
                <td className="px-6 py-4">
                    <div className="w-32 h-2 bg-gray-300 rounded-full"></div>
                </td>
                <td>
                    <div className="h-2.5 bg-gray-300 rounded-full w-12"></div>
                </td>
            </tr>
        ))
    )
}