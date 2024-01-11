import langDoc from '../Components/Langs.json'


/* ----------- Variables ---------------- */

export const logo = "/assets/images/logo_blue.png"
export const logoWhite = "/assets/images/logo.png"
export const iconLogo = "/assets/images/logo_page.png"
export const box1Image = "./assets/images/box1.webp"
export const PrimaryColor = "#0056d2"
export const ProfileImage = "./assets/images/profile.jpg"

export const serverURL = "http://127.0.0.1:8000/api"
export const uploadsURL = "http://127.0.0.1:8000/"





/* ----------- Functions ---------------- */

export const getLang = () => {
    let langJSON = localStorage.getItem("CourseraLang")
    let lang = langDoc.frensh

    if(langJSON === "undefined" || langJSON === undefined){
        lang = langDoc.frensh
    } else {
        let langSub = JSON.parse(langJSON)
        lang = langDoc.frensh
    
        langSub === "en" && (lang = langDoc.english)
        langSub === "fr" && (lang = langDoc.frensh)
        langSub === "ar" && (lang = langDoc.arabic)
    }
    
    // langSub === undefined && (lang = langDoc.frensh)

    return lang
}

export const setLang = (lang) => {
    localStorage.setItem("CourseraLang", JSON.stringify(lang))
    window.location.reload()
}