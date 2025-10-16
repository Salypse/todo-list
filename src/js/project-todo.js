export const displayProjectTodo = function(project) {
    const content = document.querySelector(".content")
    content.innerHTML = ""

    const contentHeader = document.createElement("div");
    contentHeader.classList.add("project-todos-header")

    const headerTitle = document.createElement("h1");
    headerTitle.textContent = project.name;

    const headerAddTask = document.createElement("button")
    headerAddTask.textContent = "Add Task"

    contentHeader.append(headerTitle, headerAddTask)
    content.append(contentHeader)

    //TODO
        //display all todos of current project

}