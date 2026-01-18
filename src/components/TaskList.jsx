import TaskItem from './TaskItem'

function TaskList({ tasks, toggleTask, deleteTask }) {
    if (tasks.length === 0) {
        return (
            <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center', opacity: 0.5 }}>
                No quests found.
            </div>
        )
    }

    return (
        <div className="task-list">
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    toggleTask={toggleTask}
                    deleteTask={deleteTask}
                />
            ))}
        </div>
    )
}

export default TaskList
