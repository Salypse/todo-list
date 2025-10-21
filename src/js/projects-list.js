import { displayCurrentProjects } from "./display-functions"

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