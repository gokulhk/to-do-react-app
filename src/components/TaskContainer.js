import React from 'react'
import TaskComponent from './TaskComponent'
import EmptyComponent from './EmptyComponent'

//store imports
import { connect } from 'react-redux'


//Bootstrap imports
import { CardDeck, Card } from 'react-bootstrap'

//step 4 : accept props
function TaskContainer(props) {

	//step 5 : destructure props
	const { yetToDoTasks, doingTasks, doneTasks } = props


	return (
		<CardDeck>

			<Card className="border-white">
				<Card.Header className="border border-primary">Yet To do</Card.Header>
				{
					( yetToDoTasks.length === 0) ? <EmptyComponent /> : yetToDoTasks.map(task => <TaskComponent key={task.taskId} task={task} />)
				}
			</Card>

			<Card className="border-white">
				<Card.Header className="border border-warning">Doing</Card.Header>
				{
					( doingTasks.length === 0) ? <EmptyComponent /> : doingTasks.map(task => <TaskComponent key={task.taskId} task={task} />)
				}
			</Card>

			<Card className="border-white">
				<Card.Header className="border border-success">Done</Card.Header>
				{
					( doneTasks.length === 0) ? <EmptyComponent /> : doneTasks.map(task => <TaskComponent key={task.taskId} task={task} />)
				}
			</Card>


		</CardDeck>
	)

}

//Step1 : mapStateToProps
const mapStateToProps = state => {
	return {
		yetToDoTasks : state.yetToDoTasks,
		doingTasks : state.doingTasks,
		doneTasks : state.doneTasks
	}
}


//step 3 : connect react to redux
export default connect(mapStateToProps)(TaskContainer)

