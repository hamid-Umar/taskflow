const Task = require('../models/Task');
// 1. getAllTasks : Récupère toutes les tâches de la BD
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des tâches", error: error.message});
    }
};
// 2. createTask : Instancie et sauvegarde unenouvelle tâche à partir de req.bodyexports.createTask = async (req, res) => {
exports.createTask = async (req, res) => {
    try {
        const newTask = new Task({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status // sera 'A faire' par défaut si non fourni grâce au schéma
        });
        const savedTask = await Task.create(newTask);
        res.status(201).json(savedTask); // 201 = Création réussie (attendu au Jalon 5)
    } catch (error) {
    res.status(400).json({ message: "Échec de la création de la tâche", error: error.message });
    }
};
// 3. updateTaskStatus : Met à jour uniquement le statut d'une tâche via son identifiantexports.updateTaskStatus = async (req, res) => {
exports.updateTaskStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const updatedTask = await
        Task.findByIdAndUpdate(
            id,
            { status: status },
            { new: true, runValidators: true } // runValidatorsforce le respect de l'enum ['A faire', 'En cours','Termine']
        );
        if (!updatedTask) {
            return res.status(404).json({ message: "Tâcheintrouvable" });
        }
        res.status(200).json(updatedTask);} catch (error) {
        res.status(400).json({ message: "Erreur lors de la mise à jour du statut", error: error.message });
    }
};
// 4. deleteTask : Supprime une tâche de la base de données
exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTask = await
        Task.findByIdAndDelete(id);
        if (!deletedTask) {
            return res.status(404).json({ message: "Tâche introuvable" });
        }
        res.status(200).json({ message: "Tâchesupprimée avec succès" });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la suppression de la tâche", error: error.message});
    }
}