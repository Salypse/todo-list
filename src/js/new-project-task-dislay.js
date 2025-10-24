import { exitDisplay } from "./display-functions"
import { addTaskToProject } from "./project-tasks"

export const newProjectTaskDisplay = function(currentProjects) {
    const content = document.querySelector(".content")

    const newProjectTaskDisplay = document.createElement("div")
    newProjectTaskDisplay.classList.add("new-project-task")

    const newProjectTaskItem = document.createElement("div")
    newProjectTaskItem.classList.add("new-task-item")
    newProjectTaskDisplay.append(newProjectTaskItem)
    
    //New Project Task Header
    const newProjectTaskHeader = document.createElement("div")
    newProjectTaskHeader.classList.add("new-task-header")

    const newProjectTaskHeaderText = document.createElement("h1")
    newProjectTaskHeaderText.textContent = "New Task"

    const newProjectTaskHeaderExit = document.createElement("button")
    newProjectTaskHeaderExit.textContent = "X"
    newProjectTaskHeaderExit.addEventListener("click", function() {
        exitDisplay(newProjectTaskDisplay)
    })
    
    newProjectTaskHeader.append(newProjectTaskHeaderText, newProjectTaskHeaderExit)
    newProjectTaskItem.append(newProjectTaskHeader)

    //New Project Task Form
    const newProjectTaskForm = document.createElement("form")
    newProjectTaskForm.classList.add("new-task-form")

    //New Task Name input
    const newTaskName = document.createElement("input")
    newTaskName.type = "text"
    newTaskName.name = "newTaskName"
    newTaskName.placeholder = "Task Name"

    //New Task Descrription input
    const newTaskDescription = document.createElement("input")
    newTaskDescription.type = "text"
    newTaskDescription.name = "newTaskDescription"
    newTaskDescription.placeholder = "Task Description"
    
    //New Task Date input
    const newTaskDate = document.createElement("input")
    newTaskDate.type = "text"
    newTaskDate.name = "newTaskDate"
    newTaskDate.placeholder = "Due Date: MM/DD/YY"

    //New Task Priority Selection
    const newTaskPriority = document.createElement("select")
    newTaskName.name = "newTaskPriority"

    let priorityOptions = [
        {value: "1", text: "1"},
        {value: "2", text: "2"},
        {value: "3", text: "3"},
    ]

    const defaultOption = document.createElement('option')
    defaultOption.selected = true
    defaultOption.disabled = true
    defaultOption.value = ""
    defaultOption.textContent = "Choose Task Priority"
    newTaskPriority.append(defaultOption)

    priorityOptions.forEach(option => {
        const newOption = document.createElement("option")
        newOption.value = option.value
        newOption.textContent = option.text
        newTaskPriority.append(newOption)
    })

    //new Task Submit Button
    const newTaskSubmit = document.createElement("button")
    newTaskSubmit.type = "submit"
    newTaskSubmit.textContent = "Submit"

    newProjectTaskForm.append(
        newTaskName,
        newTaskDescription,
        newTaskDate,
        newTaskPriority,
        newTaskSubmit
    )

    newProjectTaskItem.append(newProjectTaskForm)
    newProjectTaskItem.addEventListener("submit", function(event) {
        event.preventDefault()
        
        const dueDateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{2}$/

        if (newTaskName.value.length <= 0) {
            alert("Please enter a task name")
        } else if (newTaskDescription.value.length <= 0) {
            alert("Please enter a task description")
        } else if (!dueDateRegex.test(newTaskDate.value)) {
            alert("Please enter date in MM/DD/YY format")
        } else if (newTaskPriority.value === "") {
            alert("Please enter a task priority")
        } else {
            exitDisplay(newProjectTaskDisplay)

            const headerTitle = document.querySelector(".header-title")
            addTaskToProject(headerTitle.textContent, newTaskName.value, newTaskDescription.value, newTaskDate.value, newTaskPriority.value)
        }
    })

    content.append(newProjectTaskDisplay)
}