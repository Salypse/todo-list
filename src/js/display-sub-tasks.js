import { removeSubTask } from "./project-sub-tasks";

export const displaySubTasks = function(activeProject, currentTaskName, subTaskList) {
    subTaskList.innerHTML = ""

    activeProject.tasks.forEach(task => {
        if (task.taskName === currentTaskName) {
            task.subTasks.forEach(subTask => {
                const newListItem = document.createElement('button')
                newListItem.textContent = `- ${subTask.subTaskName}`

                newListItem.addEventListener("click", function() {
                    removeSubTask(activeProject.name, currentTaskName, subTask.subTaskName)
                })
                subTaskList.append(newListItem)
            })
        }
    });
}