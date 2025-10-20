import { currentProjects } from "./projects-list"
import { displayProjectTodo } from "./tasks-display"

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

export const displayCurrentTasks = function(projectName) {
    const currentTasks = document.querySelector(".current-tasks")
    currentTasks.innerHTML = ""

    const activeProject = currentProjects.find(project => project.name === projectName)
    console.log(activeProject)

    activeProject.tasks.forEach(task => {
        const taskToAdd = document.createElement("div")
        taskToAdd.textContent = task.taskName
        currentTasks.append(taskToAdd)
    })
}  