import { exitDisplay } from "./display-functions"
import { displaySubTasks } from "./display-sub-tasks"
import { addSubTask } from "./project-sub-tasks"

export const newSubTaskDisplay = function(activeProject, currentTaskName, subTaskList) {
    const content = document.querySelector(".content")

    const newSubTask = document.createElement("div")
    newSubTask.classList.add("new-sub-task")

    const newSubTaskDisplay = document.createElement("div")
    newSubTaskDisplay.classList.add("new-sub-task-display")
    content.append(newSubTaskDisplay)

    const newSubTaskItem = document.createElement("div")
    newSubTaskItem.classList.add("new-sub-task-item")
    newSubTaskDisplay.append(newSubTaskItem)

    //Add Header to new-sub-task-item
    const newSubTaskFormHeader = document.createElement("div")
    newSubTaskFormHeader.classList.add("header")
    
    const newSubTaskHeaderText = document.createElement("p")
    newSubTaskHeaderText.textContent = "New Sub Task"
    
    const newSubTaskExit = document.createElement("button")
    newSubTaskExit.classList.add("new-project-exit")
    newSubTaskExit.textContent = "X"
    newSubTaskExit.addEventListener("click", function() {
        exitDisplay(newSubTaskDisplay)
    })

    //Add Sub Task name input
    const newSubTaskForm = document.createElement("form")

    const newSubTaskName = document.createElement("input")
    newSubTaskName.type = "text"
    newSubTaskName.placeholder = "Sub Task Name"

    newSubTaskForm.append(newSubTaskName)
    newSubTaskItem.append(newSubTaskForm)

    //New sub task name submit button
    const newSubTaskSubmit = document.createElement("button")
    newSubTaskSubmit.textContent = "Submit"
    newSubTaskForm.append(newSubTaskSubmit)

    newSubTaskForm.addEventListener("submit", function(event) {
        event.preventDefault()
        if (newSubTaskName.value === "") {
            alert("Please enter a Sub Task Name")
        } else {
            exitDisplay(newSubTaskDisplay)
            addSubTask(activeProject.name, currentTaskName, newSubTaskName.value)
            displaySubTasks(activeProject, currentTaskName, subTaskList)
        }
    })

    newSubTaskFormHeader.append(newSubTaskHeaderText, newSubTaskExit)
    newSubTaskItem.append(
        newSubTaskFormHeader,
        newSubTaskForm,
    )
    newSubTaskDisplay.append(newSubTaskItem)
}