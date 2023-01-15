import { useState } from "react";
import Header from './Components/Header';
import Tasks from './Components/Tasks';
import AddTask from "./Components/AddTask";

function App ()  {
  
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 4th at 2.00pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 4.00pm',
        reminder: true,  
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 7.00pm',
        reminder: false,
    },
  ])

//Add Task
const addTask = (task) =>{
  const id = Math.floor(Math.random() * 
  10000) + 1

  const newTask = { id, ...task}
  setTasks([...tasks, newTask])
}

const deleteTask = (id) =>{
  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle Reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) =>
    task.id === id ? { ...task, reminder:
      !task.reminder} : task
    )
  )
}

  return (
    <div className="container">
     <Header onAdd={() => setShowAddTask(!showAddTask)} 
     showAdd={showAddTask} />
     {showAddTask && <AddTask onAdd={addTask} />}
     {tasks.length > 0 ? (<Tasks tasks={tasks}  onDelete = 
     {deleteTask} onToggle={toggleReminder}/>) : (
      'No Tasks To Show'
     )}
    </div>
  )
}

export default App;
