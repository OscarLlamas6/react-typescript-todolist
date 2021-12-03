import React, {FC, ChangeEvent, useState } from 'react'
import { ITask } from '../../interfaces/task.interface';
import ToDoTask from '../ToDoTask/ToDoTask';
import './App.css'

const App:FC = () => {

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if(event.target.name === "task"){
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    } 
  }

  const addTask = (): void => {

    let newTask: ITask = {
      taskName: task,
      deadline: deadline
    }
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  }

  
  const completeTask = (taskNameToDelete:string): void => {

    setTodoList( todoList.filter((task) => {
      return task.taskName != taskNameToDelete
    }));

  }

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input type="text" placeholder="Task..." name="task" onChange={ handleChange } value={task} /> 
          <input type="number" placeholder="Deadline (in Days)" onChange={ handleChange } value={deadline} />
        </div>       
        <button onClick={ addTask } >
          <b>Add Task</b>
        </button>
      </div>
      <div className="todoList">
        {todoList.map((todotask: ITask, index: number) => (
          <ToDoTask key={index} task={todotask} completeTask={completeTask} />
        ))}
      </div>
    </div>
  )
}

export default App
