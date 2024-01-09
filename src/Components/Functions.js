import axios from "axios";
import { getLang, serverURL } from "./variables";
import { useEffect, useState } from "react";


export const PageTitle = (title) => {
    useEffect(() => {
        document.title = title;
    }, []);
}

export const GetToTop = () => {
    useEffect(()=>{
      window.scroll(0,0)
    }, [])
}

export const SearchFun = (data, item, searchTerm) => {
    let result = []

    item === 'libelle' &&( result = data?.filter((item)=> item.titre?.toLowerCase()?.includes(searchTerm?.toLowerCase())))
    item === 'email' &&( result = data?.filter((item)=> item.email?.toLowerCase()?.startsWith(searchTerm?.toLowerCase())))
    item === 'name' &&( result = data?.filter((item)=> item.nom?.toLowerCase()?.startsWith(searchTerm?.toLowerCase())))
    
    return result
}



/* ------------  CRUD  ------------ */


export const GetData = (link, repeat) => {
    const [data, setData] = useState([])

    useEffect(()=> {
        axios.get(`${serverURL}${link}`)
            .then(res => {
                setData(res.data?.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [repeat])

    return data
}

export const PostData = (spinner, message, data, navigate, link) => {
    spinner(true)
    message(null)

    axios.post(`${serverURL}${link}`, data)
        .then(res => {
            spinner(false)
            console.log(res.data);
            window.location.reload()
        })
        .catch(err => {
            spinner(false)
            console.log(err);
            message(getLang()?.data.courses.error)
        })

}

export const DeleteData = (spinner, message, data, navigate, link) => {
    spinner(true)

    axios.delete(`${serverURL}${link}`)
        .then(res =>{
            spinner(false)
            console.log(res.data);
            window.location.reload()
        })
        .catch(err => {
            console.log(err);
            spinner(false)
        })
}

export const UpdateData = (spinner, message, data, navigate, link) => {
    spinner(true)
    message(null)

    axios.put(`${serverURL}${link}`, data)
        .then(res =>{
            spinner(false)
            console.log(res.data);
            window.location.reload()
        })
        .catch(err => {
            console.log(err);
            spinner(false)
            message(null)
            message(getLang()?.data.courses.errorU)
        })
}



/* ------------  Auth  ------------ */


export const getUserData = () => {
    return JSON.parse(localStorage.getItem("CourseraUser"))
}

export const LoginFun = (spinner, message, data, navigate) => {
    spinner(true)
    message(false)

    axios.post(`${serverURL}/login`, data)
        .then(res => {
            if(res.data.status === "success"){
                spinner(false)
                localStorage.setItem("CourseraUser", JSON.stringify({...res.data.user, 'role': 'responsible'}))
                navigate("/")
                window.location.reload()
            } else {
                spinner(false)
                message(getLang()?.data.login.error)
            }
        })
        .catch(err => {
            console.log(err);
            message(getLang()?.data.login.error)
            spinner(false)
        })
}

export const LoginFunEtud = (data, spinner, navigate, message) => {
    spinner(true)
    message(false)

    axios.post(`${serverURL}/loginEtud`, data)
        .then(res => {
            if(res.data.status === "success"){
                spinner(false)
                localStorage.setItem("CourseraUser", JSON.stringify({...res.data.user, 'role': 'etudiant'}))
                navigate("/")
                window.location.reload()
            } else {
                spinner(false)
            }
        })
        .catch(err => {
            console.log(err);
            message("Email or password are wrong !")
            spinner(false)
        })
}

export const LoginFunProf = (data, spinner, navigate, message) => {
    spinner(true)
    message(false)

    axios.post(`${serverURL}/loginProf`, data)
        .then(res => {
            if(res.data.status === "success"){
                spinner(false)
                localStorage.setItem("CourseraUser", JSON.stringify({...res.data.user, 'role': 'prof'}))
                navigate("/")
                window.location.reload()
            } else {
                spinner(false)
            }
        })
        .catch(err => {
            console.log(err);
            message("Email or password are wrong !")
            spinner(false)
        })
}

