import { newProjectTaskDisplay } from "./new-project-task-dislay";
import { displayCurrentTasks } from "./display-tasks";
import { deleteProject } from "./projects-list";
import { getUserData } from "./save-data";

export const displayProjectTodo = function(project) {
    const content = document.querySelector(".content")
    content.innerHTML = ""

    const contentHeader = document.createElement("div");
    contentHeader.classList.add("project-tasks-header")

    const projectTitle = document.createElement("div")
    projectTitle.classList.add("project-title")

    const headerTitle = document.createElement("h1");
    headerTitle.classList.add("header-title")
    headerTitle.textContent = project.name;

    const removeProject = document.createElement("button")
    removeProject.textContent = "Delete Project"
    removeProject.addEventListener("click", function() {
        deleteProject(project.name)
    })

    projectTitle.append(headerTitle, removeProject)

    const headerAddTask = document.createElement("button")
    headerAddTask.textContent = "Add Task"
    headerAddTask.addEventListener("click", function() {
        newProjectTaskDisplay()
    })

    contentHeader.append(projectTitle, headerAddTask)
    content.append(contentHeader)

    const currentProjectTasks = document.createElement("div")
    currentProjectTasks.classList.add("current-tasks")
    content.append(currentProjectTasks)

    displayCurrentTasks(project.name)
}