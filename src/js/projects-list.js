import { displayProjectTodo } from "./project-todo"

export let currentProjects = [
    {name: "Welcome",
        tasks : [
            {
                taskName: "Create your own project",
                description: "Create your own project by clicking the new project button",
                dueDate: "Today",
                priority: "1",
            }
        ]
    },
]

export const addProject = function(projectName) {
    currentProjects.push({"name": projectName, "tasks": []})
    displayCurrentProjects()
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