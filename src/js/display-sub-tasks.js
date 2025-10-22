export const displaySubTasks = function(activeProject, currentTaskName, subTaskList) {
    subTaskList.innerHTML = ""

    activeProject.tasks.forEach(task => {
        if (task.taskName === currentTaskName) {
            task.subTasks.forEach(subTask => {
                const newListItem = document.createElement('li')
                newListItem.textContent = subTask.subTaskName
                subTaskList.append(newListItem)
            })
        }
    });
}