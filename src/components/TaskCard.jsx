import { Link } from 'react-router-dom'

function TaskCard({ task }) {
    return (
        <div style={{ border: '1px solid #ccc', margin:'10px', padding: '10px' }}>
            <h3>{task.titre}</h3>
            <p>{task.description}</p>
            <span>Statut : {task.statut}</span>
            <br />
            <Link to={`/task/${task.id}`}>Voir les détails</Link>
        </div>
    )
 }
export default TaskCard