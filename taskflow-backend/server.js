require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // 1. Importation du package CORS
const taskRoutes = require('./routes/taskRoutes');
const app = express();
const PORT = process.env.PORT || 5000;
// 2. Configuration CORS restrictive (Bonus Ingénierie +1 pt)
app.use(cors({
    origin: 'http://localhost:5173', // Autorise uniquement l'application React
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Limite aux méthodes HTTP nécessaires
    credentials: true
}));// 3. Middleware intégré pour analyser le corps des requêtes en JSON (req.body)
app.use(express.json());
// Connexion à la base de données MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("[Succès] Connecté à la base de données MongoDB"))
.catch((error) => {
    console.error("[Erreur] Impossible de se    connecter à MongoDB :", error.message);
});
// Route de test globale (Jalon 1)
app.get('/api/ping', (req, res) => {
    res.json({ message: "Serveur TaskFlow operationnel" });
});// Enregistrement de ton routeur (Jalon 3)
app.use('/api/tasks', taskRoutes);
// Lancement du serveur
app.listen(PORT, () => {
    console.log(`[Succès] Serveur Express en cours d'exécution sur le port ${PORT}`);
});