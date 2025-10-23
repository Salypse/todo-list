import currentProjects from "../json/current-projects.json"
import { removeTaskFromProject } from "./project-tasks"
import { newSubTaskDisplay } from "./new-sub-task-display"
import { displaySubTasks } from "./display-sub-tasks"

export const displayCurrentTasks = function(projectName) {
    const currentTasks = document.querySelector(".current-tasks")
    currentTasks.innerHTML = ""

    const activeProject = currentProjects.find(project => project.name === projectName)

    activeProject.tasks.forEach(task => {
        const taskToAdd = document.createElement("div")
        taskToAdd.classList.add("project-task")

        //New task header
        const taskHeader = document.createElement("div")
        taskHeader.classList.add("task-header")

        const headerText = document.createElement("h1")
        headerText.textContent = task.taskName

        const removeTask = document.createElement("button")
        removeTask.textContent = "X"
        removeTask.addEventListener("click", function() {
            removeTaskFromProject(projectName, task.taskName)
        })

        taskHeader.append(headerText, removeTask)

        //New task content
        const taskContent = document.createElement("div")
        taskContent.classList.add("task-content")
        
        const taskDescription = document.createElement("p")
        taskDescription.textContent = task.description

        const subTasks = document.createElement("div")
        subTasks.classList.add("sub-tasks")

        const subTasksHeader = document.createElement("p")
        subTasksHeader.textContent = "Sub Tasks: "

        const subTaskList = document.createElement("div")
        subTaskList.classList.add("sub-tasks-buttons")
        displaySubTasks(activeProject, task.taskName, subTaskList)

        subTasks.append(subTasksHeader, subTaskList)

        taskContent.append(taskDescription,subTasks)


        //New task footer
        const taskFooter = document.createElement("div")
        taskFooter.classList.add("task-footer")

        const taskInfo = document.createElement("div")
        taskInfo.classList.add("task-info")
    
        const taskDueDate = document.createElement("p")
        taskDueDate.textContent = `Due By: ${task.dueDate}`

        const taskPriority = document.createElement("p")
        taskPriority.textContent = `Priority: ${task.priority}`

        taskInfo.append(taskDueDate, taskPriority)

        const addSubTask = document.createElement("button")
        addSubTask.textContent = "Add Sub-Task"
        addSubTask.addEventListener("click", function() {
            newSubTaskDisplay(activeProject, task.taskName, subTaskList)
        })


        taskFooter.append(taskInfo, addSubTask,)


        taskToAdd.append(
            taskHeader,
            taskContent,
            taskFooter,
        )
        currentTasks.append(taskToAdd)
    })
}  