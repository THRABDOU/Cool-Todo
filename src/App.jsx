import { useState, useEffect } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import Filters from './components/Filters'

function App() {
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem('tasks')
        return saved ? JSON.parse(saved) : []
    })

    const [filter, setFilter] = useState('all')

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const addTask = (text) => {
        const newTask = {
            id: Date.now(),
            text,
            completed: false,
            createdAt: new Date().toISOString()
        }
        setTasks([newTask, ...tasks])
    }

    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ))
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const filteredTasks = tasks.filter(task => {
        if (filter === 'active') return !task.completed
        if (filter === 'completed') return task.completed
        return true
    })

    const activeCount = tasks.filter(t => !t.completed).length

    return (
        <div className="app-container">
            <h1 className="title-glow">QUEST LOG</h1>

            <TaskForm addTask={addTask} />

            <Filters currentFilter={filter} setFilter={setFilter} />

            <TaskList
                tasks={filteredTasks}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
            />

            <div className="stats">
                {activeCount} quest{activeCount !== 1 ? 's' : ''} remaining
            </div>
        </div>
    )
}

export default App
