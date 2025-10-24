import { displayCurrentTasks} from "./display-tasks"
import { getUserData, saveUserData } from "./save-data";

export const addSubTask = function(projectName, currentTaskName, newSubTaskName) {
    //Add new sub task to the selected task of selected project
    const userCurrentProjects = getUserData()
    const currentProject = userCurrentProjects.find(project => project.name === projectName)
    const currentTask = currentProject.tasks.find(task => task.taskName === currentTaskName)
    
    currentTask.subTasks.push({"subTaskName": newSubTaskName})
    saveUserData(userCurrentProjects)
    displayCurrentTasks(projectName)
}

export const removeSubTask = function(projectName, currentTaskName, subTaskToRemove) {
    //Remove sub task when clicked of selected task of selected project
    const userCurrentProjects = getUserData()
    const currentProject = userCurrentProjects.find(project => project.name === projectName)
    const currentTask = currentProject.tasks.find(task => task.taskName === currentTaskName)

    currentTask.subTasks = currentTask.subTasks.filter(subTask => subTask.subTaskName !== subTaskToRemove)
    saveUserData(userCurrentProjects)
    displayCurrentTasks(projectName)
}