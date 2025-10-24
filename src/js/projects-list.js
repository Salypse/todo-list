import { displayCurrentProjects } from "./display-functions"
import { getUserData, saveUserData } from "./save-data"

export const addProject = function(projectName) {
    const userCurrentProjects = getUserData()

    userCurrentProjects.push({"name": projectName, "tasks": []})
    saveUserData(userCurrentProjects)
    displayCurrentProjects(userCurrentProjects)
}

export const deleteProject = function(projectName) {
    const content = document.querySelector(".content")

    const userCurrentProjects = getUserData()

    let updatedProjects = userCurrentProjects.filter(project => project.name !== projectName)
    saveUserData(updatedProjects)
    content.innerHTML = ""
    displayCurrentProjects(updatedProjects)
}