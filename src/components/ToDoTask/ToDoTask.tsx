import React from 'react'
import { ITask } from '../../interfaces/task.interface'

interface Props {
    task: ITask;
    completeTask(taskName:string): void;
}



const ToDoTask = ({ task: { taskName, deadline }, completeTask }: Props) => {
    return (
        <div className="task">
            <div className="content">
                <span>{ taskName }</span>
                <span>{ deadline }</span>
            </div>
            <button onClick={ () => {completeTask(taskName)} }>X</button>
        </div>
    )
}

export default ToDoTask
