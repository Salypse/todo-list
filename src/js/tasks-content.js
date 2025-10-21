import { newProjectTaskDisplay } from "./new-project-task-dislay";
import { displayCurrentTasks } from "./display-tasks";

export const displayProjectTodo = function(project) {
    const content = document.querySelector(".content")
    content.innerHTML = ""

    const contentHeader = document.createElement("div");
    contentHeader.classList.add("project-tasks-header")

    const headerTitle = document.createElement("h1");
    headerTitle.classList.add("header-title")
    headerTitle.textContent = project.name;

    const headerAddTask = document.createElement("button")
    headerAddTask.textContent = "Add Task"
    headerAddTask.addEventListener("click", function() {
        newProjectTaskDisplay()
    })

    contentHeader.append(headerTitle, headerAddTask)
    content.append(contentHeader)

    const currentProjectTasks = document.createElement("div")
    currentProjectTasks.classList.add("current-tasks")
    content.append(currentProjectTasks)

    displayCurrentTasks(project.name)

}