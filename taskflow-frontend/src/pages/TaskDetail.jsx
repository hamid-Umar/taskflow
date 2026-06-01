import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
function TaskDetail() {
    const { id } = useParams(); // Récupère l'_id depuis l'URL de React
    const [task, setTask] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
    // On interroge notre Back-End pour récupérer les tâches
        fetch('http://localhost:5000/api/tasks')
        .then(response => response.json())
        .then(data => {
            const foundTask = data.find((t) => t._id === id);
            setTask(foundTask);setLoading(false);
        })
        .catch(error => {
            console.error("Erreur de récupération :", error);
            setLoading(false);
        });
    }, [id]);
    const couleurs = {
        'A faire': '#ff6b6b',
        'En cours': '#f7b731',
        'Termine': '#20bf6b'
    };
// Petit écran de chargement le temps que leserveur réponde
    if (loading) {
        return <div style={{ padding: '30px' }}
        >Chargement en cours...</div>;
    }   if (!task) {
        return (
            <div style={{ padding: '30px' }}>
                <p>Tâche introuvable.</p>
                <Link to="/">← Retour au Dashboard</Link>
            </div>
        );
    }
    return (
        <div style={{ padding: '30px', maxWidth: '600px',margin: '0 auto' }}>
            <Link to="/">← Retour au Dashboard</Link>
            <h1 style={{ marginTop: '20px' }}>{task.title}</h1>
            <p style={{ fontSize: '16px', color: '#444' }}
            >{task.description}</p>
            <span style={{
                backgroundColor: couleurs[task.status],
                color: 'white',
                padding: '5px 15px',
                borderRadius: '12px'
            }}>
                {task.status}
             </span>
            <p style={{ color: '#aaa', marginTop: '20px',fontSize: '12px' }}>
            ID de la tâche : {task._id}
            </p>
        </div>
    );
}
export default TaskDetail;