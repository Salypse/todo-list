import { currentProjects } from "./projects-list"
import { displayCurrentTasks } from "./display-tasks"

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
}

export const removeTaskFromProject = function(projectName, taskName) {
    let project = currentProjects.find(item => item.name === projectName)

    project.tasks = project.tasks.filter(task => task.taskName != taskName)
    currentProjects.forEach(item => {
        if (item.name === projectName) {
            item.tasks = project.tasks
            displayCurrentTasks(projectName)
            return;
        }
    })
    console.log(currentProjects)
}
