const express = require('express');
const router = express.Router();
const Task = require('../models/Task ');

// Criar tarefa
router.post('/', async (req, res) => {
    const { title, description, userId } = req.body;
    try {
        const task = new Task({ title, description, user: userId });
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Listar tarefas de um usuário
router.get('/:userId', async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.params.userId });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
