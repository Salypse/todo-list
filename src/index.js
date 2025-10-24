import "./styles.css"
import { makeNewProjectDisplay } from "./js/new-project-display"
import { displayCurrentProjects } from "./js/display-functions"
import { getUserData } from "./js/save-data"

const contentHandler = (function() {
    const userCurrentProjects = getUserData()
    
    const newProjectButton = document.querySelector("#new-project-button")
    newProjectButton.addEventListener("click", function() {
        makeNewProjectDisplay()
    })
    displayCurrentProjects(userCurrentProjects)
}())