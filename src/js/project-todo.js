import { currentProjects } from "./projects-list"
import { displayCurrentTasks } from "./display-functions"
export const addTaskToProject = function(projectName, taskName, taskDescription, taskDate, taskPriority) {
    const newTaskValues = {
        "taskName": taskName,
        "description": taskDescription,
        "dueDate": taskDate,
        "priority": taskPriority,
    }

    const project = currentProjects.find(item => item.name === projectName)

    project.tasks.push(newTaskValues)
    displayCurrentTasks(projectName)
    console.log(project.tasks)
}
