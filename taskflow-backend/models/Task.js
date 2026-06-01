const mongoose = require('mongoose');
// Définition du schéma de la tâche avec lescontraintes du sujet
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Le titre est obligatoire"],
        maxlength: [100, "Le titre ne doit pas dépasser100 caractères"]
    },
    description: {
        type: String,
        required: false
    },
    status: {
        type: String,
        enum: {
            values: ['A faire', 'En cours', 'Termine'],
            message: "{VALUE} n'est pas un statut valide"},
        default: 'A faire'
    }
}, {
timestamps: true // Ajoute automatiquement createdAt et updatedAt, idéal pour suivre lestâches
});
// Exportation du modèle compilé
module.exports = mongoose.model('Task',taskSchema);