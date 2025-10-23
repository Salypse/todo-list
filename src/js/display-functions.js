import currentProjects from "../json/current-projects.json"
import { displayProjectTodo } from "./tasks-content"

export const exitDisplay = function(currentDisplay) {
    currentDisplay.remove()
}

export const displayCurrentProjects = function() {
    const currentProjectsList = document.querySelector(".current-projects")
    currentProjectsList.innerHTML = ""

    currentProjects.forEach(project => {
        let projectToAdd = document.createElement("button")
        projectToAdd.textContent = project.name
        projectToAdd.addEventListener("click", function() {
            displayProjectTodo(project)
        })
        currentProjectsList.append(projectToAdd)
    })
}