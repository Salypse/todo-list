import { displayCurrentTasks } from "./display-tasks"
import { getUserData, saveUserData } from "./save-data"

export const addTaskToProject = function(projectName, taskName, taskDescription, taskDate, taskPriority) {
    const newTaskValues = {
        "taskName": taskName,
        "description": taskDescription,
        "dueDate": taskDate,
        "priority": taskPriority,
        "subTasks": []
    }
    const userCurrentProjects = getUserData()

    const activeProject = userCurrentProjects.find(item => item.name === projectName)
    activeProject.tasks.push(newTaskValues)
    saveUserData(userCurrentProjects)

    displayCurrentTasks(projectName)
}

export const removeTaskFromProject = function(projectName, taskName) {
    const userCurrentProjects = getUserData()
    
    const activeProject = userCurrentProjects.find(item => item.name === projectName)
    activeProject.tasks = activeProject.tasks.filter(task => task.taskName != taskName)
    
    saveUserData(userCurrentProjects)
    displayCurrentTasks(projectName)
}
