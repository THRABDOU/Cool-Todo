function Filters({ currentFilter, setFilter }) {
    const filters = [
        { id: 'all', label: 'All Quests' },
        { id: 'active', label: 'Active' },
        { id: 'completed', label: 'Completed' }
    ]

    return (
        <div className="filters">
            {filters.map(f => (
                <button
                    key={f.id}
                    className={`filter-btn glass-panel ${currentFilter === f.id ? 'active' : ''}`}
                    onClick={() => setFilter(f.id)}
                >
                    {f.label}
                </button>
            ))}
        </div>
    )
}

export default Filters
