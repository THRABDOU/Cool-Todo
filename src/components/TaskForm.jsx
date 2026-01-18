import { useState } from 'react'
import { Plus } from 'lucide-react'

function TaskForm({ addTask }) {
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!text.trim()) return
        addTask(text)
        setText('')
    }

    return (
        <form className="glass-panel task-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter a new quest..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit" className="btn-add">
                <Plus size={20} />
            </button>
        </form>
    )
}

export default TaskForm
