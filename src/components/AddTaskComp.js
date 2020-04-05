import React from 'react'

function AddTaskComp() {

    //creating ref 
    const taskTitleRef = React.createRef()
    const taskDescRef = React.createRef()

    const submitHandler = () => {

        //get input values
        const taskTitle = taskTitleRef.current.value
        const taskDescription = taskDescRef.current.value

        alert(`Title : ${taskTitle} \n Task Description : ${taskDescription}`)

    }

    return (
        <form>
            <div>
            <label>Task Title</label><br />
            <input  ref={taskTitleRef} placeholder="Enter title..."/>
            </div>

            <div>
            <label>Task Description</label><br />
            <textarea  ref={taskDescRef} placeholder="Enter task description..." />
            </div>

            <button className="btn btn-success" type="submit" onClick={submitHandler}>Add Task</button>
        </form>
    )
}

export default AddTaskComp
