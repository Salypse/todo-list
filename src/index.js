import "./styles.css"
import { makeNewProjectDisplay } from "./js/new-project-display"

const contentHandler = (function() {
    const newProjectButton = document.querySelector("#new-project-button")
    newProjectButton.addEventListener("click", function() {
        makeNewProjectDisplay()
    })
}())