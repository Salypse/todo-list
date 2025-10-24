import { displayProjectTodo } from "./tasks-content"

export const exitDisplay = function(currentDisplay) {
    currentDisplay.remove()
}

export const displayCurrentProjects = function(currentProjects) {
    const currentProjectsList = document.querySelector(".current-projects")
    currentProjectsList.innerHTML = ""

    currentProjects.forEach(project => {
        const projectToAdd = document.createElement("button")
        projectToAdd.textContent = project.name
        projectToAdd.addEventListener("click", function() {
            displayProjectTodo(project)
        })
        currentProjectsList.append(projectToAdd)
    })
}