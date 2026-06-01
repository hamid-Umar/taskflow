import { useState, useEffect } from 'react'; //Import des hooks standards React
import TaskCard from '../components/TaskCard';
import TaskForm from '../components/TaskForm';
function Dashboard() {
// 1. Suppression du localStorage : On initialise un état vide
const [tasks, setTasks] = useState([]);
// 2. Remplacer l'initialisation par un appel réseau (GET) au montage du composant
useEffect(() => {
    fetch('http://localhost:5000/api/tasks')
    .then(response => response.json())
    .then(data => setTasks(data))
    .catch(error => console.error("Erreur derécupération :", error));}, []); // Le tableau vide [] signifie que ça s'exécute une seule fois au chargement
// 3. Modifier la soumission pour exécuter unerequête POST
    const handleAddTask = async (nouvelleTache)=> {
        try {
            const response = await fetch('http://localhost:5000/api/tasks', {method: 'POST',headers: {'Content-Type': 'application/json',},
// On traduit les champs du formulaire Front vers ce qu'attend le Back-End
            body: JSON.stringify({
            title: nouvelleTache.titre,
            description: nouvelleTache.description,
            status: nouvelleTache.statut}),
            });
// On n'ajoute la tâche dans l'état React QUE si leserveur répond 201
            if (response.status === 201) {
                const taskCreee = await response.json(); // Latâche renvoyée par MongoDB avec son _id
                setTasks([...tasks, taskCreee]);
            } else {
                console.error("Échec de la création côté serveur");
            }
        } catch (error) {
        console.error("Erreur de connexion au serveur :",error);
        } 
    };
    return (<div>
        <h1>Dashboard TaskFlow</h1>
        <TaskForm onAddTask={handleAddTask} />
        <div>
            {tasks.map((task) => (
                <TaskCard key={task._id} task={task} />
            ))}
        </div>
    </div>
);
}
export default Dashboard