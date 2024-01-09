import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchBox = ({placeholder, setSearchTerm, width}) => {
    return (
        <div className={`${width ? 'w-full' : 'w-full md:w-1/2 lg:w-1/3'} bg-blue-100 border-blue-100 border-2 rounded-md flex items-center pr-2 `}>
            <input
                className="bg-transparent w-full outline-none px-4 py-1 text-gray-600" 
                placeholder={placeholder}
                type="email"
                onChange={(e)=> setSearchTerm(e.target.value)}
            />

            <div className="text-gray-600">
                <CiSearch size={20} />
            </div>
        </div>
    )
}

export default SearchBox