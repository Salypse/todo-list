export let makeNewProjectDisplay = function() {
    const content = document.querySelector(".content")

    const newProjectDisplay = document.createElement("div")
    newProjectDisplay.classList.add("new-project-display")

    const newProjectItem = document.createElement("div")
    newProjectItem.classList.add("new-project-item")
    newProjectDisplay.append(newProjectItem)

    //Add Header to new-project-display
    const newProjectFormHeader = document.createElement("div")
    newProjectFormHeader.classList.add("header")

    const newProjectHeaderText = document.createElement("p")
    newProjectHeaderText.textContent = "New Project"

    const newProjectExit = document.createElement("button")
    newProjectExit.classList.add("new-project-exit")
    newProjectExit.textContent = "X"

    newProjectFormHeader.append(newProjectHeaderText, newProjectExit)
    newProjectItem.append(newProjectFormHeader)

    //New Project Name submission
    const newProjectForm = document.createElement("form")

    const newProjectName = document.createElement("input")
    newProjectName.type = "text"
    newProjectName.placeholder = "Project Name"

    newProjectForm.append(newProjectName)
    newProjectItem.append(newProjectForm)

    //New Project Submit button
    const newProjectSubmit = document.createElement("button")
    newProjectSubmit.textContent = "Submit"
    newProjectSubmit.type = "submit"
    newProjectForm.append(newProjectSubmit)

    newProjectForm.addEventListener("submit", function(event) {
        event.preventDefault()
    })

    content.append(newProjectDisplay)
}