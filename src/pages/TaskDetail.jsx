import { useParams, Link } from 'react-router-dom'

function TaskDetail() {
    const { id } = useParams()
    const donneesSauvegardees = localStorage.getItem('taskflow_data')
    const tasks = donneesSauvegardees ? JSON.parse(donneesSauvegardees) : []
    const task = tasks.find((t) => t.id === Number(id))
    const couleurs = {
        'A faire': '#ff6b6b',
        'En cours': '#f7b731',
    'Termine': '#20bf6b'
    }
    if (!task) {
        return (
            <div style={{ padding: '30px' }}><p>Tâche introuvable.</p>
            <Link to="/">← Retour au Dashboard</Link>
            </div>
        ) }
        return (
            <div style={{ padding: '30px', maxWidth: '600px', margin: '0 auto' }}>
                <Link to="/">← Retour au Dashboard</Link>   
                <h1 style={{ marginTop: '20px' }}>{task.titre}</h1>
                <p style={{ fontSize: '16px', color: '#444' }}>{task.description}</p>
                <span style={{
                    backgroundColor: couleurs[task.statut],
                    color: 'white',
                    padding: '5px 15px',
                    borderRadius: '12px'
                }}>
                {task.statut}
            </span>
            <p style={{ color: '#aaa', marginTop: '20px', fontSize: '12px' }}>
                ID de la tâche : {task.id}
            </p>
        </div>
    )
 }
export default TaskDetail