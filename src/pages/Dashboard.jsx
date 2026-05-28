import TaskCard from '../components/TaskCard'
import TaskForm from '../components/TaskForm'
import useLocalStorage from '../hooks/useLocalStorage'

function Dashboard() {
    const [tasks, setTasks] = useLocalStorage('taskflow_data', [
        {
            id: 1,
            titre: "Conception de l'ontologie",description: "Rédiger les axiomes de base du domaine.",
            statut: "A faire"
        },
        {
            id: 2,
            titre: "Développement API",
            description: "Créer les endpoints REST du projet.",
            statut: "En cours"
        },
        {
            id: 3,
            titre: "Tests unitaires",
            description: "Couvrir les fonctions critiques.",
            statut: "Termine"
        }
    ])
    const handleAddTask = (nouvelleTache) => {
        setTasks([...tasks, nouvelleTache])
    }
    return (
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '20px' }}>
            <h1 style={{ borderBottom: '2px solid #333',paddingBottom: '10px' }}>
                TaskFlow
            </h1>
            <TaskForm onAddTask={handleAddTask} />
            <h2 style={{ marginTop: '30px' }}>Mes tâches({tasks.length})</h2>
            <div>
                {tasks.map((task) => (<TaskCard key={task.id} task={task} />
                ))}
            </div>
        </div>
    )
}
export default Dashboard