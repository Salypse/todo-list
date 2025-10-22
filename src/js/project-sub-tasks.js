export const addSubTask = function(activeProject, currentTaskName, newSubTaskName) {
    //Add new sub task to the selected task of selected project
    activeProject.tasks.forEach(task => {
        if (task.taskName === currentTaskName) {
            task.subTasks.push({"subTaskName": newSubTaskName})
            console.log(task.subTasks)
            return
        }
    });

    //TODO
        //When tasks clicked turn red and is checked remove from ul
}