const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
// Route pour récupérer toutes les tâches et en créer une
router.get('/', taskController.getAllTasks);
router.post('/', taskController.createTask);
// Routes nécessitant un identifiant (:id) pour la modification et la suppression
router.put('/:id',taskController.updateTaskStatus);
router.delete('/:id', taskController.deleteTask);
module.exports = router;