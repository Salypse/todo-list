import "./styles.css"
import { makeNewProjectDisplay } from "./js/new-project-display"
import { currentProjects } from "./js/projects-list"


const contentHandler = (function() {
    const newProjectButton = document.querySelector("#new-project-button")
    newProjectButton.addEventListener("click", function() {
        makeNewProjectDisplay()
    })

    const sidebar = document.querySelector(".sidebar")
    const currentProjectsList = document.createElement("div")
    currentProjectsList.classList.add("current-projects") 

    currentProjects.forEach(project => {
        let projectToAdd = document.createElement("button")
        projectToAdd.textContent = project.name
        currentProjectsList.append(projectToAdd)
    })


    sidebar.append(currentProjectsList)

}())