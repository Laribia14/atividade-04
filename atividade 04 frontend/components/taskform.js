import React, { useState } from 'react';
import axios from 'axios';

function TaskForm({ userId, setTasks }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/tasks', { title, description, userId })
            .then(res => {
                setTasks(tasks => [...tasks, res.data]);
                setTitle('');
                setDescription('');
            })
            .catch(err => console.log(err));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Criar Tarefa</h3>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título" />
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descrição" />
            <button type="submit">Criar</button>
        </form>
    );
}

export default TaskForm;
