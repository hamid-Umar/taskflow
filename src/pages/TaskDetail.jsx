import { useParams, Link } from 'react-router-dom'

function TaskDetail() {
    const { id } = useParams()
    const donneesSauvegardees = localStorage.getItem('taskflow_data')
    const tasks = donneesSauvegardees ? JSON.parse(donneesSauvegardees) : []

    const task = tasks.find((t) => t.id === Number(id))

    if (!task) {
        return (
            <div>
                <p>Tâche introuvable.</p>
                <Link to="/">Retour au Dashboard</Link>
            </div>
        )
    }
    return (
        <div>
            <h1>Détail de la tâche</h1>
            <h2>{task.titre}</h2>
            <p><strong>Description :</strong>
            {task.description}</p>
            <p><strong>Statut :</strong> {task.statut}</p>
            <p><strong>ID :</strong> {task.id}</p>
            <Link to="/">Retour au Dashboard</Link>
        </div>
    )
}
export default TaskDetail