import {
    ADD_TASK_CONTAINER_ONE,
    ADD_TASK_CONTAINER_TWO,
    ADD_TASK_CONTAINER_THREE,
    REMOVE_TASK
} from './taskTypes'

//set initial state
const initialState = {
        yetToDoTasks: [{ taskId: 0, taskTitle: "yettoDotask make", taskContainerId: 1 }],
        doingTasks: [{ taskId: 1, taskTitle: "doingtask @ 5pm", taskContainerId: 2 }],
        doneTasks: [{ taskId: 2, taskTitle: "donetask @ 5pm", taskContainerId: 3 }]
}

const taskReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_TASK_CONTAINER_ONE: return {
            ...state,
                yetToDoTasks: [...state.yetToDoTasks, action.payload],
                doingTasks: state.doingTasks.filter(task => task.taskId !== action.taskId),
                doneTasks: state.doneTasks.filter(task => task.taskId !== action.taskId)
        }

        case ADD_TASK_CONTAINER_TWO: return {
            ...state,
                yetToDoTasks: state.yetToDoTasks.filter(task => task.taskId !== action.taskId),
                doingTasks: [...state.doingTasks, action.payload],
                doneTasks: state.doneTasks.filter(task => task.taskId !== action.taskId)
        }

        case ADD_TASK_CONTAINER_THREE: return {
            ...state,
                yetToDoTasks: state.yetToDoTasks.filter(task => task.taskId !== action.taskId),
                doingTasks: state.doingTasks.filter(task => task.taskId !== action.taskId),
                doneTasks: [...state.doneTasks, action.payload]
        }

        case REMOVE_TASK: return {
            ...state,
                yetToDoTasks: state.yetToDoTasks.filter(task => task.taskId !== action.payload),
                doingTasks: state.doingTasks.filter(task => task.taskId !== action.payload),
                doneTasks: state.doneTasks.filter(task => task.taskId !== action.payload)
        }

        default : return state;
    }

}

export default taskReducer