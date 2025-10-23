import { displayCurrentProjects } from "./display-functions"
import currentProjects from "../json/current-projects.json"

export const addProject = function(projectName) {
    currentProjects.push({"name": projectName, "tasks": []})
    displayCurrentProjects()
}

export const deleteProject = function(projectName) {
    const content = document.querySelector(".content")

    currentProjects = currentProjects.filter(project => project.name !== projectName)
    content.innerHTML = ""
    displayCurrentProjects()
}