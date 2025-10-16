import "./styles.css"
import { makeNewProjectDisplay } from "./js/new-project-display"
import { displayCurrentProjects } from "./js/projects-list"


const contentHandler = (function() {
    const newProjectButton = document.querySelector("#new-project-button")
    newProjectButton.addEventListener("click", function() {
        makeNewProjectDisplay()
    })

    displayCurrentProjects()

}())