import { Link } from 'react-router-dom'
function TaskCard({ task }) {
    const couleurs = {
        'A faire': '#ff6b6b',
        'En cours': '#f7b731',
        'Termine': '#20bf6b'
    }
    return (
        <div style={{
            border: '1px solid #ddd',
            borderLeft: `5px solid ${couleurs[task.status]}`,
            margin: '10px 0',
            padding: '15px',
            borderRadius: '8px',
            backgroundColor: '#fafafa'
        }}>
        <h3 style={{ margin: '0 0 8px 0' }}>{task.title}</h3>
        <p style={{ color: '#666', margin: '0 0 8px 0' }}
        >{task.description}</p>
        <span style={{
            backgroundColor: couleurs[task.status],
            color: 'white',
            padding: '3px 10px',
            borderRadius: '12px',
            fontSize: '12px'
        }}>
        {task.status}
        </span>
        <br /><br />
        <Link to={`/task/${task._id}`}>Voir les détails →</Link>
        </div>
    ) 
}
export default TaskCard