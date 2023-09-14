import { useState, useEffect } from "react"
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Tasks from '../components/Tasks'
import AddTask from '../components/AddTask'
import Footer from '../components/Footer'
import About from '../components/About'


export default function TaskTracker() { // * implements SPA routing via About
    const goBackLinkStyle = {
        position: 'absolute',  
        top: '10px',  
        left: '10px',  
    };

    const location = useLocation()
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] =useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  //fetch tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:4000/tasks') //url port 3000 refers to the build port in package.json
    if (!res.ok) {
      throw new Error(`Failed to fetch tasks: ${res.status} - ${res.statusText}`);
    }    
    const data = await res.json()
    console.log('Data:', data);
    return data
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:4000/tasks/${id}`) //url port 4000 refers to the build port in package.json
    const data = await res.json()

    return data
  }

    //deleting tasks
    const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:4000/tasks/${id}`, {
      method: 'DELETE',
    })
    //We should control the response status to decide if we will change the state or not.
    res.status === 200
      ? setTasks(tasks.filter((task) => task.id !== id))
      : alert('Error Deleting This Task')
  }

    //adding tasks
    const addTask = async (task) => { //task is the object that we are adding
      const res = await fetch('http://localhost:4000/tasks', {
        method: 'POST', 
        headers: {
          'Content-type': 'application/json', //tells the server that we are sending JSON data
        },
        body: JSON.stringify(task), //converts the JS object into a JSON string
      })
      const data = await res.json() //converts the JSON string into a JS object
      setTasks([...tasks, data]) //adds the new task to the tasks array
    }

    //toggling reminder
    const toggleReminder = async (id) => {
      const taskToToggle = await fetchTask(id)
      const updateTask = {...taskToToggle, reminder: !taskToToggle.reminder}

      const res = await fetch(`http://localhost:4000/tasks/${id}`, {
        method : 'PUT', 
        headers: {'Content-type': 'application/json'}, 
        body: JSON.stringify(updateTask)
      })

      const data = await res.json()
      
      setTasks(tasks.map((task) => 
      task.id === id ? {...task, reminder: 
        data.reminder} : task)) //if the task id matches the id of the task we are toggling, we will change the reminder property of the task to the opposite of what it is. Otherwise, we will return the task as is.
    }

  return (
    
    <div className='container'>
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      <Routes>
        <Route
          path='/'
          element={
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                'No Tasks To Show'
              )}
            </>
          }
        />
        <Route path="/" element={<div>Task Tracker Home</div>} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
      {location.pathname !== '/TaskTracker/about' && (
        <Link to='/' style={goBackLinkStyle}>
          Back to Home
        </Link>
      )}
    </div>

  );
}