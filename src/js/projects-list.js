import { displayCurrentProjects } from "./display-functions"
import { exitDisplay } from "./display-functions"
export let currentProjects = [
    {name: "Welcome",
        tasks : [
            {
                taskName: "Create your own project",
                description: "Create your own project by clicking the new project button",
                dueDate: "Today",
                priority: "1",
                subTasks: [
                    {subTaskName: "Test"}
                ],
            }
        ]
    },
]

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