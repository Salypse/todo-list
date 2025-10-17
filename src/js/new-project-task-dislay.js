import { exitDisplay } from "./display-functions"

export const newProjectTaskDisplay = function() {
    const content = document.querySelector(".content")

    const newProjectTaskDisplay = document.createElement("div")
    newProjectTaskDisplay.classList.add("new-project-task")

    const newProjectTaskitem = document.createElement("div")
    newProjectTaskitem.classList.add("new-task-item")
    newProjectTaskDisplay.append(newProjectTaskitem)
    
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
    newProjectTaskitem.append(newProjectTaskHeader)

    content.append(newProjectTaskDisplay)
}