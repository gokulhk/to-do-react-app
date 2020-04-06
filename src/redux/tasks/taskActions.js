import {
    ADD_TASK_CONTAINER_ONE,
    ADD_TASK_CONTAINER_TWO,
    ADD_TASK_CONTAINER_THREE,
    REMOVE_TASK
} from "./taskTypes";

//action generators
export const addTaskContainerOne = (taskId, newTask) => {
  
    return {
        type: ADD_TASK_CONTAINER_ONE,
        payload: newTask,
        taskId
    }
}

export const addTaskContainerTwo = (taskId, newTask) => {
   
    return {
        type: ADD_TASK_CONTAINER_TWO,
        payload: newTask,
        taskId
    }
}

export const addTaskContainerThree = (taskId, newTask) => {
 
    return {
        type: ADD_TASK_CONTAINER_THREE,
        payload: newTask,
        taskId
    }
}

export const removeTask = taskId => {
    return {
        type: REMOVE_TASK,
        payload: taskId
    }
}