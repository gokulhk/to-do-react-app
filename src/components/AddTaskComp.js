import React, { useState } from 'react'

//Redux imports
import { connect } from 'react-redux'
import { addTaskContainerOne } from '../redux/index'

//Bootstrap imports
import 'bootstrap/dist/css/bootstrap.css'

function AddTaskComp(props) {

    //taskId counter 
    const [ taskId, setTaskId ] = useState(3)

    //destructure props
    const { addTaskContainerOne } = props


    //creating ref 
    const taskTitleRef = React.createRef()

    const submitHandler = event => {



        //prevents refresh onSubmit event
        event.preventDefault()

        //get input values
        const taskTitle = taskTitleRef.current.value;


        //empty entry rejection
        if(taskTitle === ''){
            taskTitleRef.current.focus()
            return
        }
        
        //clear input
        taskTitleRef.current.value = '';

        //create new Task object
        const newTask = {
            taskId,
            taskTitle,
            taskContainerId : 1
        }

        //increment taskId 
        setTaskId(taskId + 1);

        addTaskContainerOne(taskId, newTask)

    }

    return (
        <form className="form-horizontal">

            <div className="form-group row">
                <label className="control-label col-sm-2">Task Title</label>
                <div className="col-sm-10">
                    <input ref={taskTitleRef} type="text" className="form-control" 
                    placeholder="Eg : Jogging @ 5AM tommorrow" />
                </div>
            </div>

            <button type="submit"
                className="btn btn-success"
                onClick={submitHandler}>Add Task</button>
        </form>

    )
}

//step1:  mapDispatchToProps
const mapDispatchToProps = dispatch => {
    return {
        addTaskContainerOne: (taskId, newTask) => dispatch(addTaskContainerOne(taskId, newTask))
    }
}

//step 2 : connect react component and redux store
export default connect(null, mapDispatchToProps)(AddTaskComp)
