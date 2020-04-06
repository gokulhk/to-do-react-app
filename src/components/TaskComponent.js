import React from 'react'

//Redux imports
import { connect } from 'react-redux'
import {
    addTaskContainerOne,
    addTaskContainerTwo,
    addTaskContainerThree,
    removeTask
} from '../redux/index'

//BootStrap imports
import { Card, Button } from 'react-bootstrap'

function TaskComponent(props) {

    const { task, addTaskContainerOne, addTaskContainerTwo, addTaskContainerThree, removeTask } = props;
    const { taskId, taskTitle, taskContainerId } = task;

    //console.log("task comp real : ", task);

    //decide button visibility 
    const leftButton = ( taskContainerId === 1) ? "none" : "";
    const rightButton = ( taskContainerId === 3) ? "none" : "";

    const stepUp = () => {
        if (taskContainerId !== 3) {

            //create new modified task 
            const newTask = {
                taskId: task.taskId,
                taskTitle: task.taskTitle,
                taskContainerId: task.taskContainerId + 1
            };

            //call respective conainer function 
            (newTask.taskContainerId === 2) ? addTaskContainerTwo(taskId, newTask) : addTaskContainerThree(taskId, newTask);

        }
        else {
            alert("Invalid Operation");
        }
    }



    const stepDown = () => {

        if (task.taskContainerId !== 1) {

            //create new state 
            const newTask = {
                taskId: task.taskId,
                taskTitle: task.taskTitle,
                taskContainerId: task.taskContainerId - 1
            };


            //call respective container function
            (newTask.taskContainerId === 1) ? addTaskContainerOne(taskId, newTask) : addTaskContainerTwo(taskId, newTask);
        }
        else {
            alert("Invalid Operation");
        }

    }
    const remove = () => {
        
        removeTask(task.taskId);

    }


    return (
        <div><br />
            <Card className="bg-light">
                <Card.Body>
                    <p>{taskTitle}</p>
                </Card.Body>
                <Card.Footer className="bg-light">
                    <Button onClick={() => stepDown()} 
                    variant="outline-info rounded-circle btn-sm float-left"
                    style={{display : leftButton}} >&lt;</Button>
                    <span className="float-right">
                        <Button onClick={() => stepUp()} 
                         style={{display : rightButton}}
                         variant="outline-info rounded-circle btn-sm">&gt;</Button>&nbsp;
                        <Button variant="outline-danger rounded-circle btn-sm"
                            onClick={() => remove()} >x</Button>
                    </span>
                </Card.Footer>
            </Card>
        </div>
    )
}


//step2:  mapDispatchToProps
const mapDispatchToProps = dispatch => {
    return {
        addTaskContainerOne: (taskId, newTask) => dispatch(addTaskContainerOne(taskId, newTask)),
        addTaskContainerTwo: (taskId, newTask) => dispatch(addTaskContainerTwo(taskId, newTask)),
        addTaskContainerThree: (taskId, newTask) => dispatch(addTaskContainerThree(taskId, newTask)),
        removeTask: (taskId) => dispatch(removeTask(taskId))
    }
}


export default connect(null, mapDispatchToProps)(TaskComponent)
