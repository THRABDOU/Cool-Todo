import { Trash2, Check } from 'lucide-react'

function TaskItem({ task, toggleTask, deleteTask }) {
    return (
        <div className="glass-panel task-item">
            <div className="task-content">
                <div
                    className={`checkbox ${task.completed ? 'checked' : ''}`}
                    onClick={() => toggleTask(task.id)}
                >
                    {task.completed && <Check size={14} strokeWidth={3} />}
                </div>

                <span className={`task-text ${task.completed ? 'completed' : ''}`}>
                    {task.text}
                </span>
            </div>

            <button
                className="btn-delete"
                onClick={() => deleteTask(task.id)}
                aria-label="Delete task"
            >
                <Trash2 size={18} />
            </button>
        </div>
    )
}

export default TaskItem
