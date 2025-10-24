import currentProjects from "../json/current-projects.json"

export const saveUserData = function(currentProjects) {
    const jsonString = JSON.stringify(currentProjects)
    localStorage.setItem("userData", jsonString)
}

export const getUserData = function() {
    const retreivedJson = localStorage.getItem("userData")

    if (retreivedJson) {
        return JSON.parse(retreivedJson)
    } else {
        const defaultJsonString = JSON.stringify(currentProjects)
        return JSON.parse(defaultJsonString)
    }
}