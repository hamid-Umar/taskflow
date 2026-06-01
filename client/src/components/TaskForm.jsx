import { useState } from 'react'

function TaskForm({ onAddTask }) {
    const [titre, setTitre] = useState('')
    const [description, setDescription] = useState('')
    const [statut, setStatut] = useState('A faire')

    const handleSubmit = (e) => {
        e.preventDefault()

        const nouvelleTache = {
            id: Date.now(),
            titre: titre,
            description: description,
            statut: statut
        }
        onAddTask(nouvelleTache)
        setTitre('')
        setDescription('')
        setStatut('A faire')
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Ajouter une tâche</h2>

            <div>
                <label>Titre :</label>
                <input
                    type="text"
                    value={titre}
                    onChange={(e) => setTitre(e.target.value)}
                    required
                />
            </div>

            <div>
                <label>Description :</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Statut :</label>
                <select
                    value={statut}
                    onChange={(e) => setStatut(e.target.value)}
                >
                    <option value="A faire">A faire</option>
                    <option value="En cours">En cours</option>
                    <option value="Termine">Termine</option>
                </select>
            </div>
            <button type="submit">Ajouter</button>
        </form>
    )
 }
export default TaskForm