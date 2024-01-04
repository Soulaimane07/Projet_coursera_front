import { getLang } from "./variables";

let langData = getLang().data

export const PostData = (spinner, message) => {
    spinner(true)
    message(langData?.login.error)
}