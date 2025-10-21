import { currentProjects } from "./projects-list"
import { removeTaskFromProject } from "./project-tasks"
export const displayCurrentTasks = function(projectName) {
    const currentTasks = document.querySelector(".current-tasks")
    currentTasks.innerHTML = ""

    const activeProject = currentProjects.find(project => project.name === projectName)
    console.log(activeProject)

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
        subTasks.textContent = "Sub Tasks: "

        taskContent.append(taskDescription, subTasks)


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

        taskFooter.append(taskInfo, addSubTask,)


        taskToAdd.append(
            taskHeader,
            taskContent,
            taskFooter,
        )
        currentTasks.append(taskToAdd)
    })
}  