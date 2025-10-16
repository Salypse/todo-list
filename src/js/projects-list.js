export let currentProjects = [
    {"name": "Welcome"},
]

export const addProject = function(projectName) {
    currentProjects.push({"name": projectName})
    console.log(currentProjects)
    displayCurrentProjects()
}

export const displayCurrentProjects = function() {
    const currentProjectsList = document.querySelector(".current-projects")
    currentProjectsList.innerHTML = ""

    currentProjects.forEach(project => {
        let projectToAdd = document.createElement("button")
        projectToAdd.textContent = project.name
        currentProjectsList.append(projectToAdd)
    })
}