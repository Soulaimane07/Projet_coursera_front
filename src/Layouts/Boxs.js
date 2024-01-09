import { Link } from "react-router-dom"

export const Card = ({title, logo, total, link}) => {
    return (
        <Link to={link} className="bg-blue-100 hover:shadow-lg transition-all w-1/2 flex-1 px-4 py-4 rounded-md flex mx-2 my-2 items-center">
            <img src={logo} className="w-12" alt="" />
            <div className="ml-4">
                <h1 to={link} className="font-medium text-xl mr-4"> 
                    {total !== 0 && <span className=""> {total} </span>}
                    {title}
                </h1>
            </div>
        </Link>
    )
}